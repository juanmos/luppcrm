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

Vue.use(Router)

//PAGES
import Login from './views/auth/Login.vue';

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
            path: '',
            component: () =>
                import ('@/layouts/full-page/FullPage.vue'),
            meta: {
                auth: false
            },
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/login',
                    name: 'auth.login',
                    component: Login
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () =>
                        import ('@/views/pages/Error404.vue')
                },
            ]
        },
        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () =>
                import ('./layouts/main/Main.vue'),
            meta: {
                auth: true
            },
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () =>
                        import ('./views/Home.vue')
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () =>
                        import ('./views/Page2.vue')
                },
            ],
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