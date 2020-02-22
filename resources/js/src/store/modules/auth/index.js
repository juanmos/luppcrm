import axios from "@/axios";
import Ls from '@/services/ls'
import router from '@/router';

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
                        dispatch('saveTokenData', data);
                        resolve(data);
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
                dispatch('updateUserInfo', data.user, {
                    root: true
                })
                commit('changeRol', data.role);
                // dispatch('updateUserRole', {
                //     aclChangeRole: this.$acl.change,
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
                return
            }
            const expirationDate = Ls.get('expirationDate');
            const now = new Date();
            if (now >= expirationDate) {
                return
            }
            commit('authUser', {
                token: token,
            });
            dispatch('me');
            console.log('auto');
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