import axios from "@/axios";
import Ls from '@/services/ls'
import router from '@/router';
import acl from '../../../acl/acl';

export default {
    namespaced: true,
    state: {
        access_token: null,
        rol: 'public'
    },
    mutations: {
        authUser(state, userData) {
            state.access_token = userData.token;
        },
        clearAuthData(state) {
            state.access_token = null;
            state.ttl = null;

        },
        changeRol(state, rol) {
            state.rol = rol;

        }
    },
    actions: {
        signup({
            commit,
            dispatch
        }, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("api/auth/signup", data)
                    .then(({
                        data
                    }) => {
                        dispatch('saveTokenData', data);
                        resolve(data);
                    })
                    .catch(err => {
                        Ls.remove('auth.token');
                        reject(err);
                    });
            })

        },
        login({
            commit,
            dispatch
        }, data) {
            return new Promise((resolve, reject) => {
                axios
                    .post("api/auth/login", data)
                    .then(({
                        data
                    }) => {
                        dispatch('saveTokenData', data).then(() => {
                            resolve(data);
                        });

                    })
                    .catch(err => {
                        Ls.remove('auth.token');
                        reject(err);
                    });
            })
        },
        saveTokenData({
            commit,
            dispatch
        }, data) {
            Ls.set('auth.token', data.token)
            const now = new Date();
            const expirationDate = new Date(now.getTime() + data.expires_in * 1000);
            Ls.set('expirationDate', expirationDate);
            commit('authUser', data);
            dispatch('me');
        },
        me({
            commit,
            dispatch,
            state
        }) {
            axios.get('api/auth/me').then(({
                data
            }) => {
                data.user.role = data.role;
                dispatch('updateUserInfo', data.user, {
                    root: true
                })
                commit('changeRol', data.role);
                if (data.user.company != null) {
                    dispatch('company/setCompanyData', data.user.company, {
                        root: true
                    });
                }
                if (data.role == 'Empresa') {
                    data.user.company != null ?
                        router.push("/admin/home") :
                        router.push("/wizard/company");
                } else {
                    router.push("/admin/home")
                }

                // console.log(data.role);
                // acl.change(data.role);
                // dispatch('updateUserRole', {
                //     aclChangeRole: acl.change,
                //     userRole: data.role
                // }, {
                //     root: true
                // })
            });
        },
        tryAutoLogin({
            commit,
            dispatch
        }) {
            const token = Ls.get('auth.token');
            if (!token) {
                return false
            }
            const expirationDate = Ls.get('expirationDate');
            const now = new Date();
            if (now >= expirationDate) {
                return false
            }
            commit('authUser', {
                token: token,
            });
            dispatch('me');
            console.log('auto');
            // if (state.AppActiveUser.first_login) {
            //     router.push('wizard/company');
            // }
        },
        logoutUser({
            dispatch,
            commit
        }) {
            Ls.remove('auth.token')
            Ls.remove('userInfo');
            Ls.remove('expirationDate');
            commit('clearAuthData');
            router.replace('/login');
        }
    },
    getters: {
        getRol(state) {
            return state.rol;
        }
    }
}