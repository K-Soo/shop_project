(function() {
var exports = {};
exports.id = 2349;
exports.ids = [2349];
exports.modules = {

/***/ 8023:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModifyPage; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var containers_MainContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9490);
/* harmony import */ var components_Auth_Register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6116);
/* harmony import */ var context_RegisterProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7858);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2948);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9722);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8740);
/* harmony import */ var constants_path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(643);
/* harmony import */ var components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7777);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);














function ModifyPage(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
        children: "\uC96C\uC5BC\uB9AC | \uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: "\uD68C\uC6D0\uC815\uBCF4 \uC218\uC815"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context_RegisterProvider__WEBPACK_IMPORTED_MODULE_5__/* .default */ .ZP, {
      value: props,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(containers_MainContainer__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Common_Breadcrumb__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, {
          children: [constants_path__WEBPACK_IMPORTED_MODULE_9__/* .default.MAIN */ .Z.MAIN, constants_path__WEBPACK_IMPORTED_MODULE_9__/* .default.USERS_MODIFY */ .Z.USERS_MODIFY].map(({
            path,
            tag
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_11__.default, {
            href: path,
            children: tag
          }, path))
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Auth_Register__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {})]
      })
    })]
  });
}
const getServerSideProps = async context => {
  const {
    access_token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_6___default()(context);
  const strToken = access_token && access_token.split('Bearer ')[1];
  const decodedJwt = access_token && jsonwebtoken__WEBPACK_IMPORTED_MODULE_7___default().decode(strToken);

  if (access_token) {
    try {
      const userDetail = await api__WEBPACK_IMPORTED_MODULE_8__/* .Get.UserInfo */ .dX.UserInfo(decodedJwt.id);
      return {
        props: {
          userDetail
        }
      };
    } catch (error) {
      throw error;
    }
  } else {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false
      }
    };
  }
};

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 4584:
/***/ (function(module) {

"use strict";
module.exports = require("immer");;

/***/ }),

/***/ 6155:
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ 9722:
/***/ (function(module) {

"use strict";
module.exports = require("jsonwebtoken");;

/***/ }),

/***/ 2948:
/***/ (function(module) {

"use strict";
module.exports = require("next-cookies");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3903:
/***/ (function(module) {

"use strict";
module.exports = require("react-daum-postcode");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9914:
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,8703,6930,3803,643,8740,8761,693,3493,6908,8847,1098,9970,8116,9468,6015,6116], function() { return __webpack_exec__(8023); });
module.exports = __webpack_exports__;

})();