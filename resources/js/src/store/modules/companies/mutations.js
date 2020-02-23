/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
    ADD_ITEM(state, item) {
        state.companies.unshift(item)
    },
    SET_COMPANIES(state, companies) {
        state.companies = companies
    },
    // SET_LABELS(state, labels) {
    //   state.eventLabels = labels
    // },
    UPDATE_COMPANY(state, company) {
        const companyIndex = state.companies.findIndex((p) => p.id == company.id)
        Object.assign(state.companies[companyIndex], company)
    },
    REMOVE_ITEM(state, itemId) {
        const ItemIndex = state.companies.findIndex((p) => p.id == itemId)
        state.companies.splice(ItemIndex, 1)
    },
}