/*=========================================================================================
  File Name: main.js
  Description: main vue(js) file
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import App from "./App.vue";

//acl
// import acl from './acl/acl'

// i18n
import i18n from './i18n/i18n'

// Vuesax Component Framework
import Vuesax from "vuesax";

Vue.use(Vuesax);

// axios
import axios from "./axios.js";
axios.interceptors.response.use(undefined, function(err) {
    // Do something with request error
    if (!err.response) {
        // window.toastr['error']('Network error: Please check your internet connection or wait until servers are back online')
        console.log('Network error: Please check your internet connection.')
    } else {
        console.log(err.response)
        if (err.response.data && (err.response.statusText === 'Unauthorized' || err.response.data === ' Unauthorized.')) {
            // Unauthorized and log out
            // window.toastr['error']((err.response.data.message) ? err.response.data.message : 'Unauthorized')
            // Vuesax.notify({
            //     title: 'logoutTitle',
            //     text: 'logoutDescription',
            //     color: 'danger'
            // })
            store.dispatch('auth/logoutUser', true)
        } else if (err.response.data.errors) {
            // Show a notification per error
            const errors = JSON.parse(JSON.stringify(err.response.data.errors))
            for (const i in errors) {
                window.toastr['error'](errors[i])
            }
        } else {
            // Unknown error
            window.toastr['error']((err.response.data.message) ? err.response.data.message : 'Unknown error occurred')
        }
    }
    return Promise.reject(err)
})
Vue.prototype.$http = axios;



// Theme Configurations
import "../themeConfig.js";

// Globally Registered Components
import "./globalComponents.js";

// Vue Router
import router from "./router";

// Vuex Store
import store from "./store/store";

// Vuejs - Vue wrapper for hammerjs
import {
    VueHammer
} from "vue2-hammer";
Vue.use(VueHammer);

// PrismJS
import "prismjs";
import "prismjs/themes/prism-tomorrow.css";



// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate);

// Vue select css
// Note: In latest version you have to add it separately
// import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false;



new Vue({
    router,
    store,
    i18n,
    // acl,
    render: h => h(App)
}).$mount("#app");