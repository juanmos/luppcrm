<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? $t('newUser') : $t('updateUser') }}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6">
        <!-- NAME -->
        <vs-input
          :label="$t('firstName')"
          v-model="first_name"
          class="mt-5 w-full"
          name="first_name"
          v-validate="'required'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('first_name')"
        >{{ errors.first('first_name') }}</span>

        <vs-input
          :label="$t('lastName')"
          v-model="last_name"
          class="mt-5 w-full"
          name="last_name"
          v-validate="'required'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('last_name')"
        >{{ errors.first('last_name') }}</span>

        <vs-input
          :label="$t('identification')"
          v-model="identification"
          class="mt-5 w-full"
          name="identification"
          v-validate="'required|integer|min:10'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('identification')"
        >{{ errors.first('identification') }}</span>

        <vs-input :label="$t('email')" v-model="email" class="mt-5 w-full" name="email" />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>
        <div v-if="Object.entries(this.data).length === 0">
          <vs-input
            :label="$t('password')"
            type="password"
            v-model="password"
            class="mt-5 w-full"
            name="password"
          />
          <span
            class="text-danger text-sm"
            v-show="errors.has('password')"
          >{{ errors.first('password') }}</span>

          <vs-input
            :label="$t('passwordConfirmation')"
            v-model="passwordConfirmation"
            class="mt-5 w-full"
            type="password"
            name="password-confirmation"
          />
          <span
            class="text-danger text-sm"
            v-show="errors.has('password-confirmation')"
          >{{ errors.first('password-confirmation') }}</span>
        </div>
        <vs-input :label="$t('phone')" v-model="phone" class="mt-5 w-full" name="phone" />
        <span class="text-danger text-sm" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

        <vs-input :label="$t('mobile')" v-model="mobile" class="mt-5 w-full" name="mobile" />
        <span class="text-danger text-sm" v-show="errors.has('mobile')">{{ errors.first('mobile') }}</span>
        <vs-select v-model="role" class="w-full select-large" :label="$t('role')">
          <vs-select-item
            :key="index"
            :value="item"
            :text="item"
            v-for="(item,index) in roles"
            class="w-full"
          />
        </vs-select>
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">{{$t('save')}}</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">{{$t('cancel')}}</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { mapState, mapActions } from "vuex";

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
    },
    company_id: {
      type: Number,
      default: 0
    }
  },
  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        let {
          first_name,
          id,
          last_name,
          phone,
          mobile,
          email,
          identification,
          role
        } = JSON.parse(JSON.stringify(this.data));
        this.dataId = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.mobile = mobile;
        this.email = email;
        this.identification = identification;
        this.role = role;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {
      dataId: null,
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      phone: "",
      mobile: "",
      identification: "",
      role: "Empresa",

      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          this.$emit("closeSidebar");
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid() {
      return (
        !this.errors.any() && this.first_name && this.last_name && this.email
      );
    },
    ...mapState("users", ["roles"])
  },
  methods: {
    ...mapActions("users", ["fetchRoles"]),
    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.first_name = "";
      this.last_name = "";
      this.identification = "";
      this.mobile = "";
      this.role = "Empresa";
      this.password = "";
      this.password_confirmation = "";
    },
    submitData() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            first_name: this.first_name,
            last_name: this.last_name,
            identification: this.identification,
            mobile: this.mobile,
            phone: this.phone,
            email: this.email,
            role: this.role,
            password: this.password,
            password_confirmation: this.passwordConfirmation,
            company_id: this.company_id
          };

          if (this.dataId !== null && this.dataId >= 0) {
            delete obj.password;
            delete obj.password_confirmation;

            this.$store.dispatch("users/updateUser", obj).catch(err => {
              console.error(err);
            });
          } else {
            delete obj.id;
            this.$store.dispatch("users/addUser", obj).catch(err => {
              console.error(err);
            });
          }

          this.$emit("closeSidebar");
          this.initValues();
        }
      });
    }
  },
  components: {
    VuePerfectScrollbar
  },
  mounted() {
    this.fetchRoles();
  }
};
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 600px;
    max-width: 90vw;

    .img-upload {
      margin-top: 2rem;

      .con-img-upload {
        padding: 0;
      }

      .con-input-upload {
        width: 100%;
        margin: 0;
      }
    }
  }
}

.scroll-area--data-list-add-new {
  // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
