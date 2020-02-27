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
    fetchCompanyContacts({
        commit
    }, companyId) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/company/${companyId}/contacts`)
                .then((response) => {
                    commit('SET_CONTACTS', response.data.contacts)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    addContact({
        commit
    }, item) {
        return new Promise((resolve, reject) => {
            axios.post("/api/company/contact", item)
                .then((response) => {
                    commit('ADD_CONTACT', Object.assign(response.data.contact, {
                        id: response.data.id
                    }))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateContact({
        commit
    }, item) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/company/contact/${item.id}`,
                    item
                )
                .then((response) => {
                    commit('UPDATE_CONTACT', response.data.contact)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeContact({
        commit
    }, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/company/contact/${itemId}`)
                .then((response) => {
                    commit('REMOVE_CONTACT', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    }
}