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
                    commit('ADD_USER', Object.assign(item, {
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
    // eventDragged({ commit }, payload) {
    //   return new Promise((resolve, reject) => {
    //     axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload: payload})
    //       .then((response) => {

    //         // Convert Date String to Date Object
    //         let event = response.data
    //         event.startDate = new Date(event.startDate)
    //         event.endDate = new Date(event.endDate)

    //         commit('UPDATE_EVENT', event)
    //         resolve(response)
    //       })
    //       .catch((error) => { reject(error) })
    //   })
    // },
}