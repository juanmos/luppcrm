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
      <h4>{{ Object.entries(this.data).length === 0 ? $t('newCompany') : $t('updateCompany') }}</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6">
        <!-- NAME -->
        <vs-input
          :label="$t('companyName')"
          v-model="company_name"
          class="mt-5 w-full"
          name="company-name"
          v-validate="'required'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('company-name')"
        >{{ errors.first('company-name') }}</span>
        <vs-input
          :label="$t('companyAlias')"
          v-model="company_alias"
          class="mt-5 w-full"
          name="company-alias"
          v-validate="'required'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('company-alias')"
        >{{ errors.first('company-alias') }}</span>

        <vs-input
          :label="$t('identification')"
          v-model="identification"
          class="mt-5 w-full"
          name="company-identification"
          v-validate="'required|integer|min:10'"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('company-identification')"
        >{{ errors.first('company-identification') }}</span>
        <vs-input
          :label="$t('companyAddress')"
          v-model="address"
          class="mt-5 w-full"
          name="company-address"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('company-address')"
        >{{ errors.first('company-address') }}</span>
        <vs-input
          :label="$t('companyPhone')"
          v-model="phone"
          class="mt-5 w-full"
          name="company-phone"
        />
        <span
          class="text-danger text-sm"
          v-show="errors.has('company-phone')"
        >{{ errors.first('company-phone') }}</span>
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

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {}
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
          company_name,
          id,
          company_alias,
          phone,
          address,
          ruc
        } = JSON.parse(JSON.stringify(this.data));
        this.dataId = id;
        this.company_name = company_name;
        this.company_alias = company_alias;
        this.phone = phone;
        this.address = address;
        this.identification = ruc;
        this.initValues();
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {
      dataId: null,
      company_name: "",
      company_alias: "",
      phone: "",
      address: "",
      identification: "",

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
        !this.errors.any() &&
        this.company_name &&
        this.company_alias &&
        this.identification
      );
    }
  },
  methods: {
    initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.dataName = "";
      this.dataCategory = null;
      this.dataOrder_status = "pending";
      this.dataPrice = 0;
      this.dataImg = null;
    },
    submitData() {
      this.$validator.validateAll().then(result => {
        if (result) {
          const obj = {
            id: this.dataId,
            company_name: this.company_name,
            company_alias: this.company_alias,
            ruc: this.identification,
            address: this.address,
            phone: this.phone
          };

          if (this.dataId !== null && this.dataId >= 0) {
            this.$store.dispatch("companies/updateCompany", obj).catch(err => {
              console.error(err);
            });
          } else {
            delete obj.id;
            this.$store.dispatch("companies/addCompany", obj).catch(err => {
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
    width: 400px;
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
