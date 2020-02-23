import axios from "@/axios";
import Ls from '@/services/ls'
import router from '@/router';

export default {
    namespaced: true,
    state: {
        company: {
            id: 0,
            company_name: '',
            company_alias: '',
            ruc: '',
            address: '',
            phone: '',
        }
    },
    mutations: {
        setCompany(state, company) {
            state.company = company;
        }
    },
    actions: {
        saveCompanyData({
            commit,
            state,
            dispatch
        }, data) {
            return new Promise((resolve, reject) => {
                if (state.company.id == 0) {
                    axios
                        .post("api/company", data)
                        .then(({
                            data
                        }) => {
                            commit('setCompany', data.company);
                            if (data.company.configuration.configurations != null)
                                dispatch('configuration/setConfigData', data.company.configuration.configurations);
                            resolve(data);
                        })
                        .catch(err => {
                            reject(err);
                        });
                } else {
                    axios.put(`api/company/${data.id}`, data).then(({
                        data
                    }) => {
                        commit('setCompany', data.company);
                        if (data.company.configuration.configurations != null)
                            dispatch('configuration/setConfigData', data.company.configuration.configurations);
                        resolve(data);
                    }).catch(err => {
                        reject(err);
                    });
                }

            })

        },
        setCompanyData({
            commit,
            dispatch
        }, data) {
            commit('setCompany', data);
            if (data.configuration.configurations != null)
                dispatch('configuration/setConfigData', data.configuration.configurations, {
                    root: true
                });
        }
    },
    getters: {
        getCompany(state) {
            return state.rol;
        }
    }
}