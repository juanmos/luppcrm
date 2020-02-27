<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div
    class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center"
    id="page-login"
  >
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto" />
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">
                <div class="vx-card__title mb-4">
                  <h4 class="mb-4">Iniciar sesión</h4>
                  <p>Ingresa con tu email y contraseña.</p>
                </div>
                <vs-alert :active="errorLogin" color="danger" icon="new_releases">
                  <span>
                    El email o la contraseña son
                    incorrectos
                  </span>
                </vs-alert>
                <div>
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    label-placeholder="Email"
                    v-model="email"
                    class="w-full"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    label-placeholder="Password"
                    v-model="password"
                    class="w-full mt-6"
                  />

                  <div class="flex flex-wrap justify-between my-5">
                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Recordarme</vs-checkbox>
                    <router-link to>
                      Olvidaste tu
                      contraseña?
                    </router-link>
                  </div>
                  <vs-button type="border" :to="{ name: 'auth.register' }">Crear una cuenta</vs-button>

                  <vs-button class="float-right" @click="loginUser">Iniciar sesión</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      email: "juanmos@gmail.com",
      password: "123456",
      checkbox_remember_me: false,
      errorLogin: false
    };
  },
  computed: {
    ...mapGetters(["userData"]),
    ...mapState("auth", ["rol"])
  },
  methods: {
    ...mapActions("auth", ["login"]),
    loginUser() {
      this.errorLogin = false;
      this.login({
        email: this.email,
        password: this.password
      })
        .then(res => {
          console.log("rol", this.rol);
          if (this.rol == "SuperAdministrador")
            this.$router.push("admin/companies");
          else this.$router.push("company/home");
        })
        .catch(err => {
          this.errorLogin = true;
        });
    }
  }
};
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook {
      background-color: #1551b1;
    }
    .bg-twitter {
      background-color: #00aaff;
    }
    .bg-google {
      background-color: #4285f4;
    }
    .bg-github {
      background-color: #333;
    }
  }
}
</style>
