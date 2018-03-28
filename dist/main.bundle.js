webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Friends is a social app.</h2>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Friends - A Social App</h1>\r\n<div class=\"nav-container\">\r\n    <nav class=\"navbar navbar-expand-lg navbar-light bg-color\">\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <ul class=\"navbar-nav\">\r\n                <li class=\"nav-item\" *ngIf=\"authenticationService?.isAuthenticated()\">\r\n                    <a class=\"nav-link\" routerLink=\"/profile\" routerLinkActive=\"active\">My Profile</a>\r\n                </li>\r\n                <li class=\"nav-item\" *ngIf=\"authenticationService?.isAuthenticated()\">\r\n                    <a class=\"nav-link\" routerLink=\"/friends\" routerLinkActive=\"active\">Friends</a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" routerLink=\"/about\" routerLinkActive=\"active\">About</a>\r\n                </li>\r\n                <li class=\"nav-item\" active *ngIf=\"!authenticationService?.isAuthenticated()\">\r\n                    <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Login</a>\r\n                </li>\r\n            </ul>\r\n            <div class=\"form-container\">\r\n                <form class=\"form-inline my-2 my-lg-0\">\r\n                    <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search friends...\" aria-label=\"Search\">\r\n                    <button class=\"btn btn-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </nav>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
        this.authenticationService = authService;
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__ = __webpack_require__("../../../../../src/app/authentication/authentication.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments_environment__ = __webpack_require__("../../../../../src/app/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__chat_chat_module__ = __webpack_require__("../../../../../src/app/chat/chat.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_10__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                //初始化Firebase
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["c" /* RouterModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_4__authentication_authentication_module__["a" /* AuthenticationModule */],
                __WEBPACK_IMPORTED_MODULE_15__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_16__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_17__chat_chat_module__["a" /* ChatModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuth */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ROUTES = [
    {
        path: 'about', component: __WEBPACK_IMPORTED_MODULE_2__about_about_component__["a" /* AboutComponent */], pathMatch: 'full'
    },
    { path: '**', redirectTo: 'page-not-found' },
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(ROUTES)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_routing__ = __webpack_require__("../../../../../src/app/authentication/authentication.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/authentication/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_error_alert_error_alert_component__ = __webpack_require__("../../../../../src/app/shared/error-alert/error-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_password_equal_validator_directive__ = __webpack_require__("../../../../../src/app/utils/password-equal-validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__authentication_routing__["a" /* AuthenticationRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_error_alert_error_alert_component__["a" /* ErrorAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_8__utils_password_equal_validator_directive__["a" /* PasswordEqualValidator */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_5__services_user_service__["a" /* UserService */]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/authentication.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__ = __webpack_require__("../../../../../src/app/authentication/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/authentication/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ROUTES = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__signup_signup_component__["a" /* SignupComponent */] }
];
/**
 * Authentication Routing Module
 */
var AuthenticationRouting = /** @class */ (function () {
    function AuthenticationRouting() {
    }
    AuthenticationRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AuthenticationRouting);
    return AuthenticationRouting;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3 container\">\r\n  <h2>Login</h2>\r\n<app-error-alert *ngIf=\"showError\" [errorMessage]=\"errorMessage\"></app-error-alert>\r\n  <form name=\"form\" (ngSubmit)=\"onLogin(loginFormData)\" \r\n  #loginFormData='ngForm'>\r\n      <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"email\" \r\n          (ngModel)=\"email\" #email=\"ngModel\"\r\n                 required\r\n                 pattern=\"^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$\"\r\n                 id=\"email\"/>\r\n               <div [hidden]=\"email.valid || email.pristine\"\r\n               class=\"alert alert-danger\">\r\n              <div [hidden]=\"!email.hasError('required')\">Email is \r\n               required</div>\r\n              <div [hidden]=\"!email.hasError('pattern')\">Email format \r\n               should be\r\n                  <small><b>codingchum@gmail.com</b></small>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" \r\n           (ngModel)=\"password\" #password=\"ngModel\"\r\n                 required id=\"password\"/>\r\n          <div [hidden]=\"password.valid || password.pristine\"\r\n               class=\"alert alert-danger\">\r\n              Password is required\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button type=\"submit\" id=\"login-btn\" class=\"btn btn-\r\n          success\" [disabled]=\"!loginFormData.form.valid\">\r\n          LOGIN</button>\r\n          <button routerLink=\"/signup\" data-tag=\"signup-\r\n           tag\" routerLinkActive=\"active\" \r\n           class=\"btn btn-success\">\r\n              SIGNUP\r\n          </button>\r\n      </div>\r\n  </form>\r\n  <button type=\"button\" data-tag=\"password-reset-tag\" class=\"btn btn-\r\n     info\" data-toggle=\"modal\" data-target=\"#password_reset\">\r\n     Reset Password\r\n    </button>\r\n</div>\r\n\r\n<div id=\"password_reset\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <form name=\"form\" (ngSubmit)=\"onReset(resetFormData)\" \r\n         #resetFormData='ngForm'>\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title\">Forgot Password?</h4>\r\n                  <button type=\"button\" class=\"close\" data-\r\n                   dismiss=\"modal\">&times;</button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p>Please enter your registered email to sent you  \r\n                      the password reset instructions.</p>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"reset_email\">Email</label>\r\n                        <input type=\"text\" class=\"form-control\" \r\n                         name=\"email\" (ngModel)=\"email\"              \r\n                         #email=\"ngModel\"\r\n                               required\r\n                               pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\r\n                               \\w+)*(\\.\\w{2,3})+$\"\r\n                               id=\"reset_email\"/>\r\n                    </div>\r\n                </div>\r\n                <div class=\"modal-footer form-group\">\r\n                    <button type=\"submit\" class=\"btn btn-default\" \r\n                     [disabled]=\"!resetFormData.form.valid\"\r\n                    >Reset\r\n                    </button>\r\n                    <button type=\"button\" class=\"btn btn-default\" data-\r\n                     dismiss=\"modal\">Close</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, authService, angularFireAuth) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.authService = authService;
        this.angularFireAuth = angularFireAuth;
        this.angularFireAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.getUserInfo(user.uid);
            }
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function (loginFormData) {
        var _this = this;
        this.authService.login(loginFormData.value.email, loginFormData.value.password).then(function (userInfo) {
            var uid = userInfo.uid;
            _this.getUserInfo(uid);
        }).catch(function (error) {
            _this.errorMessage = error.message;
            _this.showError = true;
        });
    };
    LoginComponent.prototype.navigateToUserProfile = function () {
        this.router.navigateByUrl('/profile');
    };
    LoginComponent.prototype.getUserInfo = function (uid) {
        var _this = this;
        this.userService.getUser(uid).subscribe(function (snapshot) {
            _this.user = snapshot;
            _this.userService.saveUser(_this.user);
            _this.navigateToUserProfile();
        });
    };
    LoginComponent.prototype.onReset = function (resetFormData) {
        var _this = this;
        this.authService.resetPassword(resetFormData.value.email).then(function () {
            alert('Reset instruction sent to your mail');
        }).catch(function (error) {
            _this.errorMessage = error.message;
            _this.showError = true;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n  <h2>Signup</h2>\r\n<app-error-alert *ngIf=\"showError\" [errorMessage]=\"errorMessage\">  \r\n</app-error-alert>\r\n  <form name=\"form\" (ngSubmit)=\"onSignup(signupFormData)\" \r\n   #signupFormData='ngForm'>\r\n      <div class=\"form-group\">\r\n          <label for=\"name\">Name</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"name\" \r\n           (ngModel)=\"name\" #name=\"ngModel\" required id=\"name\"/>\r\n          <div [hidden]=\"name.valid || name.pristine\"\r\n               class=\"alert alert-danger\">\r\n              Name is required\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"email\">Email</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"email\" \r\n           (ngModel)=\"email\" #email=\"ngModel\"\r\n                 required\r\n                 pattern=\"^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$\"\r\n                 id=\"email\"/>\r\n          <div [hidden]=\"email.valid || email.pristine\"\r\n               class=\"alert alert-danger\">\r\n              <div [hidden]=\"!email.hasError('required')\">Email is \r\n               required</div>\r\n              <div [hidden]=\"!email.hasError('pattern')\">Email format \r\n               should be\r\n                  <small><b>codingchum@gmail.com</b></small>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"password\">Password</label>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" \r\n          (ngModel)=\"password\" #password=\"ngModel\" required \r\n           id=\"password\"/>\r\n          <div [hidden]=\"password.valid || password.pristine\"\r\n               class=\"alert alert-danger\">\r\n              Password is required\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"name\">Retype Password</label>\r\n          <input type=\"password\" class=\"form-control\" \r\n           id=\"confirmPassword\"\r\n                 required\r\n                 passwordEqual=\"password\"\r\n                 (ngModel)=\"confirmPassword\" name=\"confirmPassword\"\r\n                 #confirmPassword=\"ngModel\">\r\n          <div [hidden]=\"confirmPassword.valid || \r\n          confirmPassword.pristine\"\r\n               class=\"alert alert-danger\">\r\n              Passwords did not match\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <label for=\"mobile\">Mobile</label>\r\n          <input type=\"text\" class=\"form-control\" name=\"mobile\" \r\n           (ngModel)=\"mobile\" #mobile=\"ngModel\"\r\n                 required\r\n                 pattern=\"[0-9]*\"\r\n                 minlength=\"10\"\r\n                 maxlength=\"10\"\r\n                 id=\"mobile\"/>\r\n          <div [hidden]=\"mobile.valid || mobile.pristine\"\r\n               class=\"alert alert-danger\">\r\n              <div [hidden]=\"!mobile.hasError('minlength')\">Mobile \r\n               should be 10 digit</div>\r\n              <div [hidden]=\"!mobile.hasError('required')\">Mobile is \r\n               required</div>\r\n              <div [hidden]=\"!mobile.hasError('pattern')\">Mobile  \r\n               number should be only numbers</div>\r\n          </div>\r\n      </div>\r\n      <div class=\"form-group\">\r\n          <button type=\"submit\" class=\"btn btn-success\" \r\n          [disabled]=\"!signupFormData.form.valid\">SIGNUP</button>\r\n          <a [routerLink]=\"['/login']\" class=\"btn btn-\r\n          link\">CANCEL</a>\r\n      </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    SignupComponent.prototype.onSignup = function (signupFormData) {
        var _this = this;
        this.authService.signup(signupFormData.value.email, signupFormData.value.password).then(function (userInfo) {
            // Register the new user
            var user = new __WEBPACK_IMPORTED_MODULE_1__services_user__["a" /* User */](signupFormData.value.email, signupFormData.value.name, signupFormData.value.mobile, userInfo.uid, 0, '');
            _this.writeNewUser(user);
        }).catch(function (error) {
            _this.showError = true;
            _this.errorMessage = error.message;
        });
    };
    SignupComponent.prototype.writeNewUser = function (user) {
        this.userService.addUser(user);
    };
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/authentication/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/authentication/signup/signup.component.sass")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-message-form/chat-message-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-message-form-main-container\">\r\n    <div class=\"chat-message-form-container\">\r\n        <input type=\"textarea\" placeholder=\"Type a message\" class=\"message-text\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"sendMessage()\">\r\n        <button (click)=\"sendMessage()\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">SEND</button>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat-message-form/chat-message-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-message-form-main-container .chat-message-form-container {\n  padding: 9px 50px;\n  margin-bottom: 14px;\n  background-color: #f7f7f9;\n  border: 1px solid #e1e1e8;\n  border-radius: 4px; }\n  .chat-message-form-main-container .chat-message-form-container .message-text {\n    display: block;\n    padding: 9.5px;\n    margin: 0 0 10px;\n    font-size: 13px;\n    line-height: 1.42857143;\n    color: #333;\n    word-break: break-all;\n    word-wrap: break-word;\n    background-color: #ffffff;\n    border: 1px solid #8BC34A;\n    border-radius: 4px;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-message-form/chat-message-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message__ = __webpack_require__("../../../../../src/app/services/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__ = __webpack_require__("../../../../../src/app/services/messaging.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatMessageFormComponent = /** @class */ (function () {
    function ChatMessageFormComponent(userService, messageService) {
        this.userService = userService;
        this.messageService = messageService;
    }
    ChatMessageFormComponent.prototype.ngOnInit = function () {
        this.uid = this.userService.getSavedUser().getValue().uid;
    };
    ChatMessageFormComponent.prototype.sendMessage = function () {
        var message = new __WEBPACK_IMPORTED_MODULE_2__services_message__["a" /* Message */](this.newMessage, this.uid, this.friendUid, Date.now());
        this.messageService.createNewMessage(message);
        this.newMessage = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChatMessageFormComponent.prototype, "friendUid", void 0);
    ChatMessageFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-message-form',
            styles: [__webpack_require__("../../../../../src/app/chat/chat-message-form/chat-message-form.component.scss")],
            template: __webpack_require__("../../../../../src/app/chat/chat-message-form/chat-message-form.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_messaging_service__["a" /* MessagingService */]])
    ], ChatMessageFormComponent);
    return ChatMessageFormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-message-list/chat-message-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-message-list-main-container\">\r\n    <div #scrollContainer class=\"message-list-container\" id=\"messages\">\r\n        <app-chat-message *ngFor=\"let message of messages;\" [message]=\"message\">\r\n        </app-chat-message>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat-message-list/chat-message-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-message-list-main-container #messages {\n  background-color: #F2F2F2 !important; }\n\n.chat-message-list-main-container .message-list-container {\n  position: relative;\n  padding: 15px 15px 15px;\n  border-color: #e5e5e5 #eee #eee;\n  border-style: solid;\n  border-width: 1px 0;\n  background-color: #E1E2E3;\n  -webkit-box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.05);\n          box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.05);\n  height: 60vh;\n  overflow-y: scroll;\n  background-color: #2d384a !important;\n  border-radius: 8px; }\n\n.chat-message-list-main-container p {\n  font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-message-list/chat-message-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messaging_service__ = __webpack_require__("../../../../../src/app/services/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageListComponent = /** @class */ (function () {
    function ChatMessageListComponent(messageService, userService, cdRef) {
        this.messageService = messageService;
        this.userService = userService;
        this.cdRef = cdRef;
    }
    ChatMessageListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getSavedUser().getValue();
        this.messageService.isMessagePresent(this.user.uid, this.friendUid).subscribe(function (snapshot) {
            if (snapshot == null) {
                console.log('Message is empty');
                _this.key = _this.messageService.freshlyCreateChatIDEntry(_this.user.uid, _this.friendUid);
            }
            else {
                _this.key = snapshot.key;
            }
            _this.messageService.setKey(_this.key);
            _this.subscribeMessages();
        });
    };
    ChatMessageListComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
        this.cdRef.detectChanges();
    };
    ChatMessageListComponent.prototype.scrollToBottom = function () {
        try {
            this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
        }
        catch (err) {
            console.log('Error');
        }
    };
    ChatMessageListComponent.prototype.subscribeMessages = function () {
        var _this = this;
        this.messageService.getMessages(this.key)
            .subscribe(function (messages) {
            _this.messages = messages;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], ChatMessageListComponent.prototype, "friendUid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('scrollContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], ChatMessageListComponent.prototype, "scrollContainer", void 0);
    ChatMessageListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-message-list',
            styles: [__webpack_require__("../../../../../src/app/chat/chat-message-list/chat-message-list.component.scss")],
            template: __webpack_require__("../../../../../src/app/chat/chat-message-list/chat-message-list.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], ChatMessageListComponent);
    return ChatMessageListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-message/chat-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-message-main-container\">\r\n    <div class=\"message-bubble\" [class.receiver]=\"isReceiver(message)\" [class.sender]=\"isSender(message)\">\r\n        <p>{{ message.message }}</p>\r\n        <div class=\"timestamp\">\r\n            {{ message.timestamp | date:\"MM/dd/yy hh:mm a\" }}\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat-message/chat-message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-message-main-container .message-bubble {\n  background-color: #ffffff;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 0 6px #B2B2B2;\n          box-shadow: 0 0 6px #B2B2B2;\n  display: inline-block;\n  padding: 10px 18px;\n  position: relative;\n  vertical-align: top;\n  width: 400px;\n  margin-bottom: 10px; }\n\n.chat-message-main-container .message-bubble::before {\n  background-color: #ffffff;\n  content: \"\\A0\";\n  display: block;\n  height: 16px;\n  position: absolute;\n  top: 11px;\n  transform: rotate(29deg) skew(-35deg);\n  -moz-transform: rotate(29deg) skew(-35deg);\n  -ms-transform: rotate(29deg) skew(-35deg);\n  -o-transform: rotate(29deg) skew(-35deg);\n  -webkit-transform: rotate(29deg) skew(-35deg);\n  width: 20px; }\n\n.chat-message-main-container .sender {\n  display: inherit;\n  margin: 5px 45px 5px 20px; }\n\n.chat-message-main-container .sender::before {\n  -webkit-box-shadow: -2px 2px 2px 0 rgba(178, 178, 178, 0.4);\n          box-shadow: -2px 2px 2px 0 rgba(178, 178, 178, 0.4);\n  left: -9px; }\n\n.chat-message-main-container .receiver {\n  display: inherit;\n  margin: 5px 20px 5px 170px; }\n\n.chat-message-main-container .receiver::before {\n  -webkit-box-shadow: 2px -2px 2px 0 rgba(178, 178, 178, 0.4);\n          box-shadow: 2px -2px 2px 0 rgba(178, 178, 178, 0.4);\n  right: -9px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat-message/chat-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message__ = __webpack_require__("../../../../../src/app/services/message.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ChatMessageComponent = /** @class */ (function () {
    function ChatMessageComponent(userService) {
        this.userService = userService;
    }
    ChatMessageComponent.prototype.ngOnInit = function () {
        this.uid = this.userService.getSavedUser().getValue().uid;
    };
    ChatMessageComponent.prototype.isReceiver = function (message) {
        return this.uid === message.receiverUid;
    };
    ChatMessageComponent.prototype.isSender = function (message) {
        return this.uid === message.senderUid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__services_message__["a" /* Message */])
    ], ChatMessageComponent.prototype, "message", void 0);
    ChatMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat-message',
            styles: [__webpack_require__("../../../../../src/app/chat/chat-message/chat-message.component.scss")],
            template: __webpack_require__("../../../../../src/app/chat/chat-message/chat-message.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], ChatMessageComponent);
    return ChatMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ROUTES = [
    { path: 'chat/:id', component: __WEBPACK_IMPORTED_MODULE_2__chat_component__["a" /* ChatComponent */] }
];
/**
 * Chat Routing Module
 */
var ChatRoutingModule = /** @class */ (function () {
    function ChatRoutingModule() {
    }
    ChatRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], ChatRoutingModule);
    return ChatRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chat-main-container\">\r\n    <div class=\"main_container\">\r\n        <div class=\"col-md-8 col-md-offset-2\">\r\n            <app-chat-message-list [friendUid]=\"uid\"></app-chat-message-list>\r\n            <app-chat-message-form [friendUid]=\"uid\"></app-chat-message-form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-main-container {\n  margin-top: 10px;\n  margin-left: 80px; }\n  .chat-main-container p {\n    font-size: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatComponent = /** @class */ (function () {
    function ChatComponent(route) {
        this.route = route;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['id'];
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friends-chat',
            styles: [__webpack_require__("../../../../../src/app/chat/chat.component.scss")],
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "../../../../../src/app/chat/chat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_message_chat_message_component__ = __webpack_require__("../../../../../src/app/chat/chat-message/chat-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_message_list_chat_message_list_component__ = __webpack_require__("../../../../../src/app/chat/chat-message-list/chat-message-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_message_form_chat_message_form_component__ = __webpack_require__("../../../../../src/app/chat/chat-message-form/chat-message-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_messaging_service__ = __webpack_require__("../../../../../src/app/services/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chat_routing_module__ = __webpack_require__("../../../../../src/app/chat/chat-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











/**
 * Chat Module
 */
var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__chat_routing_module__["a" /* ChatRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__chat_message_chat_message_component__["a" /* ChatMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__chat_message_list_chat_message_list_component__["a" /* ChatMessageListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chat_message_form_chat_message_form_component__["a" /* ChatMessageFormComponent */],
                __WEBPACK_IMPORTED_MODULE_8__chat_component__["a" /* ChatComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__services_messaging_service__["a" /* MessagingService */],
                __WEBPACK_IMPORTED_MODULE_4__services_user_service__["a" /* UserService */]
            ]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "../../../../../src/app/edit-dialog/edit-details.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EditType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDetails; });
var EditType;
(function (EditType) {
    EditType[EditType["NAME"] = 0] = "NAME";
    EditType[EditType["EMAIL"] = 1] = "EMAIL";
    EditType[EditType["MOBILE"] = 2] = "MOBILE";
    EditType[EditType["PASSWORD"] = 3] = "PASSWORD";
})(EditType || (EditType = {}));
var EditDetails = /** @class */ (function () {
    function EditDetails(authService, userService) {
        this.authService = authService;
        this.userService = userService;
    }
    EditDetails.prototype.edit = function (editType, value) {
        switch (editType) {
            case EditType.NAME:
                this.editName(value);
                break;
            case EditType.EMAIL:
                this.editEmail(value);
                break;
            case EditType.MOBILE:
                this.editMobile(value);
                break;
            case EditType.PASSWORD:
                this.editPassword(value);
                break;
        }
    };
    EditDetails.prototype.editName = function (name) {
        var user = this.userService.getSavedUser().getValue();
        user.name = name;
        this.userService.updateName(user, name);
        alert('Name changed successfully');
    };
    EditDetails.prototype.editEmail = function (newEmail) {
        var _this = this;
        this.authService.changeEmail(newEmail).then(function () {
            var user = _this.userService.getSavedUser().getValue();
            user.email = newEmail;
            _this.userService.updateEmail(user, newEmail);
            alert('Email changed successfully');
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    EditDetails.prototype.editMobile = function (mobile) {
        var user = this.userService.getSavedUser().getValue();
        user.mobile = mobile;
        this.userService.updateMobile(user, mobile);
        alert('Mobile changed successfully');
    };
    EditDetails.prototype.editPassword = function (value) {
        var newPassword = value;
        this.authService.changePassword(newPassword).then(function () {
            alert('Password changed successfully');
        }).catch(function (error) {
            var errorMessage = error.message;
            alert(errorMessage);
        });
    };
    return EditDetails;
}());



/***/ }),

/***/ "../../../../../src/app/edit-dialog/edit-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isVisible\" class=\"modal fade\" id=\"editModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n        <form name=\"form\" (ngSubmit)=\"onSubmit(editFormData)\" #editFormData='ngForm'>\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title\">{{titleMessage}}</h4>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n                <div class=\"modal-body\">\n                    <p>This will change your {{bodyTitle}}</p>\n\n                    <div class=\"form-group\">\n                        <label for=\"editDetail\">{{bodyLabel}}</label>\n                        <input type=\"text\" class=\"form-control\" name=\"editValue\" (ngModel)=\"editValue\"\n                               id=\"editDetail\"/>\n                    </div>\n                </div>\n                <div class=\"modal-footer form-group\">\n                    <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!editFormData.form.valid\"\n                    >Submit\n                    </button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"hide()\">Close</button>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/edit-dialog/edit-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_details__ = __webpack_require__("../../../../../src/app/edit-dialog/edit-details.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditDialogComponent = /** @class */ (function () {
    function EditDialogComponent(authService, userService) {
        this.authService = authService;
        this.userService = userService;
        this.editDetails = new __WEBPACK_IMPORTED_MODULE_3__edit_details__["a" /* EditDetails */](authService, userService);
    }
    EditDialogComponent.prototype.setTitle = function (title) {
        this.titleMessage = title;
        return this;
    };
    EditDialogComponent.prototype.setBodyTitle = function (bodyTitle) {
        this.bodyTitle = bodyTitle;
        return this;
    };
    EditDialogComponent.prototype.setBodyLabel = function (bodyLabel) {
        this.bodyLabel = bodyLabel;
        return this;
    };
    EditDialogComponent.prototype.setEditType = function (editType) {
        this.editType = editType;
        return this;
    };
    EditDialogComponent.prototype.show = function () {
        this.isVisible = true;
    };
    EditDialogComponent.prototype.hide = function () {
        this.isVisible = false;
    };
    EditDialogComponent.prototype.onSubmit = function (editFormData) {
        this.editDetails.edit(this.editType, editFormData.value.editValue);
    };
    EditDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-edit-dialog',
            template: __webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]])
    ], EditDialogComponent);
    return EditDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCxKEQ4z1sbUDfMob2rzp6X66e65r7q7Y8",
        authDomain: "liminjun-friends.firebaseapp.com",
        databaseURL: "https://liminjun-friends.firebaseio.com",
        projectId: "liminjun-friends",
        storageBucket: "liminjun-friends.appspot.com",
        messagingSenderId: "491543624524"
    }
};


/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Page Not Found</h2>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.sass")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticationGuard.prototype.canActivate = function (route, state) {
        var isLoggedIn = this.authService.isAuthenticated();
        if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
        }
        return isLoggedIn;
    };
    AuthenticationGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Authentication service
 *
 */
var AuthenticationService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AngularFireAuth} angularFireAuth provides the
       functionality related to authentication
     */
    function AuthenticationService(angularFireAuth) {
        this.angularFireAuth = angularFireAuth;
    }
    AuthenticationService.prototype.signup = function (email, password) {
        return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.login = function (email, password) {
        return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthenticationService.prototype.resetPassword = function (email) {
        return this.angularFireAuth.auth.sendPasswordResetEmail(email);
    };
    AuthenticationService.prototype.isAuthenticated = function () {
        var user = this.angularFireAuth.auth.currentUser;
        return user ? true : false;
    };
    AuthenticationService.prototype.signout = function () {
        return this.angularFireAuth.auth.signOut();
    };
    AuthenticationService.prototype.changeEmail = function (email) {
        return this.angularFireAuth.auth.currentUser.updateEmail(email);
    };
    AuthenticationService.prototype.changePassword = function (password) {
        return this.angularFireAuth.auth.currentUser.updatePassword(password);
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/database-constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return USERS_CHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FRIENDS_CHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return USER_DETAILS_CHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHAT_MESSAGES_CHILD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MESSAGE_DETAILS_CHILD; });
var USERS_CHILD = '/users';
var FRIENDS_CHILD = 'friends';
var USER_DETAILS_CHILD = 'users';
var CHAT_MESSAGES_CHILD = "chat_messages";
var MESSAGE_DETAILS_CHILD = "message_details";


/***/ }),

/***/ "../../../../../src/app/services/friend.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_constants__ = __webpack_require__("../../../../../src/app/services/database-constants.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FriendService = /** @class */ (function () {
    function FriendService(fireDb) {
        this.fireDb = fireDb;
    }
    FriendService.prototype.getFirstPage = function (uid, pageSize) {
        return this.fireDb.list(__WEBPACK_IMPORTED_MODULE_3__database_constants__["e" /* USER_DETAILS_CHILD */] + "/" + __WEBPACK_IMPORTED_MODULE_3__database_constants__["b" /* FRIENDS_CHILD */] + "/" + uid, function (ref) { return ref.limitToFirst(pageSize); }).valueChanges();
    };
    FriendService.prototype.loadNextPage = function (uid, friendKey, pageSize) {
        return this.fireDb.list(__WEBPACK_IMPORTED_MODULE_3__database_constants__["e" /* USER_DETAILS_CHILD */] + "/" + __WEBPACK_IMPORTED_MODULE_3__database_constants__["b" /* FRIENDS_CHILD */] + "/" + uid, function (ref) { return ref.orderByKey().startAt(friendKey)
            .limitToFirst(pageSize + 1); }).valueChanges();
    };
    FriendService.prototype.loadPreviousPage = function (uid, friendKey, pageSize) {
        return this.fireDb.list(__WEBPACK_IMPORTED_MODULE_3__database_constants__["e" /* USER_DETAILS_CHILD */] + "/" + __WEBPACK_IMPORTED_MODULE_3__database_constants__["b" /* FRIENDS_CHILD */] + "/" + uid, function (ref) { return ref.orderByKey().startAt(friendKey)
            .limitToLast(pageSize + 1); }).valueChanges();
    };
    FriendService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], FriendService);
    return FriendService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = /** @class */ (function () {
    function Message(message, senderUid, receiverUid, timestamp) {
        this.message = message;
        this.senderUid = senderUid;
        this.receiverUid = receiverUid;
        this.timestamp = timestamp;
    }
    return Message;
}());



/***/ }),

/***/ "../../../../../src/app/services/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__database_constants__ = __webpack_require__("../../../../../src/app/services/database-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Messaging service
 *
 */
var MessagingService = /** @class */ (function () {
    /**
     * Constructor
     *
     * @param {AngularFireDatabase} fireDb provides the functionality
       related to authentication
     */
    function MessagingService(fireDb) {
        this.fireDb = fireDb;
    }
    MessagingService.prototype.isMessagePresent = function (uid, friendUid) {
        return this.fireDb.object(__WEBPACK_IMPORTED_MODULE_2__database_constants__["e" /* USER_DETAILS_CHILD */] + "/" + __WEBPACK_IMPORTED_MODULE_2__database_constants__["a" /* CHAT_MESSAGES_CHILD */] + "/" + uid + "/" + friendUid).valueChanges();
    };
    MessagingService.prototype.createNewMessage = function (newMessage) {
        var messageKey = this.fireDb.createPushId();
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_2__database_constants__["c" /* MESSAGE_DETAILS_CHILD */] + "/" + this.key + "/" + messageKey).set(newMessage).catch(function (error) {
            console.log(error);
        });
    };
    MessagingService.prototype.freshlyCreateChatIDEntry = function (uid, friendUid) {
        var key = this.fireDb.createPushId();
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_2__database_constants__["e" /* USER_DETAILS_CHILD */] + "/" + __WEBPACK_IMPORTED_MODULE_2__database_constants__["a" /* CHAT_MESSAGES_CHILD */] + "/" + uid + "/" + friendUid).set({ key: key });
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_2__database_constants__["e" /* USER_DETAILS_CHILD */] + "/" + __WEBPACK_IMPORTED_MODULE_2__database_constants__["a" /* CHAT_MESSAGES_CHILD */] + "/" + friendUid + "/" + uid).set({ key: key });
        return key;
    };
    MessagingService.prototype.getMessages = function (key) {
        return this.fireDb.list(__WEBPACK_IMPORTED_MODULE_2__database_constants__["c" /* MESSAGE_DETAILS_CHILD */] + "/" + key).valueChanges();
    };
    MessagingService.prototype.setKey = function (key) {
        this.key = key;
    };
    MessagingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage__ = __webpack_require__("../../../../firebase/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__database_constants__ = __webpack_require__("../../../../../src/app/services/database-constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * User service
 *
 */
var UserService = /** @class */ (function () {
    function UserService(fireDb) {
        this.fireDb = fireDb;
        this.basePath = '/profile';
        /**
         * Constructor
         *
         * @param {AngularFireDatabase} fireDb provides the functionality for
           Firebase Database
         */
        this.subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
        this.fbStorage = fireDb.app.storage();
    }
    UserService.prototype.addUser = function (user) {
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_3__database_constants__["d" /* USERS_CHILD */] + "/" + user.uid).set(user);
        this.saveUser(user);
    };
    UserService.prototype.getUser = function (uid) {
        return this.fireDb.object(__WEBPACK_IMPORTED_MODULE_3__database_constants__["d" /* USERS_CHILD */] + "/" + uid).valueChanges();
    };
    UserService.prototype.saveUser = function (user) {
        this.subject.next(user);
    };
    UserService.prototype.getSavedUser = function () {
        return this.subject;
    };
    UserService.prototype.updateEmail = function (user, newEmail) {
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_3__database_constants__["d" /* USERS_CHILD */] + "/'" + user.uid).update({ email: newEmail });
        this.saveUser(user);
    };
    UserService.prototype.updateMobile = function (user, mobile) {
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_3__database_constants__["d" /* USERS_CHILD */] + "/'" + user.uid).update({ mobile: mobile });
        this.saveUser(user);
    };
    UserService.prototype.updateName = function (user, name) {
        this.fireDb.object(__WEBPACK_IMPORTED_MODULE_3__database_constants__["d" /* USERS_CHILD */] + "/'" + user.uid).update({ name: name });
        this.saveUser(user);
    };
    UserService.prototype.addProfileImage = function (user, file) {
        var _this = this;
        this.fbStorage.ref(this.basePath + "/" + file.name)
            .put(file).then(function (snapshot) {
            var imageUrl = snapshot.downloadURL;
            _this.fireDb.object(__WEBPACK_IMPORTED_MODULE_3__database_constants__["d" /* USERS_CHILD */] + "/" + user.uid)
                .update({ image: imageUrl });
            user.image = imageUrl;
            _this.saveUser(user);
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(email, name, mobile, uid, friendcount, image) {
        this.email = email;
        this.name = name;
        this.mobile = mobile;
        this.uid = uid;
        this.friendcount = friendcount;
        this.image = image;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/shared/error-alert/error-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"error-alert-container\">\r\n\t<div class=\"alert alert-danger fade show\" role=\"alert\">\r\n\t\t{{errorMessage}}\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/error-alert/error-alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error-alert-container {\n  margin-top: 24px;\n  margin-bottom: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/error-alert/error-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorAlertComponent = /** @class */ (function () {
    function ErrorAlertComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ErrorAlertComponent.prototype, "errorMessage", void 0);
    ErrorAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-error-alert',
            template: __webpack_require__("../../../../../src/app/shared/error-alert/error-alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/error-alert/error-alert.component.scss")]
        })
    ], ErrorAlertComponent);
    return ErrorAlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-friends/user-friends.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"content-container\">\n    <div *ngIf=\"isLeftVisible\" (click)=\"onLeft()\" class=\"left\">\n      <img src=\"assets/images/left.png\" alt=\"\">\n    </div>\n    <div class=\"card list\">\n        <div *ngFor=\"let friend of friends\" class=\"card\">\n            <img [src]=\"friend.safeImage\" alt=\"Card image cap\" class=\"card-img-top\">\n            <div class=\"card-body\">\n              <h4 class=\"card-title\">{{friend.name}}</h4>\n              <p class=\"card-text\">{{friend.email}}|{{friend.mobile}}</p>\n              \n              <button (click)=\"onChat(friend.uuid)\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Chat</button>\n            </div>\n            <div class=\"card-footer\">\n              <small class=\"text-muted\">Friends from{{friend.time|friendsdate}}</small>\n            </div>\n          </div>\n    </div>\n    <div *ngIf=\"isRightVisible\" (click)=\"onRight()\" class=\"right\">\n        <img src=\"assets/images/right.png\" alt=\"\">\n      </div>\n  </div>\n  <div *ngIf=\"!friends||friends.length===0\" class=\"no-info-container\">\n    <h1>No friends in your list.</h1>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-friends/user-friends.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-container {\n  margin-top: 10px;\n  margin-left: 80px; }\n  .main-container .content-container {\n    display: inline; }\n  .main-container .content-container .list {\n      float: left; }\n  .main-container .content-container .list .card-img-top {\n        height: 180px;\n        width: 260px;\n        background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAAC+vr76+vrX19eCgoLa2trl5eVbW1vDw8N1dXWxsbHf39+Pj4+FhYUvLy/y8vLLy8t7e3urq6tMTEw7OzuWlpZfX1+4uLgoKChVVVXQ0NDs7OxHR0ddXV1sbGwSEhKfn58cHBwjIyMWFhZnZ2c/I1AtAAAFyklEQVR4nO2di1rbMAyFm4bLoJSt7QYtpdCy8f6vONJQSJqbI+tEx/n8P4HOl8Q+lmRlMolEIpFIJBKJRCKRSCQSiUQikciQ3N2sDvPL5fJyfpgtrq2j0WY7/5Ocsbld3VmHpcX1/bm6L25vrINT4OpHo75c5IV1hH48d+g7vq8z6yg9mHfrO7KyDlTIxd5RYJLsg/wgXR9gztMv63j7ku56CfwgsM/xrq++Dx6tg+7DVCAwSd6ereN25iAS+MGVdeSONJuYThbWsTuxlAsMQ+Ktj8AQXlRPgUnCvjF6vaJHNtYS2vFYZL64tRbRxoOCwCQhNqk3KgKTxFpHI6mSwOTSWkkTDsddR0jtm8yM1vLDWks9egJJrU2/E28Hb9ZqavilKZDyPOxvZspY66mg/AgJH6KGXStB9yVqC6RbTlf6Cl+sNZXZ6CvkOiheAQQmB2tVRdTXmYw/1qqKIARS+e8LjEKikpSqJf2GKM1fqdIrYa3rC3XHdoImd6qVnqlA8yGCPkOivOJvlEKa5DBKIM1S84xTSNI2tcApJMl+A05OJ0jMN8R259xba8t5xCl8tdaWg/JsH/y21paDE8iyIQIVcmyIajU1WoWwkwWNQqClIVF4HRUGr1DSaBmWwvE/w/ErHP9aitwP/1qLO4L0NDtrcTlAhSRZb6DCpbW2HOD58MFaW45eO1sFkqS3didNAZJcm07bbC0k+dI1TmFqrS0HVAHOsJb2Cc7UkKTagBsiTTd076uGrpBsFpPJJUrh1lrZiRlKIU3fF6TnK8Na2Dcgge/Wur4BeW+S6mEGqIJIs9Co3iUpQuLZMjCu5qe1rCJ/EQppHE0GZM+fWqsqAulso9nvMxAZRarPENLaRpKFOgHoGqJpLs3RL8/srSWd81NbIdlL6jHOpAm6oXXatoakJlPkXVfh2lpPla2uQms5daiuNXNrNXWoOjcqx/aF4gGD5hpCGcVzMN1W8Ynal0hS3K6i1rRPUlSrQemEQTr3I0OpxY33EU4mrxoCab/CDBV3yrqQ5ihc1CO5Y9GIv0JOO/ONdzqD5CJQC2+eColS+Q14eje65EUNft7NOnoXvE5RNL0JrXg8xL117G54fIlUxZgW3Gexn0FWqmhGvCeSNFt2I61EUY3caUd4xCCb7tWG7LAf0CMU+m+6KXttiEZesx8qShwEAvfWQfdC0q1InbyoIFFIcj/GEcmeT1mMaUSSrqFqgepEUi5lz0CVkXjvYGx3huzirHXUfZAdLgKypcKuaNKyaB3SAg1/IvGEtD5D1LnejrzHLZSHKK+TBmLcfJLeQfzQ0q9d2Dp6F568FBKX8E/4XnumL675t36Rbxka9/SoJep0exOXELUmRtEaVL17+TtOc6N6RY/xJKU8HYPOwKUvugKTZEP0Z4QJaJQwUR1jLS76trMj6XBbgfRl3Nsvqs+wmfqfzG01Tv0OEm4szd7VLXA+VJmdxRWhLWyeST2vw3baLAZ7ekUeZ8PskOlUpZdbxuYe7ebSGXD6nCO7B9i4jHQ2xMrpxMsKsL7eAP8PIGKp2iJ2DfzBgwcvayU7sID9Kcefd4UnuYbMLVHkwa/TaOrbej8ES/lGeQccvqrKUvgcTayLEEmWFTjSEsGmtxEAzl0F8dTvVbW3ZwJ6ZHZS9VElw+CcLU//WYcqxfE3yeEKdO1SDfQVzXEpsYqatHnodqqwv4oOReeBwzpAb7oaVUOyag20z0GD/jVmINpnTAXpZc5ps6iwoceD8tSiUL3QaUNzKm4MX2FG892NgasROBoVWgemRlP2HzY+fnCadv1QEk8OjHudyaj33+ia/JDUdxxZR6VKncDA0ocd1DXFj2YzPFK36VvHpEvND6/VZgKSUC3XBJ6eqVAd5mMdkTaVIxToLxyGnGekRnG4L3HWKwb9Q7oNZxn+g3U8AMqvacClikZKq+nYNsMjpZE+NA1dqhRSw+NIIlYolNoupqMk3y/+A2cibKH/4SIVAAAAAElFTkSuQmCC\"); }\n  .main-container .content-container .left {\n      float: left;\n      margin-top: 140px; }\n  .main-container .content-container .right {\n      float: left;\n      margin-top: 140px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-friends/user-friends.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFriendsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_friend_service__ = __webpack_require__("../../../../../src/app/services/friend.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserFriendsComponent = /** @class */ (function () {
    function UserFriendsComponent(userService, friendService, sanitizer, router) {
        this.userService = userService;
        this.friendService = friendService;
        this.sanitizer = sanitizer;
        this.router = router;
        this.pageSize = 3;
        this.currentCount = 0;
        this.previousCount = 0;
        this.isLeftVisible = false;
        this.isRightVisible = true;
    }
    UserFriendsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.userService.getSavedUser().getValue();
        this.totalCount = this.user.friendcount;
        var that = this;
        this.friendService.getFirstPage(this.user.uid, this.pageSize)
            .subscribe(function (friends) {
            _this.friends = friends;
            friends.forEach(function (item, index) {
                item["safeImage"] = that.sanitizer.bypassSecurityTrustResourceUrl(item.image);
            });
            var count = _this.friends.length;
            _this.currentCount = count;
            _this.leftArrowVisible();
            _this.rightArrowVisible();
        });
    };
    UserFriendsComponent.prototype.onLeft = function () {
        this.previous();
    };
    UserFriendsComponent.prototype.onRight = function () {
        this.next();
    };
    UserFriendsComponent.prototype.previous = function () {
        var _this = this;
        this.friendService.loadPreviousPage(this.user.uid, this.friends[0].uid, this.pageSize).subscribe(function (friends) {
            _this.friends = friends;
            var count = _this.friends.length;
            _this.currentCount -= _this.previousCount;
            _this.leftArrowVisible();
            _this.rightArrowVisible();
        });
    };
    UserFriendsComponent.prototype.next = function () {
        var _this = this;
        this.friendService.loadNextPage(this.user.uid, this.friends[this.friends.length - 1].uid, this.pageSize).subscribe(function (friends) {
            _this.friends = friends;
            var count = _this.friends.length;
            _this.previousCount = count - 1;
            _this.currentCount += _this.previousCount;
            _this.leftArrowVisible();
            _this.rightArrowVisible();
        });
    };
    UserFriendsComponent.prototype.leftArrowVisible = function () {
        this.isLeftVisible = this.currentCount > this.pageSize;
    };
    UserFriendsComponent.prototype.rightArrowVisible = function () {
        this.isRightVisible = this.totalCount > this.currentCount;
    };
    UserFriendsComponent.prototype.onChat = function (id) {
        this.router.navigate(['/chat', id]);
    };
    UserFriendsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-friends',
            template: __webpack_require__("../../../../../src/app/user/user-friends/user-friends.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-friends/user-friends.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_friend_service__["a" /* FriendService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]])
    ], UserFriendsComponent);
    return UserFriendsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-profile\" *ngIf=\"user\">\r\n        <div class=\"person-icon\">\r\n            <img [src]=\"profileImage\" style=\"max-width: 100%; max-height: 100%;\">\r\n            <input type=\"file\" (change)=\"onPersonEdit($event)\" required accept=\".jpg\"\r\n             style=\"opacity:0.0;position:absolute;top:120px;left:30px;bottom:0;right:0;width:200px;height:200px;\" />\r\n        </div>\r\n        <div class=\"user-profile-name\">\r\n            <label>Name: </label>\r\n            <div class=\"user-profile-name-value\">{{user?.name}}</div>\r\n            <button (click)=\"onNameChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\" class=\"btn btn-default btn-sm user-profile-name-btn\">\r\n                Edit\r\n            </button>\r\n        </div>\r\n        <div class=\"user-profile-email\">\r\n            <label>Email: </label>\r\n            <div class=\"user-profile-email-value\">{{user?.email}}</div>\r\n            <button (click)=\"onEmailChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\" class=\"btn btn-default btn-sm\">\r\n                Edit\r\n            </button>\r\n        </div>\r\n        <div class=\"user-profile-mobile\">\r\n            <label>Mobile: </label>\r\n            <div class=\"user-profile-mobile-value\">{{user?.mobile}}</div>\r\n            <button (click)=\"onMobileChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\" class=\"btn btn-default btn-sm user-profile-mobile-btn\">\r\n                Edit\r\n            </button>\r\n        </div>\r\n    \r\n        <div class=\"user-profile-password\">\r\n            <label>Password: </label>\r\n            <div class=\"user-profile-password-value\">****</div>\r\n            <button (click)=\"onPasswordChange()\" data-toggle=\"modal\" data-target=\"#editModal\" type=\"button\" class=\"btn btn-default btn-sm user-profile-password-btn\">\r\n                Edit\r\n            </button>\r\n        </div>\r\n        <div class=\"user-profile-btn\">\r\n            <button type=\"button\" (click)='onLogout()' class=\"btn btn-info\">LOGOUT</button>\r\n        </div>\r\n    </div>\r\n    <app-edit-dialog></app-edit-dialog>\r\n    "

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-profile {\n  width: 50%;\n  margin-left: 24px;\n  margin-top: 10px; }\n  .user-profile .person-icon {\n    width: 200px;\n    height: 200px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_dialog_edit_dialog_component__ = __webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_details__ = __webpack_require__("../../../../../src/app/edit-dialog/edit-details.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authService, router, userService) {
        this.authService = authService;
        this.router = router;
        this.userService = userService;
        //默认图片
        this.profileImage = '../../../assets/images/person_edit.png';
    }
    UserProfileComponent.prototype.onLogout = function () {
        var _this = this;
        this.authService.signout().then(function () {
            _this.navigateToLogin();
        });
    };
    UserProfileComponent.prototype.navigateToLogin = function () {
        this.router.navigateByUrl('/login');
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getSavedUser().getValue();
        this.profileImage = this.user.image;
    };
    UserProfileComponent.prototype.onNameChange = function () {
        this.editDialog.setTitle('Do you want to edit name?')
            .setBodyTitle('name')
            .setBodyLabel('Enter new name')
            .setEditType(__WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_details__["b" /* EditType */].NAME)
            .show();
    };
    UserProfileComponent.prototype.onEmailChange = function () {
        this.editDialog.setTitle('Do you want to edit email?')
            .setBodyTitle('email')
            .setBodyLabel('Enter new email')
            .setEditType(__WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_details__["b" /* EditType */].EMAIL)
            .show();
    };
    UserProfileComponent.prototype.onMobileChange = function () {
        this.editDialog.setTitle('Do you want to edit mobile?')
            .setBodyTitle('mobile')
            .setBodyLabel('Enter new mobile')
            .setEditType(__WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_details__["b" /* EditType */].MOBILE)
            .show();
    };
    UserProfileComponent.prototype.onPasswordChange = function () {
        this.editDialog.setTitle('Do you want to edit password?')
            .setBodyTitle('password')
            .setBodyLabel('Enter new password')
            .setEditType(__WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_details__["b" /* EditType */].PASSWORD)
            .show();
    };
    UserProfileComponent.prototype.onPersonEdit = function (event) {
        var selectedFiles = event.target.files;
        var file = selectedFiles.item(0);
        this.userService.addProfileImage(this.user, file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4__edit_dialog_edit_dialog_component__["a" /* EditDialogComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__edit_dialog_edit_dialog_component__["a" /* EditDialogComponent */])
    ], UserProfileComponent.prototype, "editDialog", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-profile',
            template: __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_guard__ = __webpack_require__("../../../../../src/app/services/authentication.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_friends_user_friends_component__ = __webpack_require__("../../../../../src/app/user/user-friends/user-friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_friend_service__ = __webpack_require__("../../../../../src/app/services/friend.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ROUTES = [
    {
        path: '', redirectTo: '/profile', pathMatch: 'full', canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: 'profile', component: __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile_component__["a" /* UserProfileComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_authentication_guard__["a" /* AuthenticationGuard */]]
    },
    {
        path: 'friends', component: __WEBPACK_IMPORTED_MODULE_4__user_friends_user_friends_component__["a" /* UserFriendsComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__services_authentication_guard__["a" /* AuthenticationGuard */]]
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(ROUTES)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_authentication_guard__["a" /* AuthenticationGuard */],
                __WEBPACK_IMPORTED_MODULE_5__services_friend_service__["a" /* FriendService */]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/user/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_friends_user_friends_component__ = __webpack_require__("../../../../../src/app/user/user-friends/user-friends.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_dialog_component__ = __webpack_require__("../../../../../src/app/edit-dialog/edit-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_friendsdate_pipe__ = __webpack_require__("../../../../../src/app/utils/friendsdate.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_4__user_friends_user_friends_component__["a" /* UserFriendsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__edit_dialog_edit_dialog_component__["a" /* EditDialogComponent */],
                __WEBPACK_IMPORTED_MODULE_7__utils_friendsdate_pipe__["a" /* FriendsDatePipe */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/utils/friendsdate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsDatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FriendsDatePipe = /** @class */ (function () {
    function FriendsDatePipe() {
    }
    FriendsDatePipe.prototype.transform = function (dateInMillis) {
        if (dateInMillis === '0' || dateInMillis === '-1') {
            return 'Invalid Date';
        }
        return __WEBPACK_IMPORTED_MODULE_0_moment__(dateInMillis, 'x').format('MM/DD/YY');
    };
    FriendsDatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* Pipe */])({
            name: 'friendsdate'
        })
    ], FriendsDatePipe);
    return FriendsDatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/utils/password-equal-validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordEqualValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var PasswordEqualValidator = /** @class */ (function () {
    function PasswordEqualValidator(passwordEqual) {
        this.passwordEqual = passwordEqual;
    }
    PasswordEqualValidator_1 = PasswordEqualValidator;
    PasswordEqualValidator.prototype.validate = function (control) {
        var retypePassword = control.value;
        var originalPassword = control.root.get(this.passwordEqual);
        // original & retype password is egual
        return (originalPassword && retypePassword !== originalPassword.value)
            ? { passwordEqual: false } : null;
    };
    PasswordEqualValidator = PasswordEqualValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[passwordEqual][formControlName],[passwordEqual][formControl],[passwordEqual][ngModel]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALIDATORS */], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* forwardRef */])(function () { return PasswordEqualValidator_1; }), multi: true }
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Attribute */])('passwordEqual')),
        __metadata("design:paramtypes", [String])
    ], PasswordEqualValidator);
    return PasswordEqualValidator;
    var PasswordEqualValidator_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCxKEQ4z1sbUDfMob2rzp6X66e65r7q7Y8",
        authDomain: "liminjun-friends.firebaseapp.com",
        databaseURL: "https://liminjun-friends.firebaseio.com",
        projectId: "liminjun-friends",
        storageBucket: "",
        messagingSenderId: "491543624524"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-il": "../../../../moment/locale/en-il.js",
	"./en-il.js": "../../../../moment/locale/en-il.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./tg": "../../../../moment/locale/tg.js",
	"./tg.js": "../../../../moment/locale/tg.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./ug-cn": "../../../../moment/locale/ug-cn.js",
	"./ug-cn.js": "../../../../moment/locale/ug-cn.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map