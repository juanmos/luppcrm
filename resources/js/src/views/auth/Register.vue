import { mapActions } from 'vuex';
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
                  <h4 class="mb-4">{{$t('createNewAccount')}}</h4>
                  <p>{{$t('createNewAccountDetails')}}</p>
                </div>

                <div>
                  <vs-input
                    name="first_name"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    :label-placeholder="$t('firstName')"
                    v-model="first_name"
                    class="w-full"
                  />
                  <vs-input
                    name="last_name"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    :label-placeholder="$t('lastName')"
                    v-model="last_name"
                    class="w-full"
                  />
                  <vs-input
                    name="email"
                    icon-no-border
                    icon="icon icon-user"
                    icon-pack="feather"
                    :label-placeholder="$t('email')"
                    v-model="email"
                    class="w-full"
                  />

                  <vs-input
                    type="password"
                    name="password"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    :label-placeholder="$t('password')"
                    v-model="password"
                    class="w-full mt-6"
                  />
                  <vs-input
                    type="password"
                    name="password_confirmation"
                    icon-no-border
                    icon="icon icon-lock"
                    icon-pack="feather"
                    :label-placeholder="$t('passwordConfirmation')"
                    v-model="password_confirmation"
                    class="w-full mt-6"
                  />

                  <vs-button type="border" :to="{ name: 'auth.login' }">{{$t('gotoLogin')}}</vs-button>
                  <vs-button class="float-right" @click="register">{{$t('register')}}</vs-button>
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
import { mapActions } from "vuex";
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: ""
    };
  },
  methods: {
    ...mapActions("auth", ["signup"]),
    register() {
      this.signup({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      })
        .then(res => {
          this.$router.push("/wizard/company");
        })
        .catch(err => {});
    }
  }
};
</script>
