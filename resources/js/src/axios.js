import axios from 'axios'
import Ls from './services/ls'

const instance = axios.create({
    baseURL: 'http://luppcrm.test'
})

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


export default instance