var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"container\">\n\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n    <mat-toolbar>\n    </mat-toolbar>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/admin/admin.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/admin/admin.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<form (submit)=\"Submittimedata()\">\n    <div class=\"form-group d-flex\">\n        <label><h5>Source:</h5></label>\n    <input type=\"text\" class=\"form-control ml-1 mr-3\" placeholder=\"Enter your source here\" [(ngModel)]=\"source\" name=\"source\">\n    </div>\n    <br>\n    <div>\n        <label><h5>Destination:</h5></label>\n    <input type=\"text\" class=\"form-control ml-1\" placeholder=\"Enter your destination here\" [(ngModel)]=\"destination\" name=\"destination\">\n    </div>\n<br>\n    <div>\n    <label><h5>Time:</h5></label>\n    <input type=\"text\" class=\"form-control ml-1\" placeholder=\"Enter your destination here\" [(ngModel)]=\"time\" name=\"time\">\n    </div>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"send data\">\n</form>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/home/home.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/home/home.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\"></div>\n<br>\n<div class=\"jumbotron text-center\">\n        <h1>Make Your journey with us!</h1>\n        <p class=\"lead\">Welcome to Mumbai Pune journey</p>\n<div>\n        <a class=\"btn btn-primary\" [routerLink]=\"['/registration']\" [routerLinkActive]=\"['active']\">Register Here</a>\n        <span>&nbsp;</span>\n        <a class=\"btn btn-info\" [routerLink]=\"['/login']\" [routerLinkActive]=\"['active']\">login</a>\n\n        <br>\n        &nbsp;\n        &nbsp;\n        <br>\n        <p>You can use following value to login for demo purpose:</p>\n        <p>username: userdemo</p>\n        <p>password: passworddemo</p>\n</div>\n</div>\n\n\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/login/login.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/login/login.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<!--<h2 class=\"page-header\">Login</h2>\n<form (submit)=\"onLoginSubmit()\">\n    <div class=\"form-group\">\n        <label>Username</label>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n    </div>\n    <div class=\"form-group\">\n        <label>Password</label>\n    <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n    </div>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Login\">\n</form>-->\n\n<br>\n <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n          <div class=\"card card-signin my-5\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title text-center\">Sign In</h5>\n              <form class=\"form-signin\" (submit)=\"onLoginSubmit()\">\n           <!--<form (submit)=\"onLoginSubmit()\">-->\n                <div class=\"form-group\">\n                  <label for=\"inputUsername\">Username</label>\n                  <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"enter your username\" required autofocus>  \n                </div>\n                \n                <div class=\"form-group\">\n                  <label for=\"inputPassword\">Password</label>\n                  <input type=\"password\" class=\"form-control\" name=\"username\" [(ngModel)]=\"password\" placeholder=\"enter your password\" required>\n                </div>\n                <!--<div class=\"custom-control custom-checkbox mb-3\">\n                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                        <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n                      </div>-->\n                <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Sign in</button>\n                <hr class=\"my-4\">\n\n                <p>(If you don't want to register)</p>\n                <h5>Demo Value:</h5>\n                <p>username: userdemo</p>\n                <p>password: passworddemo</p>\n\n                <!--<button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n                <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button>-->\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <br>\n    <br>\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>\n    <li><a class=\"nav-link\" [routerLink]=\"['/admin']\">a</a></li>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/navbar/navbar.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/navbar/navbar.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n <nav class=\"navbar navbar-expand-md navbar-dark bg-secondary d-flex\">\n\n    <i class=\t\"glyphicon glyphicon-road\"></i>\n     <a class=\"navbar-brand\" style=\"color:aquamarine;\" href=\"#\">Your Journey</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n<div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <!--<ul class=\"navbar-nav mr-auto\">-->\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active-link\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a><span>&nbsp;&nbsp;</span></li>\n          <li><a *ngIf=\"authenticationService.login()\" class=\"nav-link\" [routerLink]=\"['/travelportal']\">Travel information</a></li>\n    </ul>\n\n    <!--<ul class=\"navbar-nav mr-auto navbar-right\">-->\n      <ul class=\"navbar-nav my-2 my-lg-0\">\n        \n        <li><a div=\"color1\" style=\"color:white;\" *ngIf=\"authenticationService.login()\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\n    </ul>    \n</div>\n</nav>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/registration/registration.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/registration/registration.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-sm-9 col-md-7 col-lg-5 mx-auto\">\n                    <div class=\"card card-signin my-5\">\n                      <div class=\"card-body\">\n                        <h5 class=\"card-title text-center\">Register here</h5>\n                        <form class=\"form-signup\" (submit)=\"onRegisterSubmit()\">\n                          \n                        <div class=\"form-group\">\n                        <label>Name</label>\n                        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" placeholder=\"enter your name\" autofocus>\n                        </div>\n\n                        <div class=\"form-group\">\n                         <label>UserName</label>\n                        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"enter your username\" class=\"form-control\">\n                        </div>\n                       \n                        <div class=\"form-group\">\n                        <label>Email</label>\n                        <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"enter your email\" class=\"form-control\">\n                        </div>\n                        \n                        <div class=\"form-group\">\n                        <label for=\"inputPassword\">Password</label>\n                        <input type=\"password\" class=\"form-control\" name=\"username\" [(ngModel)]=\"password\" placeholder=\"enter your password\">\n                        </div>\n                        <br>\n                          <!--<div class=\"custom-control custom-checkbox mb-3\">\n                                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck1\">\n                                  <label class=\"custom-control-label\" for=\"customCheck1\">Remember password</label>\n                                </div>-->\n                          <button class=\"btn btn-lg btn-primary btn-block text-uppercase\" type=\"submit\">Register</button>\n                          <hr class=\"my-4\">\n          \n                          <!--<button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n                          <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button>-->\n                        </form>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/travelportal/travelportal.component.html": 
        /*!*************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/travelportal/travelportal.component.html ***!
          \*************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"page-header\">Mumbai-Pune Journey</h2>\n<p>Enter the fields below:</p>\n<form (submit)=\"Submitdata()\">\n    <div class=\"form-group d-flex\">\n        <label><h5>Source:</h5></label>\n    <input type=\"text\" class=\"form-control ml-1 mr-3\" placeholder=\"Enter your source here\" [(ngModel)]=\"source\" name=\"username\">\n    \n        <label><h5>Destination:</h5></label>\n    <input type=\"text\" class=\"form-control ml-1\" placeholder=\"Enter your destination here\" [(ngModel)]=\"destination\" name=\"password\">\n    </div>\n<input type=\"submit\" class=\"btn btn-primary\" value=\"Check Time\">\n</form>\n\n\n<!--<div class=\"container\">\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"content\">\n        <mat-card class=\"card\" >\n          <mat-card-title fxLayout.gt-xs=\"row\" fxLayout.xs=\"column\">\n            <h3>Schedule</h3>\n          </mat-card-title>\n          <mat-card-content>\n              <div class=\"example-container mat-elevation-z8\">\n                  <mat-table #table [dataSource]=\"Filtertime\">\n                  \n                  <ng-container matColumnDef=\"source\">\n                    <mat-header-cell *matHeaderCellDef>Source </mat-header-cell>\n                    <mat-cell *matCellDef=\"let element\"> {{element.source}} </mat-cell>\n                  </ng-container>\n\n                  \n                    <ng-container matColumnDef=\"destination\">\n                      <mat-header-cell *matHeaderCellDef>Destination </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.destination}} </mat-cell>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"time\">\n                      <mat-header-cell *matHeaderCellDef> Time </mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\"> {{element.time}} </mat-cell>\n                    </ng-container>\n\n                    \n                    <ng-container matColumnDef=\"bookticket\">\n                      <mat-header-cell *matHeaderCellDef></mat-header-cell>\n                      <mat-cell *matCellDef=\"let element\">\n                        <a\n                            type=\"button\">\n                          <mat-icon class=\"icon\">Book ticket</mat-icon>\n                        </a>\n                      </mat-cell>\n                    </ng-container>\n                    \n                    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n                  </mat-table>\n                </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n</div>-->\n\n\n<!--<h2>list</h2>\n<div class=\"col\">\n    <div *ngFor = \"let item of Filtime\" class=\"\">\n     {{item.source}}--{{item.destination}}--{{item.time}}\n    </div>\n</div>-->\n\n<h2>Schedule:</h2>\n<div class=\"bg\">\n<table class=\"table\" >\n  <thead class=\"thead-light\">\n  <th>Source</th>\n  <th>Destination</th>\n  <th>Time</th>\n  </thead>\n  <tbody>\n  <tr *ngFor=\"let item of Filtime\">\n  <td>{{item.source}}</td>\n  <td>{{item.destination}}</td>\n  <td>{{item.time}}</td>\n  <!--<td><button color=\"warn\" (click)=\"deleteIssue(item._id)\">D</button><td>-->\n  </tr>\n  </tbody>\n</table>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("html, body {\r\n    padding: 0;\r\n    margin: 0;\r\n    background:aquamarine;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHFCQUFxQjtDQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCwgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYmFja2dyb3VuZDphcXVhbWFyaW5lO1xyXG4gfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'travellingangular';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _subcomponent_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./subcomponent/home/home.component */ "./src/app/subcomponent/home/home.component.ts");
            /* harmony import */ var _subcomponent_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./subcomponent/navbar/navbar.component */ "./src/app/subcomponent/navbar/navbar.component.ts");
            /* harmony import */ var _subcomponent_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subcomponent/registration/registration.component */ "./src/app/subcomponent/registration/registration.component.ts");
            /* harmony import */ var _subcomponent_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./subcomponent/login/login.component */ "./src/app/subcomponent/login/login.component.ts");
            /* harmony import */ var _subcomponent_travelportal_travelportal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./subcomponent/travelportal/travelportal.component */ "./src/app/subcomponent/travelportal/travelportal.component.ts");
            /* harmony import */ var _protect_authenticate_protect__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./protect/authenticate.protect */ "./src/app/protect/authenticate.protect.ts");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var _services_validation_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/validation.service */ "./src/app/services/validation.service.ts");
            /* harmony import */ var _services_traveltime_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/traveltime-data.service */ "./src/app/services/traveltime-data.service.ts");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/fesm2015/angular-image-slider.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-slick-carousel */ "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
            /* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
            /* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
            /* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
            /* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
            /* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
            /* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _subcomponent_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./subcomponent/admin/admin.component */ "./src/app/subcomponent/admin/admin.component.ts");
            //import { NgImageSliderModule } from 'ng-image-slider';
            var travelRoutes = [
                { path: '', redirectTo: "/home", pathMatch: 'full' },
                { path: 'home', component: _subcomponent_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
                { path: 'registration', component: _subcomponent_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"] },
                { path: 'login', component: _subcomponent_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"] },
                { path: 'admin', component: _subcomponent_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"] },
                { path: 'travelportal', component: _subcomponent_travelportal_travelportal_component__WEBPACK_IMPORTED_MODULE_12__["TravelportalComponent"], canActivate: [_protect_authenticate_protect__WEBPACK_IMPORTED_MODULE_13__["Authenticate"]] },
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                        _subcomponent_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                        _subcomponent_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_9__["NavbarComponent"],
                        _subcomponent_registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                        _subcomponent_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                        _subcomponent_travelportal_travelportal_component__WEBPACK_IMPORTED_MODULE_12__["TravelportalComponent"],
                        _subcomponent_admin_admin_component__WEBPACK_IMPORTED_MODULE_31__["AdminComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(travelRoutes),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                        _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        angular2_flash_messages__WEBPACK_IMPORTED_MODULE_17__["FlashMessagesModule"].forRoot(),
                        //FlashMessagesModule,
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                        angular_image_slider__WEBPACK_IMPORTED_MODULE_18__["SliderModule"],
                        ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_20__["SlickCarouselModule"],
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
                        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_27__["MatFormFieldModule"],
                        _angular_material_input__WEBPACK_IMPORTED_MODULE_28__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatOptionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                        _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                        _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
                        _angular_material_card__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                        _angular_material_table__WEBPACK_IMPORTED_MODULE_30__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatDividerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSnackBarModule"],
                        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTabsModule"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
                    providers: [_protect_authenticate_protect__WEBPACK_IMPORTED_MODULE_13__["Authenticate"], _services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"], _services_validation_service__WEBPACK_IMPORTED_MODULE_15__["ValidationService"], _services_traveltime_data_service__WEBPACK_IMPORTED_MODULE_16__["TraveltimeDataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/protect/authenticate.protect.ts": 
        /*!*************************************************!*\
          !*** ./src/app/protect/authenticate.protect.ts ***!
          \*************************************************/
        /*! exports provided: Authenticate */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Authenticate", function () { return Authenticate; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
            var Authenticate = /** @class */ (function () {
                function Authenticate(authenticateService, router) {
                    this.authenticateService = authenticateService;
                    this.router = router;
                }
                Authenticate.prototype.canActivate = function () {
                    if (this.authenticateService.login()) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/login']);
                        return false;
                    }
                };
                return Authenticate;
            }());
            Authenticate.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            Authenticate = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], Authenticate);
            /***/ 
        }),
        /***/ "./src/app/services/authentication.service.ts": 
        /*!****************************************************!*\
          !*** ./src/app/services/authentication.service.ts ***!
          \****************************************************/
        /*! exports provided: AuthenticationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () { return AuthenticationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
            /* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_5__);
            //import 'rxjs/add/operator/map';
            //import {Observable} from "rxjs";
            //import {Observable} from rxjs/Observable;
            var AuthenticationService = /** @class */ (function () {
                function AuthenticationService(http, httpClient) {
                    this.http = http;
                    this.httpClient = httpClient;
                }
                AuthenticationService.prototype.registerTraveller = function (traveller) {
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:3000/traveller/register', traveller, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
                };
                AuthenticationService.prototype.authenticateTraveller = function (traveller) {
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:3000/traveller/authenticate', traveller, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
                };
                AuthenticationService.prototype.getInfo = function () {
                    this.getToken();
                    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                        'Content-Type': 'application/json',
                        'Authorization': this.authenticateToken
                    });
                    //const headers = new Headers();
                    //this.loadToken();
                    //headers.append('Content-Type','application/json');
                    //headers.append('Authorization',this.authToken);
                    return this.httpClient.get('http://localhost:3000/traveller/travellerinfo', { headers: headers });
                };
                AuthenticationService.prototype.storeData = function (token, traveller) {
                    localStorage.setItem('id_token', token);
                    localStorage.setItem('traveller', JSON.stringify(traveller));
                    this.authenticateToken = token;
                    this.traveller = traveller;
                };
                AuthenticationService.prototype.getToken = function () {
                    var token = localStorage.getItem('id_token');
                    this.authenticateToken = token;
                };
                AuthenticationService.prototype.login = function () {
                    return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_5__["tokenNotExpired"])('id_token');
                };
                AuthenticationService.prototype.logout = function () {
                    this.authenticateToken = null;
                    this.traveller = null;
                    localStorage.clear();
                };
                return AuthenticationService;
            }());
            AuthenticationService.ctorParameters = function () { return [
                { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] },
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticationService);
            /***/ 
        }),
        /***/ "./src/app/services/traveltime-data.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/traveltime-data.service.ts ***!
          \*****************************************************/
        /*! exports provided: TraveltimeDataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TraveltimeDataService", function () { return TraveltimeDataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            //import 'rxjs/add/operator/map';
            var TraveltimeDataService = /** @class */ (function () {
                function TraveltimeDataService(http) {
                    this.http = http;
                }
                TraveltimeDataService.prototype.gettravellingdata = function () {
                    return this.http.get('http://localhost:3000/traveller/gettime').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
                };
                TraveltimeDataService.prototype.travellingdata = function (traveldata) {
                    var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
                    headers.append('Content-Type', 'application/json');
                    return this.http.post('http://localhost:3000/traveller/traveldata', traveldata, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
                };
                TraveltimeDataService.prototype.deletedata = function (id) {
                    return this.http.delete('http://localhost:3000/traveller/traveldelete/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
                };
                return TraveltimeDataService;
            }());
            TraveltimeDataService.ctorParameters = function () { return [
                { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
            ]; };
            TraveltimeDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TraveltimeDataService);
            /***/ 
        }),
        /***/ "./src/app/services/validation.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/validation.service.ts ***!
          \************************************************/
        /*! exports provided: ValidationService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function () { return ValidationService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ValidationService = /** @class */ (function () {
                function ValidationService() {
                }
                ValidationService.prototype.validateall = function (traveller) {
                    if (traveller.name == undefined || traveller.email == undefined || traveller.username == undefined || traveller.password == undefined) {
                        return false;
                    }
                    else {
                        return true;
                    }
                };
                ValidationService.prototype.validateEmail = function (email) {
                    var check = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return check.test(email);
                };
                return ValidationService;
            }());
            ValidationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], ValidationService);
            /***/ 
        }),
        /***/ "./src/app/subcomponent/admin/admin.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/subcomponent/admin/admin.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/subcomponent/admin/admin.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/subcomponent/admin/admin.component.ts ***!
          \*******************************************************/
        /*! exports provided: AdminComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function () { return AdminComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_traveltime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traveltime-data.service */ "./src/app/services/traveltime-data.service.ts");
            var AdminComponent = /** @class */ (function () {
                function AdminComponent(traveltimeDataService) {
                    this.traveltimeDataService = traveltimeDataService;
                }
                AdminComponent.prototype.ngOnInit = function () {
                };
                AdminComponent.prototype.Submittimedata = function () {
                    var traveldata = {
                        source: this.source,
                        destination: this.destination,
                        time: this.time
                    };
                    this.traveltimeDataService.travellingdata(traveldata).subscribe(function (data) {
                        if (data.success) {
                            console.log('data submitted');
                        }
                        else {
                            console.error();
                        }
                    });
                };
                return AdminComponent;
            }());
            AdminComponent.ctorParameters = function () { return [
                { type: src_app_services_traveltime_data_service__WEBPACK_IMPORTED_MODULE_2__["TraveltimeDataService"] }
            ]; };
            AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-admin',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/admin/admin.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.css */ "./src/app/subcomponent/admin/admin.component.css")).default]
                })
            ], AdminComponent);
            /***/ 
        }),
        /***/ "./src/app/subcomponent/home/home.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/subcomponent/home/home.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n /*.container\r\n {\r\n    background-image: url(\"/abc1.jpg\");\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow:auto;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n\r\n    position: fixed;\r\n }*/\r\n\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQzs7Ozs7Ozs7Ozs7O0dBWUUiLCJmaWxlIjoic3JjL2FwcC9zdWJjb21wb25lbnQvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuIC8qLmNvbnRhaW5lclxyXG4ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2FiYzEuanBnXCIpO1xyXG5cclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6YXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuIH0qL1xyXG5cclxuICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/subcomponent/home/home.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/subcomponent/home/home.component.ts ***!
          \*****************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/subcomponent/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/subcomponent/login/login.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/subcomponent/login/login.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/subcomponent/login/login.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/subcomponent/login/login.component.ts ***!
          \*******************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authenticationService, router, flashMessage) {
                    this.authenticationService = authenticationService;
                    this.router = router;
                    this.flashMessage = flashMessage;
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.onLoginSubmit = function () {
                    var _this = this;
                    var traveller = {
                        username: this.username,
                        password: this.password
                    };
                    this.authenticationService.authenticateTraveller(traveller).subscribe(function (data) {
                        if (data.success) {
                            _this.authenticationService.storeData(data.token, data.traveller);
                            _this.flashMessage.show('You are now logged in', {
                                cssClass: 'alert-success',
                                timeout: 2000
                            });
                            _this.router.navigate(['travelportal']);
                        }
                        else {
                            _this.flashMessage.show(data.msg, {
                                cssClass: 'alert-danger',
                                timeout: 2000
                            });
                            _this.router.navigate(['login']);
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/subcomponent/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/subcomponent/navbar/navbar.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/subcomponent/navbar/navbar.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#color1{\r\nfont: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY29tcG9uZW50L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFdBQVc7QUFDWCIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29sb3Ixe1xyXG5mb250OiB3aGl0ZTtcclxufVxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/subcomponent/navbar/navbar.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/subcomponent/navbar/navbar.component.ts ***!
          \*********************************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(authenticationService, router, flashMessage) {
                    this.authenticationService = authenticationService;
                    this.router = router;
                    this.flashMessage = flashMessage;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                NavbarComponent.prototype.routerOnActivate = function (curr, prev, currTree, prevTree) {
                    this.router.navigate(['/home'], curr);
                };
                NavbarComponent.prototype.onLogoutClick = function () {
                    this.authenticationService.logout();
                    this.flashMessage.show('You are logged out', {
                        cssClass: 'alert-success',
                        timeout: 2000
                    });
                    this.router.navigate(['login']);
                    return false;
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/subcomponent/navbar/navbar.component.css")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/subcomponent/registration/registration.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/subcomponent/registration/registration.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N1YmNvbXBvbmVudC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/subcomponent/registration/registration.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/subcomponent/registration/registration.component.ts ***!
          \*********************************************************************/
        /*! exports provided: RegistrationComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () { return RegistrationComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/validation.service */ "./src/app/services/validation.service.ts");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var RegistrationComponent = /** @class */ (function () {
                function RegistrationComponent(ValidationService, flashMessage, authenticationService, router) {
                    this.ValidationService = ValidationService;
                    this.flashMessage = flashMessage;
                    this.authenticationService = authenticationService;
                    this.router = router;
                }
                RegistrationComponent.prototype.ngOnInit = function () {
                };
                RegistrationComponent.prototype.onRegisterSubmit = function () {
                    var _this = this;
                    //console.log(this.name);
                    var traveller = {
                        name: this.name,
                        email: this.email,
                        username: this.username,
                        password: this.password
                    };
                    var traveller1 = {
                        username: this.username,
                        password: this.password
                    };
                    //Required fields
                    if (!this.ValidationService.validateall(traveller)) {
                        this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
                        return false;
                    }
                    //Validate email
                    if (!this.ValidationService.validateEmail(traveller.email)) {
                        this.flashMessage.show('Please fill valid email', { cssClass: 'alert-danger', timeout: 3000 });
                        return false;
                    }
                    //Register user
                    this.authenticationService.registerTraveller(traveller).subscribe(function (data) {
                        if (data.success) {
                            _this.flashMessage.show('you are now registered and can log in', { cssClass: 'alert-success', timeout: 3000 });
                            _this.authenticationService.authenticateTraveller(traveller1).subscribe(function (data) {
                                _this.authenticationService.storeData(data.token, data.traveller1);
                                _this.flashMessage.show('You are now logged in', {
                                    cssClass: 'alert-success',
                                    timeout: 2000
                                });
                                _this.router.navigate(['travelportal']);
                            });
                        }
                        else {
                            _this.flashMessage.show('something went wrong', { cssClass: 'alert-success', timeout: 3000 });
                            _this.router.navigate(['/register']);
                        }
                    });
                };
                return RegistrationComponent;
            }());
            RegistrationComponent.ctorParameters = function () { return [
                { type: src_app_services_validation_service__WEBPACK_IMPORTED_MODULE_2__["ValidationService"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"] },
                { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-registration',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/registration/registration.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration.component.css */ "./src/app/subcomponent/registration/registration.component.css")).default]
                })
            ], RegistrationComponent);
            /***/ 
        }),
        /***/ "./src/app/subcomponent/travelportal/travelportal.component.css": 
        /*!**********************************************************************!*\
          !*** ./src/app/subcomponent/travelportal/travelportal.component.css ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".bg\r\n{\r\n    background-color: azure;\r\n}\r\ntd\r\n{\r\nbackground-color:whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ViY29tcG9uZW50L3RyYXZlbHBvcnRhbC90cmF2ZWxwb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSx1QkFBdUI7QUFDM0I7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zdWJjb21wb25lbnQvdHJhdmVscG9ydGFsL3RyYXZlbHBvcnRhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnXHJcbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xyXG59XHJcbnRkXHJcbntcclxuYmFja2dyb3VuZC1jb2xvcjp3aGl0ZXNtb2tlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/subcomponent/travelportal/travelportal.component.ts": 
        /*!*********************************************************************!*\
          !*** ./src/app/subcomponent/travelportal/travelportal.component.ts ***!
          \*********************************************************************/
        /*! exports provided: TravelportalComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelportalComponent", function () { return TravelportalComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_traveltime_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/traveltime-data.service */ "./src/app/services/traveltime-data.service.ts");
            /* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
            /* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
            //import { traveltimeObj } from 'src/app/traveltime';
            var TravelportalComponent = /** @class */ (function () {
                function TravelportalComponent(traveltimeDataService, flashMessage) {
                    this.traveltimeDataService = traveltimeDataService;
                    this.flashMessage = flashMessage;
                    this.Traveltime = [];
                    this.Filtime = [];
                    this.displayedColumns = ['source', 'destination', 'time'];
                }
                TravelportalComponent.prototype.ngOnChanges = function (changes) {
                };
                TravelportalComponent.prototype.ngOnInit = function () {
                };
                TravelportalComponent.prototype.getdata = function () {
                    var _this = this;
                    // if(this.source == 'mumbai' && this.destination == 'pune')
                    //{
                    this.traveltimeDataService.gettravellingdata()
                        .subscribe(function (traveltime) {
                        var e_1, _a;
                        _this.Traveltime = traveltime;
                        try {
                            for (var _b = __values(_this.Traveltime), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var item = _c.value;
                                //console.log(item.source);
                                if (item.source == _this.source && item.destination == _this.destination) {
                                    _this.Filtime.push(item);
                                }
                                else {
                                    //console.log('enter cities');
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                    });
                    //}
                    //else if(this.source == 'pune' && this.destination == 'mumbai')
                    //{
                    //  this.traveltimeDataService.gettravellingdata()
                    // .subscribe(traveltime => {
                    // this.Traveltime=traveltime;
                    // for(let item of this.Traveltime) {
                    //   console.log(item.source);
                    //    if(item.source == 'pune')
                    //   {
                    //   this.Filtime.push(item);
                    //    }
                    //    else
                    //    {
                    //   console.log("entered source is not pune");
                    //    }
                    //  }
                    //  });
                    // }
                    //else
                    //{
                    // this.flashMessage.show('sorry for inconvience,entered data is not available in our journey database',{
                    //   cssClass: 'alert-success',
                    //   timeout:5000});
                    // }
                };
                //for deleting rows in table
                TravelportalComponent.prototype.deleteRow = function () {
                    for (var i = 0; i <= this.Filtime.length; i++) {
                        this.Filtime.splice(0);
                    }
                };
                TravelportalComponent.prototype.deleteIssue = function (id) {
                    var _this = this;
                    this.traveltimeDataService.deletedata(id)
                        .subscribe(function (data) {
                        console.log(data);
                        if (data.n == 1) {
                            for (var i = 0; i < _this.Filtime.length; i++) {
                                if (id == _this.Filtime[i]._id) {
                                    _this.Filtime.splice(i, 1);
                                }
                            }
                        }
                    });
                };
                TravelportalComponent.prototype.Submitdata = function () {
                    this.deleteRow();
                    this.getdata();
                };
                return TravelportalComponent;
            }());
            TravelportalComponent.ctorParameters = function () { return [
                { type: src_app_services_traveltime_data_service__WEBPACK_IMPORTED_MODULE_2__["TraveltimeDataService"] },
                { type: angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"] }
            ]; };
            TravelportalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-travelportal',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./travelportal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/subcomponent/travelportal/travelportal.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./travelportal.component.css */ "./src/app/subcomponent/travelportal/travelportal.component.css")).default]
                })
            ], TravelportalComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! F:\msproject\project\travelproject\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map