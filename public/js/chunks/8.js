(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_0___default.a,
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: ["companyId"],
  data: function data() {
    return {
      bio: this.$store.state.AppActiveUser.about,
      dob: null,
      country: "USA",
      lang_known: ["English", "Russian"],
      gender: "male",
      mobile: "",
      website: "",
      // Options
      countryOptions: [{
        label: "Australia",
        value: "australia"
      }, {
        label: "France",
        value: "france"
      }, {
        label: "Germany",
        value: "germany"
      }, {
        label: "India",
        value: "india"
      }, {
        label: "Jordan",
        value: "jordan"
      }, {
        label: "Morocco",
        value: "morocco"
      }, {
        label: "Portuguese",
        value: "portuguese"
      }, {
        label: "Syria",
        value: "syria"
      }, {
        label: "USA",
        value: "usa"
      }],
      langOptions: [{
        label: "English",
        value: "english"
      }, {
        label: "Spanish",
        value: "spanish"
      }, {
        label: "French",
        value: "french"
      }, {
        label: "Russian",
        value: "russian"
      }, {
        label: "German",
        value: "german"
      }, {
        label: "Arabic",
        value: "arabic"
      }, {
        label: "Sanskrit",
        value: "sanskrit"
      }]
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyContact.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyContact.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contacts_ContactSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contacts/ContactSidebar.vue */ "./resources/js/src/views/contacts/ContactSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ContactSidebar: _contacts_ContactSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
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
    contacts: function contacts() {
      return this.$store.state.contacts.contacts;
    },
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.contacts.length;
    }
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData: function deleteData(id) {
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
    acceptAlert: function acceptAlert() {
      var _this = this;

      this.$store.dispatch("contacts/removeContact", this.userToDelete).catch(function (err) {
        _this.$vs.notify({
          color: "danger",
          title: _this.$t("contactDeletedTitle"),
          text: _this.$t("contactDeletedText")
        });
      });
    },
    editData: function editData(data) {
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  },
  created: function created() {
    this.$store.dispatch("contacts/fetchCompanyContacts", this.companyId); //   .then(({ data }) => (this.users = data.users));
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _CompanyUsers_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyUsers.vue */ "./resources/js/src/views/companies/CompanyUsers.vue");
/* harmony import */ var _CompanyNotifications_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyNotifications.vue */ "./resources/js/src/views/companies/CompanyNotifications.vue");
/* harmony import */ var _CompanyConfigurations_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CompanyConfigurations.vue */ "./resources/js/src/views/companies/CompanyConfigurations.vue");
/* harmony import */ var _CompanyContact_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CompanyContact.vue */ "./resources/js/src/views/companies/CompanyContact.vue");
/* harmony import */ var _CompanySidebar_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CompanySidebar.vue */ "./resources/js/src/views/companies/CompanySidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    CompanyUsers: _CompanyUsers_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    CompanyNotifications: _CompanyNotifications_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    CompanyConfigurations: _CompanyConfigurations_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    CompanyContact: _CompanyContact_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CompanySidebar: _CompanySidebar_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      //   company_data: null,
      addNewDataSidebar: false,
      sidebarData: {},
      user_not_found: false
    };
  },
  props: ["id"],
  computed: {
    company_data: function company_data() {
      return this.$store.getters["companies/getCompany"](this.id);
    },
    userAddress: function userAddress() {
      var str = "";

      for (var field in this.company_data.location) {
        str += field + " ";
      }

      return str;
    },
    isSmallerScreen: function isSmallerScreen() {
      return this.$store.state.windowWidth < 768;
    }
  },
  methods: {
    confirmDeleteRecord: function confirmDeleteRecord() {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm Delete",
        text: "You are about to delete \"".concat(this.company_data.username, "\""),
        accept: this.deleteRecord,
        acceptText: "Delete"
      });
    },
    editData: function editData() {
      this.sidebarData = this.company_data;
      this.toggleDataSidebar(true);
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    }
  },
  created: function created() {
    this.user_not_found = false; // this.$store
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
  beforeMount: function beforeMount() {
    if (this.$store.state.companies.companies.length == 0) this.$store.dispatch("companies/fetchCompanies");
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      comment: true,
      answer: true,
      follow: false,
      news: false,
      product_update: false,
      blog: true
    };
  },
  computed: {
    activeUserInfo: function activeUserInfo() {
      return this.$store.state.AppActiveUser;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyUsers.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyUsers.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _users_UserSidebar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../users/UserSidebar.vue */ "./resources/js/src/views/users/UserSidebar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserSidebar: _users_UserSidebar_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      //   users: [],
      itemsPerPage: 10,
      selected: [],
      isMounted: false,
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  props: ["companyId"],
  computed: {
    users: function users() {
      return this.$store.state.users.users;
    },
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.users.length;
    }
  },
  methods: {
    addNewData: function addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },
    deleteData: function deleteData(id) {
      this.userToDelete = id;
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: this.$t("confirmDeleteTitle"),
        text: this.$t("confirmDeleteText"),
        accept: this.acceptAlert,
        acceptText: this.$t("delete")
      });
    },
    acceptAlert: function acceptAlert() {
      var _this = this;

      this.$store.dispatch("users/removeUser", this.userToDelete).catch(function (err) {
        _this.$vs.notify({
          color: "danger",
          title: _this.$t("userDeletedTitle"),
          text: _this.$t("userDeletedText")
        });
      });
    },
    editData: function editData(data) {
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },
    getOrderStatusColor: function getOrderStatusColor(status) {
      if (status == "on_hold") return "warning";
      if (status == "delivered") return "success";
      if (status == "canceled") return "danger";
      return "primary";
    },
    getPopularityColor: function getPopularityColor(num) {
      if (num > 90) return "success";
      if (num > 70) return "primary";
      if (num >= 50) return "warning";
      if (num < 50) return "danger";
      return "primary";
    },
    toggleDataSidebar: function toggleDataSidebar() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.addNewDataSidebar = val;
    },
    viewCompany: function viewCompany(data) {
      this.$router.push({
        name: "admin.companies.details",
        params: {
          id: data.id
        }
      });
    }
  },
  created: function created() {
    this.$store.dispatch("companies/fetchCompanyUsers", this.companyId); //   .then(({ data }) => (this.users = data.users));
  },
  mounted: function mounted() {
    this.isMounted = true;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: function _default() {}
    },
    company_id: {
      type: String,
      default: 0
    }
  },
  watch: {
    isSidebarActive: function isSidebarActive(val) {
      if (!val) return;

      if (Object.entries(this.data).length === 0) {
        this.initValues();
        this.$validator.reset();
      } else {
        var _JSON$parse = JSON.parse(JSON.stringify(this.data)),
            first_name = _JSON$parse.first_name,
            id = _JSON$parse.id,
            last_name = _JSON$parse.last_name,
            phone = _JSON$parse.phone,
            mobile = _JSON$parse.mobile,
            email = _JSON$parse.email,
            position = _JSON$parse.position;

        this.dataId = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.mobile = mobile;
        this.email = email;
        this.position = position;
        this.initValues();
      } // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))

    }
  },
  data: function data() {
    return {
      dataId: null,
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      mobile: "",
      position: "",
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6
      }
    };
  },
  computed: _objectSpread({
    isSidebarActiveLocal: {
      get: function get() {
        return this.isSidebarActive;
      },
      set: function set(val) {
        if (!val) {
          this.$emit("closeSidebar"); // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid: function isFormValid() {
      return !this.errors.any() && this.first_name && this.last_name;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])("users", ["roles"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])("users", ["fetchRoles"]), {
    initValues: function initValues() {
      if (this.data.id) return;
      this.dataId = null;
      this.first_name = "";
      this.last_name = "";
      this.position = "";
      this.mobile = "";
      this.phone = "";
    },
    submitData: function submitData() {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var obj = {
            id: _this.dataId,
            first_name: _this.first_name,
            last_name: _this.last_name,
            position: _this.position,
            mobile: _this.mobile,
            phone: _this.phone,
            email: _this.email,
            company_id: _this.company_id
          };

          if (_this.dataId !== null && _this.dataId >= 0) {
            delete obj.password;
            delete obj.password_confirmation;

            _this.$store.dispatch("contacts/updateContact", obj).catch(function (err) {
              console.error(err);
            });
          } else {
            delete obj.id;

            _this.$store.dispatch("contacts/addContact", obj).catch(function (err) {
              console.error(err);
            });
          }

          _this.$emit("closeSidebar");

          _this.initValues();
        }
      });
    }
  }),
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    this.fetchRoles();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#avatar-col {\n  width: 10rem;\n}\n#page-user-view table td {\n  vertical-align: top;\n  min-width: 140px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1 {\n    width: calc(100% - 12rem) !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".add-new-data-sidebar[data-v-226ebf44]  .vs-sidebar--background {\n  z-index: 52010;\n}\n.add-new-data-sidebar[data-v-226ebf44]  .vs-sidebar {\n  z-index: 52010;\n  width: 600px;\n  max-width: 90vw;\n}\n[dir] .add-new-data-sidebar[data-v-226ebf44]  .vs-sidebar .img-upload {\n  margin-top: 2rem;\n}\n[dir] .add-new-data-sidebar[data-v-226ebf44]  .vs-sidebar .img-upload .con-img-upload {\n  padding: 0;\n}\n.add-new-data-sidebar[data-v-226ebf44]  .vs-sidebar .img-upload .con-input-upload {\n  width: 100%;\n}\n[dir] .add-new-data-sidebar[data-v-226ebf44]  .vs-sidebar .img-upload .con-input-upload {\n  margin: 0;\n}\n.scroll-area--data-list-add-new[data-v-226ebf44] {\n  height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("h3", { staticClass: "mb-4" }, [_vm._v(_vm._s(_vm.$t("Settings")))]),
      _vm._v(" "),
      _c("vs-textarea", {
        attrs: { label: "Bio", placeholder: "Your bio..." },
        model: {
          value: _vm.bio,
          callback: function($$v) {
            _vm.bio = $$v
          },
          expression: "bio"
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Birth Date")]),
          _vm._v(" "),
          _c("flat-pickr", {
            staticClass: "w-full",
            attrs: { config: { dateFormat: "d F Y" } },
            model: {
              value: _vm.dob,
              callback: function($$v) {
                _vm.dob = $$v
              },
              expression: "dob"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Country")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              options: _vm.countryOptions,
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.country,
              callback: function($$v) {
                _vm.country = $$v
              },
              expression: "country"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mt-8" },
        [
          _c("label", { staticClass: "text-sm" }, [_vm._v("Languages")]),
          _vm._v(" "),
          _c("v-select", {
            attrs: {
              multiple: "",
              closeOnSelect: false,
              options: _vm.langOptions,
              dir: _vm.$vs.rtl ? "rtl" : "ltr"
            },
            model: {
              value: _vm.lang_known,
              callback: function($$v) {
                _vm.lang_known = $$v
              },
              expression: "lang_known"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mt-8",
        attrs: { type: "number", "label-placeholder": "Mobile" },
        model: {
          value: _vm.mobile,
          callback: function($$v) {
            _vm.mobile = $$v
          },
          expression: "mobile"
        }
      }),
      _vm._v(" "),
      _c("vs-input", {
        staticClass: "w-full mt-8",
        attrs: { "label-placeholder": "Website" },
        model: {
          value: _vm.website,
          callback: function($$v) {
            _vm.website = $$v
          },
          expression: "website"
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "mt-8 mb-base" }, [
        _c("label", { staticClass: "text-sm" }, [_vm._v("Gender")]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "mt-2" },
          [
            _c(
              "vs-radio",
              {
                staticClass: "mr-4",
                attrs: { "vs-value": "male" },
                model: {
                  value: _vm.gender,
                  callback: function($$v) {
                    _vm.gender = $$v
                  },
                  expression: "gender"
                }
              },
              [_vm._v("Male")]
            ),
            _vm._v(" "),
            _c(
              "vs-radio",
              {
                staticClass: "mr-4",
                attrs: { "vs-value": "female" },
                model: {
                  value: _vm.gender,
                  callback: function($$v) {
                    _vm.gender = $$v
                  },
                  expression: "gender"
                }
              },
              [_vm._v("Female")]
            ),
            _vm._v(" "),
            _c(
              "vs-radio",
              {
                attrs: { "vs-value": "other" },
                model: {
                  value: _vm.gender,
                  callback: function($$v) {
                    _vm.gender = $$v
                  },
                  expression: "gender"
                }
              },
              [_vm._v("Other")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex flex-wrap items-center justify-end" },
        [
          _c("vs-button", { staticClass: "ml-auto mt-2" }, [
            _vm._v("Save Changes")
          ]),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              staticClass: "ml-4 mt-2",
              attrs: { type: "border", color: "warning" }
            },
            [_vm._v("Reset")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyContact.vue?vue&type=template&id=42fcbb41&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyContact.vue?vue&type=template&id=42fcbb41& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("contact-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData,
          company_id: _vm.companyId
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-base" },
        [
          _c("h3", { staticClass: "mb-4" }, [
            _vm._v(_vm._s(_vm.$t("companyContacts")))
          ]),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              ref: "table",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.contacts
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [_vm._v(_vm._s(tr.first_name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-category" }, [
                                  _vm._v(_vm._s(tr.last_name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-category" }, [
                                  _vm._v(_vm._s(tr.email))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-category" }, [
                                  _vm._v(_vm._s(tr.phone))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-price" }, [
                                  _vm._v(_vm._s(tr.mobile))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-price" }, [
                                  _vm._v(_vm._s(tr.position))
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "ml-2",
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-5 h-5 hover:text-primary stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.editData(tr)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "ml-2",
                                    attrs: {
                                      icon: "TrashIcon",
                                      svgClasses:
                                        "w-5 h-5 hover:text-danger stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.deleteData(tr.id)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap-reverse items-center data-list-btn-container"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
                          on: { click: _vm.addNewData }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "ml-2 text-base text-primary" },
                            [_vm._v(_vm._s(_vm.$t("addNew")))]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
                      attrs: { "vs-trigger-click": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                        },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(
                              _vm._s(
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.contacts.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.contacts.length
                                ) +
                                " of " +
                                _vm._s(_vm.queriedItems)
                            )
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon: "ChevronDownIcon",
                              svgClasses: "h-4 w-4"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
                                }
                              }
                            },
                            [_c("span", [_vm._v("10")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "name" } }, [
                    _vm._v(_vm._s(_vm.$t("firstName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "alias" } }, [
                    _vm._v(_vm._s(_vm.$t("lastName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "ruc" } }, [
                    _vm._v(_vm._s(_vm.$t("email")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("phone")))]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("mobile")))]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("position")))]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=template&id=612710c0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=template&id=612710c0& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "page-user-view" } },
    [
      _c("company-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "vs-alert",
        {
          attrs: {
            color: "danger",
            title: "User Not Found",
            active: _vm.user_not_found
          },
          on: {
            "update:active": function($event) {
              _vm.user_not_found = $event
            }
          }
        },
        [
          _c("span", [
            _vm._v(
              "Company record with id: " +
                _vm._s(_vm.$route.params.id) +
                " not found."
            )
          ]),
          _vm._v(" "),
          _c(
            "span",
            [
              _c("span", [_vm._v("Check")]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "text-inherit underline",
                  attrs: { to: { name: "page-user-list" } }
                },
                [_vm._v("All companies")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.company_data
        ? _c(
            "div",
            { attrs: { id: "user-data" } },
            [
              _c(
                "vx-card",
                {
                  staticClass: "mb-base",
                  attrs: { title: _vm.$t("accountCompany") }
                },
                [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      {
                        staticClass: "vx-col flex-1",
                        attrs: { id: "account-info-col-1" }
                      },
                      [
                        _c("table", [
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(_vm.$t("companyName")))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.company_data.company_name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(_vm.$t("identification")))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.company_data.ruc))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(_vm.$t("companyAddress")))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.company_data.address))])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "vx-col flex-1",
                        attrs: { id: "account-info-col-2" }
                      },
                      [
                        _c("table", [
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(_vm.$t("companyAlias")))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.company_data.company_alias))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(_vm.$t("companyType")))
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  _vm.company_data.company_type != null
                                    ? _vm.company_data.company_type.type
                                    : _vm.$t("noCompanyType")
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", { staticClass: "font-semibold" }, [
                              _vm._v(_vm._s(_vm.$t("phone")))
                            ]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.company_data.phone))])
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "vx-col w-full flex",
                        attrs: { id: "account-manage-buttons" }
                      },
                      [
                        _c(
                          "vs-button",
                          {
                            staticClass: "mr-4",
                            attrs: {
                              "icon-pack": "feather",
                              icon: "icon-edit"
                            },
                            on: { click: _vm.editData }
                          },
                          [_vm._v(_vm._s(_vm.$t("edit")))]
                        )
                      ],
                      1
                    )
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "vs-tabs",
                {
                  key: _vm.isSmallerScreen,
                  staticClass: "tabs-shadow-none",
                  attrs: {
                    position: _vm.isSmallerScreen ? "top" : "left",
                    id: "profile-tabs"
                  }
                },
                [
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-user",
                        label: !_vm.isSmallerScreen
                          ? _vm.$t("companyContacts")
                          : ""
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "tab-general md:ml-4 md:mt-0 mt-4 ml-0"
                        },
                        [
                          _c("company-contact", {
                            attrs: { companyId: _vm.id }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-user",
                        label: !_vm.isSmallerScreen ? _vm.$t("Users") : ""
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "tab-general md:ml-4 md:mt-0 mt-4 ml-0"
                        },
                        [_c("company-users", { attrs: { companyId: _vm.id } })],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-lock",
                        label: !_vm.isSmallerScreen ? _vm.$t("Settings") : ""
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "tab-change-pwd md:ml-4 md:mt-0 mt-4 ml-0"
                        },
                        [
                          _c("company-configurations", {
                            attrs: { companyId: _vm.id }
                          })
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-tab",
                    {
                      attrs: {
                        "icon-pack": "feather",
                        icon: "icon-info",
                        label: !_vm.isSmallerScreen
                          ? _vm.$t("notifications")
                          : ""
                      }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "tab-info md:ml-4 md:mt-0 mt-4 ml-0" },
                        [_c("company-notifications")],
                        1
                      )
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=template&id=0c55856e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=template&id=0c55856e& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vx-card", { attrs: { "no-shadow": "" } }, [
    _c("div", { staticClass: "mb-base" }, [
      _c("h6", { staticClass: "mb-4" }, [_vm._v("Activity")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.comment,
              callback: function($$v) {
                _vm.comment = $$v
              },
              expression: "comment"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Email me when someone comments onmy article")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.answer,
              callback: function($$v) {
                _vm.answer = $$v
              },
              expression: "answer"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Email me when someone answers on my form")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.follow,
              callback: function($$v) {
                _vm.follow = $$v
              },
              expression: "follow"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Email me hen someone follows me")
          ])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c("div", [
      _c("h6", { staticClass: "mb-4" }, [_vm._v("Application")]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.news,
              callback: function($$v) {
                _vm.news = $$v
              },
              expression: "news"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("News and announcements")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center mb-4" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.product_update,
              callback: function($$v) {
                _vm.product_update = $$v
              },
              expression: "product_update"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [
            _vm._v("Weekly product updates")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center" },
        [
          _c("vs-switch", {
            model: {
              value: _vm.blog,
              callback: function($$v) {
                _vm.blog = $$v
              },
              expression: "blog"
            }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "ml-4" }, [_vm._v("Weekly blog digest")])
        ],
        1
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-wrap items-center justify-end mt-base" },
      [
        _c("vs-button", { staticClass: "ml-auto mt-2" }, [
          _vm._v("Save Changes")
        ]),
        _vm._v(" "),
        _c(
          "vs-button",
          {
            staticClass: "ml-4 mt-2",
            attrs: { type: "border", color: "warning" }
          },
          [_vm._v("Reset")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyUsers.vue?vue&type=template&id=64aa7f69&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/companies/CompanyUsers.vue?vue&type=template&id=64aa7f69& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vx-card",
    { attrs: { "no-shadow": "" } },
    [
      _c("user-sidebar", {
        attrs: {
          isSidebarActive: _vm.addNewDataSidebar,
          data: _vm.sidebarData,
          company_id: _vm.companyId
        },
        on: { closeSidebar: _vm.toggleDataSidebar }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "mb-base" },
        [
          _c("h3", { staticClass: "mb-4" }, [
            _vm._v(_vm._s(_vm.$t("companyUsers")))
          ]),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              ref: "table",
              attrs: {
                multiple: "",
                pagination: "",
                "max-items": _vm.itemsPerPage,
                search: "",
                data: _vm.users
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return [
                      _c(
                        "tbody",
                        _vm._l(data, function(tr, indextr) {
                          return _c(
                            "vs-tr",
                            { key: indextr, attrs: { data: tr } },
                            [
                              _c("vs-td", [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "product-name font-medium truncate"
                                  },
                                  [_vm._v(_vm._s(tr.first_name))]
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-category" }, [
                                  _vm._v(_vm._s(tr.last_name))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-category" }, [
                                  _vm._v(_vm._s(tr.email))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-category" }, [
                                  _vm._v(_vm._s(tr.phone))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-price" }, [
                                  _vm._v(_vm._s(tr.mobile))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("vs-td", [
                                _c("p", { staticClass: "product-price" }, [
                                  _vm._v(
                                    _vm._s(
                                      tr.company != null
                                        ? tr.company.company_name
                                        : _vm.$t("noCompany")
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "vs-td",
                                { staticClass: "whitespace-no-wrap" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "ml-2",
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-5 h-5 hover:text-primary stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.editData(tr)
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    staticClass: "ml-2",
                                    attrs: {
                                      icon: "TrashIcon",
                                      svgClasses:
                                        "w-5 h-5 hover:text-danger stroke-current"
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.deleteData(tr.id)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap-reverse items-center data-list-btn-container"
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
                          on: { click: _vm.addNewData }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "ml-2 text-base text-primary" },
                            [_vm._v(_vm._s(_vm.$t("addNew")))]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
                      attrs: { "vs-trigger-click": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                        },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(
                              _vm._s(
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.users.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.users.length
                                ) +
                                " of " +
                                _vm._s(_vm.queriedItems)
                            )
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon: "ChevronDownIcon",
                              svgClasses: "h-4 w-4"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
                                }
                              }
                            },
                            [_c("span", [_vm._v("10")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "name" } }, [
                    _vm._v(_vm._s(_vm.$t("firstName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "alias" } }, [
                    _vm._v(_vm._s(_vm.$t("lastName")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "ruc" } }, [
                    _vm._v(_vm._s(_vm.$t("email")))
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("phone")))]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("mobile")))]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v(_vm._s(_vm.$t("company")))]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Action")])
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "vs-sidebar",
    {
      staticClass: "add-new-data-sidebar items-no-padding",
      attrs: {
        "click-not-close": "",
        "position-right": "",
        parent: "body",
        "default-index": "1",
        color: "primary",
        spacer: ""
      },
      model: {
        value: _vm.isSidebarActiveLocal,
        callback: function($$v) {
          _vm.isSidebarActiveLocal = $$v
        },
        expression: "isSidebarActiveLocal"
      }
    },
    [
      _c(
        "div",
        { staticClass: "mt-6 flex items-center justify-between px-6" },
        [
          _c("h4", [
            _vm._v(
              _vm._s(
                Object.entries(this.data).length === 0
                  ? _vm.$t("newContact")
                  : _vm.$t("updateContact")
              )
            )
          ]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "cursor-pointer",
            attrs: { icon: "XIcon" },
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.isSidebarActiveLocal = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { staticClass: "mb-0" }),
      _vm._v(" "),
      _c(
        "VuePerfectScrollbar",
        {
          key: _vm.$vs.rtl,
          staticClass: "scroll-area--data-list-add-new",
          attrs: { settings: _vm.settings }
        },
        [
          _c(
            "div",
            { staticClass: "p-6" },
            [
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("firstName"), name: "first_name" },
                model: {
                  value: _vm.first_name,
                  callback: function($$v) {
                    _vm.first_name = $$v
                  },
                  expression: "first_name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("first_name"),
                      expression: "errors.has('first_name')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("first_name")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("lastName"), name: "last_name" },
                model: {
                  value: _vm.last_name,
                  callback: function($$v) {
                    _vm.last_name = $$v
                  },
                  expression: "last_name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("last_name"),
                      expression: "errors.has('last_name')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("last_name")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("email"), name: "email" },
                model: {
                  value: _vm.email,
                  callback: function($$v) {
                    _vm.email = $$v
                  },
                  expression: "email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("phone"), name: "phone" },
                model: {
                  value: _vm.phone,
                  callback: function($$v) {
                    _vm.phone = $$v
                  },
                  expression: "phone"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("phone"),
                      expression: "errors.has('phone')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("phone")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("mobile"), name: "mobile" },
                model: {
                  value: _vm.mobile,
                  callback: function($$v) {
                    _vm.mobile = $$v
                  },
                  expression: "mobile"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("mobile"),
                      expression: "errors.has('mobile')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("mobile")))]
              ),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-5 w-full",
                attrs: { label: _vm.$t("position"), name: "position" },
                model: {
                  value: _vm.position,
                  callback: function($$v) {
                    _vm.position = $$v
                  },
                  expression: "position"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("position"),
                      expression: "errors.has('position')"
                    }
                  ],
                  staticClass: "text-danger text-sm"
                },
                [_vm._v(_vm._s(_vm.errors.first("position")))]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "flex flex-wrap items-center p-6",
          attrs: { slot: "footer" },
          slot: "footer"
        },
        [
          _c(
            "vs-button",
            {
              staticClass: "mr-6",
              attrs: { disabled: !_vm.isFormValid },
              on: { click: _vm.submitData }
            },
            [_vm._v(_vm._s(_vm.$t("save")))]
          ),
          _vm._v(" "),
          _c(
            "vs-button",
            {
              attrs: { type: "border", color: "danger" },
              on: {
                click: function($event) {
                  _vm.isSidebarActiveLocal = false
                }
              }
            },
            [_vm._v(_vm._s(_vm.$t("cancel")))]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/companies/CompanyConfigurations.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyConfigurations.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyConfigurations_vue_vue_type_template_id_a7ddf4a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8& */ "./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8&");
/* harmony import */ var _CompanyConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyConfigurations.vue?vue&type=script&lang=js& */ "./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyConfigurations_vue_vue_type_template_id_a7ddf4a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyConfigurations_vue_vue_type_template_id_a7ddf4a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/companies/CompanyConfigurations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyConfigurations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyConfigurations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyConfigurations_vue_vue_type_template_id_a7ddf4a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyConfigurations.vue?vue&type=template&id=a7ddf4a8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyConfigurations_vue_vue_type_template_id_a7ddf4a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyConfigurations_vue_vue_type_template_id_a7ddf4a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/companies/CompanyContact.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyContact.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyContact_vue_vue_type_template_id_42fcbb41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyContact.vue?vue&type=template&id=42fcbb41& */ "./resources/js/src/views/companies/CompanyContact.vue?vue&type=template&id=42fcbb41&");
/* harmony import */ var _CompanyContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyContact.vue?vue&type=script&lang=js& */ "./resources/js/src/views/companies/CompanyContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyContact_vue_vue_type_template_id_42fcbb41___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyContact_vue_vue_type_template_id_42fcbb41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/companies/CompanyContact.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyContact.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyContact.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyContact.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyContact.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyContact_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyContact.vue?vue&type=template&id=42fcbb41&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyContact.vue?vue&type=template&id=42fcbb41& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyContact_vue_vue_type_template_id_42fcbb41___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyContact.vue?vue&type=template&id=42fcbb41& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyContact.vue?vue&type=template&id=42fcbb41&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyContact_vue_vue_type_template_id_42fcbb41___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyContact_vue_vue_type_template_id_42fcbb41___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/companies/CompanyDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyDetail_vue_vue_type_template_id_612710c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyDetail.vue?vue&type=template&id=612710c0& */ "./resources/js/src/views/companies/CompanyDetail.vue?vue&type=template&id=612710c0&");
/* harmony import */ var _CompanyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/companies/CompanyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyDetail.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyDetail_vue_vue_type_template_id_612710c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyDetail_vue_vue_type_template_id_612710c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/companies/CompanyDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyDetail.vue?vue&type=template&id=612710c0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyDetail.vue?vue&type=template&id=612710c0& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_template_id_612710c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyDetail.vue?vue&type=template&id=612710c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyDetail.vue?vue&type=template&id=612710c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_template_id_612710c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyDetail_vue_vue_type_template_id_612710c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/companies/CompanyNotifications.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyNotifications.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyNotifications_vue_vue_type_template_id_0c55856e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyNotifications.vue?vue&type=template&id=0c55856e& */ "./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=template&id=0c55856e&");
/* harmony import */ var _CompanyNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyNotifications.vue?vue&type=script&lang=js& */ "./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyNotifications_vue_vue_type_template_id_0c55856e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyNotifications_vue_vue_type_template_id_0c55856e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/companies/CompanyNotifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyNotifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyNotifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=template&id=0c55856e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=template&id=0c55856e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyNotifications_vue_vue_type_template_id_0c55856e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyNotifications.vue?vue&type=template&id=0c55856e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyNotifications.vue?vue&type=template&id=0c55856e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyNotifications_vue_vue_type_template_id_0c55856e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyNotifications_vue_vue_type_template_id_0c55856e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/companies/CompanyUsers.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyUsers.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyUsers_vue_vue_type_template_id_64aa7f69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyUsers.vue?vue&type=template&id=64aa7f69& */ "./resources/js/src/views/companies/CompanyUsers.vue?vue&type=template&id=64aa7f69&");
/* harmony import */ var _CompanyUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyUsers.vue?vue&type=script&lang=js& */ "./resources/js/src/views/companies/CompanyUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyUsers_vue_vue_type_template_id_64aa7f69___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyUsers_vue_vue_type_template_id_64aa7f69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/companies/CompanyUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyUsers.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyUsers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/companies/CompanyUsers.vue?vue&type=template&id=64aa7f69&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/companies/CompanyUsers.vue?vue&type=template&id=64aa7f69& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUsers_vue_vue_type_template_id_64aa7f69___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyUsers.vue?vue&type=template&id=64aa7f69& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/companies/CompanyUsers.vue?vue&type=template&id=64aa7f69&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUsers_vue_vue_type_template_id_64aa7f69___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyUsers_vue_vue_type_template_id_64aa7f69___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/contacts/ContactSidebar.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/contacts/ContactSidebar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContactSidebar_vue_vue_type_template_id_226ebf44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true& */ "./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true&");
/* harmony import */ var _ContactSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true& */ "./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ContactSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContactSidebar_vue_vue_type_template_id_226ebf44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContactSidebar_vue_vue_type_template_id_226ebf44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "226ebf44",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/contacts/ContactSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=style&index=0&id=226ebf44&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_style_index_0_id_226ebf44_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_template_id_226ebf44_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/contacts/ContactSidebar.vue?vue&type=template&id=226ebf44&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_template_id_226ebf44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContactSidebar_vue_vue_type_template_id_226ebf44_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);