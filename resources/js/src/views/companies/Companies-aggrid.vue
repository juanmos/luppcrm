<!-- =========================================================================================
    File Name: AgGridTable.vue
    Description: Ag Grid table
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
    Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div id="ag-grid-demo">
    <company-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
    <vx-card>
      <!-- TABLE ACTION ROW -->
      <div class="flex flex-wrap justify-between items-center">
        <!-- ITEMS PER PAGE -->
        <div class="flex flex-wrap items-center mb-4 md:mb-0 mr-4 ag-grid-table-actions-left">
          <vs-dropdown vs-trigger-click class="cursor-pointer">
            <div
              class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
            >
              <span
                class="mr-2"
              >{{ currentPage * paginationPageSize - (paginationPageSize - 1) }} - {{ companies.length - currentPage * paginationPageSize > 0 ? currentPage * paginationPageSize : companies.length }} of {{ companies.length }}</span>
              <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
            </div>
            <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
            <vs-dropdown-menu>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(20)">
                <span>20</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(50)">
                <span>50</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(100)">
                <span>100</span>
              </vs-dropdown-item>
              <vs-dropdown-item @click="gridApi.paginationSetPageSize(150)">
                <span>150</span>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
          <div
            class="btn-add-new p-3 ml-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary"
            @click="addNewData"
          >
            <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
            <span class="ml-2 text-base text-primary">Add New</span>
          </div>
        </div>

        <!-- TABLE ACTION COL-2: SEARCH & EXPORT AS CSV -->
        <div class="flex flex-wrap items-center justify-between ag-grid-table-actions-right">
          <vs-input
            class="mb-4 md:mb-0 mr-4"
            v-model="searchQuery"
            @input="updateSearchQuery"
            placeholder="Search..."
          />
          <vs-button class="mb-4 md:mb-0" @click="gridApi.exportDataAsCsv()">Export as CSV</vs-button>
        </div>
      </div>
      <ag-grid-vue
        ref="agGridTable"
        :gridOptions="gridOptions"
        class="ag-theme-material w-100 my-4 ag-grid-table"
        :columnDefs="columnDefs"
        :defaultColDef="defaultColDef"
        :rowData="companies"
        rowSelection="multiple"
        colResizeDefault="shift"
        :animateRows="true"
        :floatingFilter="true"
        :pagination="true"
        :paginationPageSize="paginationPageSize"
        :suppressPaginationPanel="true"
      ></ag-grid-vue>
      <vs-pagination :total="totalPages" :max="maxPageNumbers" v-model="currentPage" />
    </vx-card>
  </div>
</template>

<script>
import { AgGridVue } from "ag-grid-vue";
import axios from "@/axios";
import CompanySidebar from "./CompanySidebar.vue";
import "@sass/vuexy/extraComponents/agGridStyleOverride.scss";
import { mapActions, mapGetters, mapState } from "vuex";

export default {
  components: {
    AgGridVue,
    CompanySidebar
  },
  data() {
    return {
      searchQuery: "",
      gridOptions: {},
      maxPageNumbers: 7,
      gridApi: null,
      defaultColDef: {
        sortable: true,
        editable: true,
        resizable: true,
        suppressMenu: true
      },
      columnDefs: [
        {
          headerName: this.$t("companyName"),
          field: "company_name",
          width: 350,
          filter: true,
          checkboxSelection: true,
          headerCheckboxSelectionFilteredOnly: true,
          headerCheckboxSelection: true
        },
        {
          headerName: this.$t("companyAlias"),
          field: "company_alias",
          filter: true,
          width: 350
        },
        {
          headerName: this.$t("identification"),
          field: "ruc",
          filter: true,
          width: 190,
          pinned: "left"
        },
        {
          headerName: this.$t("companyAddress"),
          field: "address",
          filter: true,
          width: 350
        },
        {
          headerName: this.$t("companyPhone"),
          field: "phone",
          filter: true,
          width: 150
        }
      ],
      companies: [],
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  watch: {
    "$store.state.windowWidth"(val) {
      if (val <= 576) {
        this.maxPageNumbers = 4;
        this.gridOptions.columnApi.setColumnPinned("ruc", null);
      } else this.gridOptions.columnApi.setColumnPinned("ruc", "left");
    }
  },
  computed: {
    paginationPageSize() {
      if (this.gridApi) return this.gridApi.paginationGetPageSize();
      else return 50;
    },
    totalPages() {
      if (this.gridApi) return this.gridApi.paginationGetTotalPages();
      else return 0;
    },
    currentPage: {
      get() {
        if (this.gridApi) return this.gridApi.paginationGetCurrentPage() + 1;
        else return 1;
      },
      set(val) {
        this.gridApi.paginationGoToPage(val - 1);
      }
    },
    ...mapGetters("companies", { companyList: "companies" })
  },
  methods: {
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    updateSearchQuery(val) {
      this.gridApi.setQuickFilter(val);
    },
    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
    ...mapActions("companies", ["fetchCompanies"]),
    onCellValueChanged(params) {}
  },
  mounted() {
    this.gridApi = this.gridOptions.api;
  },
  beforeMount() {
    this.fetchCompanies().then(
      () => {
        this.companies = this.companyList;
      }
      //   ({ data }) => (this.companies = this.$store.state.companies.companies)
    );
  }
};
</script>
