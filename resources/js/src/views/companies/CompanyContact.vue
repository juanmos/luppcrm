<template>
  <vx-card no-shadow>
    <contact-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
      :company_id="companyId"
    />
    <div class="mb-base">
      <h3 class="mb-4">{{$t('companyContacts')}}</h3>
      <vs-table
        ref="table"
        multiple
        v-model="selected"
        pagination
        :max-items="itemsPerPage"
        search
        :data="contacts"
      >
        <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
          <div class="flex flex-wrap-reverse items-center data-list-btn-container">
            <!-- ADD NEW -->
            <div
              class="btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
              @click="addNewData"
            >
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">{{$t('addNew')}}</span>
            </div>
          </div>

          <!-- ITEMS PER PAGE -->
          <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4 items-per-page-handler">
            <div
              class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
            >
              <span
                class="mr-2"
              >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ contacts.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : contacts.length }} of {{ queriedItems }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>
              <vs-dropdown-item @click="itemsPerPage=10">
                <span>10</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=15">
                <span>15</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="itemsPerPage=20">
                <span>20</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>

        <template slot="thead">
          <vs-th sort-key="name">{{$t('firstName')}}</vs-th>
          <vs-th sort-key="alias">{{$t('lastName')}}</vs-th>
          <vs-th sort-key="ruc">{{$t('email')}}</vs-th>
          <vs-th>{{$t('phone')}}</vs-th>
          <vs-th>{{$t('mobile')}}</vs-th>
          <vs-th>{{$t('position')}}</vs-th>
          <vs-th>Action</vs-th>
        </template>

        <template slot-scope="{data}">
          <tbody>
            <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
              <vs-td>
                <p class="product-name font-medium truncate">{{ tr.first_name }}</p>
              </vs-td>

              <vs-td>
                <p class="product-category">{{ tr.last_name }}</p>
              </vs-td>

              <vs-td>
                <p class="product-category">{{ tr.email }}</p>
              </vs-td>

              <vs-td>
                <p class="product-category">{{ tr.phone }}</p>
              </vs-td>

              <vs-td>
                <p class="product-price">{{ tr.mobile }}</p>
              </vs-td>
              <vs-td>
                <p class="product-price">{{ tr.position }}</p>
              </vs-td>

              <vs-td class="whitespace-no-wrap">
                <!-- <feather-icon
                  icon="EyeIcon"
                  svgClasses="w-5 h-5 hover:text-primary stroke-current"
                  @click.stop="viewUser(tr)"
                />-->
                <feather-icon
                  icon="EditIcon"
                  svgClasses="w-5 h-5 hover:text-primary stroke-current"
                  class="ml-2"
                  @click.stop="editData(tr)"
                />
                <feather-icon
                  icon="TrashIcon"
                  svgClasses="w-5 h-5 hover:text-danger stroke-current"
                  class="ml-2"
                  @click.stop="deleteData(tr.id)"
                />
              </vs-td>
            </vs-tr>
          </tbody>
        </template>
      </vs-table>
    </div>
  </vx-card>
</template>

<script>
import ContactSidebar from "../contacts/ContactSidebar.vue";

export default {
  components: {
    ContactSidebar
  },
  data() {
    return {
      //   users: [],
      itemsPerPage: 10,
      selected: [],
      isMounted: false,
      userToDelete: 0,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  props: ["companyId"],
  computed: {
    contacts() {
      return this.$store.state.contacts.contacts;
    },
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
      return 0;
    },
    queriedItems() {
      return this.$refs.table
        ? this.$refs.table.queriedResults.length
        : this.contacts.length;
    }
  },
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData(id) {
      this.userToDelete = id;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: this.$t("confirmDeleteTitle"),
        text: this.$t("confirmContactDeleteText"),
        accept: this.acceptAlert,
        acceptText: this.$t("delete")
      });
    },
    acceptAlert() {
      this.$store
        .dispatch("contacts/removeContact", this.userToDelete)
        .catch(err => {
          this.$vs.notify({
            color: "danger",
            title: this.$t("contactDeletedTitle"),
            text: this.$t("contactDeletedText")
          });
        });
    },
    editData(data) {
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    }
  },

  created() {
    this.$store.dispatch("contacts/fetchCompanyContacts", this.companyId);
    //   .then(({ data }) => (this.users = data.users));
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style>
</style>