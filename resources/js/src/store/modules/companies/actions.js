/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios.js"

export default {
    addCompany({
        commit
    }, item) {
        return new Promise((resolve, reject) => {
            axios.post("/api/company/", item)
                .then((response) => {
                    commit('ADD_ITEM', Object.assign(item, {
                        id: response.data.id
                    }))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchCompanies({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.get("/api/companies")
                .then((response) => {
                    commit('SET_COMPANIES', response.data.companies.data)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateCompany({
        commit
    }, item) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/company/${item.id}`,
                    item
                )
                .then((response) => {
                    commit('UPDATE_COMPANY', response.data.company)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeItem({
        commit
    }, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/data-list/products/${itemId}`)
                .then((response) => {
                    commit('REMOVE_ITEM', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchCompanyUsers({
        commit
    }, companyId) {
        return new Promise((resolve, reject) => {
            axios.get(`api/company/${companyId}/users`).then((response) => {
                commit('users/SET_USERS', response.data.users, {
                    root: true
                })
                resolve(response);
            }).catch((err) => {
                reject(error);
            })
        })
    }
}