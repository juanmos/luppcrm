/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

import auth from "./modules/auth";
import company from "./modules/company";
import companies from "./modules/companies";
import configuration from "./modules/configuration";
import contacts from "./modules/contacts";
import users from "./modules/users";

Vue.use(Vuex)


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        auth,
        company,
        companies,
        configuration,
        contacts,
        users
    },
    strict: process.env.NODE_ENV !== 'production'
})