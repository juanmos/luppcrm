(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 // For custom error message


var dict = {
  custom: {
    first_name: {
      required: "First name is required",
      alpha_spaces: "First name may only contain alphabetic characters"
    },
    last_name: {
      required: "Last name is required",
      alpha_spaces: "Last name may only contain alphabetic characters"
    },
    email: {
      required: "Email is required",
      email: "Please enter valid email"
    },
    identification: {
      required: "Identification is required",
      integer: "Please enter only digits",
      min: "Must be at least 10 digits"
    },
    phone: {
      required: "Email is required",
      integer: "Please enter only digits",
      min: "Must be at least 6 digits"
    },
    mobile: {
      required: "Email is required",
      integer: "Please enter only digits",
      min: "Must be at least 6 digits"
    },
    compnay_name: {
      required: "Company name is required",
      alpha: "Company name may only contain alphabetic characters"
    },
    compnay_alias: {
      required: "Company alias is required",
      alpha: "Company alias may only contain alphabetic characters"
    },
    compnay_phone: {
      required: "Company phone is required",
      alpha: "Company phone may only contain alphabetic characters"
    },
    compnay_address: {
      required: "Company address is required",
      alpha: "Company address may only contain alphabetic characters"
    },
    proposal_title: {
      required: "Proposal title name is required",
      alpha: "Proposal title may only contain alphabetic characters"
    },
    event_name: {
      required: "Event name is required",
      alpha: "Event name may only contain alphabetic characters"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_3__["Validator"].localize("en", dict);
vee_validate__WEBPACK_IMPORTED_MODULE_3__["Validator"].localize("es", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      company: null,
      config: null,
      proposalTitle: "",
      jobTitle: "",
      textarea: "",
      eventName: "",
      eventLocation: "san-francisco",
      status: "plannning" // cityOptions: [
      //   { text: "New York", value: "new-york" },
      //   { text: "Chicago", value: "chicago" },
      //   { text: "San Francisco", value: "san-francisco" },
      //   { text: "Boston", value: "boston" }
      // ],
      // statusOptions: [
      //   { text: "Plannning", value: "plannning" },
      //   { text: "In Progress", value: "in progress" },
      //   { text: "Finished", value: "finished" }
      // ],
      // LocationOptions: [
      //   { text: "New York", value: "new-york" },
      //   { text: "Chicago", value: "chicago" },
      //   { text: "San Francisco", value: "san-francisco" },
      //   { text: "Boston", value: "boston" }
      // ]

    };
  },
  created: function created() {
    this.company = this.$store.state.company.company;
    this.config = this.$store.state.configuration.configuration; // if(this.$store.state.AppActiveUser.identification.length>9 &&)
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(["userData"])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["updateProfile"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("company", ["saveCompanyData"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])("configuration", ["saveConfigData"]), {
    validateStep1: function validateStep1() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll("step-1").then(function (result) {
          if (result) {
            _this.updateProfile(_this.userData);

            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll("step-2").then(function (result) {
          if (result) {
            _this2.saveCompanyData(_this2.company);

            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll("step-3").then(function (result) {
          if (result) {
            // this.saveConfigData(this.config);
            _this3.$router.replace("/admin/home");

            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    }
  }),
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_0__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/User.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/wizard/User.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationWizard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationWizard.vue */ "./resources/js/src/views/wizard/RegistrationWizard.vue");
//
//
//
//
//
//
//
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
    RegistrationWizard: _RegistrationWizard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=template&id=8d1f99a4&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=template&id=8d1f99a4& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "form-wizard",
    {
      ref: "formWizard",
      attrs: {
        color: "rgba(var(--vs-primary), 1)",
        errorColor: "rgba(var(--vs-danger), 1)",
        title: null,
        subtitle: null,
        finishButtonText: "Submit"
      }
    },
    [
      _c(
        "tab-content",
        {
          staticClass: "mb-5",
          attrs: {
            title: _vm.$t("userData"),
            icon: "feather icon-user",
            "before-change": _vm.validateStep1
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha_spaces",
                        expression: "'required|alpha_spaces'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: { label: _vm.$t("firstName"), name: "first_name" },
                    model: {
                      value: _vm.userData.first_name,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "first_name", $$v)
                      },
                      expression: "userData.first_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-1.first_name")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha_spaces",
                        expression: "'required|alpha_spaces'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: { label: _vm.$t("lastName"), name: "last_name" },
                    model: {
                      value: _vm.userData.last_name,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "last_name", $$v)
                      },
                      expression: "userData.last_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-1.last_name")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: {
                      type: "email",
                      label: _vm.$t("email"),
                      name: "email",
                      disabled: "disabled"
                    },
                    model: {
                      value: _vm.userData.email,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "email", $$v)
                      },
                      expression: "userData.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-1.email")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|integer|min:10",
                        expression: "'required|integer|min:10'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      type: "text",
                      label: _vm.$t("identification"),
                      name: "identification"
                    },
                    model: {
                      value: _vm.userData.identification,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "identification", $$v)
                      },
                      expression: "userData.identification"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-1.identification")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|integer|min:6",
                        expression: "'required|integer|min:6'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      type: "text",
                      label: _vm.$t("phone"),
                      name: "phone"
                    },
                    model: {
                      value: _vm.userData.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "phone", $$v)
                      },
                      expression: "userData.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-1.phone")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|integer|min:6",
                        expression: "'required|integer|min:6'"
                      }
                    ],
                    staticClass: "w-full",
                    attrs: {
                      type: "text",
                      label: _vm.$t("mobile"),
                      name: "mobile"
                    },
                    model: {
                      value: _vm.userData.mobile,
                      callback: function($$v) {
                        _vm.$set(_vm.userData, "mobile", $$v)
                      },
                      expression: "userData.mobile"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-1.mobile")))
                  ])
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "tab-content",
        {
          staticClass: "mb-5",
          attrs: {
            title: _vm.$t("companyInfo"),
            icon: "feather icon-briefcase",
            "before-change": _vm.validateStep2
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha_spaces",
                        expression: "'required|alpha_spaces'"
                      }
                    ],
                    staticClass: "w-full mt-4",
                    attrs: {
                      label: _vm.$t("companyName"),
                      name: "company_name"
                    },
                    model: {
                      value: _vm.company.company_name,
                      callback: function($$v) {
                        _vm.$set(_vm.company, "company_name", $$v)
                      },
                      expression: "company.company_name"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.company_name")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|alpha_spaces",
                        expression: "'required|alpha_spaces'"
                      }
                    ],
                    staticClass: "w-full mt-4",
                    attrs: {
                      label: _vm.$t("companyAlias"),
                      name: "company_alias"
                    },
                    model: {
                      value: _vm.company.company_alias,
                      callback: function($$v) {
                        _vm.$set(_vm.company, "company_alias", $$v)
                      },
                      expression: "company.company_alias"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.company_alias")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|integer|min:6",
                        expression: "'required|integer|min:6'"
                      }
                    ],
                    staticClass: "w-full mt-4",
                    attrs: {
                      label: _vm.$t("companyPhone"),
                      name: "company_phone"
                    },
                    model: {
                      value: _vm.company.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.company, "phone", $$v)
                      },
                      expression: "company.phone"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.company_phone")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full" },
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
                    staticClass: "w-full mt-4",
                    attrs: {
                      label: _vm.$t("companyAddress"),
                      name: "company_address"
                    },
                    model: {
                      value: _vm.company.address,
                      callback: function($$v) {
                        _vm.$set(_vm.company, "address", $$v)
                      },
                      expression: "company.address"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.company_address")))
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/2 w-full" },
                [
                  _c("vs-input", {
                    directives: [
                      {
                        name: "validate",
                        rawName: "v-validate",
                        value: "required|integer|min:10",
                        expression: "'required|integer|min:10'"
                      }
                    ],
                    staticClass: "w-full mt-4",
                    attrs: {
                      label: _vm.$t("identification"),
                      name: "identification"
                    },
                    model: {
                      value: _vm.company.ruc,
                      callback: function($$v) {
                        _vm.$set(_vm.company, "ruc", $$v)
                      },
                      expression: "company.ruc"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(_vm._s(_vm.errors.first("step-2.identification")))
                  ])
                ],
                1
              )
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "tab-content",
        {
          staticClass: "mb-5",
          attrs: {
            title: _vm.$t("invoiceConfig"),
            icon: "feather icon-file",
            "before-change": _vm.validateStep3
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c("h3", { staticClass: "vx-col w-full" }, [
                _vm._v("Fill the information to start making invoices")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full mt-5",
                    attrs: {
                      label: _vm.$t("establishment"),
                      name: "establishment"
                    },
                    model: {
                      value: _vm.config.establishment,
                      callback: function($$v) {
                        _vm.$set(_vm.config, "establishment", $$v)
                      },
                      expression: "config.establishment"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full mt-5",
                    attrs: { label: _vm.$t("salePoint"), name: "salePoint" },
                    model: {
                      value: _vm.config.salePoint,
                      callback: function($$v) {
                        _vm.$set(_vm.config, "salePoint", $$v)
                      },
                      expression: "config.salePoint"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 w-full" },
                [
                  _c("vs-input", {
                    staticClass: "w-full mt-5",
                    attrs: { label: _vm.$t("secuence"), name: "secuence" },
                    model: {
                      value: _vm.config.secuence,
                      callback: function($$v) {
                        _vm.$set(_vm.config, "secuence", $$v)
                      },
                      expression: "config.secuence"
                    }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "vx-col md:w-1/2 w-full md:mt-8" }, [
                _c("div", { staticClass: "demo-alignment" }, [
                  _c("span", [_vm._v(_vm._s(_vm.$t("modeInvoicing")))]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "flex" },
                    [
                      _c(
                        "vs-radio",
                        {
                          attrs: { "vs-value": "2" },
                          model: {
                            value: _vm.config.mode,
                            callback: function($$v) {
                              _vm.$set(_vm.config, "mode", $$v)
                            },
                            expression: "config.mode"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("modeProduction")))]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-radio",
                        {
                          attrs: { "vs-vaule": "1" },
                          model: {
                            value: _vm.config.mode,
                            callback: function($$v) {
                              _vm.$set(_vm.config, "mode", $$v)
                            },
                            expression: "config.mode"
                          }
                        },
                        [_vm._v(_vm._s(_vm.$t("modeTest")))]
                      )
                    ],
                    1
                  )
                ])
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/User.vue?vue&type=template&id=5486c116&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/wizard/User.vue?vue&type=template&id=5486c116& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    {
      staticClass:
        "h-screen flex w-full bg-img vx-row no-gutter items-center justify-center",
      attrs: { id: "page-login" }
    },
    [
      _c(
        "div",
        {
          staticClass: "vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4"
        },
        [
          _c("vx-card", [
            _c(
              "div",
              { attrs: { id: "extra-component-form-wizard-demo" } },
              [_c("registration-wizard")],
              1
            )
          ])
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/wizard/RegistrationWizard.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/wizard/RegistrationWizard.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationWizard_vue_vue_type_template_id_8d1f99a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationWizard.vue?vue&type=template&id=8d1f99a4& */ "./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=template&id=8d1f99a4&");
/* harmony import */ var _RegistrationWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationWizard.vue?vue&type=script&lang=js& */ "./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrationWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrationWizard_vue_vue_type_template_id_8d1f99a4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrationWizard_vue_vue_type_template_id_8d1f99a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/wizard/RegistrationWizard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationWizard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationWizard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=template&id=8d1f99a4&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=template&id=8d1f99a4& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationWizard_vue_vue_type_template_id_8d1f99a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationWizard.vue?vue&type=template&id=8d1f99a4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/RegistrationWizard.vue?vue&type=template&id=8d1f99a4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationWizard_vue_vue_type_template_id_8d1f99a4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationWizard_vue_vue_type_template_id_8d1f99a4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/wizard/User.vue":
/*!************************************************!*\
  !*** ./resources/js/src/views/wizard/User.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_5486c116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=5486c116& */ "./resources/js/src/views/wizard/User.vue?vue&type=template&id=5486c116&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/src/views/wizard/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_5486c116___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_5486c116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/wizard/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/wizard/User.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/wizard/User.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/wizard/User.vue?vue&type=template&id=5486c116&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/wizard/User.vue?vue&type=template&id=5486c116& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5486c116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=5486c116& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/wizard/User.vue?vue&type=template&id=5486c116&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5486c116___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_5486c116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);