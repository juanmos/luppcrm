import Vue from "vue"
import {
    AclInstaller,
    AclCreate,
    AclRule
} from "vue-acl"
import router from "@/router"

Vue.use(AclInstaller)

let initialRole = "Empresa"

let userInfo = JSON.parse(localStorage.getItem("userInfo"))
if (userInfo && userInfo.userRole) initialRole = userInfo.userRole

export default new AclCreate({
    initial: initialRole,
    notfound: "/pages/not-authorized",
    router,
    acceptLocalRules: true,
    globalRules: {
        Empresa: new AclRule("Empresa").generate(),
        SuperAdministrador: new AclRule("SuperAdministrador").generate(),
        Comun: new AclRule('Empresa').or('SuperAdministrador').generate(),
        public: new AclRule("*"),
        // public: new AclRule("public").or("admin").or("editor").generate(),
    }
})