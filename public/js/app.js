(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/progress */ "./node_modules/@inertiajs/progress/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");





var element = document.getElementById("app");
(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__.App, {
  initialPage: JSON.parse(element.dataset.page),
  resolveComponent: function resolveComponent(name) {
    return __webpack_require__("./resources/js/Pages lazy recursive ^\\.\\/.*$")("./".concat(name)).then(function (module) {
      return module["default"];
    });
  }
}), element);
_inertiajs_progress__WEBPACK_IMPORTED_MODULE_2__.InertiaProgress.init({
  color: "#4B5563"
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

window.io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
window.Echo = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: "socket.io",
  host: window.location.hostname + ":6001"
});

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./resources/js/Pages lazy recursive ^\\.\\/.*$":
/*!************************************************************!*\
  !*** ./resources/js/Pages/ lazy ^\.\/.*$ namespace object ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./API/ApiTokenManager": [
		"./resources/js/Pages/API/ApiTokenManager.jsx",
		"/js/vendor",
		"resources_js_Pages_API_ApiTokenManager_jsx"
	],
	"./API/ApiTokenManager.jsx": [
		"./resources/js/Pages/API/ApiTokenManager.jsx",
		"/js/vendor",
		"resources_js_Pages_API_ApiTokenManager_jsx"
	],
	"./API/Index": [
		"./resources/js/Pages/API/Index.jsx",
		"/js/vendor",
		"resources_js_Pages_API_Index_jsx"
	],
	"./API/Index.jsx": [
		"./resources/js/Pages/API/Index.jsx",
		"/js/vendor",
		"resources_js_Pages_API_Index_jsx"
	],
	"./Auth/ConfirmPassword": [
		"./resources/js/Pages/Auth/ConfirmPassword.jsx",
		"resources_js_Pages_Auth_ConfirmPassword_jsx"
	],
	"./Auth/ConfirmPassword.jsx": [
		"./resources/js/Pages/Auth/ConfirmPassword.jsx",
		"resources_js_Pages_Auth_ConfirmPassword_jsx"
	],
	"./Auth/ForgotPassword": [
		"./resources/js/Pages/Auth/ForgotPassword.jsx",
		"resources_js_Pages_Auth_ForgotPassword_jsx"
	],
	"./Auth/ForgotPassword.jsx": [
		"./resources/js/Pages/Auth/ForgotPassword.jsx",
		"resources_js_Pages_Auth_ForgotPassword_jsx"
	],
	"./Auth/Login": [
		"./resources/js/Pages/Auth/Login.jsx",
		"resources_js_Pages_Auth_Login_jsx"
	],
	"./Auth/Login.jsx": [
		"./resources/js/Pages/Auth/Login.jsx",
		"resources_js_Pages_Auth_Login_jsx"
	],
	"./Auth/Register": [
		"./resources/js/Pages/Auth/Register.jsx",
		"resources_js_Pages_Auth_Register_jsx"
	],
	"./Auth/Register.jsx": [
		"./resources/js/Pages/Auth/Register.jsx",
		"resources_js_Pages_Auth_Register_jsx"
	],
	"./Auth/ResetPassword": [
		"./resources/js/Pages/Auth/ResetPassword.jsx",
		"resources_js_Pages_Auth_ResetPassword_jsx"
	],
	"./Auth/ResetPassword.jsx": [
		"./resources/js/Pages/Auth/ResetPassword.jsx",
		"resources_js_Pages_Auth_ResetPassword_jsx"
	],
	"./Auth/TwoFactorChallenge": [
		"./resources/js/Pages/Auth/TwoFactorChallenge.jsx",
		"resources_js_Pages_Auth_TwoFactorChallenge_jsx"
	],
	"./Auth/TwoFactorChallenge.jsx": [
		"./resources/js/Pages/Auth/TwoFactorChallenge.jsx",
		"resources_js_Pages_Auth_TwoFactorChallenge_jsx"
	],
	"./Auth/VerifyEmail": [
		"./resources/js/Pages/Auth/VerifyEmail.jsx",
		"resources_js_Pages_Auth_VerifyEmail_jsx"
	],
	"./Auth/VerifyEmail.jsx": [
		"./resources/js/Pages/Auth/VerifyEmail.jsx",
		"resources_js_Pages_Auth_VerifyEmail_jsx"
	],
	"./Dashboard": [
		"./resources/js/Pages/Dashboard.jsx",
		"/js/vendor",
		"resources_js_Pages_Dashboard_jsx"
	],
	"./Dashboard.jsx": [
		"./resources/js/Pages/Dashboard.jsx",
		"/js/vendor",
		"resources_js_Pages_Dashboard_jsx"
	],
	"./Messanger": [
		"./resources/js/Pages/Messanger.jsx",
		"/js/vendor",
		"resources_js_Pages_Messanger_jsx"
	],
	"./Messanger.jsx": [
		"./resources/js/Pages/Messanger.jsx",
		"/js/vendor",
		"resources_js_Pages_Messanger_jsx"
	],
	"./PrivacyPolicy": [
		"./resources/js/Pages/PrivacyPolicy.jsx",
		"resources_js_Pages_PrivacyPolicy_jsx"
	],
	"./PrivacyPolicy.jsx": [
		"./resources/js/Pages/PrivacyPolicy.jsx",
		"resources_js_Pages_PrivacyPolicy_jsx"
	],
	"./Profile/DeleteUserForm": [
		"./resources/js/Pages/Profile/DeleteUserForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_DeleteUserForm_jsx"
	],
	"./Profile/DeleteUserForm.jsx": [
		"./resources/js/Pages/Profile/DeleteUserForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_DeleteUserForm_jsx"
	],
	"./Profile/LogoutOtherBrowserSessionsForm": [
		"./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_LogoutOtherBrowserSessionsForm_jsx"
	],
	"./Profile/LogoutOtherBrowserSessionsForm.jsx": [
		"./resources/js/Pages/Profile/LogoutOtherBrowserSessionsForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_LogoutOtherBrowserSessionsForm_jsx"
	],
	"./Profile/Show": [
		"./resources/js/Pages/Profile/Show.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_Show_jsx"
	],
	"./Profile/Show.jsx": [
		"./resources/js/Pages/Profile/Show.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_Show_jsx"
	],
	"./Profile/TwoFactorAuthenticationForm": [
		"./resources/js/Pages/Profile/TwoFactorAuthenticationForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_TwoFactorAuthenticationForm_jsx"
	],
	"./Profile/TwoFactorAuthenticationForm.jsx": [
		"./resources/js/Pages/Profile/TwoFactorAuthenticationForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_TwoFactorAuthenticationForm_jsx"
	],
	"./Profile/UpdatePasswordForm": [
		"./resources/js/Pages/Profile/UpdatePasswordForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_UpdatePasswordForm_jsx"
	],
	"./Profile/UpdatePasswordForm.jsx": [
		"./resources/js/Pages/Profile/UpdatePasswordForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_UpdatePasswordForm_jsx"
	],
	"./Profile/UpdateProfileInformationForm": [
		"./resources/js/Pages/Profile/UpdateProfileInformationForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_UpdateProfileInformationForm_jsx"
	],
	"./Profile/UpdateProfileInformationForm.jsx": [
		"./resources/js/Pages/Profile/UpdateProfileInformationForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Profile_UpdateProfileInformationForm_jsx"
	],
	"./Teams/Create": [
		"./resources/js/Pages/Teams/Create.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_Create_jsx"
	],
	"./Teams/Create.jsx": [
		"./resources/js/Pages/Teams/Create.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_Create_jsx"
	],
	"./Teams/CreateTeamForm": [
		"./resources/js/Pages/Teams/CreateTeamForm.jsx",
		"resources_js_Pages_Teams_CreateTeamForm_jsx"
	],
	"./Teams/CreateTeamForm.jsx": [
		"./resources/js/Pages/Teams/CreateTeamForm.jsx",
		"resources_js_Pages_Teams_CreateTeamForm_jsx"
	],
	"./Teams/DeleteTeamForm": [
		"./resources/js/Pages/Teams/DeleteTeamForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_DeleteTeamForm_jsx"
	],
	"./Teams/DeleteTeamForm.jsx": [
		"./resources/js/Pages/Teams/DeleteTeamForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_DeleteTeamForm_jsx"
	],
	"./Teams/Show": [
		"./resources/js/Pages/Teams/Show.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_Show_jsx"
	],
	"./Teams/Show.jsx": [
		"./resources/js/Pages/Teams/Show.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_Show_jsx"
	],
	"./Teams/TeamMemberManager": [
		"./resources/js/Pages/Teams/TeamMemberManager.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_TeamMemberManager_jsx"
	],
	"./Teams/TeamMemberManager.jsx": [
		"./resources/js/Pages/Teams/TeamMemberManager.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_TeamMemberManager_jsx"
	],
	"./Teams/UpdateTeamNameForm": [
		"./resources/js/Pages/Teams/UpdateTeamNameForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_UpdateTeamNameForm_jsx"
	],
	"./Teams/UpdateTeamNameForm.jsx": [
		"./resources/js/Pages/Teams/UpdateTeamNameForm.jsx",
		"/js/vendor",
		"resources_js_Pages_Teams_UpdateTeamNameForm_jsx"
	],
	"./TermsOfService": [
		"./resources/js/Pages/TermsOfService.jsx",
		"resources_js_Pages_TermsOfService_jsx"
	],
	"./TermsOfService.jsx": [
		"./resources/js/Pages/TermsOfService.jsx",
		"resources_js_Pages_TermsOfService_jsx"
	],
	"./Welcome": [
		"./resources/js/Pages/Welcome.jsx",
		"resources_js_Pages_Welcome_jsx"
	],
	"./Welcome.jsx": [
		"./resources/js/Pages/Welcome.jsx",
		"resources_js_Pages_Welcome_jsx"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./resources/js/Pages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "?ac64":
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.js"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);