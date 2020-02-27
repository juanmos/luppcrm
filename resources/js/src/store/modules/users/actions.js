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
    addUser({
        commit
    }, item) {
        return new Promise((resolve, reject) => {
            axios.post("/api/users/", item)
                .then((response) => {
                    commit('ADD_USER', Object.assign(response.data.user, {
                        id: response.data.id
                    }))
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchUsers({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.get("/api/users")
                .then((response) => {
                    commit('SET_USERS', response.data.users.data)
                    commit('SET_ROLES', response.data.roles)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchRoles({
        commit
    }) {
        return new Promise((resolve, reject) => {
            axios.get("/api/roles")
                .then((response) => {
                    commit('SET_ROLES', response.data.roles)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    fetchUser({
        commit
    }, userId) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/users/${userId}`)
                .then((response) => {
                    commit('SET_USERS', [response.data.user])
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    updateUser({
        commit
    }, item) {
        return new Promise((resolve, reject) => {
            axios.put(`/api/users/${item.id}`,
                    item
                )
                .then((response) => {
                    commit('UPDATE_USER', response.data.user)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    removeUser({
        commit
    }, itemId) {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/users/${itemId}`)
                .then((response) => {
                    commit('REMOVE_USER', itemId)
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    showUser({
        commit
    }, userId) {
        return new Promise((resolve, reject) => {
            axios.get(`/api/users/${userId}`).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error)
            })
        })
    }
}