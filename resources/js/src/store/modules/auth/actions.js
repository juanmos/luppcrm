import axios from "@/axios";
import Ls from '@/services/ls'
import router from '@/router';

export default {
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
        return new Promise((resolve, reject) => {
            Ls.set('auth.token', data.token)
            const now = new Date();
            const expirationDate = new Date(now.getTime() + data.expires_in * 1000);
            Ls.set('expirationDate', expirationDate);
            commit('AUTH_USER', data);
            dispatch('me').then(() => {
                resolve();
            }).catch(() => {
                reject();
            });
        })
    },
    me({
        commit,
        dispatch,
        state
    }) {
        axios.get('api/auth/me').then(({
            data
        }) => {
            return new Promise((resolve, reject) => {
                data.user.role = data.role;
                dispatch('updateUserInfo', data.user, {
                    root: true
                })
                commit('CHANGE_ROL', data.role);
                if (data.user.company != null) {
                    dispatch('company/setCompanyData', data.user.company, {
                        root: true
                    });
                }
                resolve();
            })
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
        commit('AUTH_USER', {
            token: token,
        });
        dispatch('me');
        // if (state.AppActiveUser.first_login) {
        //     router.push('wizard/company');
        // }
    },
    logoutUser({
        dispatch,
        commit
    }) {
        return new Promise((resolve, reject) => {
            Ls.remove('auth.token')
            Ls.remove('userInfo');
            Ls.remove('expirationDate');
            commit('CLEAR_AUTH');
            router.replace('/login');
            resolve();
        })
    }
}