/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store';
import Ls from '@/services/ls'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    },
    routes: [
        // =============================================================================
        // Auth pages
        // =============================================================================
        {
            path: '/',
            component: () =>
                import ('@/layouts/full-page/FullPage.vue'),
            meta: {
                auth: false,
                rule: 'public'
            },
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'auth.login',
                    meta: {
                        rule: 'public'
                    },
                    component: () =>
                        import ('./views/auth/Login.vue')
                },
                {
                    path: '/register',
                    name: 'auth.register',
                    meta: {
                        rule: 'public'
                    },
                    component: () =>
                        import ('./views/auth/Register.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () =>
                        import ('@/views/pages/Error404.vue')
                },
                {
                    path: '/pages/not-authorized',
                    name: 'page-not-authorized',
                    component: () =>
                        import ('@/views/pages/NotAuthorized.vue'),
                    meta: {
                        rule: 'Empresa'
                    }
                },
            ]
        },
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/company',
            component: () =>
                import ('./layouts/main/Main.vue'),
            meta: {
                auth: true,
                rule: 'Comun'
            },
            beforeEnter(to, from, next) {
                console.log(to)
                console.log(from)
                store.dispatch('auth/tryAutoLogin').then(() => {
                    next();
                }).catch(() => {
                    next('/login');
                });
            },
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: 'home',
                    name: 'company.home',
                    meta: {
                        rule: 'Comun'
                    },
                    component: () =>
                        import ('./views/Home.vue')
                },
                {
                    path: 'invoices',
                    name: 'company.invoices',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/invoices/Invoices.vue')
                },
                {
                    path: 'payments',
                    name: 'company.payments',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/payments/Payments.vue')
                },
                {
                    path: 'estimates',
                    name: 'company.estimates',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/estimates/Estimates.vue')
                },
                {
                    path: 'expenses',
                    name: 'company.expenses',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/expenses/Expenses.vue')
                },
                {
                    path: 'deductions',
                    name: 'company.deductions',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/deductions/Deductions.vue')
                },
                {
                    path: 'clients',
                    name: 'company.clients',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/clients/Clients.vue')
                },
                {
                    path: '/help',
                    name: 'company.help',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/help/Help.vue')
                },
                {
                    path: 'configurations',
                    name: 'company.configurations',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/configurations/Configurations.vue')
                },
            ],
        },
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '/admin',
            component: () =>
                import ('./layouts/main/Main.vue'),
            meta: {
                auth: true,
                rule: 'Comun'
            },
            beforeEnter(to, from, next) {
                console.log(to)
                console.log(from)
                store.dispatch('auth/tryAutoLogin').then(() => {
                    next();
                }).catch(() => {
                    next('/login');
                });
            },
            children: [{
                    path: 'companies',
                    name: 'admin.companies',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/companies/CompanyMain.vue'),
                    children: [{
                        path: '',
                        name: 'admin.companies.list',
                        meta: {
                            rule: 'Empresa'
                        },
                        component: () =>
                            import ('./views/companies/Companies.vue')
                    }, {
                        path: 'details/:id',
                        props: true,
                        name: 'admin.companies.details',
                        meta: {
                            rule: 'Empresa'
                        },
                        component: () =>
                            import ('./views/companies/CompanyDetail.vue')
                    }]
                },
                {
                    path: 'users',
                    name: 'admin.users',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/companies/CompanyMain.vue'),
                    children: [{
                            path: '',
                            name: 'admin.users.list',
                            component: () =>
                                import ('./views/users/Users.vue')
                        },
                        {
                            path: ':id',
                            props: true,
                            name: 'admin.users.view',
                            component: () =>
                                import ('./views/users/UserView.vue')
                        }
                    ]
                },
            ]
        },
        {
            path: '/wizard',
            component: () =>
                import ('@/layouts/full-page/FullPage.vue'),
            meta: {
                auth: false,
                rule: 'Empresa'
            },
            beforeEnter(to, from, next) {
                store.dispatch('auth/tryAutoLogin').then(() => {
                    next();
                }).catch(() => {
                    next('/login');
                });
            },
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: 'company',
                    name: 'wizard.user',
                    meta: {
                        rule: 'Empresa'
                    },
                    component: () =>
                        import ('./views/wizard/User.vue')
                }
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
})

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
})

export default router