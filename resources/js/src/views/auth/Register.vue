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
                            <img
                                src="@assets/images/pages/login.png"
                                alt="login"
                                class="mx-auto"
                            />
                        </div>

                        <div
                            class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg"
                        >
                            <div class="p-8 login-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <h4 class="mb-4">Crear una nueva cuenta</h4>
                                    <p>
                                        Crea una nueva cuenta en LuppCRM
                                        ingresando los siguientes pasos.
                                    </p>
                                </div>

                                <div>
                                    <vs-input
                                        name="first_name"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Nombres"
                                        v-model="first_name"
                                        class="w-full"
                                    />
                                    <vs-input
                                        name="last_name"
                                        icon-no-border
                                        icon="icon icon-user"
                                        icon-pack="feather"
                                        label-placeholder="Apellidos"
                                        v-model="last_name"
                                        class="w-full"
                                    />
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
                                    <vs-input
                                        type="password"
                                        name="password_confirmation"
                                        icon-no-border
                                        icon="icon icon-lock"
                                        icon-pack="feather"
                                        label-placeholder="Reingrese su Password"
                                        v-model="password_confirmation"
                                        class="w-full mt-6"
                                    />

                                    <vs-button
                                        type="border"
                                        :to="{ name: 'auth.login' }"
                                        >Ir a inicio de sesión</vs-button
                                    >
                                    <vs-button
                                        class="float-right"
                                        @click="register"
                                        >Crear mi cuenta</vs-button
                                    >
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
        register() {
            this.$store.dispatch("login", {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation
            });
        }
    }
};
</script>
