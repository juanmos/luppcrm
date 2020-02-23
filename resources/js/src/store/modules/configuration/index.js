import axios from "@/axios";
import Ls from '@/services/ls'
import router from '@/router';

export default {
    namespaced: true,
    state: {
        configuration: {
            id: 0,
            establishment: '',
            salePoint: '',
            secuence: '',
            eSignFile: '',
            eSignPassword: '',
            sriPassword: '',
            mode: '1'
        }
    },
    mutations: {
        setConfiguration(state, configuration) {
            for (const property of Object.keys(configuration)) {
                if (configuration[property] != null) {
                    state.configuration[property] = configuration[property]
                }
            }
            state.configuration = configuration;
        }
    },
    actions: {
        saveConfigData({
            commit,
            state
        }, data) {
            return new Promise((resolve, reject) => {
                // if (state.company.id == 0) {
                //     axios
                //         .put("api/configuration", data)
                //         .then(({
                //             data
                //         }) => {
                //             commit('setCompany', data.company);
                //             resolve(data);
                //         })
                //         .catch(err => {
                //             reject(err);
                //         });
                // } else {
                //     axios.put(`api/company/${data.id}`, data).then(({
                //         data
                //     }) => {
                //         console.log(data)
                //     }).catch(err => {});
                // }
                axios.put
            })

        },
        setConfigData({
            commit
        }, data) {
            commit('setConfiguration', data);
        }
    },
    getters: {
        getConfig(state) {
            return state.configuration;
        }
    }
}