import axios from 'axios'
import Ls from './services/ls'

const instance = axios.create()

instance.interceptors.request.use(function(config) {
        const AUTH_TOKEN = Ls.get('auth.token')
        const companyId = Ls.get('selectedCompany')

        if (AUTH_TOKEN) {
            config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
        }
        if (companyId) {
            config.headers.common['company'] = companyId
        }
        return config
    },
    function(error) {
        // Do something with request error
        return Promise.reject(error)
    }
);
// global.axios.interceptors.response.use(undefined, function (err) {
//     // Do something with request error
//     if (!err.response) {
//         window.toastr['error']('Network error: Please check your internet connection or wait until servers are back online')
//         console.log('Network error: Please check your internet connection.')
//     } else {
//         console.log(err.response)
//         if (err.response.data && (err.response.statusText === 'Unauthorized' || err.response.data === ' Unauthorized.')) {
//             // Unauthorized and log out
//             window.toastr['error']((err.response.data.message) ? err.response.data.message : 'Unauthorized')
//             store.dispatch('auth/logout', true)
//         } else if (err.response.data.errors) {
//             // Show a notification per error
//             const errors = JSON.parse(JSON.stringify(err.response.data.errors))
//             for (const i in errors) {
//                 window.toastr['error'](errors[i])
//             }
//         } else {
//             // Unknown error
//             window.toastr['error']((err.response.data.message) ? err.response.data.message : 'Unknown error occurred')
//         }
//     }
//     return Promise.reject(err)
// })

export default instance