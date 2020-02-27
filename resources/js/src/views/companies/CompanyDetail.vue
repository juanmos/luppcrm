<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">
    <company-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>Company record with id: {{ $route.params.id }} not found.</span>
      <span>
        <span>Check</span>
        <router-link :to="{name:'page-user-list'}" class="text-inherit underline">All companies</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="company_data">
      <vx-card :title="$t('accountCompany')" class="mb-base">
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Avatar Col -->
          <!-- <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="company_data.avatar" class="rounded w-full" />
            </div>
          </div>-->

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">{{$t('companyName')}}</td>
                <td>{{ company_data.company_name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('identification')}}</td>
                <td>{{ company_data.ruc }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('companyAddress')}}</td>
                <td>{{ company_data.address }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">{{$t('companyAlias')}}</td>
                <td>{{ company_data.company_alias }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('companyType')}}</td>
                <td>{{ (company_data.company_type!=null)?company_data.company_type.type:$t('noCompanyType') }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('phone')}}</td>
                <td>{{ company_data.phone }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button
              icon-pack="feather"
              icon="icon-edit"
              class="mr-4"
              @click="editData"
            >{{$t('edit')}}</vs-button>
            <!-- <vs-button
              type="border"
              color="danger"
              icon-pack="feather"
              icon="icon-trash"
              @click="confirmDeleteRecord"
            >{{$t("delete")}}</vs-button>-->
          </div>
        </div>
      </vx-card>

      <vs-tabs
        :position="isSmallerScreen ? 'top' : 'left'"
        class="tabs-shadow-none"
        id="profile-tabs"
        :key="isSmallerScreen"
      >
        <vs-tab
          icon-pack="feather"
          icon="icon-user"
          :label="!isSmallerScreen ? $t('companyContacts') : ''"
        >
          <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
            <company-contact :companyId="id" />
          </div>
        </vs-tab>
        <vs-tab icon-pack="feather" icon="icon-user" :label="!isSmallerScreen ? $t('Users') : ''">
          <div class="tab-general md:ml-4 md:mt-0 mt-4 ml-0">
            <company-users :companyId="id" />
          </div>
        </vs-tab>
        <vs-tab
          icon-pack="feather"
          icon="icon-lock"
          :label="!isSmallerScreen ? $t('Settings') : ''"
        >
          <div class="tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0">
            <company-configurations :companyId="id" />
          </div>
        </vs-tab>
        <vs-tab
          icon-pack="feather"
          icon="icon-info"
          :label="!isSmallerScreen ? $t('notifications') : ''"
        >
          <div class="tab-info md:ml-4 md:mt-0 mt-4 ml-0">
            <company-notifications />
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompanyUsers from "./CompanyUsers.vue";
import CompanyNotifications from "./CompanyNotifications.vue";
import CompanyConfigurations from "./CompanyConfigurations.vue";
import CompanyContact from "./CompanyContact.vue";
import CompanySidebar from "./CompanySidebar.vue";

export default {
  components: {
    CompanyUsers,
    CompanyNotifications,
    CompanyConfigurations,
    CompanyContact,
    CompanySidebar
  },
  data() {
    return {
      //   company_data: null,
      addNewDataSidebar: false,
      sidebarData: {},
      user_not_found: false
    };
  },
  props: ["id"],
  computed: {
    company_data() {
      return this.$store.getters["companies/getCompany"](this.id);
    },
    userAddress() {
      let str = "";
      for (var field in this.company_data.location) {
        str += field + " ";
      }
      return str;
    },
    isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  },
  methods: {
    confirmDeleteRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: `Confirm Delete`,
        text: `You are about to delete "${this.company_data.username}"`,
        accept: this.deleteRecord,
        acceptText: "Delete"
      });
    },
    editData() {
      this.sidebarData = this.company_data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    }
  },
  created() {
    this.user_not_found = false;
    // this.$store
    //   .dispatch("userManagement/fetchUser", userId)
    //   .then(res => {
    //     this.company_data = res.data;
    //   })
    //   .catch(err => {
    //     if (err.response.status === 404) {
    //       this.user_not_found = true;
    //       return;
    //     }
    //     console.error(err);
    //   });
  },
  beforeMount() {
    if (this.$store.state.companies.companies.length == 0)
      this.$store.dispatch("companies/fetchCompanies");
  }
};
</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 140px;
      padding-bottom: 0.8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width: 370px) {
          display: block;
        }
      }
    }
  }
}

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }

@media screen and (min-width: 1201px) and (max-width: 1211px),
  only screen and (min-width: 636px) and (max-width: 991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }
}
</style>
