export default {
    AUTH_USER(state, userData) {
        state.access_token = userData.token;
    },
    CLEAR_AUTH(state) {
        state.access_token = null;
        state.ttl = null;
        state.rol = null;
    },
    CHANGE_ROL(state, rol) {
        state.rol = rol;

    }
}