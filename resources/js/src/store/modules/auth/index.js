import mutations from './mutations'
import actions from './actions'
import Ls from '@/services/ls'

export default {
    namespaced: true,
    state: {
        access_token: Ls.get('auth.token'),
        rol: 'public',
        status: ''
    },
    mutations: mutations,
    actions: actions,
    getters: {
        getRol(state) {
            return state.rol;
        },
        isAuthenticated(state) {
            return !!state.access_token
        },
        authStatus(state) {
            return state.status
        }
    }
}