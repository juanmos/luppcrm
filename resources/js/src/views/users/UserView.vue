<template>
  <div id="page-user-view">
    <user-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <vs-alert color="danger" title="User Not Found" :active.sync="user_not_found">
      <span>User record with id: {{ $route.params.userId }} not found.</span>
      <span>
        <span>Check</span>
        <router-link :to="{name:'admin.users'}" class="text-inherit underline">All Users</router-link>
      </span>
    </vs-alert>

    <div id="user-data" v-if="user_data">
      <vx-card :title="$t('account')" class="mb-base">
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="user_data.photo" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">{{$t('firstName')}}</td>
                <td>{{ user_data.first_name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('lastName')}}</td>
                <td>{{ user_data.last_name }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Email</td>
                <td>{{ user_data.email }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">{{$t('status')}}</td>
                <td>{{(user_data.active)?$t('active'):$t('inactive')}}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('role')}}</td>
                <td>{{ user_data.role }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('company')}}</td>
                <td>
                  <router-link
                    :to="{name:'admin.company.view',params:user_data.company_id}"
                  >{{ (user_data.company!=null)?user_data.company.company_name: $t('noCompany') }}</router-link>
                </td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
          <div class="vx-col w-full flex" id="account-manage-buttons">
            <vs-button
              icon-pack="feather"
              icon="icon-edit"
              class="mr-4"
              @click="editUser"
            >{{$t('edit')}}</vs-button>
            <vs-button
              type="border"
              color="danger"
              icon-pack="feather"
              icon="icon-trash"
              @click="confirmDeleteRecord"
            >{{$t("delete")}}</vs-button>
          </div>
        </div>
      </vx-card>

      <div class="vx-row">
        <div class="vx-col lg:w-full w-full">
          <vx-card :title="$t('information')" class="mb-base">
            <table>
              <tr>
                <td class="font-semibold">Birth Date</td>
                <td>{{ user_data.dob }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('mobile')}}</td>
                <td>{{ user_data.mobile }}</td>
              </tr>
              <tr>
                <td class="font-semibold">{{$t('phone')}}</td>
                <td>{{ user_data.phone }}</td>
              </tr>
            </table>
          </vx-card>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import UserSidebar from "./UserSidebar.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    UserSidebar
  },
  data() {
    return {
      //   user_data: null,
      role: "",
      user_not_found: false,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  props: ["id"],
  computed: {
    user_data() {
      return this.$store.getters["users/getUser"](this.id);
    }
  },
  methods: {
    ...mapActions("users", ["fetchUser"]),
    editUser() {
      this.sidebarData = this.user_data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
    confirmDeleteRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: this.$t("confirmDeleteTitle"),
        text:
          this.$t("confirmDeleteText") +
          `${this.user_data.first_name} ${this.user_data.last_name}`,
        accept: this.deleteRecord,
        acceptText: this.$t("delete")
      });
    },
    deleteRecord() {
      /* Below two lines are just for demo purpose */
      this.$router.push({ name: "app-user-list" });
      this.showDeleteSuccess();

      /* UnComment below lines for enabling true flow if deleting user */
      // this.$store.dispatch("userManagement/removeRecord", this.user_data.id)
      //   .then(()   => { this.$router.push({name:'app-user-list'}); this.showDeleteSuccess() })
      //   .catch(err => { console.error(err)       })
    },
    showDeleteSuccess() {
      this.$vs.notify({
        color: "success",
        title: "User Deleted",
        text: "The selected user was successfully deleted"
      });
    }
  },
  mounted() {
    this.fetchUser(this.id);
    // .then(({ data }) => {
    //   this.user_data = data.user;
    //   this.user_data.role = data.role;
    //   this.role = data.role;
    // })
    // .catch(() => {
    //   this.user_not_found = true;
    // });
  }
};
</script>
