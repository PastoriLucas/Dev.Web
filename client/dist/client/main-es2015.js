(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Valou Kervyn - Artiste peintre';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["body[_ngcontent-%COMP%] {\n  background-color: #ededed;\n  margin: 0 -10px;\n}\n\n#logoValouKervynTop[_ngcontent-%COMP%] {\n  width: 20%;\n  float: left;\n  margin: 20px;\n}\n\n#toolbar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 75%;\n  height: 40%;\n  \n  margin-top: 7%;\n  margin-right: 0%;\n  margin-left: 25%;\n  background-color: lightblue;\n}\n\n#hoverHome[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 0;\n}\n\n#hoverGallery[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 18%;\n}\n\n#hoverPresentation[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 37%;\n}\n\n#hoverEvent[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 62.5%;\n}\n\n#hoverContact[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: 80%;\n}\n\n.itemToolbar[_ngcontent-%COMP%] {\n  color: black;\n  background-color: #ededed;\n  position: relative;\n  padding: 13px 40px;\n  margin: 5% 1.5%;\n  text-align: left;\n  text-decoration: none;\n  font-size: 120%;\n}\n\n.topnav[_ngcontent-%COMP%] {\n  background-color: white;\n  overflow: hidden;\n  margin: -10px 5% 0%;\n}\n\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #e4e4e4;\n  border-bottom: solid 3px black;\n}\n\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background-color: lightgray;\n  color: black;\n}\n\n.selectLanguage[_ngcontent-%COMP%] {\n  float : right;\n  color: black;\n  padding: 10px;\n  text-align: center;\n  font-size: 17px;\n  text-decoration: none;\n}\n\n#divSelectLanguage[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 2%;\n  background: #ededed;\n}\n\n#loginDiv[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 3%;\n  background: #ededed;\n  text-align: center;\n  margin-top: 10px;\n}\n\n#login[_ngcontent-%COMP%] {\n  background-color: #ededed;\n  font-size: 15px;\n  text-decoration: none;\n  text-align: center;\n  color: black;\n  padding: 10px;\n\n}\n\n#login[_ngcontent-%COMP%]:hover {\n  background-color: #e4e4e4;\n}\n\n.hrow[_ngcontent-%COMP%] {\n  margin-left: 5%;\n  margin-right: 5%;\n  background-color: white;\n}\n\n.botnav[_ngcontent-%COMP%] {\n  background-color: white;\n  margin: 0 5% -10px;\n  text-align: center;\n}\n\n#logoValouKervynBot[_ngcontent-%COMP%] {\n  width: 20%;\n  margin: 20px 40%;\n}\n\n#facebook[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 10px 2%;\n}\n\n#littleNav[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.littlenav[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n  background-color: #e4e4e4;\n  padding: 5px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEOztBQUV2RDtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgbWFyZ2luOiAwIC0xMHB4O1xufVxuXG4jbG9nb1ZhbG91S2VydnluVG9wIHtcbiAgd2lkdGg6IDIwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuI3Rvb2xiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA3NSU7XG4gIGhlaWdodDogNDAlO1xuICAvKm1hcmdpbjogNyUgMTAlIDUlIDI1JTsqL1xuICBtYXJnaW4tdG9wOiA3JTtcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xufVxuXG4jaG92ZXJIb21lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMDtcbn1cblxuI2hvdmVyR2FsbGVyeSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDE4JTtcbn1cblxuI2hvdmVyUHJlc2VudGF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogMzclO1xufVxuXG4jaG92ZXJFdmVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IDYyLjUlO1xufVxuXG4jaG92ZXJDb250YWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogODAlO1xufVxuXG5cbi5pdGVtVG9vbGJhciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxM3B4IDQwcHg7XG4gIG1hcmdpbjogNSUgMS41JTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDEyMCU7XG59XG5cbi50b3BuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAtMTBweCA1JSAwJTtcbn1cblxuLnRvcG5hdiBhOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xufVxuXG4udG9wbmF2IGEuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5zZWxlY3RMYW5ndWFnZSB7XG4gIGZsb2F0IDogcmlnaHQ7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNkaXZTZWxlY3RMYW5ndWFnZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuI2xvZ2luRGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDMlO1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbiNsb2dpbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTBweDtcblxufVxuXG4jbG9naW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xufVxuXG4uaHJvdyB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5ib3RuYXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAwIDUlIC0xMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNsb2dvVmFsb3VLZXJ2eW5Cb3Qge1xuICB3aWR0aDogMjAlO1xuICBtYXJnaW46IDIwcHggNDAlO1xufVxuXG4jZmFjZWJvb2sge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ib3RuYXYgaW1nIHtcbiAgbWFyZ2luOiAxMHB4IDIlO1xufVxuXG4jbGl0dGxlTmF2IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubGl0dGxlbmF2IHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _file_file_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./file/file.component */ "./src/app/file/file.component.ts");
/* harmony import */ var _french_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./french/home/home.component */ "./src/app/french/home/home.component.ts");
/* harmony import */ var _french_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./french/gallery/gallery.component */ "./src/app/french/gallery/gallery.component.ts");
/* harmony import */ var _french_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./french/gallery-detail/gallery-detail.component */ "./src/app/french/gallery-detail/gallery-detail.component.ts");
/* harmony import */ var _french_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./french/presentation/presentation.component */ "./src/app/french/presentation/presentation.component.ts");
/* harmony import */ var _french_event_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./french/event/event.component */ "./src/app/french/event/event.component.ts");
/* harmony import */ var _french_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./french/eventid/eventid.component */ "./src/app/french/eventid/eventid.component.ts");
/* harmony import */ var _french_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./french/contact/contact.component */ "./src/app/french/contact/contact.component.ts");
/* harmony import */ var _french_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./french/admin/admin.component */ "./src/app/french/admin/admin.component.ts");
/* harmony import */ var _french_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./french/login/login.component */ "./src/app/french/login/login.component.ts");
/* harmony import */ var _french_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./french/inscription/inscription.component */ "./src/app/french/inscription/inscription.component.ts");
/* harmony import */ var _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./french/footer/footer.component */ "./src/app/french/footer/footer.component.ts");
/* harmony import */ var _french_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./french/header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _english_home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./english/home/home.component */ "./src/app/english/home/home.component.ts");
/* harmony import */ var _english_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./english/gallery/gallery.component */ "./src/app/english/gallery/gallery.component.ts");
/* harmony import */ var _english_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./english/gallery-detail/gallery-detail.component */ "./src/app/english/gallery-detail/gallery-detail.component.ts");
/* harmony import */ var _english_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./english/presentation/presentation.component */ "./src/app/english/presentation/presentation.component.ts");
/* harmony import */ var _english_event_event_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./english/event/event.component */ "./src/app/english/event/event.component.ts");
/* harmony import */ var _english_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./english/eventid/eventid.component */ "./src/app/english/eventid/eventid.component.ts");
/* harmony import */ var _english_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./english/contact/contact.component */ "./src/app/english/contact/contact.component.ts");
/* harmony import */ var _english_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./english/admin/admin.component */ "./src/app/english/admin/admin.component.ts");
/* harmony import */ var _english_login_login_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./english/login/login.component */ "./src/app/english/login/login.component.ts");
/* harmony import */ var _english_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./english/inscription/inscription.component */ "./src/app/english/inscription/inscription.component.ts");
/* harmony import */ var _english_register_register_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./english/register/register.component */ "./src/app/english/register/register.component.ts");
/* harmony import */ var _english_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./english/footer/footer.component */ "./src/app/english/footer/footer.component.ts");
/* harmony import */ var _english_header_header_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./english/header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _dutch_home_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dutch/home/home.component */ "./src/app/dutch/home/home.component.ts");
/* harmony import */ var _dutch_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dutch/gallery/gallery.component */ "./src/app/dutch/gallery/gallery.component.ts");
/* harmony import */ var _dutch_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dutch/gallery-detail/gallery-detail.component */ "./src/app/dutch/gallery-detail/gallery-detail.component.ts");
/* harmony import */ var _dutch_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./dutch/presentation/presentation.component */ "./src/app/dutch/presentation/presentation.component.ts");
/* harmony import */ var _dutch_event_event_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./dutch/event/event.component */ "./src/app/dutch/event/event.component.ts");
/* harmony import */ var _dutch_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./dutch/eventid/eventid.component */ "./src/app/dutch/eventid/eventid.component.ts");
/* harmony import */ var _dutch_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./dutch/contact/contact.component */ "./src/app/dutch/contact/contact.component.ts");
/* harmony import */ var _dutch_admin_admin_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./dutch/admin/admin.component */ "./src/app/dutch/admin/admin.component.ts");
/* harmony import */ var _dutch_login_login_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./dutch/login/login.component */ "./src/app/dutch/login/login.component.ts");
/* harmony import */ var _dutch_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./dutch/inscription/inscription.component */ "./src/app/dutch/inscription/inscription.component.ts");
/* harmony import */ var _dutch_register_register_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./dutch/register/register.component */ "./src/app/dutch/register/register.component.ts");
/* harmony import */ var _dutch_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dutch/footer/footer.component */ "./src/app/dutch/footer/footer.component.ts");
/* harmony import */ var _dutch_header_header_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dutch/header/header.component */ "./src/app/dutch/header/header.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");









/* *****************************************************************************************
                                        FRENCH
 ******************************************************************************************/












/* *****************************************************************************************
                                        ENGLISH
 ******************************************************************************************/













/* *****************************************************************************************
                                        DUTCH
 ******************************************************************************************/

















const appRoutes = [
    { path: 'fr/file', component: _file_file_component__WEBPACK_IMPORTED_MODULE_8__["FileComponent"] },
    /*FRENCH*/
    { path: 'fr/gallery', component: _french_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["FrGalleryComponent"] },
    { path: 'fr/gallery/:id', component: _french_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_11__["FrGalleryDetailComponent"] },
    { path: 'fr/presentation', component: _french_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__["FrPresentationComponent"] },
    { path: 'fr/event', component: _french_event_event_component__WEBPACK_IMPORTED_MODULE_13__["FrEventComponent"] },
    { path: 'fr/contact', component: _french_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["FrContactComponent"] },
    { path: 'fr/home', component: _french_home_home_component__WEBPACK_IMPORTED_MODULE_9__["FrHomeComponent"] },
    { path: 'fr/event/:id', component: _french_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_14__["FrEventidComponent"] },
    { path: 'fr/admin', component: _french_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["FrAdminComponent"] },
    { path: 'fr/login', component: _french_login_login_component__WEBPACK_IMPORTED_MODULE_17__["FrLoginComponent"] },
    { path: 'fr/inscription', component: _french_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_18__["FrInscriptionComponent"] },
    /*ENGLISH*/
    { path: 'en/gallery', component: _english_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["EnGalleryComponent"] },
    { path: 'en/gallery/:id', component: _english_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_23__["EnGalleryDetailComponent"] },
    { path: 'en/presentation', component: _english_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_24__["EnPresentationComponent"] },
    { path: 'en/event', component: _english_event_event_component__WEBPACK_IMPORTED_MODULE_25__["EnEventComponent"] },
    { path: 'en/contact', component: _english_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["EnContactComponent"] },
    { path: 'en/home', component: _english_home_home_component__WEBPACK_IMPORTED_MODULE_21__["EnHomeComponent"] },
    { path: 'en/event/:id', component: _english_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_26__["EnEventidComponent"] },
    { path: 'en/admin', component: _english_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["EnAdminComponent"] },
    { path: 'en/login', component: _english_login_login_component__WEBPACK_IMPORTED_MODULE_29__["EnLoginComponent"] },
    { path: 'en/inscription', component: _english_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_30__["EnInscriptionComponent"] },
    { path: 'en/register', component: _english_register_register_component__WEBPACK_IMPORTED_MODULE_31__["EnRegisterComponent"] },
    /*DUTCH*/
    { path: 'nl/gallery', component: _dutch_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_35__["NlGalleryComponent"] },
    { path: 'nl/gallery/:id', component: _dutch_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_36__["NlGalleryDetailComponent"] },
    { path: 'nl/presentation', component: _dutch_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_37__["NlPresentationComponent"] },
    { path: 'nl/event', component: _dutch_event_event_component__WEBPACK_IMPORTED_MODULE_38__["NlEventComponent"] },
    { path: 'nl/contact', component: _dutch_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__["NlContactComponent"] },
    { path: 'nl/home', component: _dutch_home_home_component__WEBPACK_IMPORTED_MODULE_34__["NlHomeComponent"] },
    { path: 'nl/event/:id', component: _dutch_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_39__["NlEventidComponent"] },
    { path: 'nl/admin', component: _dutch_admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["NlAdminComponent"] },
    { path: 'nl/login', component: _dutch_login_login_component__WEBPACK_IMPORTED_MODULE_42__["NlLoginComponent"] },
    { path: 'nl/inscription', component: _dutch_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_43__["NlInscriptionComponent"] },
    { path: 'nl/register', component: _dutch_register_register_component__WEBPACK_IMPORTED_MODULE_44__["NlRegisterComponent"] },
    { path: '**',
        redirectTo: 'fr/home',
        pathMatch: 'full'
    }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
            _agm_core__WEBPACK_IMPORTED_MODULE_47__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCq4TvPKogUIilCh_38VgrV4URD5o1a8xk'
            }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _file_file_component__WEBPACK_IMPORTED_MODULE_8__["FileComponent"],
        /*FRENCH*/
        _french_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["FrGalleryComponent"],
        _french_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__["FrPresentationComponent"],
        _french_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["FrContactComponent"],
        _french_event_event_component__WEBPACK_IMPORTED_MODULE_13__["FrEventComponent"],
        _french_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_14__["FrEventidComponent"],
        _french_home_home_component__WEBPACK_IMPORTED_MODULE_9__["FrHomeComponent"],
        _french_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_11__["FrGalleryDetailComponent"],
        _french_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["FrAdminComponent"],
        _french_login_login_component__WEBPACK_IMPORTED_MODULE_17__["FrLoginComponent"],
        _french_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_18__["FrInscriptionComponent"],
        _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FrFooterComponent"],
        _french_header_header_component__WEBPACK_IMPORTED_MODULE_20__["FrHeaderComponent"],
        /*ENGLISH*/
        _english_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["EnGalleryComponent"],
        _english_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_24__["EnPresentationComponent"],
        _english_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["EnContactComponent"],
        _english_event_event_component__WEBPACK_IMPORTED_MODULE_25__["EnEventComponent"],
        _english_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_26__["EnEventidComponent"],
        _english_home_home_component__WEBPACK_IMPORTED_MODULE_21__["EnHomeComponent"],
        _english_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_23__["EnGalleryDetailComponent"],
        _english_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["EnAdminComponent"],
        _english_login_login_component__WEBPACK_IMPORTED_MODULE_29__["EnLoginComponent"],
        _english_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_30__["EnInscriptionComponent"],
        _english_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__["EnFooterComponent"],
        _english_header_header_component__WEBPACK_IMPORTED_MODULE_33__["EnHeaderComponent"],
        _english_register_register_component__WEBPACK_IMPORTED_MODULE_31__["EnRegisterComponent"],
        /*DUTCH*/
        _dutch_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_35__["NlGalleryComponent"],
        _dutch_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_37__["NlPresentationComponent"],
        _dutch_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__["NlContactComponent"],
        _dutch_event_event_component__WEBPACK_IMPORTED_MODULE_38__["NlEventComponent"],
        _dutch_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_39__["NlEventidComponent"],
        _dutch_home_home_component__WEBPACK_IMPORTED_MODULE_34__["NlHomeComponent"],
        _dutch_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_36__["NlGalleryDetailComponent"],
        _dutch_admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["NlAdminComponent"],
        _dutch_login_login_component__WEBPACK_IMPORTED_MODULE_42__["NlLoginComponent"],
        _dutch_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_43__["NlInscriptionComponent"],
        _dutch_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__["NlFooterComponent"],
        _dutch_header_header_component__WEBPACK_IMPORTED_MODULE_46__["NlHeaderComponent"],
        _dutch_register_register_component__WEBPACK_IMPORTED_MODULE_44__["NlRegisterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _agm_core__WEBPACK_IMPORTED_MODULE_47__["AgmCoreModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(appRoutes, { enableTracing: false }),
                    _agm_core__WEBPACK_IMPORTED_MODULE_47__["AgmCoreModule"].forRoot({
                        apiKey: 'AIzaSyCq4TvPKogUIilCh_38VgrV4URD5o1a8xk'
                    }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _file_file_component__WEBPACK_IMPORTED_MODULE_8__["FileComponent"],
                    /*FRENCH*/
                    _french_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["FrGalleryComponent"],
                    _french_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_12__["FrPresentationComponent"],
                    _french_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["FrContactComponent"],
                    _french_event_event_component__WEBPACK_IMPORTED_MODULE_13__["FrEventComponent"],
                    _french_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_14__["FrEventidComponent"],
                    _french_home_home_component__WEBPACK_IMPORTED_MODULE_9__["FrHomeComponent"],
                    _french_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_11__["FrGalleryDetailComponent"],
                    _french_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["FrAdminComponent"],
                    _french_login_login_component__WEBPACK_IMPORTED_MODULE_17__["FrLoginComponent"],
                    _french_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_18__["FrInscriptionComponent"],
                    _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FrFooterComponent"],
                    _french_header_header_component__WEBPACK_IMPORTED_MODULE_20__["FrHeaderComponent"],
                    /*ENGLISH*/
                    _english_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_22__["EnGalleryComponent"],
                    _english_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_24__["EnPresentationComponent"],
                    _english_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["EnContactComponent"],
                    _english_event_event_component__WEBPACK_IMPORTED_MODULE_25__["EnEventComponent"],
                    _english_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_26__["EnEventidComponent"],
                    _english_home_home_component__WEBPACK_IMPORTED_MODULE_21__["EnHomeComponent"],
                    _english_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_23__["EnGalleryDetailComponent"],
                    _english_admin_admin_component__WEBPACK_IMPORTED_MODULE_28__["EnAdminComponent"],
                    _english_login_login_component__WEBPACK_IMPORTED_MODULE_29__["EnLoginComponent"],
                    _english_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_30__["EnInscriptionComponent"],
                    _english_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__["EnFooterComponent"],
                    _english_header_header_component__WEBPACK_IMPORTED_MODULE_33__["EnHeaderComponent"],
                    _english_register_register_component__WEBPACK_IMPORTED_MODULE_31__["EnRegisterComponent"],
                    /*DUTCH*/
                    _dutch_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_35__["NlGalleryComponent"],
                    _dutch_presentation_presentation_component__WEBPACK_IMPORTED_MODULE_37__["NlPresentationComponent"],
                    _dutch_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__["NlContactComponent"],
                    _dutch_event_event_component__WEBPACK_IMPORTED_MODULE_38__["NlEventComponent"],
                    _dutch_eventid_eventid_component__WEBPACK_IMPORTED_MODULE_39__["NlEventidComponent"],
                    _dutch_home_home_component__WEBPACK_IMPORTED_MODULE_34__["NlHomeComponent"],
                    _dutch_gallery_detail_gallery_detail_component__WEBPACK_IMPORTED_MODULE_36__["NlGalleryDetailComponent"],
                    _dutch_admin_admin_component__WEBPACK_IMPORTED_MODULE_41__["NlAdminComponent"],
                    _dutch_login_login_component__WEBPACK_IMPORTED_MODULE_42__["NlLoginComponent"],
                    _dutch_inscription_inscription_component__WEBPACK_IMPORTED_MODULE_43__["NlInscriptionComponent"],
                    _dutch_footer_footer_component__WEBPACK_IMPORTED_MODULE_45__["NlFooterComponent"],
                    _dutch_header_header_component__WEBPACK_IMPORTED_MODULE_46__["NlHeaderComponent"],
                    _dutch_register_register_component__WEBPACK_IMPORTED_MODULE_44__["NlRegisterComponent"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]],
                providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dutch/admin/admin.component.ts":
/*!************************************************!*\
  !*** ./src/app/dutch/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: NlAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlAdminComponent", function() { return NlAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class NlAdminComponent {
    constructor() {
    }
    ngOnInit() {
    }
    send(values) {
        console.log(values);
    }
}
NlAdminComponent.ɵfac = function NlAdminComponent_Factory(t) { return new (t || NlAdminComponent)(); };
NlAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlAdminComponent, selectors: [["app-contact"]], decls: 37, vars: 0, consts: [[1, "admin"], ["id", "gallery"], ["name", "gallery", "id", "img", 3, "ngSubmit"], ["type", "text", "required", "", "placeholder", "Nom", "id", "imageName"], ["type", "text", "required", "", "placeholder", "Taille", "id", "imageSize"], ["type", "file", "required", "", "id", "imageFile"], ["type", "submit", 1, "submit"], ["id", "event"], ["name", "event", "id", "evnt", "method", "post", 3, "ngSubmit"], ["type", "text", "placeholder", "Nom", "id", "eventName"], ["type", "date", "id", "eventBegin"], ["type", "date", "id", "eventEnd"], ["type", "text", "placeholder", "Description", "id", "eventDescription"], ["type", "text", "placeholder", "Lieux", "id", "eventLocation"], ["type", "file", "id", "eventFile"]], template: function NlAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ajouter une image \u00E0 la gallerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NlAdminComponent_Template_form_ngSubmit_4_listener() { return ctx.send(ctx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Taille de la toile : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Image : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ajouter un evenement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NlAdminComponent_Template_form_ngSubmit_18_listener() { return ctx.send(ctx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Dates : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lieux : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Image : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".admin[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 22px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 2px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4ge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5zdWJtaXQge1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dutch/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dutch/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: NlContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlContactComponent", function() { return NlContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _french_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../french/header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../french/footer/footer.component */ "./src/app/french/footer/footer.component.ts");







class NlContactComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.mailForm = this.formBuilder.group({
            formName: '',
            formMail: '',
            formSjt: '',
            formMsg: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(res) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:8888/contact', '', {
            params: {
                name: res.formName,
                envoyeur: res.formMail,
                objet: res.formSjt,
                texte: res.formMsg
            },
            headers: headers
        })
            .subscribe(result => {
            if (result === false) {
                console.log('Mail not ok');
            }
            else {
                console.log('Mail ok');
            }
        });
    }
}
NlContactComponent.ɵfac = function NlContactComponent_Factory(t) { return new (t || NlContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
NlContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlContactComponent, selectors: [["app-contact"]], decls: 55, vars: 1, consts: [[1, "pageWeb"], [1, "pageContact"], [1, "contactGauche"], [1, "espaceGauche"], ["id", "phone"], [1, "separator"], ["id", "mail"], [1, "contactDroit"], ["id", "form", 3, "formGroup", "ngSubmit"], ["id", "formSuperieur"], ["id", "nameLabel", "for", "formName"], ["id", "mailLabel", "for", "formMail"], ["type", "text", "id", "formName", "name", "formName", "formControlName", "formName"], ["type", "text", "id", "formMail", "name", "formMail", "formControlName", "formMail"], ["for", "formSjt"], ["type", "text", "id", "formSjt", "name", "formSjt", "formControlName", "formSjt"], ["for", "formMsg"], ["type", "text", "id", "formMsg", "name", "formMsg", "formControlName", "formMsg"], ["type", "submit", "id", "sbt"], ["type", "reset", "id", "rst"]], template: function NlContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "<<<<<<< HEAD:client/src/app/dutch/contact/contact.component.html\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rien de fou par ici pour le moment... Revenez plus tard !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n=======\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Num\u00E9ro de t\u00E9l\u00E9phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "0470proute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "AUTRETEST@GMAGUEULE.COM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NlContactComponent_Template_form_ngSubmit_24_listener() { return ctx.onSubmit(ctx.mailForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Votre nom (obligatoire)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Votre e-mail (obligatoire)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sujet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Votre message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n>>>>>>> Luc.Pas:client/src/app/contact/contact.component.html\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mailForm);
    } }, directives: [_french_header_header_component__WEBPACK_IMPORTED_MODULE_3__["FrHeaderComponent"], _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".pageContact[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  z-index: 1;\r\n  height: 800px;\r\n}\r\n.contactDroit[_ngcontent-%COMP%]{\r\n  float: right;\r\n width: 65%;\r\n  padding: 35px 0px;\r\n}\r\n.contactGauche[_ngcontent-%COMP%]{\r\n float: left;\r\n  width: 25% ;\r\n  margin: 0 2%;\r\n}\r\n.separator[_ngcontent-%COMP%]{\r\n  display: block;\r\n  height: 1px;\r\n  width: 95%;\r\n  border-top: 2px dashed #b2b2b2;\r\n  margin: 2% 0%;\r\n}\r\n.espaceGauche[_ngcontent-%COMP%] {\r\n  padding: 15px 0px;\r\n}\r\n#formName[_ngcontent-%COMP%] {\r\n  align-content: flex-start;\r\n  width: 45%;\r\n  float :left;\r\n  height: 20%;\r\n}\r\n#formMail[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  margin-left: 4%;\r\n  height: 20%;\r\n}\r\n#formSjt[_ngcontent-%COMP%]{\r\n  margin: 2% 0%;\r\n  width: 95%;\r\n}\r\n#formMsg[_ngcontent-%COMP%]{\r\n  width: 95%;\r\n  height: 250px;\r\n}\r\n#formSuperieur[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n#sbt[_ngcontent-%COMP%]{\r\n  margin-right: 20px;\r\n}\r\n#mailLabel[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  height: 40%;\r\n}\r\n#nameLabel[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  height: 40%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7Q0FDYixVQUFVO0VBQ1QsaUJBQWlCO0FBQ25CO0FBRUE7Q0FDQyxXQUFXO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsVUFBVTtBQUNaO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VDb250YWN0IHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxuICBoZWlnaHQ6IDgwMHB4O1xyXG59XHJcbi5jb250YWN0RHJvaXR7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gd2lkdGg6IDY1JTtcclxuICBwYWRkaW5nOiAzNXB4IDBweDtcclxufVxyXG5cclxuLmNvbnRhY3RHYXVjaGV7XHJcbiBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjUlIDtcclxuICBtYXJnaW46IDAgMiU7XHJcbn1cclxuLnNlcGFyYXRvcntcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDFweDtcclxuICB3aWR0aDogOTUlO1xyXG4gIGJvcmRlci10b3A6IDJweCBkYXNoZWQgI2IyYjJiMjtcclxuICBtYXJnaW46IDIlIDAlO1xyXG59XHJcblxyXG4uZXNwYWNlR2F1Y2hlIHtcclxuICBwYWRkaW5nOiAxNXB4IDBweDtcclxufVxyXG5cclxuI2Zvcm1OYW1lIHtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgZmxvYXQgOmxlZnQ7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuI2Zvcm1NYWlse1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gIGhlaWdodDogMjAlO1xyXG59XHJcbiNmb3JtU2p0e1xyXG4gIG1hcmdpbjogMiUgMCU7XHJcbiAgd2lkdGg6IDk1JTtcclxufVxyXG4jZm9ybU1zZ3tcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbn1cclxuI2Zvcm1TdXBlcmlldXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuI3NidHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuI21haWxMYWJlbHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcbiNuYW1lTGFiZWx7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dutch/event/event.component.ts":
/*!************************************************!*\
  !*** ./src/app/dutch/event/event.component.ts ***!
  \************************************************/
/*! exports provided: NlEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlEventComponent", function() { return NlEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _french_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../french/header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../french/footer/footer.component */ "./src/app/french/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function NlEventComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oeuvre_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", oeuvre_r11.eventId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", oeuvre_r11.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](oeuvre_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", oeuvre_r11.dateBegin, " - ", oeuvre_r11.dateEnd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](oeuvre_r11.place);
} }
class NlEventComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/evenement`, '', {
            headers
        })
            .subscribe(result => {
            this.transition = result;
        });
    }
}
NlEventComponent.ɵfac = function NlEventComponent_Factory(t) { return new (t || NlEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NlEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlEventComponent, selectors: [["app-event"]], decls: 4, vars: 1, consts: [[1, "pageEvent"], ["class", "event", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "event", 3, "routerLink"], ["alt", "oeuvre", 1, "imgs", 3, "src"], [1, "moment"], [1, "location"]], template: function NlEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NlEventComponent_div_2_Template, 9, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transition);
    } }, directives: [_french_header_header_component__WEBPACK_IMPORTED_MODULE_2__["FrHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".pageEvent[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]{\r\n  margin-left: 30%;\r\n  margin-right: 30%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  border: 0;\r\n  background-color: #e4e4e4;\r\n  margin: 1% 5%;\r\n  font-size: 20px;\r\n  padding: 0 5%;\r\n  position: center;\r\n  float: contour;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  border-bottom: 3px black solid;\r\n  background-color: #ededed;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]{\r\n  position: center;\r\n  height: 150px;\r\n  background-color: #ededed;\r\n  border-radius: 5px;\r\n  margin: 0 10px 10px 10px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-right: 10px;\r\n  border-radius: 5px 0 0 5px;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n  margin-bottom: 2px;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: -121px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]:hover{\r\n  background-color: #e4e4e4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtBQUMzQjs7QUFHQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUdBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvZHV0Y2gvZXZlbnQvZXZlbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlRXZlbnQge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG5cclxuLm9yZGVye1xyXG4gIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuLm9yZGVyIGF7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgbWFyZ2luOiAxJSA1JTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogMCA1JTtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGZsb2F0OiBjb250b3VyO1xyXG59XHJcbi5vcmRlciBhOmhvdmVye1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBibGFjayBzb2xpZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG59XHJcblxyXG5cclxuLmV2ZW50e1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IDAgMTBweCAxMHB4IDEwcHg7XHJcbn1cclxuaW1ne1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuaDF7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbmlmcmFtZXtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogLTEyMXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuXHJcbi5ldmVudDpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dutch/eventid/eventid.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dutch/eventid/eventid.component.ts ***!
  \****************************************************/
/*! exports provided: NlEventidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlEventidComponent", function() { return NlEventidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class NlEventidComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/evenement`, '', {
            headers
        })
            .subscribe(result => {
            // @ts-ignore
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < result.length; i++) {
                const page = window.location.pathname.split('/').pop();
                if (result[i].eventId.toString() === page) {
                    this.event = result[i];
                    return this.event;
                }
            }
        });
    }
}
NlEventidComponent.ɵfac = function NlEventidComponent_Factory(t) { return new (t || NlEventidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NlEventidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlEventidComponent, selectors: [["app-event"]], decls: 11, vars: 5, consts: [["id", "evenement"], ["id", "imagesArea"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.433388115995!2d4.352145815954223!3d50.84165836697961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47c348161f1%3A0x66803a34a8004870!2sPlace%20du%20Grand%20Sablon%202%2C%201000%20Bruxelles!5e0!3m2!1sen!2sbe!4v1585072468479!5m2!1sen!2sbe", "aria-hidden", "false", "tabindex", "0"], ["alt", "image", 3, "src"], ["id", "textArea"], [1, "titre"], [1, "description"], [1, "date"]], template: function NlEventidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets", ctx.event.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.event.dateBegin, " - ", ctx.event.dateEnd, "");
    } }, styles: ["#evenement[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  min-height: 1000px;\r\n  font-size: 20px;\r\n}\r\n\r\n#imagesArea[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: left;\r\n  border-right: solid #e4e4e4 3px;\r\n  text-align: center;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  height: 300px;\r\n  border: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 20px;\r\n}\r\n\r\n#textArea[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: -900px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvZXZlbnRpZC9ldmVudGlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL2V2ZW50aWQvZXZlbnRpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2V2ZW5lbWVudCB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMDBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbiNpbWFnZXNBcmVhIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgI2U0ZTRlNCAzcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlmcmFtZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5pbWcge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuI3RleHRBcmVhIHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTkwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlEventidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './eventid.component.html',
                styleUrls: ['./eventid.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dutch/footer/footer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dutch/footer/footer.component.ts ***!
  \**************************************************/
/*! exports provided: NlFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlFooterComponent", function() { return NlFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NlFooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NlFooterComponent.ɵfac = function NlFooterComponent_Factory(t) { return new (t || NlFooterComponent)(); };
NlFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlFooterComponent, selectors: [["app-footernl"]], decls: 32, vars: 0, consts: [[1, "botnav"], [2, "margin", "0 5%"], ["href", "/fr/home"], ["id", "logoValouKervynBot", "src", "../assets/img/logoValouKervyn.png", "alt", "logoArtiste"], ["href", "fr/home", 1, "littlenav"], ["href", "fr/gallery", 1, "littlenav"], ["href", "fr/presentation", 1, "littlenav"], ["href", "fr/event", 1, "littlenav"], ["href", "/contact", 1, "littlenav"], ["href", "https://www.facebook.com/valerie.kervyn/"], ["src", "../assets/img/logoFacebook.jpg", "width", "4%"], ["href", "https://www.instagram.com/valoukervyn/"], ["src", "../assets/img/logoInstagram.jpg", "width", "4%"]], template: function NlFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Valou Kervyn - Artiste peintre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact : 0491919191 | adresse.email@motiv0.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  margin: 0 -10px;\r\n}\r\n\r\n#logoValouKervynTop[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n  margin: 20px;\r\n}\r\n\r\n#toolbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 75%;\r\n  height: 40%;\r\n  \r\n  margin-top: 7%;\r\n  margin-right: 0%;\r\n  margin-left: 25%;\r\n  background-color: lightblue;\r\n}\r\n\r\n#hoverHome[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 0;\r\n}\r\n\r\n#hoverGallery[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 17%;\r\n}\r\n\r\n#hoverPresentation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 34%;\r\n}\r\n\r\n#hoverEvent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 57%;\r\n}\r\n\r\n#hoverContact[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 80%;\r\n}\r\n\r\n.itemToolbar[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: #ededed;\r\n  position: relative;\r\n  padding: 13px 40px;\r\n  margin: 5% 1.5%;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: -10px 5% 0%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\n.selectLanguage[_ngcontent-%COMP%] {\r\n  float : right;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  text-decoration: none;\r\n}\r\n\r\n#divSelectLanguage[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 2%;\r\n  background: #ededed;\r\n}\r\n\r\n#loginDiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 3%;\r\n  background: #ededed;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#login[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n#login[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.hrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: white;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5% -10px;\r\n  text-align: center;\r\n}\r\n\r\n#logoValouKervynBot[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 20px 40%;\r\n}\r\n\r\n#facebook[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 10px 2%;\r\n}\r\n\r\n#littleNav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.littlenav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: #e4e4e4;\r\n  padding: 5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDs7QUFFdkQ7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhOztBQUVmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIG1hcmdpbjogMCAtMTBweDtcclxufVxyXG5cclxuI2xvZ29WYWxvdUtlcnZ5blRvcCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiN0b29sYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDQwJTtcclxuICAvKm1hcmdpbjogNyUgMTAlIDUlIDI1JTsqL1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbiNob3ZlckhvbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuI2hvdmVyR2FsbGVyeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDE4JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbn1cclxuXHJcbiNob3ZlclByZXNlbnRhdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDM3JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiAzNCU7XHJcbn1cclxuXHJcbiNob3ZlckV2ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyptYXJnaW4tbGVmdDogNjIuNSU7Ki9cclxuICBtYXJnaW4tbGVmdDogNTclO1xyXG59XHJcblxyXG4jaG92ZXJDb250YWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcclxufVxyXG5cclxuXHJcbi5pdGVtVG9vbGJhciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEzcHggNDBweDtcclxuICBtYXJnaW46IDUlIDEuNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogLTEwcHggNSUgMCU7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zZWxlY3RMYW5ndWFnZSB7XHJcbiAgZmxvYXQgOiByaWdodDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4jZGl2U2VsZWN0TGFuZ3VhZ2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbn1cclxuXHJcbiNsb2dpbkRpdiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuI2xvZ2luOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcblxyXG4uaHJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3RuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1JSAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2dvVmFsb3VLZXJ2eW5Cb3Qge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDQwJTtcclxufVxyXG5cclxuI2ZhY2Vib29rIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3RuYXYgaW1nIHtcclxuICBtYXJnaW46IDEwcHggMiU7XHJcbn1cclxuXHJcbiNsaXR0bGVOYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpdHRsZW5hdiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footernl',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dutch/gallery-detail/gallery-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dutch/gallery-detail/gallery-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: NlGalleryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlGalleryDetailComponent", function() { return NlGalleryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class NlGalleryDetailComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.url = 0;
        this.currentImage = '';
    }
    ngOnInit() {
        this.currentImage = this.router.url.substr(9);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/galerie`, '', {
            headers: headers
        })
            .subscribe(result => {
            this.paints = result;
            console.log('Current image loaded : Id ' + this.currentImage);
            console.log(result);
            // tslint:disable-next-line:forin
            for (let i of this.paints) {
                console.log(i.id);
                console.log(this.currentImage);
                if (this.currentImage === i.id.toString()) {
                    console.log(i);
                    this.actualPaint = i;
                }
            }
        });
    }
}
NlGalleryDetailComponent.ɵfac = function NlGalleryDetailComponent_Factory(t) { return new (t || NlGalleryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NlGalleryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlGalleryDetailComponent, selectors: [["app-gallery-detail"]], decls: 14, vars: 4, consts: [[1, "pageWeb"], [1, "imageEtDetails"], ["id", "image", "alt", "oeuvre", 3, "src"], [1, "details"]], template: function NlGalleryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Details de l'oeuvre :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.actualPaint.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom : ", ctx.actualPaint.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Taille : ", ctx.actualPaint.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date de cr\u00E9ation : ", ctx.actualPaint.creationdate, "");
    } }, styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n\r\n.imageEtDetails[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 100%;\r\n  margin-top: -1.5%;\r\n}\r\n\r\n#image[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin-left: 1.5%;\r\n  margin-top: 1.5%;\r\n  margin-bottom: 1.5%;\r\n  width: 40%;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #e4e4e4;\r\n  float: right;\r\n  margin-right: 3%;\r\n  margin-top: 1.5%;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvZ2FsbGVyeS1kZXRhaWwvZ2FsbGVyeS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOztBQUVGO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvZHV0Y2gvZ2FsbGVyeS1kZXRhaWwvZ2FsbGVyeS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1nIHtcclxuICBtYXJnaW46IDAuNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbn0qL1xyXG5cclxuLnBhZ2VXZWIge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmltYWdlRXREZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAtMS41JTtcclxufVxyXG4jaW1hZ2Uge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjUlO1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5kZXRhaWxzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlGalleryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-detail',
                templateUrl: './gallery-detail.component.html',
                styleUrls: ['./gallery-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dutch/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dutch/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: NlGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlGalleryComponent", function() { return NlGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _french_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../french/header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../french/footer/footer.component */ "./src/app/french/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function NlGalleryComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oeuvre_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", oeuvre_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", oeuvre_r9.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class NlGalleryComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/galerie`, '', {
            headers
        })
            .subscribe(result => {
            this.transition = result;
        });
    }
}
NlGalleryComponent.ɵfac = function NlGalleryComponent_Factory(t) { return new (t || NlGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NlGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlGalleryComponent, selectors: [["app-gallery"]], decls: 6, vars: 1, consts: [[1, "pageWeb"], [1, "blocImages"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["alt", "oeuvre", 1, "imgs", 3, "src"]], template: function NlGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NlGalleryComponent_a_4_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transition);
    } }, directives: [_french_header_header_component__WEBPACK_IMPORTED_MODULE_2__["FrHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n\r\n.blocImages[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.imgs[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.imgs[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 3% 2%;\r\n}\r\n\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZHV0Y2gvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVdlYiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmxvY0ltYWdlcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW1nczpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcbi5pbWdzIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbjogMyUgMiU7XHJcbn1cclxuXHJcbi5ob3Jyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dutch/header/header.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dutch/header/header.component.ts ***!
  \**************************************************/
/*! exports provided: NlHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlHeaderComponent", function() { return NlHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NlHeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NlHeaderComponent.ɵfac = function NlHeaderComponent_Factory(t) { return new (t || NlHeaderComponent)(); };
NlHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlHeaderComponent, selectors: [["app-headernl"]], decls: 30, vars: 0, consts: [[1, "topnav"], ["id", "divSelectLanguage"], ["href", "nl/home", 1, "selectLanguage"], ["href", "en/home", 1, "selectLanguage"], ["href", "fr/home", 1, "selectLanguage"], ["id", "loginDiv"], ["id", "login", "href", "fr/register"], ["href", ""], ["id", "logoValouKervynTop", "src", "../assets/img/logoValouKervyn.png", "alt", "logoArtiste"], ["id", "toolbar"], ["id", "hoverHome"], ["href", "fr/home", 1, "itemToolbar"], ["id", "hoverGallery"], ["href", "fr/gallery", 1, "itemToolbar"], ["id", "hoverPresentation"], ["href", "fr/presentation", 1, "itemToolbar"], ["id", "hoverEvent"], ["href", "fr/event", 1, "itemToolbar"], ["id", "hoverContact"], ["href", "fr/contact", 1, "itemToolbar"]], template: function NlHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mon Compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Galerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pr\u00E9sentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Evenements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  margin: 0 -10px;\r\n}\r\n\r\n#logoValouKervynTop[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n  margin: 20px;\r\n}\r\n\r\n#toolbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 75%;\r\n  height: 40%;\r\n  \r\n  margin-top: 7%;\r\n  margin-right: 0%;\r\n  margin-left: 25%;\r\n  background-color: lightblue;\r\n}\r\n\r\n#hoverHome[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 0;\r\n}\r\n\r\n#hoverGallery[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 17%;\r\n}\r\n\r\n#hoverPresentation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 34%;\r\n}\r\n\r\n#hoverEvent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 57%;\r\n}\r\n\r\n#hoverContact[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 80%;\r\n}\r\n\r\n.itemToolbar[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: #ededed;\r\n  position: relative;\r\n  padding: 13px 40px;\r\n  margin: 5% 1.5%;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: -10px 5% 0%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\n.selectLanguage[_ngcontent-%COMP%] {\r\n  float : right;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  text-decoration: none;\r\n}\r\n\r\n#divSelectLanguage[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 2%;\r\n  background: #ededed;\r\n}\r\n\r\n#loginDiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 3%;\r\n  background: #ededed;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#login[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n#login[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.hrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: white;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5% -10px;\r\n  text-align: center;\r\n}\r\n\r\n#logoValouKervynBot[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 20px 40%;\r\n}\r\n\r\n#facebook[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 10px 2%;\r\n}\r\n\r\n#littleNav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.littlenav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: #e4e4e4;\r\n  padding: 5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVEQUF1RDs7QUFFdkQ7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhOztBQUVmOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIG1hcmdpbjogMCAtMTBweDtcclxufVxyXG5cclxuI2xvZ29WYWxvdUtlcnZ5blRvcCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiN0b29sYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDQwJTtcclxuICAvKm1hcmdpbjogNyUgMTAlIDUlIDI1JTsqL1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbiNob3ZlckhvbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuI2hvdmVyR2FsbGVyeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDE4JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbn1cclxuXHJcbiNob3ZlclByZXNlbnRhdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDM3JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiAzNCU7XHJcbn1cclxuXHJcbiNob3ZlckV2ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyptYXJnaW4tbGVmdDogNjIuNSU7Ki9cclxuICBtYXJnaW4tbGVmdDogNTclO1xyXG59XHJcblxyXG4jaG92ZXJDb250YWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcclxufVxyXG5cclxuXHJcbi5pdGVtVG9vbGJhciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEzcHggNDBweDtcclxuICBtYXJnaW46IDUlIDEuNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogLTEwcHggNSUgMCU7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zZWxlY3RMYW5ndWFnZSB7XHJcbiAgZmxvYXQgOiByaWdodDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4jZGl2U2VsZWN0TGFuZ3VhZ2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbn1cclxuXHJcbiNsb2dpbkRpdiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuI2xvZ2luOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcblxyXG4uaHJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3RuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1JSAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2dvVmFsb3VLZXJ2eW5Cb3Qge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDQwJTtcclxufVxyXG5cclxuI2ZhY2Vib29rIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3RuYXYgaW1nIHtcclxuICBtYXJnaW46IDEwcHggMiU7XHJcbn1cclxuXHJcbiNsaXR0bGVOYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpdHRsZW5hdiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-headernl',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dutch/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dutch/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: NlHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlHomeComponent", function() { return NlHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/dutch/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/dutch/footer/footer.component.ts");




class NlHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NlHomeComponent.ɵfac = function NlHomeComponent_Factory(t) { return new (t || NlHomeComponent)(); };
NlHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlHomeComponent, selectors: [["app-frhome"]], decls: 58, vars: 0, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"], [1, "pageWeb"], ["id", "paraIntro"], [1, "horrow"], [1, "container"], ["id", "myCarousel", 1, "carousel", "slide"], [1, "carousel-indicators"], [1, "item1", "active"], [1, "item2"], [1, "item3"], [1, "item4"], ["role", "listbox", 1, "carousel-inner"], [1, "item", "active"], ["src", "../../assets/img/1.jpg", "alt", "Chania", "width", "460", "height", "345"], [1, "carousel-caption"], [1, "item"], ["src", "../../assets/img/2.jpg", "alt", "Chania", "width", "460", "height", "345"], ["src", "../../assets/img/3.jpg", "alt", "Flower", "width", "460", "height", "345"], ["src", "../../assets/img/4.jpg", "alt", "Flower", "width", "460", "height", "345"], ["href", "#myCarousel", "role", "button", 1, "left", "carousel-control"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-left"], [1, "sr-only"], ["href", "#myCarousel", "role", "button", 1, "right", "carousel-control"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-right"]], template: function NlHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-headernl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Bienvenue sur le site de Valou Kervyn. Ici, vous trouverez toutes les informations que vous pourriez rechercher \u00E0 propose de l'artiste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ol", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "paintings 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "paintings 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "paintings 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "paintings 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footernl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["NlHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["NlFooterComponent"]], styles: ["#flecheGauche[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: #ededed00;\r\n}\r\n\r\n.pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  z-index: 1;\r\n}\r\n\r\n#paraIntro[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  font-style: italic;\r\n  text-align: center;\r\n  font-size: 23px;\r\n}\r\n\r\n#blocImages[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 0 5%;\r\n  padding: 10px;\r\n}\r\n\r\n#imageDefilante[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n#flecheGauche[_ngcontent-%COMP%] {\r\n  width: 4%;\r\n  position: absolute;\r\n  margin-top: 220px;\r\n  margin-left: -75px;\r\n}\r\n\r\n#flecheDroite[_ngcontent-%COMP%] {\r\n  width: 4%;\r\n  position: absolute;\r\n  margin-top: 220px;\r\n  margin-right: -75px;\r\n}\r\n\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTs7QUFFRjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbWcge1xyXG4gIG1hcmdpbjogMC41JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxufSovXHJcblxyXG4jZmxlY2hlR2F1Y2hlIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkMDA7XHJcbn1cclxuLnBhZ2VXZWIge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbiNwYXJhSW50cm8ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4jYmxvY0ltYWdlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jaW1hZ2VEZWZpbGFudGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcblxyXG4jZmxlY2hlR2F1Y2hlIHtcclxuICB3aWR0aDogNCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi10b3A6IDIyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcclxufVxyXG5cclxuI2ZsZWNoZURyb2l0ZSB7XHJcbiAgd2lkdGg6IDQlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAyMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC03NXB4O1xyXG59XHJcblxyXG4uaG9ycm93IHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5cclxuXHJcbiJdfQ== */", ".carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n      width: 50%;\n      margin: auto;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-frhome',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dutch/inscription/inscription.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dutch/inscription/inscription.component.ts ***!
  \************************************************************/
/*! exports provided: NlInscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlInscriptionComponent", function() { return NlInscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class NlInscriptionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NlInscriptionComponent.ɵfac = function NlInscriptionComponent_Factory(t) { return new (t || NlInscriptionComponent)(); };
NlInscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlInscriptionComponent, selectors: [["app-contact"]], decls: 34, vars: 0, consts: [[1, "inscription"], ["id", "form", "action", "/inscription", "method", "post", "name", "register"], ["for", "firstname"], ["type", "text", "id", "firstname", "name", "firstName", "required", ""], ["for", "lastname"], ["type", "text", "id", "lastname", "name", "lastName", "required", ""], ["for", "mail"], ["type", "email", "id", "mail", "name", "mail", "required", ""], ["for", "pwd1"], ["type", "password", "id", "pwd1", "name", "pwd1", "required", ""], ["for", "shwPwd"], ["type", "checkbox", "name", "shwPwd", "id", "shwPwd", "onchange", "shwPassword()"], ["for", "pwd2"], ["type", "password", "id", "pwd2", "name", "pwd2", "required", ""], ["id", "notif"], ["type", "radio", "id", "yes", "name", "notif", "value", "yes", "checked", ""], ["for", "yes"], ["type", "radio", "id", "no", "name", "notif", "value", "no"], ["for", "no"], ["type", "submit", "id", "submit", "value", "Submit", "onmouseover", "passwordCheck(register)", 1, "submit"], ["href", "/login"], ["type", "button", "value", "Connection"]], template: function NlInscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pr\u00E9nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mail : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Voir le mot de passe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Confirmation du mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Voulez-vous recevoir des notifications ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Oui :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Non :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".inscription[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 1%;\r\n  margin: 1%;\r\n  font-family: \"Champagne & Limousines\", sans-serif;\r\n  font-size: 20px;\r\n  width: 30%;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n#shwPwd[_ngcontent-%COMP%] {\r\n  width: auto;\r\n}\r\n#notif[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  width: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9kdXRjaC9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmluc2NyaXB0aW9uIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBtYXJnaW46IDElO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNoYW1wYWduZSAmIExpbW91c2luZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4jc2h3UHdkIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuI25vdGlmIGlucHV0LCBsYWJlbCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlInscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './inscription.component.html',
                styleUrls: ['./inscription.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dutch/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/dutch/login/login.component.ts ***!
  \************************************************/
/*! exports provided: NlLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlLoginComponent", function() { return NlLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class NlLoginComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(res) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:8888/test', '', {
            params: {
                email: res.email,
                password: res.password
            },
            headers: headers
        })
            .subscribe(result => {
            if (result === false) {
                console.log('User not found');
            }
            else {
                console.log('User ok');
            }
        });
    }
}
NlLoginComponent.ɵfac = function NlLoginComponent_Factory(t) { return new (t || NlLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
NlLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlLoginComponent, selectors: [["app-login"]], decls: 22, vars: 1, consts: [[1, "pageWeb"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "required", "", "placeholder", "example@gmail.com", "id", "email", "formControlName", "email"], ["for", "password"], ["type", "password", "required", "", "id", "password", "placeholder", "password123", "formControlName", "password"], ["type", "submit", "id", "submit", "value", "Valider", 1, "bouton"], ["href", "/register"], ["type", "button", "id", "inscription", "value", "Inscription", 1, "bouton"]], template: function NlLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Connectez-vous \u00E0 votre compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NlLoginComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(ctx.checkoutForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "E-mail : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Password forgotten ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 1%;\r\n  margin: 1%;\r\n  font-family: \"Champagne & Limousines\", sans-serif;\r\n  font-size: 20px;\r\n  width: 30%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n\r\n#submit[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 14%;\r\n  margin-right: 2%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#inscription[_ngcontent-%COMP%] {\r\n  position :relative;\r\n  width: 14%;\r\n  margin-left: 2%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.bouton[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 3px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvZHV0Y2gvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2ViIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2hhbXBhZ25lICYgTGltb3VzaW5lc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbmxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbiNzdWJtaXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTQlO1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4jaW5zY3JpcHRpb24ge1xyXG4gIHBvc2l0aW9uIDpyZWxhdGl2ZTtcclxuICB3aWR0aDogMTQlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbn1cclxuXHJcbi5ib3V0b246aG92ZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dutch/presentation/presentation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dutch/presentation/presentation.component.ts ***!
  \**************************************************************/
/*! exports provided: NlPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlPresentationComponent", function() { return NlPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _french_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../french/header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../french/footer/footer.component */ "./src/app/french/footer/footer.component.ts");




class NlPresentationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NlPresentationComponent.ɵfac = function NlPresentationComponent_Factory(t) { return new (t || NlPresentationComponent)(); };
NlPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlPresentationComponent, selectors: [["app-presentation"]], decls: 34, vars: 0, consts: [[1, "pageWeb"], ["id", "titre"], ["id", "paragraphe"], ["src", "../../assets/img/ValouKervyn.jpg", "id", "img1"], ["id", "p1"]], template: function NlPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "<<<<<<< HEAD:client/src/app/dutch/presentation/presentation.component.html\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Rien de fou par ici pour le moment... Revenez plus tard !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-footerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n=======\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " A propos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Valou Kervyn Artiste peintre belge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " N\u00E9e \u00E0 Bruxelles le 21 juin 1973, Valou Kervyn d\u00E9couvre la passion pour le dessin et la peinture gr\u00E2ce \u00E0 un atelier qu\u2019elle suivait toutes les semaines depuis l\u2019\u00E2ge de 10 ans.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Apr\u00E8s des humanit\u00E9s artistiques, elle choisit des \u00E9tudes de graphisme \u00E0 l\u2019Ecole de Recherche Graphique (ERG) et Ecole du 75 (Bruxelles) suivi de cours du soir en illustration avec Alain Goffin. En 2012, lors de la cr\u00E9ation d\u2019un r\u00E9seau de d\u00E9coration d\u2019int\u00E9rieur qui regroupe artistes et artisans, elle retrouve ses premiers amours et avec bonheur le chemin de son atelier. Depuis lors, elle y passe ses journ\u00E9es...elles sont rythm\u00E9es de couleurs, de mati\u00E8res, de mouvements, de recherches et d\u2019amusements... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Ma d\u00E9marche artistique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Attir\u00E9e par les couleurs, les formes et les textures... Curieuse de travailler avec des \u00AB objets \u00BB et des \u00AB mat\u00E9riaux \u00BB diff\u00E9rents... Les couleurs sont superpos\u00E9es , l\u2019acrylique est travaill\u00E9e avec des palettes, des cartons, du fil de fer, du grillage\u2026 Les \u00E9motions sont aussi superpos\u00E9es\u2026 de nature expressive, jumel\u00E9e \u00E0 une forte sensibilit\u00E9, je projette les sentiments du moment m\u00E9lang\u00E9s avec les \u00E9motions ressenties lors de la construction et l\u2019organisation de la toile dans ma t\u00EAte. Je travaille en deux temps, une toile se construit\u2026 d\u2019abord j\u2019imagine, je r\u00EAve et puis au fil du temps je la vois, elle se r\u00E9alise, elle doit sortir\u2026 Alors, je m\u2019emballe, je regroupe le mat\u00E9riel et j\u2019attaque... Ce moment l\u00E0 est comme suspendu... C\u2019est magique quand les id\u00E9es, les ressentis deviennent mati\u00E8re, quand il faut rajouter du sable dans la peinture pour accentuer le mouvement, quand les palettes, les cartons remplis de couleurs transcrivent en toute libert\u00E9 ce qui a \u00E9t\u00E9 imagin\u00E9. Parfois c\u2019est explosif, parfois plus pos\u00E9 .... les techniques varient en fonction de mes \u00E9motions, par contre toujours en couleur\u2026 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\n>>>>>>> Luc.Pas:client/src/app/presentation/presentation.component.html\n");
    } }, directives: [_french_header_header_component__WEBPACK_IMPORTED_MODULE_1__["FrHeaderComponent"], _french_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FrFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5%;\r\n  padding: 1%;\r\n}\r\n#img1[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding: 2% 3% 2% 8%;\r\n}\r\n#p1[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  padding: 2% 2% 2% 0%;\r\n}\r\n#p2[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  padding: 2% 8% 2% 20%;\r\n  text-align: right;\r\n}\r\n#img2[_ngcontent-%COMP%]{\r\n  padding: 2% 2% 2% 8%;\r\n  width: 10%;\r\n}\r\n#p3[_ngcontent-%COMP%]{\r\n  padding: 2% 5%;\r\n  text-align: center;\r\n}\r\n#paragraphe[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n#titre[_ngcontent-%COMP%] {\r\n  padding: 0% 8%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7RUFDVixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsVUFBVTtBQUNaO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2R1dGNoL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2ViIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuI2ltZzEge1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgcGFkZGluZzogMiUgMyUgMiUgOCU7XHJcbn1cclxuI3Axe1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgcGFkZGluZzogMiUgMiUgMiUgMCU7XHJcbn1cclxuI3Aye1xyXG4gIHdpZHRoOiA0NSU7XHJcbiAgcGFkZGluZzogMiUgOCUgMiUgMjAlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiNpbWcye1xyXG4gIHBhZGRpbmc6IDIlIDIlIDIlIDglO1xyXG4gIHdpZHRoOiAxMCU7XHJcbn1cclxuI3Aze1xyXG4gIHBhZGRpbmc6IDIlIDUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jcGFyYWdyYXBoZXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4jdGl0cmUge1xyXG4gIHBhZGRpbmc6IDAlIDglO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlPresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/dutch/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dutch/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: NlRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NlRegisterComponent", function() { return NlRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NlRegisterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
NlRegisterComponent.ɵfac = function NlRegisterComponent_Factory(t) { return new (t || NlRegisterComponent)(); };
NlRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NlRegisterComponent, selectors: [["app-register"]], decls: 7, vars: 0, consts: [[1, "pageWeb"], ["href", "/login"]], template: function NlRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "D\u00E9j\u00E0 un compte ? Cliquez ici pour vous connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Register works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHV0Y2gvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9kdXRjaC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VXZWIge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NlRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/admin/admin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/english/admin/admin.component.ts ***!
  \**************************************************/
/*! exports provided: EnAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnAdminComponent", function() { return EnAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class EnAdminComponent {
    constructor() {
    }
    ngOnInit() {
    }
    send(values) {
        console.log(values);
        alert(values);
    }
}
EnAdminComponent.ɵfac = function EnAdminComponent_Factory(t) { return new (t || EnAdminComponent)(); };
EnAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnAdminComponent, selectors: [["app-contact"]], decls: 37, vars: 0, consts: [[1, "admin"], ["id", "gallery"], ["name", "gallery", "id", "img", "onsubmit", "send(this)"], ["type", "text", "required", "", "placeholder", "Nom", "id", "imageName"], ["type", "text", "required", "", "placeholder", "Taille", "id", "imageSize"], ["type", "file", "required", "", "id", "imageFile"], ["type", "submit", 1, "submit"], ["id", "event"], ["name", "event", "id", "evnt", "method", "post", 3, "ngSubmit"], ["type", "text", "placeholder", "Nom", "id", "eventName"], ["type", "date", "id", "eventBegin"], ["type", "date", "id", "eventEnd"], ["type", "text", "placeholder", "Description", "id", "eventDescription"], ["type", "text", "placeholder", "Lieux", "id", "eventLocation"], ["type", "file", "id", "eventFile"]], template: function EnAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ajouter une image \u00E0 la gallerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Taille de la toile : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Image : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ajouter un evenement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EnAdminComponent_Template_form_ngSubmit_18_listener() { return ctx.send(ctx); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Dates : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lieux : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Image : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"]], styles: [".admin[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 22px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 2px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZW5nbGlzaC9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMnB4O1xyXG59XHJcblxyXG4uc3VibWl0IHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/contact/contact.component.ts":
/*!******************************************************!*\
  !*** ./src/app/english/contact/contact.component.ts ***!
  \******************************************************/
/*! exports provided: EnContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnContactComponent", function() { return EnContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");




class EnContactComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnContactComponent.ɵfac = function EnContactComponent_Factory(t) { return new (t || EnContactComponent)(); };
EnContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnContactComponent, selectors: [["app-contact"]], decls: 7, vars: 0, consts: [[1, "pageWeb"]], template: function EnContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rien de fou par ici pour le moment... Revenez plus tard !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footeren");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["EnHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["EnFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5%;\r\n  padding: 1%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZW5nbGlzaC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2ViIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/event/event.component.ts":
/*!**************************************************!*\
  !*** ./src/app/english/event/event.component.ts ***!
  \**************************************************/
/*! exports provided: EnEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnEventComponent", function() { return EnEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function EnEventComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oeuvre_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", oeuvre_r7.eventId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", oeuvre_r7.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](oeuvre_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", oeuvre_r7.dateBegin, " - ", oeuvre_r7.dateEnd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](oeuvre_r7.place);
} }
class EnEventComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/evenement`, '', {
            headers
        })
            .subscribe(result => {
            this.transition = result;
            console.log(this.transition);
        });
    }
}
EnEventComponent.ɵfac = function EnEventComponent_Factory(t) { return new (t || EnEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EnEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnEventComponent, selectors: [["app-event"]], decls: 4, vars: 1, consts: [[1, "pageEvent"], ["class", "event", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "event", 3, "routerLink"], ["alt", "oeuvre", 1, "imgs", 3, "src"], [1, "moment"], [1, "location"]], template: function EnEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EnEventComponent_div_2_Template, 9, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footeren");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transition);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["EnHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["EnFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".pageEvent[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]{\r\n  margin-left: 30%;\r\n  margin-right: 30%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  border: 0;\r\n  background-color: #e4e4e4;\r\n  margin: 1% 5%;\r\n  font-size: 20px;\r\n  padding: 0 5%;\r\n  position: center;\r\n  float: contour;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  border-bottom: 3px black solid;\r\n  background-color: #ededed;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]{\r\n  position: center;\r\n  height: 150px;\r\n  background-color: #ededed;\r\n  border-radius: 5px;\r\n  margin: 0 10px 10px 10px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-right: 10px;\r\n  border-radius: 5px 0 0 5px;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n  margin-bottom: 2px;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: -121px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]:hover{\r\n  background-color: #e4e4e4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIseUJBQXlCO0FBQzNCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9lbmdsaXNoL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZUV2ZW50IHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMSU7XHJcbn1cclxuXHJcbi5vcmRlcntcclxuICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gIG1hcmdpbi1yaWdodDogMzAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcbi5vcmRlciBhe1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIG1hcmdpbjogMSUgNSU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDAgNSU7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBmbG9hdDogY29udG91cjtcclxufVxyXG4ub3JkZXIgYTpob3ZlcntcclxuICBib3JkZXItYm90dG9tOiAzcHggYmxhY2sgc29saWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxufVxyXG5cclxuXHJcbi5ldmVudHtcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xyXG59XHJcbmltZ3tcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbmgxe1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG5pZnJhbWV7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi10b3A6IC0xMjFweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcblxyXG4uZXZlbnQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/english/eventid/eventid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/english/eventid/eventid.component.ts ***!
  \******************************************************/
/*! exports provided: EnEventidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnEventidComponent", function() { return EnEventidComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");






class EnEventidComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/evenement`, '', {
            headers
        })
            .subscribe(result => {
            // @ts-ignore
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < result.length; i++) {
                // @ts-ignore
                const page = window.location.pathname.split('/').pop();
                console.log('page : ' + page);
                console.log(result[i].eventId.toString() === page);
                // tslint:disable-next-line:radix
                if (result[i].eventId.toString() === page) {
                    this.event = result[i];
                }
            }
        });
    }
}
EnEventidComponent.ɵfac = function EnEventidComponent_Factory(t) { return new (t || EnEventidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EnEventidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnEventidComponent, selectors: [["app-event"]], decls: 13, vars: 5, consts: [["id", "evenement"], ["id", "imagesArea"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.433388115995!2d4.352145815954223!3d50.84165836697961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47c348161f1%3A0x66803a34a8004870!2sPlace%20du%20Grand%20Sablon%202%2C%201000%20Bruxelles!5e0!3m2!1sen!2sbe!4v1585072468479!5m2!1sen!2sbe", "aria-hidden", "false", "tabindex", "0"], ["alt", "image", 3, "src"], ["id", "textArea"], [1, "titre"], [1, "description"], [1, "date"]], template: function EnEventidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-footeren");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets", ctx.event.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.event.dateBegin, " - ", ctx.event.dateEnd, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["EnHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["EnFooterComponent"]], styles: ["#evenement[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  min-height: 1000px;\r\n  font-size: 20px;\r\n}\r\n\r\n#imagesArea[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: left;\r\n  border-right: solid #e4e4e4 3px;\r\n  text-align: center;\r\n}\r\n\r\niframe[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  height: 300px;\r\n  border: 0;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 20px;\r\n}\r\n\r\n#textArea[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  float: right;\r\n  text-align: center;\r\n  margin-top: -900px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9ldmVudGlkL2V2ZW50aWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCwrQkFBK0I7RUFDL0Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZW5nbGlzaC9ldmVudGlkL2V2ZW50aWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNldmVuZW1lbnQge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBtaW4taGVpZ2h0OiAxMDAwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4jaW1hZ2VzQXJlYSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkICNlNGU0ZTQgM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5pZnJhbWUge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuaW1nIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiN0ZXh0QXJlYSB7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IC05MDBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnEventidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './eventid.component.html',
                styleUrls: ['./eventid.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/english/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/english/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: EnFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnFooterComponent", function() { return EnFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EnFooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnFooterComponent.ɵfac = function EnFooterComponent_Factory(t) { return new (t || EnFooterComponent)(); };
EnFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnFooterComponent, selectors: [["app-footeren"]], decls: 32, vars: 0, consts: [[1, "botnav"], [2, "margin", "0 5%"], ["href", "/fr/home"], ["id", "logoValouKervynBot", "src", "../assets/img/logoValouKervyn.png", "alt", "logoArtiste"], ["href", "fr/home", 1, "littlenav"], ["href", "fr/gallery", 1, "littlenav"], ["href", "fr/presentation", 1, "littlenav"], ["href", "fr/event", 1, "littlenav"], ["href", "/contact", 1, "littlenav"], ["href", "https://www.facebook.com/valerie.kervyn/"], ["src", "../assets/img/logoFacebook.jpg", "width", "4%"], ["href", "https://www.instagram.com/valoukervyn/"], ["src", "../assets/img/logoInstagram.jpg", "width", "4%"]], template: function EnFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Valou Kervyn - Artiste peintre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact : 0491919191 | adresse.email@motiv0.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  margin: 0 -10px;\r\n}\r\n\r\n#logoValouKervynTop[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n  margin: 20px;\r\n}\r\n\r\n#toolbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 75%;\r\n  height: 40%;\r\n  \r\n  margin-top: 7%;\r\n  margin-right: 0%;\r\n  margin-left: 25%;\r\n  background-color: lightblue;\r\n}\r\n\r\n#hoverHome[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 0;\r\n}\r\n\r\n#hoverGallery[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 17%;\r\n}\r\n\r\n#hoverPresentation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 34%;\r\n}\r\n\r\n#hoverEvent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 57%;\r\n}\r\n\r\n#hoverContact[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 80%;\r\n}\r\n\r\n.itemToolbar[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: #ededed;\r\n  position: relative;\r\n  padding: 13px 40px;\r\n  margin: 5% 1.5%;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: -10px 5% 0%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\n.selectLanguage[_ngcontent-%COMP%] {\r\n  float : right;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  text-decoration: none;\r\n}\r\n\r\n#divSelectLanguage[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 2%;\r\n  background: #ededed;\r\n}\r\n\r\n#loginDiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 3%;\r\n  background: #ededed;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#login[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n#login[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.hrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: white;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5% -10px;\r\n  text-align: center;\r\n}\r\n\r\n#logoValouKervynBot[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 20px 40%;\r\n}\r\n\r\n#facebook[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 10px 2%;\r\n}\r\n\r\n#littleNav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.littlenav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: #e4e4e4;\r\n  padding: 5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEOztBQUV2RDtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZW5nbGlzaC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBtYXJnaW46IDAgLTEwcHg7XHJcbn1cclxuXHJcbiNsb2dvVmFsb3VLZXJ2eW5Ub3Age1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4jdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgLyptYXJnaW46IDclIDEwJSA1JSAyNSU7Ki9cclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4jaG92ZXJIb21lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNob3ZlckdhbGxlcnkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKm1hcmdpbi1sZWZ0OiAxOCU7Ki9cclxuICBtYXJnaW4tbGVmdDogMTclO1xyXG59XHJcblxyXG4jaG92ZXJQcmVzZW50YXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKm1hcmdpbi1sZWZ0OiAzNyU7Ki9cclxuICBtYXJnaW4tbGVmdDogMzQlO1xyXG59XHJcblxyXG4jaG92ZXJFdmVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDYyLjUlOyovXHJcbiAgbWFyZ2luLWxlZnQ6IDU3JTtcclxufVxyXG5cclxuI2hvdmVyQ29udGFjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn1cclxuXHJcblxyXG4uaXRlbVRvb2xiYXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxM3B4IDQwcHg7XHJcbiAgbWFyZ2luOiA1JSAxLjUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5cclxuLnRvcG5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IC0xMHB4IDUlIDAlO1xyXG59XHJcblxyXG4udG9wbmF2IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xyXG59XHJcblxyXG4udG9wbmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2VsZWN0TGFuZ3VhZ2Uge1xyXG4gIGZsb2F0IDogcmlnaHQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuI2RpdlNlbGVjdExhbmd1YWdlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG59XHJcblxyXG4jbG9naW5EaXYge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbiNsb2dpbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxufVxyXG5cclxuLmhyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYm90bmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgNSUgLTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbG9nb1ZhbG91S2VydnluQm90IHtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbjogMjBweCA0MCU7XHJcbn1cclxuXHJcbiNmYWNlYm9vayB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYm90bmF2IGltZyB7XHJcbiAgbWFyZ2luOiAxMHB4IDIlO1xyXG59XHJcblxyXG4jbGl0dGxlTmF2IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saXR0bGVuYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footeren',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/gallery-detail/gallery-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/english/gallery-detail/gallery-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: EnGalleryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnGalleryDetailComponent", function() { return EnGalleryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");







class EnGalleryDetailComponent {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.url = 0;
        this.currentImage = '';
    }
    ngOnInit() {
        this.currentImage = this.router.url.substr(9);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/galerie`, '', {
            headers
        })
            .subscribe(result => {
            this.paints = result;
            console.log('Current image loaded : Id ' + this.currentImage);
            this.url = Number(this.currentImage);
            this.url--;
            this.actualPaint = (this.paints[this.url]);
        });
    }
}
EnGalleryDetailComponent.ɵfac = function EnGalleryDetailComponent_Factory(t) { return new (t || EnGalleryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EnGalleryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnGalleryDetailComponent, selectors: [["app-gallery-detail"]], decls: 16, vars: 4, consts: [[1, "pageWeb"], [1, "imageEtDetails"], ["id", "image", "alt", "oeuvre", 3, "src"], [1, "details"]], template: function EnGalleryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details de l'oeuvre :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-footeren");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.actualPaint.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom : ", ctx.actualPaint.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Taille : ", ctx.actualPaint.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date de cr\u00E9ation : ", ctx.actualPaint.creationdate, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["EnHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["EnFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n\r\n.imageEtDetails[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 100%;\r\n  margin-top: -1.5%;\r\n}\r\n\r\n#image[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin-left: 1.5%;\r\n  margin-top: 1.5%;\r\n  margin-bottom: 1.5%;\r\n  width: 40%;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #e4e4e4;\r\n  float: right;\r\n  margin-right: 3%;\r\n  margin-top: 1.5%;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9nYWxsZXJ5LWRldGFpbC9nYWxsZXJ5LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7O0FBRUY7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9lbmdsaXNoL2dhbGxlcnktZGV0YWlsL2dhbGxlcnktZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltZyB7XHJcbiAgbWFyZ2luOiAwLjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogNXB4IHNvbGlkIGJsYWNrO1xyXG59Ki9cclxuXHJcbi5wYWdlV2ViIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWFnZUV0RGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogLTEuNSU7XHJcbn1cclxuI2ltYWdlIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMS41JTtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnGalleryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-detail',
                templateUrl: './gallery-detail.component.html',
                styleUrls: ['./gallery-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/english/gallery/gallery.component.ts":
/*!******************************************************!*\
  !*** ./src/app/english/gallery/gallery.component.ts ***!
  \******************************************************/
/*! exports provided: EnGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnGalleryComponent", function() { return EnGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function EnGalleryComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oeuvre_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", oeuvre_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", oeuvre_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class EnGalleryComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/galerie`, '', {
            headers
        })
            .subscribe(result => {
            this.transition = result;
        });
    }
}
EnGalleryComponent.ɵfac = function EnGalleryComponent_Factory(t) { return new (t || EnGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EnGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnGalleryComponent, selectors: [["app-gallery"]], decls: 6, vars: 1, consts: [[1, "pageWeb"], [1, "blocImages"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["alt", "oeuvre", 1, "imgs", 3, "src"]], template: function EnGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EnGalleryComponent_a_4_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footeren");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transition);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["EnHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["EnFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n\r\n.blocImages[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.imgs[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.imgs[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 3% 2%;\r\n}\r\n\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9lbmdsaXNoL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VXZWIge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJsb2NJbWFnZXMge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZ3M6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxufVxyXG4uaW1ncyB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBtYXJnaW46IDMlIDIlO1xyXG59XHJcblxyXG4uaG9ycm93IHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/english/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/english/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: EnHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnHeaderComponent", function() { return EnHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EnHeaderComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnHeaderComponent.ɵfac = function EnHeaderComponent_Factory(t) { return new (t || EnHeaderComponent)(); };
EnHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnHeaderComponent, selectors: [["app-headeren"]], decls: 30, vars: 0, consts: [[1, "topnav"], ["id", "divSelectLanguage"], ["href", "nl/home", 1, "selectLanguage"], ["href", "en/home", 1, "selectLanguage"], ["href", "fr/home", 1, "selectLanguage"], ["id", "loginDiv"], ["id", "login", "href", "en/register"], ["href", "en/home"], ["id", "logoValouKervynTop", "src", "../assets/img/logoValouKervyn.png", "alt", "artistLogo"], ["id", "toolbar"], ["id", "hoverHome"], ["href", "en/home", 1, "itemToolbar"], ["id", "hoverGallery"], ["href", "en/gallery", 1, "itemToolbar"], ["id", "hoverPresentation"], ["href", "en/presentation", 1, "itemToolbar"], ["id", "hoverEvent"], ["href", "en/event", 1, "itemToolbar"], ["id", "hoverContact"], ["href", "en/contact", 1, "itemToolbar"]], template: function EnHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "My Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Events");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  margin: 0 -10px;\r\n}\r\n\r\n#logoValouKervynTop[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n  margin: 20px;\r\n}\r\n\r\n#toolbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 75%;\r\n  height: 40%;\r\n  \r\n  margin-top: 7%;\r\n  margin-right: 0%;\r\n  margin-left: 25%;\r\n  background-color: lightblue;\r\n}\r\n\r\n#hoverHome[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 0;\r\n}\r\n\r\n#hoverGallery[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 18%;\r\n}\r\n\r\n#hoverPresentation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 37%;\r\n}\r\n\r\n#hoverEvent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 62.5%;\r\n}\r\n\r\n#hoverContact[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 80%;\r\n}\r\n\r\n.itemToolbar[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: #ededed;\r\n  position: relative;\r\n  padding: 13px 40px;\r\n  margin: 5% 1.5%;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: -10px 5% 0%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\n.selectLanguage[_ngcontent-%COMP%] {\r\n  float : right;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  text-decoration: none;\r\n}\r\n\r\n#divSelectLanguage[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 2%;\r\n  background: #ededed;\r\n}\r\n\r\n#loginDiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 3%;\r\n  background: #ededed;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#login[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n#login[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.hrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: white;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5% -10px;\r\n  text-align: center;\r\n}\r\n\r\n#logoValouKervynBot[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 20px 40%;\r\n}\r\n\r\n#facebook[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 10px 2%;\r\n}\r\n\r\n#littleNav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.littlenav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: #e4e4e4;\r\n  padding: 5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEOztBQUV2RDtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7O0FBRWY7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZW5nbGlzaC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgYSBibGFjayBiYWNrZ3JvdW5kIGNvbG9yIHRvIHRoZSB0b3AgbmF2aWdhdGlvbiAqL1xyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBtYXJnaW46IDAgLTEwcHg7XHJcbn1cclxuXHJcbiNsb2dvVmFsb3VLZXJ2eW5Ub3Age1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4jdG9vbGJhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA3NSU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbiAgLyptYXJnaW46IDclIDEwJSA1JSAyNSU7Ki9cclxuICBtYXJnaW4tdG9wOiA3JTtcclxuICBtYXJnaW4tcmlnaHQ6IDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59XHJcblxyXG4jaG92ZXJIb21lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDA7XHJcbn1cclxuXHJcbiNob3ZlckdhbGxlcnkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMTglO1xyXG59XHJcblxyXG4jaG92ZXJQcmVzZW50YXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMzclO1xyXG59XHJcblxyXG4jaG92ZXJFdmVudCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA2Mi41JTtcclxufVxyXG5cclxuI2hvdmVyQ29udGFjdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiA4MCU7XHJcbn1cclxuXHJcblxyXG4uaXRlbVRvb2xiYXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAxM3B4IDQwcHg7XHJcbiAgbWFyZ2luOiA1JSAxLjUlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxufVxyXG5cclxuLnRvcG5hdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IC0xMHB4IDUlIDAlO1xyXG59XHJcblxyXG4udG9wbmF2IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgM3B4IGJsYWNrO1xyXG59XHJcblxyXG4udG9wbmF2IGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uc2VsZWN0TGFuZ3VhZ2Uge1xyXG4gIGZsb2F0IDogcmlnaHQ7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuI2RpdlNlbGVjdExhbmd1YWdlIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyJTtcclxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG59XHJcblxyXG4jbG9naW5EaXYge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbiNsb2dpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbn1cclxuXHJcbiNsb2dpbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxufVxyXG5cclxuLmhyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYm90bmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW46IDAgNSUgLTEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jbG9nb1ZhbG91S2VydnluQm90IHtcclxuICB3aWR0aDogMjAlO1xyXG4gIG1hcmdpbjogMjBweCA0MCU7XHJcbn1cclxuXHJcbiNmYWNlYm9vayB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uYm90bmF2IGltZyB7XHJcbiAgbWFyZ2luOiAxMHB4IDIlO1xyXG59XHJcblxyXG4jbGl0dGxlTmF2IHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5saXR0bGVuYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-headeren',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/english/home/home.component.ts ***!
  \************************************************/
/*! exports provided: EnHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnHomeComponent", function() { return EnHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");




class EnHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnHomeComponent.ɵfac = function EnHomeComponent_Factory(t) { return new (t || EnHomeComponent)(); };
EnHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnHomeComponent, selectors: [["app-frhome"]], decls: 14, vars: 0, consts: [[1, "pageWeb"], ["id", "paraIntro"], [1, "horrow"], ["id", "blocImages"], ["id", "flecheGauche", "src", "../../assets/img/leftArrow.png", "alt", "left arrow"], ["id", "imageDefilante", "alt", "oeuvre", "src", "../../assets/img/1.jpg"], ["id", "flecheDroite", "src", "../../assets/img/rightArrow.png", "alt", "right arrow"], [2, "font-size", "20px"]], template: function EnHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome on the website of Valou Kervyb. There, you are able to find all the informations you want about the artist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Presentation of the artist : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footeren");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["EnHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["EnFooterComponent"]], styles: ["#flecheGauche[_ngcontent-%COMP%] {\r\n  width: 100px;\r\n  height: 100px;\r\n  background-color: #ededed00;\r\n}\r\n\r\n.pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  z-index: 1;\r\n}\r\n\r\n#paraIntro[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  font-style: italic;\r\n  text-align: center;\r\n  font-size: 23px;\r\n}\r\n\r\n#blocImages[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 0 5%;\r\n  padding: 10px;\r\n}\r\n\r\n#imageDefilante[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n\r\n#flecheGauche[_ngcontent-%COMP%] {\r\n  width: 4%;\r\n  position: absolute;\r\n  margin-top: 220px;\r\n  margin-left: -75px;\r\n}\r\n\r\n#flecheDroite[_ngcontent-%COMP%] {\r\n  width: 4%;\r\n  position: absolute;\r\n  margin-top: 220px;\r\n  margin-right: -75px;\r\n}\r\n\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztFQUlFOztBQUVGO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZW5nbGlzaC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qaW1nIHtcclxuICBtYXJnaW46IDAuNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQgYmxhY2s7XHJcbn0qL1xyXG5cclxuI2ZsZWNoZUdhdWNoZSB7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDAwO1xyXG59XHJcbi5wYWdlV2ViIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG4jcGFyYUludHJvIHtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxufVxyXG5cclxuI2Jsb2NJbWFnZXMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2ltYWdlRGVmaWxhbnRlIHtcclxuICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG5cclxuI2ZsZWNoZUdhdWNoZSB7XHJcbiAgd2lkdGg6IDQlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tdG9wOiAyMjBweDtcclxuICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbiNmbGVjaGVEcm9pdGUge1xyXG4gIHdpZHRoOiA0JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLXRvcDogMjIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtNzVweDtcclxufVxyXG5cclxuLmhvcnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-frhome',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/inscription/inscription.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/english/inscription/inscription.component.ts ***!
  \**************************************************************/
/*! exports provided: EnInscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnInscriptionComponent", function() { return EnInscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");





class EnInscriptionComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnInscriptionComponent.ɵfac = function EnInscriptionComponent_Factory(t) { return new (t || EnInscriptionComponent)(); };
EnInscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnInscriptionComponent, selectors: [["app-contact"]], decls: 36, vars: 0, consts: [[1, "inscription"], ["id", "form", "action", "/inscription", "method", "post", "name", "register"], ["for", "firstname"], ["type", "text", "id", "firstname", "name", "firstName", "required", ""], ["for", "lastname"], ["type", "text", "id", "lastname", "name", "lastName", "required", ""], ["for", "mail"], ["type", "email", "id", "mail", "name", "mail", "required", ""], ["for", "pwd1"], ["type", "password", "id", "pwd1", "name", "pwd1", "required", ""], ["for", "shwPwd"], ["type", "checkbox", "name", "shwPwd", "id", "shwPwd", "onchange", "shwPassword()"], ["for", "pwd2"], ["type", "password", "id", "pwd2", "name", "pwd2", "required", ""], ["id", "notif"], ["type", "radio", "id", "yes", "name", "notif", "value", "yes", "checked", ""], ["for", "yes"], ["type", "radio", "id", "no", "name", "notif", "value", "no"], ["for", "no"], ["type", "submit", "id", "submit", "value", "Submit", "onmouseover", "passwordCheck(register)", 1, "submit"], ["href", "/login"], ["type", "button", "value", "Connection"]], template: function EnInscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pr\u00E9nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mail : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Voir le mot de passe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirmation du mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Voulez-vous recevoir des notifications ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Oui :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Non :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "app-footeren");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["EnHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["EnFooterComponent"]], styles: [".inscription[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 1%;\r\n  margin: 1%;\r\n  font-family: \"Champagne & Limousines\", sans-serif;\r\n  font-size: 20px;\r\n  width: 30%;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n#shwPwd[_ngcontent-%COMP%] {\r\n  width: auto;\r\n}\r\n#notif[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  width: auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9pbnNjcmlwdGlvbi9pbnNjcmlwdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VuZ2xpc2gvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnNjcmlwdGlvbiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5pbnB1dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgbWFyZ2luOiAxJTtcclxuICBmb250LWZhbWlseTogXCJDaGFtcGFnbmUgJiBMaW1vdXNpbmVzXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxubGFiZWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuI3Nod1B3ZCB7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbiNub3RpZiBpbnB1dCwgbGFiZWwge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnInscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './inscription.component.html',
                styleUrls: ['./inscription.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/english/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: EnLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnLoginComponent", function() { return EnLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");







class EnLoginComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.checkoutForm = this.formBuilder.group({
            email: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(res) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:8888/test', '', {
            params: {
                email: res.email,
                password: res.password
            },
            headers: headers
        })
            .subscribe(result => {
            if (result === false) {
                console.log('User not found');
            }
            else {
                console.log('User ok');
            }
        });
    }
}
EnLoginComponent.ɵfac = function EnLoginComponent_Factory(t) { return new (t || EnLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
EnLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnLoginComponent, selectors: [["app-login"]], decls: 24, vars: 1, consts: [[1, "pageWeb"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "required", "", "placeholder", "example@gmail.com", "id", "email", "formControlName", "email"], ["for", "password"], ["type", "password", "required", "", "id", "password", "placeholder", "password123", "formControlName", "password"], ["type", "submit", "id", "submit", "value", "Valider", 1, "bouton"], ["href", "/register"], ["type", "button", "id", "inscription", "value", "Inscription", 1, "bouton"]], template: function EnLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Connectez-vous \u00E0 votre compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EnLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.checkoutForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password forgotten ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-footeren");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["EnHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["EnFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 1%;\r\n  margin: 1%;\r\n  font-family: \"Champagne & Limousines\", sans-serif;\r\n  font-size: 20px;\r\n  width: 30%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n\r\n#submit[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 14%;\r\n  margin-right: 2%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#inscription[_ngcontent-%COMP%] {\r\n  position :relative;\r\n  width: 14%;\r\n  margin-left: 2%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.bouton[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 3px solid black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDVixpREFBaUQ7RUFDakQsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9lbmdsaXNoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVdlYiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBtYXJnaW46IDElO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNoYW1wYWduZSAmIExpbW91c2luZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4jc3VibWl0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI2luc2NyaXB0aW9uIHtcclxuICBwb3NpdGlvbiA6cmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0JTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYm91dG9uOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/english/presentation/presentation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/english/presentation/presentation.component.ts ***!
  \****************************************************************/
/*! exports provided: EnPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnPresentationComponent", function() { return EnPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");




class EnPresentationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnPresentationComponent.ɵfac = function EnPresentationComponent_Factory(t) { return new (t || EnPresentationComponent)(); };
EnPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnPresentationComponent, selectors: [["app-presentation"]], decls: 7, vars: 0, consts: [[1, "pageWeb"]], template: function EnPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Rien de fou par ici pour le moment... Revenez plus tard !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footeren");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["EnHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["EnFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5%;\r\n  padding: 1%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2VuZ2xpc2gvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VXZWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnPresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/english/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/english/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: EnRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnRegisterComponent", function() { return EnRegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/english/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/english/footer/footer.component.ts");




class EnRegisterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EnRegisterComponent.ɵfac = function EnRegisterComponent_Factory(t) { return new (t || EnRegisterComponent)(); };
EnRegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EnRegisterComponent, selectors: [["app-register"]], decls: 9, vars: 0, consts: [[1, "pageWeb"], ["href", "/login"]], template: function EnRegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headeren");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "D\u00E9j\u00E0 un compte ? Cliquez ici pour vous connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Register works");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footeren");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["EnHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["EnFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW5nbGlzaC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2VuZ2xpc2gvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2ViIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnRegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/file/file.component.ts":
/*!****************************************!*\
  !*** ./src/app/file/file.component.ts ***!
  \****************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class FileComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
    }
    fileChange(element) {
        this.uploadedFiles = element.target.files;
    }
    upload() {
        const formData = new FormData();
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.uploadedFiles.length; i++) {
            formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        this.http.post('/api/upload', formData)
            .subscribe((response) => {
            console.log('response received is ', response);
        });
    }
}
FileComponent.ɵfac = function FileComponent_Factory(t) { return new (t || FileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileComponent, selectors: [["app-file"]], decls: 18, vars: 0, consts: [[1, "mainContainer"], [1, "content"], [1, "header"], [1, "row", "margin25"], [1, "col-md-4"], [1, "input-group"], [1, "input-group-prepend"], ["id", "btnUpload", 1, "input-group-text", "upload", 3, "click"], [1, "custom-file"], ["action", "/api/upload", "method", "post", "enctype", "multipart/form-data"], ["type", "file", "id", "inputGroupFile01", "aria-describedby", "inputGroupFileAddon01", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"]], template: function FileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Angular File Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FileComponent_Template_span_click_10_listener() { return ctx.upload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileComponent_Template_input_change_14_listener($event) { return ctx.fileChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Choose file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], styles: [".header[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  font-size: 38px;\r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  margin: 100px;\r\n}\r\n\r\n.margin25[_ngcontent-%COMP%] {\r\n  margin: 25px;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxIHtcclxuICBmb250LXNpemU6IDM4cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW46IDEwMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luMjUge1xyXG4gIG1hcmdpbjogMjVweDtcclxufVxyXG5cclxuLnVwbG9hZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file',
                templateUrl: './file.component.html',
                styleUrls: ['./file.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/french/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: FrAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrAdminComponent", function() { return FrAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





class FrAdminComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.checkoutFormGallery = this.formBuilder.group({
            galleryName: '',
            gallerySize: '',
            galleryFile: '',
            galleryDest: ''
        });
        this.checkoutFormEvent = this.formBuilder.group({
            eventName: '',
            eventBegin: '',
            eventEnd: '',
            eventDescription: '',
            eventLocation: '',
            eventFile: '',
            eventDest: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(values) {
        console.log(values);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        if (values.galleryName) {
            // @ts-ignore
            const file = document.getElementById('imageFile').files[0].name;
            this.http.post('http://127.0.0.1:8888/adminImg', '', {
                params: {
                    imageName: values.galleryName,
                    imageSize: values.gallerySize,
                    imageFile: values.galleryFile,
                    imageDest: file
                },
                headers: headers
            })
                .subscribe(result => {
                if (result === false) {
                    alert('Erreur lors de l\'ajout de l\'image');
                }
                else {
                    alert('Image ajoutée');
                }
            });
        }
        else {
            console.log('autre ' + values.eventFile);
            // @ts-ignore
            const file = document.getElementById('eventFile').files[0].name;
            this.http.post('http://127.0.0.1:8888/adminEvent', '', {
                params: {
                    eventName: values.eventName,
                    eventBegin: values.eventBegin,
                    eventEnd: values.eventEnd,
                    eventDescription: values.eventDescription,
                    eventLocation: values.eventLocation,
                    eventFile: values.eventFile,
                    eventDest: file
                },
                headers
            })
                .subscribe(result => {
                if (result === false) {
                    alert('Erreur lors de l\'ajout de l\'image');
                }
                else {
                    alert('Image ajoutée');
                }
            });
        }
    }
}
FrAdminComponent.ɵfac = function FrAdminComponent_Factory(t) { return new (t || FrAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FrAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrAdminComponent, selectors: [["app-admin"]], decls: 37, vars: 2, consts: [[1, "admin"], ["id", "gallery"], ["name", "gallery", "id", "img", "enctype", "multipart/form-data", "method", "post", 3, "formGroup", "ngSubmit"], ["type", "text", "required", "", "placeholder", "Nom", "id", "galleryName", "formControlName", "galleryName"], ["type", "text", "required", "", "placeholder", "Taille", "id", "gallerySize", "formControlName", "gallerySize"], ["type", "file", "required", "", "id", "galleryFile", "formControlName", "galleryFile"], ["type", "submit", 1, "submit"], ["id", "event"], ["name", "event", "id", "evnt", "method", "post", "enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], ["type", "text", "placeholder", "Nom", "id", "eventName", "formControlName", "eventName"], ["type", "date", "id", "eventBegin", "formControlName", "eventBegin"], ["type", "date", "id", "eventEnd", "formControlName", "eventEnd"], ["type", "text", "placeholder", "Description", "id", "eventDescription", "formControlName", "eventDescription"], ["type", "text", "placeholder", "Lieux", "id", "eventLocation", "formControlName", "eventLocation"], ["type", "file", "id", "eventFile", "formControlName", "eventFile"]], template: function FrAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Ajouter une image \u00E0 la gallerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FrAdminComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.checkoutFormGallery.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Taille de la toile : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Image : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Ajouter un evenement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FrAdminComponent_Template_form_ngSubmit_18_listener() { return ctx.onSubmit(ctx.checkoutFormEvent.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Dates : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Description : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Lieux : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Image : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutFormGallery);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutFormEvent);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".admin[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 22px;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 2px;\r\n}\r\n\r\n.submit[_ngcontent-%COMP%] {\r\n  padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZG1pbiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDJweDtcclxufVxyXG5cclxuLnN1Ym1pdCB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrAdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/contact/contact.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/french/contact/contact.component.ts ***!
  \*****************************************************/
/*! exports provided: FrContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrContactComponent", function() { return FrContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");







class FrContactComponent {
    constructor(http, formBuilder) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.mailForm = this.formBuilder.group({
            formName: '',
            formMail: '',
            formSjt: '',
            formMsg: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(res) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:8888/contact', '', {
            params: {
                name: res.formName,
                envoyeur: res.formMail,
                objet: res.formSjt,
                texte: res.formMsg
            },
            headers: headers
        })
            .subscribe(result => {
            if (result === false) {
                console.log('Mail not ok');
            }
            else {
                console.log('Mail ok');
            }
        });
    }
}
FrContactComponent.ɵfac = function FrContactComponent_Factory(t) { return new (t || FrContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
FrContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrContactComponent, selectors: [["app-contact"]], decls: 47, vars: 1, consts: [[1, "pageContact"], [1, "contactGauche"], [1, "espaceGauche"], ["id", "phone"], [1, "separator"], ["id", "mail"], [1, "contactDroit"], ["id", "form", 3, "formGroup", "ngSubmit"], ["id", "formSuperieur"], ["id", "nameLabel", "for", "formName"], ["id", "mailLabel", "for", "formMail"], ["type", "text", "id", "formName", "name", "formName", "formControlName", "formName"], ["type", "text", "id", "formMail", "name", "formMail", "formControlName", "formMail"], ["for", "formSjt"], ["type", "text", "id", "formSjt", "name", "formSjt", "formControlName", "formSjt"], ["for", "formMsg"], ["type", "text", "id", "formMsg", "name", "formMsg", "formControlName", "formMsg"], ["type", "submit", "id", "sbt"], ["type", "reset", "id", "rst"]], template: function FrContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Num\u00E9ro de t\u00E9l\u00E9phone ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0470proute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "E-mail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "AUTRETEST@GMAGUEULE.COM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FrContactComponent_Template_form_ngSubmit_16_listener() { return ctx.onSubmit(ctx.mailForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Votre nom (obligatoire)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Votre e-mail (obligatoire)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Sujet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Votre message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.mailForm);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["FrHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"]], styles: [".pageContact[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  z-index: 1;\r\n  height: 800px;\r\n}\r\n.contactDroit[_ngcontent-%COMP%]{\r\n  float: right;\r\n width: 65%;\r\n  padding: 35px 0px;\r\n}\r\n.contactGauche[_ngcontent-%COMP%]{\r\n float: left;\r\n  width: 25% ;\r\n  margin: 0 2%;\r\n}\r\n.separator[_ngcontent-%COMP%]{\r\n  display: block;\r\n  height: 1px;\r\n  width: 95%;\r\n  border-top: 2px dashed #b2b2b2;\r\n  margin: 2% 0%;\r\n}\r\n.espaceGauche[_ngcontent-%COMP%] {\r\n  padding: 15px 0px;\r\n}\r\n#formName[_ngcontent-%COMP%] {\r\n  align-content: flex-start;\r\n  width: 45%;\r\n  float :left;\r\n  height: 20%;\r\n}\r\n#formMail[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  margin-left: 4%;\r\n  height: 20%;\r\n}\r\n#formSjt[_ngcontent-%COMP%]{\r\n  margin: 2% 0%;\r\n  width: 95%;\r\n}\r\n#formMsg[_ngcontent-%COMP%]{\r\n  width: 95%;\r\n  height: 250px;\r\n}\r\n#formSuperieur[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n#sbt[_ngcontent-%COMP%]{\r\n  margin-right: 20px;\r\n}\r\n#mailLabel[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  height: 40%;\r\n}\r\n#nameLabel[_ngcontent-%COMP%]{\r\n  width: 50%;\r\n  height: 40%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0NBQ2IsVUFBVTtFQUNULGlCQUFpQjtBQUNuQjtBQUVBO0NBQ0MsV0FBVztFQUNWLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLDhCQUE4QjtFQUM5QixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFDZjtBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFDQTtFQUNFLFVBQVU7RUFDVixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZUNvbnRhY3Qge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGhlaWdodDogODAwcHg7XHJcbn1cclxuLmNvbnRhY3REcm9pdHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiB3aWR0aDogNjUlO1xyXG4gIHBhZGRpbmc6IDM1cHggMHB4O1xyXG59XHJcblxyXG4uY29udGFjdEdhdWNoZXtcclxuIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyNSUgO1xyXG4gIG1hcmdpbjogMCAyJTtcclxufVxyXG4uc2VwYXJhdG9ye1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgYm9yZGVyLXRvcDogMnB4IGRhc2hlZCAjYjJiMmIyO1xyXG4gIG1hcmdpbjogMiUgMCU7XHJcbn1cclxuXHJcbi5lc3BhY2VHYXVjaGUge1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcblxyXG4jZm9ybU5hbWUge1xyXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBmbG9hdCA6bGVmdDtcclxuICBoZWlnaHQ6IDIwJTtcclxufVxyXG4jZm9ybU1haWx7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuI2Zvcm1TanR7XHJcbiAgbWFyZ2luOiAyJSAwJTtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbiNmb3JtTXNne1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG4jZm9ybVN1cGVyaWV1cntcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4jc2J0e1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG4jbWFpbExhYmVse1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuI25hbWVMYWJlbHtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/event/event.component.ts":
/*!*************************************************!*\
  !*** ./src/app/french/event/event.component.ts ***!
  \*************************************************/
/*! exports provided: FrEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrEventComponent", function() { return FrEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function FrEventComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oeuvre_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", oeuvre_r3.eventId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "../../assets/", oeuvre_r3.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](oeuvre_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", oeuvre_r3.dateBegin, " - ", oeuvre_r3.dateEnd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](oeuvre_r3.place);
} }
class FrEventComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/evenement`, '', {
            headers
        })
            .subscribe(result => {
            this.transition = result;
            console.log(this.transition);
        });
    }
}
FrEventComponent.ɵfac = function FrEventComponent_Factory(t) { return new (t || FrEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FrEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrEventComponent, selectors: [["app-event"]], decls: 4, vars: 1, consts: [[1, "pageEvent"], ["class", "event", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "event", 3, "routerLink"], ["alt", "oeuvre", 1, "imgs", 3, "src"], [1, "moment"], [1, "location"]], template: function FrEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FrEventComponent_div_2_Template, 9, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transition);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["FrHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".pageEvent[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]{\r\n  margin-left: 30%;\r\n  margin-right: 30%;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  border: 0;\r\n  background-color: #e4e4e4;\r\n  margin: 1% 5%;\r\n  font-size: 20px;\r\n  padding: 0 5%;\r\n  position: center;\r\n  float: contour;\r\n}\r\n\r\n.order[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  border-bottom: 3px black solid;\r\n  background-color: #ededed;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]{\r\n  position: center;\r\n  height: 150px;\r\n  background-color: #ededed;\r\n  border-radius: 5px;\r\n  margin: 0 10px 10px 10px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n  float: left;\r\n  margin-right: 10px;\r\n  border-radius: 5px 0 0 5px;\r\n  width: 150px;\r\n  height: 150px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n  margin-bottom: 2px;\r\n}\r\n\r\niframe[_ngcontent-%COMP%]{\r\n  float: right;\r\n  margin-top: -121px;\r\n  border-radius: 5px;\r\n}\r\n\r\n.event[_ngcontent-%COMP%]:hover{\r\n  background-color: #e4e4e4;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsU0FBUztFQUNULHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDhCQUE4QjtFQUM5Qix5QkFBeUI7QUFDM0I7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZyZW5jaC9ldmVudC9ldmVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VFdmVudCB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG59XHJcblxyXG4ub3JkZXJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG4ub3JkZXIgYXtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBtYXJnaW46IDElIDUlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nOiAwIDUlO1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IGNvbnRvdXI7XHJcbn1cclxuLm9yZGVyIGE6aG92ZXJ7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IGJsYWNrIHNvbGlkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbn1cclxuXHJcblxyXG4uZXZlbnR7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMTBweDtcclxufVxyXG5pbWd7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG5oMXtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxufVxyXG5cclxuaWZyYW1le1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAtMTIxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5cclxuLmV2ZW50OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU0ZTQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/eventid/eventid.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/french/eventid/eventid.component.ts ***!
  \*****************************************************/
/*! exports provided: FrEventidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrEventidComponent", function() { return FrEventidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");







class FrEventidComponent {
    constructor(http) {
        this.http = http;
        this.event = {
            dateBegin: '',
            dateEnd: '',
            description: '',
            eventId: null,
            image: '',
            name: '',
            place: ''
        };
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/evenement`, '', {
            headers
        })
            .subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // @ts-ignore
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < result.length; i++) {
                // @ts-ignore
                const page = window.location.pathname.split('/').pop();
                // tslint:disable-next-line:radix
                if (result[i].eventId.toString() === page) {
                    this.place = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCq4TvPKogUIilCh_38VgrV4URD5o1a8xk&q=' + result[i].place;
                    // document.getElementById('map').setAttribute('src', this.place);
                    this.event = result[i];
                    this.image = '../../assets' + result[i].image;
                    document.getElementById('image').setAttribute('src', this.image);
                    return true;
                }
            }
        }));
    }
}
FrEventidComponent.ɵfac = function FrEventidComponent_Factory(t) { return new (t || FrEventidComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FrEventidComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FrEventidComponent, selectors: [["app-event"]], decls: 14, vars: 4, consts: [["id", "evenement"], ["id", "droite"], ["id", "textArea"], [1, "titre"], [1, "description"], [1, "date"], ["id", "mapArea"], ["id", "imageArea"], ["id", "image", "src", "", "alt", "image"]], template: function FrEventidComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.event.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.event.dateBegin, " - ", ctx.event.dateEnd, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["FrHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"]], styles: ["#evenement[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 2%;\r\n  font-size: 20px;\r\n  min-height: auto;\r\n  box-sizing: border-box;\r\n}\r\n#droite[_ngcontent-%COMP%]{\r\n  float: right;\r\n  width: 49%;\r\n}\r\n#imageArea[_ngcontent-%COMP%] {\r\n  width: 49%;\r\n}\r\n#textArea[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #e4e4e4;\r\n}\r\n#mapArea[_ngcontent-%COMP%] {\r\n  size: auto;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 100%;\r\n  min-height: 200px;\r\n  min-width: 200px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2V2ZW50aWQvZXZlbnRpZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFlBQVk7RUFDWixVQUFVO0FBQ1o7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvZXZlbnRpZC9ldmVudGlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZXZlbmVtZW50IHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4jZHJvaXRle1xyXG4gIGZsb2F0OiByaWdodDtcclxuICB3aWR0aDogNDklO1xyXG59XHJcbiNpbWFnZUFyZWEge1xyXG4gIHdpZHRoOiA0OSU7XHJcbn1cclxuI3RleHRBcmVhIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxufVxyXG4jbWFwQXJlYSB7XHJcbiAgc2l6ZTogYXV0bztcclxufVxyXG5pbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FrEventidComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-event',
                templateUrl: './eventid.component.html',
                styleUrls: ['./eventid.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/french/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FrFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrFooterComponent", function() { return FrFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FrFooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FrFooterComponent.ɵfac = function FrFooterComponent_Factory(t) { return new (t || FrFooterComponent)(); };
FrFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrFooterComponent, selectors: [["app-footerfr"]], decls: 32, vars: 0, consts: [[1, "botnav"], [2, "margin", "0 5%"], ["href", "/fr/home"], ["id", "logoValouKervynBot", "src", "../assets/img/logoValouKervyn.png", "alt", "logoArtiste"], ["href", "fr/home", 1, "littlenav"], ["href", "fr/gallery", 1, "littlenav"], ["href", "fr/presentation", 1, "littlenav"], ["href", "fr/event", 1, "littlenav"], ["href", "/contact", 1, "littlenav"], ["href", "https://www.facebook.com/valerie.kervyn/"], ["src", "../assets/img/logoFacebook.jpg", "width", "4%"], ["href", "https://www.instagram.com/valoukervyn/"], ["src", "../assets/img/logoInstagram.jpg", "width", "4%"]], template: function FrFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Valou Kervyn - Artiste peintre");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Contact : 0491919191 | adresse.email@motiv0.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  margin: 0 -10px;\r\n}\r\n\r\n#logoValouKervynTop[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n  margin: 20px;\r\n}\r\n\r\n#toolbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 75%;\r\n  height: 40%;\r\n  \r\n  margin-top: 7%;\r\n  margin-right: 0%;\r\n  margin-left: 25%;\r\n  background-color: lightblue;\r\n}\r\n\r\n#hoverHome[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 0;\r\n}\r\n\r\n#hoverGallery[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 17%;\r\n}\r\n\r\n#hoverPresentation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 34%;\r\n}\r\n\r\n#hoverEvent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 57%;\r\n}\r\n\r\n#hoverContact[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 80%;\r\n}\r\n\r\n.itemToolbar[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: #ededed;\r\n  position: relative;\r\n  padding: 13px 40px;\r\n  margin: 5% 1.5%;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: -10px 5% 0%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\n.selectLanguage[_ngcontent-%COMP%] {\r\n  float : right;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  text-decoration: none;\r\n}\r\n\r\n#divSelectLanguage[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 2%;\r\n  background: #ededed;\r\n}\r\n\r\n#loginDiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 3%;\r\n  background: #ededed;\r\n  text-align: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n#login[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n\r\n}\r\n\r\n#login[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.hrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: white;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5% -10px;\r\n  text-align: center;\r\n  float: none;\r\n}\r\n\r\n#logoValouKervynBot[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 20px 40%;\r\n}\r\n\r\n#facebook[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 10px 2%;\r\n}\r\n\r\n#littleNav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.littlenav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: #e4e4e4;\r\n  padding: 5px 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7O0FBRXZEO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTs7QUFFZjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvZnJlbmNoL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCBhIGJsYWNrIGJhY2tncm91bmQgY29sb3IgdG8gdGhlIHRvcCBuYXZpZ2F0aW9uICovXHJcblxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIG1hcmdpbjogMCAtMTBweDtcclxufVxyXG5cclxuI2xvZ29WYWxvdUtlcnZ5blRvcCB7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbiN0b29sYmFyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDc1JTtcclxuICBoZWlnaHQ6IDQwJTtcclxuICAvKm1hcmdpbjogNyUgMTAlIDUlIDI1JTsqL1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbn1cclxuXHJcbiNob3ZlckhvbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogMDtcclxufVxyXG5cclxuI2hvdmVyR2FsbGVyeSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDE4JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiAxNyU7XHJcbn1cclxuXHJcbiNob3ZlclByZXNlbnRhdGlvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8qbWFyZ2luLWxlZnQ6IDM3JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiAzNCU7XHJcbn1cclxuXHJcbiNob3ZlckV2ZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyptYXJnaW4tbGVmdDogNjIuNSU7Ki9cclxuICBtYXJnaW4tbGVmdDogNTclO1xyXG59XHJcblxyXG4jaG92ZXJDb250YWN0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDgwJTtcclxufVxyXG5cclxuXHJcbi5pdGVtVG9vbGJhciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEzcHggNDBweDtcclxuICBtYXJnaW46IDUlIDEuNSU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4udG9wbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogLTEwcHggNSUgMCU7XHJcbn1cclxuXHJcbi50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAzcHggYmxhY2s7XHJcbn1cclxuXHJcbi50b3BuYXYgYS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5zZWxlY3RMYW5ndWFnZSB7XHJcbiAgZmxvYXQgOiByaWdodDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4jZGl2U2VsZWN0TGFuZ3VhZ2Uge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XHJcbn1cclxuXHJcbiNsb2dpbkRpdiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMyU7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxufVxyXG5cclxuI2xvZ2luOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcblxyXG4uaHJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3RuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1JSAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbn1cclxuXHJcbiNsb2dvVmFsb3VLZXJ2eW5Cb3Qge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDQwJTtcclxufVxyXG5cclxuI2ZhY2Vib29rIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3RuYXYgaW1nIHtcclxuICBtYXJnaW46IDEwcHggMiU7XHJcbn1cclxuXHJcbiNsaXR0bGVOYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpdHRsZW5hdiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footerfr',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/french/gallery-detail/gallery-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/french/gallery-detail/gallery-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: FrGalleryDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrGalleryDetailComponent", function() { return FrGalleryDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");








const _c0 = ["container"];
class FrGalleryDetailComponent {
    constructor(router, http, cookieService) {
        this.router = router;
        this.http = http;
        this.cookieService = cookieService;
        this.url = 0;
        this.currentImage = '';
        this.actualPaint = { id: '', name: '', size: '', creationdate: '', image: '', likes: '' };
        this.param = '';
    }
    ngOnInit() {
        this.currentImage = this.router.url.substr(12);
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/galerie`, '', {
            headers
        })
            .subscribe(result => {
            this.paints = result;
            this.url = Number(this.currentImage);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < this.paints.length; i++) {
                if (this.paints[i].id === this.url) {
                    this.actualPaint = (this.paints[i]);
                }
            }
        });
        // vérifie connexion
        this.connect();
    }
    connect() {
        if (localStorage.length > 0) {
            let likes = localStorage.getItem('likes').split(',');
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < likes.length; i++) {
                // si déjà liké
                console.log(Number(likes[i]));
                if (likes[i] === this.currentImage.toString()) {
                    console.log('liké');
                    // @ts-ignore
                    likes[i] = Number(likes[i]);
                    document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart.png');
                    return 'liked';
                }
                // @ts-ignore
                likes[i] = Number(likes[i]);
            }
            return likes;
        }
        return false;
    }
    likes() {
        const connected = this.connect();
        if (!connected) {
            alert('Connectez-vous pour avoir accès à plus de contenu');
        }
        else if (connected === 'liked') {
            console.log('Connecté, mais tu kiffe déjà cette oeuvre !');
            this.delLike();
        }
        else {
            console.log('Connecté, tu peux encore liker !');
            this.addLike(connected);
        }
    }
    addLike(likes) {
        likes.push(Number(this.currentImage));
        localStorage.setItem('likes', likes.toString());
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/like`, '', {
            headers,
            params: {
                user: this.cookieService.get('login'),
                likes: likes.toString(),
                painting: this.currentImage
            }
        }).subscribe();
        location.reload();
    }
    delLike() {
        let likes = localStorage.getItem('likes').split(',');
        // tslint:disable-next-line:prefer-for-of
        for (let l = 0; l < likes.length; l++) {
            if (likes[l] === this.currentImage) {
                likes.splice(l, 1);
                localStorage.setItem('likes', likes.toString());
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                    .set('Authorization', 'my-auth-token')
                    .set('Content-Type', 'application/json');
                this.http.post(`http://127.0.0.1:8888/dislike`, '', {
                    headers,
                    params: {
                        user: this.cookieService.get('login'),
                        likes: likes,
                        painting: this.currentImage
                    }
                }).subscribe();
                location.reload();
                document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart_empty.png');
            }
        }
    }
}
FrGalleryDetailComponent.ɵfac = function FrGalleryDetailComponent_Factory(t) { return new (t || FrGalleryDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"])); };
FrGalleryDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrGalleryDetailComponent, selectors: [["app-gallery-detail"]], viewQuery: function FrGalleryDetailComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
    } }, decls: 20, vars: 5, consts: [[1, "pageWeb"], [1, "imageEtDetails"], ["id", "image", "alt", "oeuvre", 3, "src"], [1, "details"], ["id", "like"], ["id", "likeImage", "src", "../../assets/img/heart_empty.png", "width", "20px", "alt", "like", 3, "click"]], template: function FrGalleryDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Details de l'oeuvre :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrGalleryDetailComponent_Template_img_click_16_listener() { return ctx.likes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.actualPaint.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Nom : ", ctx.actualPaint.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Taille : ", ctx.actualPaint.size, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Date de cr\u00E9ation : ", ctx.actualPaint.creationdate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.actualPaint.likes, "");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["FrHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FrFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n\r\n.imageEtDetails[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  width: 100%;\r\n  margin-top: -1.5%;\r\n}\r\n\r\n#image[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  margin-left: 1.5%;\r\n  margin-top: 1.5%;\r\n  margin-bottom: 1.5%;\r\n  width: 40%;\r\n}\r\n\r\n.details[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  background-color: #e4e4e4;\r\n  float: right;\r\n  margin-right: 3%;\r\n  margin-top: 1.5%;\r\n  width: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2dhbGxlcnktZGV0YWlsL2dhbGxlcnktZGV0YWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7RUFJRTs7QUFFRjtFQUNFLFlBQVk7RUFDWix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2ZyZW5jaC9nYWxsZXJ5LWRldGFpbC9nYWxsZXJ5LWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbWcge1xyXG4gIG1hcmdpbjogMC41JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDVweCBzb2xpZCBibGFjaztcclxufSovXHJcblxyXG4ucGFnZVdlYiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW1hZ2VFdERldGFpbHMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IC0xLjUlO1xyXG59XHJcbiNpbWFnZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tbGVmdDogMS41JTtcclxuICBtYXJnaW4tdG9wOiAxLjUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuNSU7XHJcbiAgd2lkdGg6IDQwJTtcclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tcmlnaHQ6IDMlO1xyXG4gIG1hcmdpbi10b3A6IDEuNSU7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrGalleryDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery-detail',
                templateUrl: './gallery-detail.component.html',
                styleUrls: ['./gallery-detail.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }]; }, { container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/french/gallery/gallery.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/french/gallery/gallery.component.ts ***!
  \*****************************************************/
/*! exports provided: FrGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrGalleryComponent", function() { return FrGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function FrGalleryComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const oeuvre_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", oeuvre_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", oeuvre_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FrGalleryComponent {
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post(`http://127.0.0.1:8888/galerie`, '', {
            headers
        })
            .subscribe(result => {
            this.transition = result;
        });
    }
}
FrGalleryComponent.ɵfac = function FrGalleryComponent_Factory(t) { return new (t || FrGalleryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FrGalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrGalleryComponent, selectors: [["app-gallery"]], decls: 6, vars: 1, consts: [[1, "pageWeb"], [1, "blocImages"], [3, "routerLink", 4, "ngFor", "ngForOf"], [3, "routerLink"], ["alt", "oeuvre", 1, "imgs", 3, "src"]], template: function FrGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FrGalleryComponent_a_4_Template, 2, 2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transition);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["FrHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FrFooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n\r\n.blocImages[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.imgs[_ngcontent-%COMP%]:hover {\r\n  opacity: 0.8;\r\n}\r\n\r\n.imgs[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 3% 2%;\r\n}\r\n\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2ZyZW5jaC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlV2ViIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ibG9jSW1hZ2VzIHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbWdzOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuLmltZ3Mge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAzJSAyJTtcclxufVxyXG5cclxuLmhvcnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrGalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/french/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: FrHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrHeaderComponent", function() { return FrHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");





class FrHeaderComponent {
    constructor(cookieService, http) {
        this.cookieService = cookieService;
        this.http = http;
    }
    ngOnInit() {
        console.log(this.cookieService.getAll());
        if (this.cookieService.getAll().login) {
            this.login = 'Mon compte';
            document.getElementById('logout').style.display = 'inherit';
        }
        else {
            this.login = 'Connexion';
        }
    }
    logout() {
        console.log('logout');
        localStorage.clear();
        this.cookieService.delete('login');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:8888/logout', '', {
            headers
        })
            .subscribe(result => {
            console.log(result);
        });
    }
}
FrHeaderComponent.ɵfac = function FrHeaderComponent_Factory(t) { return new (t || FrHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
FrHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrHeaderComponent, selectors: [["app-headerfr"]], decls: 32, vars: 1, consts: [[1, "topnav"], ["id", "divSelectLanguage"], ["href", "fr/file", 1, "selectLanguage"], ["href", "en/home", 1, "selectLanguage"], ["href", "fr/home", 1, "selectLanguage"], ["id", "loginDiv"], ["id", "logout", "href", "fr/home", 3, "click"], ["id", "login", "href", "fr/login"], ["href", ""], ["id", "logoValouKervynTop", "src", "../assets/img/logoValouKervyn.png", "alt", "logoArtiste"], ["id", "toolbar"], ["id", "hoverHome"], ["href", "fr/home", 1, "itemToolbar"], ["id", "hoverGallery"], ["href", "fr/gallery", 1, "itemToolbar"], ["id", "hoverPresentation"], ["href", "fr/presentation", 1, "itemToolbar"], ["id", "hoverEvent"], ["href", "fr/event", 1, "itemToolbar"], ["id", "hoverContact"], ["href", "fr/contact", 1, "itemToolbar"]], template: function FrHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "NL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "EN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrHeaderComponent_Template_a_click_9_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "D\u00E9connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Galerie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Pr\u00E9sentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Evenements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.login);
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  margin: 0 -10px;\r\n}\r\n\r\n#logoValouKervynTop[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: left;\r\n  margin: 20px;\r\n}\r\n\r\n#toolbar[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 75%;\r\n  height: 40%;\r\n  \r\n  margin-top: 7%;\r\n  margin-right: 0%;\r\n  margin-left: 25%;\r\n  background-color: lightblue;\r\n}\r\n\r\n#hoverHome[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 0;\r\n}\r\n\r\n#hoverGallery[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 17%;\r\n}\r\n\r\n#hoverPresentation[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 34%;\r\n}\r\n\r\n#hoverEvent[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  \r\n  margin-left: 57%;\r\n}\r\n\r\n#hoverContact[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin-left: 80%;\r\n}\r\n\r\n.itemToolbar[_ngcontent-%COMP%] {\r\n  color: black;\r\n  background-color: #ededed;\r\n  position: relative;\r\n  padding: 13px 40px;\r\n  margin: 5% 1.5%;\r\n  text-align: left;\r\n  text-decoration: none;\r\n  font-size: 120%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  overflow: hidden;\r\n  margin: -10px 5% 0%;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n  border-bottom: solid 3px black;\r\n}\r\n\r\n.topnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  background-color: lightgray;\r\n  color: black;\r\n}\r\n\r\n.selectLanguage[_ngcontent-%COMP%] {\r\n  float : right;\r\n  color: black;\r\n  padding: 10px;\r\n  text-align: center;\r\n  font-size: 17px;\r\n  text-decoration: none;\r\n}\r\n\r\n#divSelectLanguage[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 2%;\r\n  background: #ededed;\r\n}\r\n\r\n#loginDiv[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-right: 3%;\r\n  background: #ededed;\r\n  text-align: center;\r\n}\r\n\r\n#login[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n  float: right;\r\n}\r\n\r\n#login[_ngcontent-%COMP%]:hover, #logout[_ngcontent-%COMP%]:hover {\r\n  background-color: #e4e4e4;\r\n}\r\n\r\n.hrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  background-color: white;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5% -10px;\r\n  text-align: center;\r\n}\r\n\r\n#logoValouKervynBot[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  margin: 20px 40%;\r\n}\r\n\r\n#facebook[_ngcontent-%COMP%] {\r\n  font-size: 20px;\r\n}\r\n\r\n.botnav[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  margin: 10px 2%;\r\n}\r\n\r\n#littleNav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.littlenav[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: #e4e4e4;\r\n  padding: 5px 10px;\r\n}\r\n\r\n#logout[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  font-size: 15px;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  color: black;\r\n  padding: 10px;\r\n  float: right;\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1REFBdUQ7O0FBRXZEO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBR0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIGEgYmxhY2sgYmFja2dyb3VuZCBjb2xvciB0byB0aGUgdG9wIG5hdmlnYXRpb24gKi9cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgbWFyZ2luOiAwIC0xMHB4O1xyXG59XHJcblxyXG4jbG9nb1ZhbG91S2VydnluVG9wIHtcclxuICB3aWR0aDogMjAlO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMjBweDtcclxufVxyXG5cclxuI3Rvb2xiYXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNzUlO1xyXG4gIGhlaWdodDogNDAlO1xyXG4gIC8qbWFyZ2luOiA3JSAxMCUgNSUgMjUlOyovXHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwJTtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxufVxyXG5cclxuI2hvdmVySG9tZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG59XHJcblxyXG4jaG92ZXJHYWxsZXJ5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyptYXJnaW4tbGVmdDogMTglOyovXHJcbiAgbWFyZ2luLWxlZnQ6IDE3JTtcclxufVxyXG5cclxuI2hvdmVyUHJlc2VudGF0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLyptYXJnaW4tbGVmdDogMzclOyovXHJcbiAgbWFyZ2luLWxlZnQ6IDM0JTtcclxufVxyXG5cclxuI2hvdmVyRXZlbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvKm1hcmdpbi1sZWZ0OiA2Mi41JTsqL1xyXG4gIG1hcmdpbi1sZWZ0OiA1NyU7XHJcbn1cclxuXHJcbiNob3ZlckNvbnRhY3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBtYXJnaW4tbGVmdDogODAlO1xyXG59XHJcblxyXG5cclxuLml0ZW1Ub29sYmFyIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZWRlZDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTNweCA0MHB4O1xyXG4gIG1hcmdpbjogNSUgMS41JTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbn1cclxuXHJcbi50b3BuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAtMTBweCA1JSAwJTtcclxufVxyXG5cclxuLnRvcG5hdiBhOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDNweCBibGFjaztcclxufVxyXG5cclxuLnRvcG5hdiBhLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnNlbGVjdExhbmd1YWdlIHtcclxuICBmbG9hdCA6IHJpZ2h0O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiNkaXZTZWxlY3RMYW5ndWFnZSB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1yaWdodDogMiU7XHJcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcclxufVxyXG5cclxuI2xvZ2luRGl2IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzJTtcclxuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuI2xvZ2luIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI2xvZ2luOmhvdmVyLCAjbG9nb3V0OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG59XHJcblxyXG4uaHJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5ib3RuYXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1JSAtMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNsb2dvVmFsb3VLZXJ2eW5Cb3Qge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luOiAyMHB4IDQwJTtcclxufVxyXG5cclxuI2ZhY2Vib29rIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5ib3RuYXYgaW1nIHtcclxuICBtYXJnaW46IDEwcHggMiU7XHJcbn1cclxuXHJcbiNsaXR0bGVOYXYge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpdHRsZW5hdiB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0O1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG59XHJcblxyXG4jbG9nb3V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-headerfr',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return [{ type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/french/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: FrHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrHomeComponent", function() { return FrHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _dutch_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dutch/footer/footer.component */ "./src/app/dutch/footer/footer.component.ts");




class FrHomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FrHomeComponent.ɵfac = function FrHomeComponent_Factory(t) { return new (t || FrHomeComponent)(); };
FrHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrHomeComponent, selectors: [["app-frhome"]], decls: 57, vars: 0, consts: [["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"], [1, "pageWeb"], ["id", "paraIntro"], [1, "horrow"], [1, "container"], ["id", "myCarousel", 1, "carousel", "slide"], [1, "carousel-indicators"], [1, "item1", "active"], [1, "item2"], [1, "item3"], [1, "item4"], ["role", "listbox", 1, "carousel-inner"], [1, "item", "active"], ["src", "../../assets/img/1.jpg", "alt", "Chania", "width", "460", "height", "345"], [1, "carousel-caption"], [1, "item"], ["src", "../../assets/img/2.jpg", "alt", "Chania", "width", "460", "height", "345"], ["src", "../../assets/img/3.jpg", "alt", "Flower", "width", "460", "height", "345"], ["src", "../../assets/img/4.jpg", "alt", "Flower", "width", "460", "height", "345"], ["href", "#myCarousel", "role", "button", 1, "left", "carousel-control"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-left"], [1, "sr-only"], ["href", "#myCarousel", "role", "button", 1, "right", "carousel-control"], ["aria-hidden", "true", 1, "glyphicon", "glyphicon-chevron-right"]], template: function FrHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "meta", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "link", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bienvenue sur le site de Valou Kervyn. Ici, vous trouverez toutes les informations que vous pourriez rechercher \u00E0 propose de l'artiste.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ol", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "paintings 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "paintings 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "paintings 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "paintings 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "nothing to say");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Previous");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "app-footernl");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["FrHeaderComponent"], _dutch_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["NlFooterComponent"]], styles: [".pageweb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n#paraIntro[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  font-style: italic;\r\n  text-align: center;\r\n  font-size: 23px;\r\n}\r\n#blocImages[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 0 5%;\r\n  padding: 10px;\r\n}\r\n#imageDefilante[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXdlYiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiNwYXJhSW50cm8ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4jYmxvY0ltYWdlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jaW1hZ2VEZWZpbGFudGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5ob3Jyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiJdfQ== */", ".pageweb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n}\r\n#paraIntro[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  font-style: italic;\r\n  text-align: center;\r\n  font-size: 23px;\r\n}\r\n#blocImages[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  margin: 0 5%;\r\n  padding: 10px;\r\n}\r\n#imageDefilante[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n}\r\n.horrow[_ngcontent-%COMP%] {\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZXdlYiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiNwYXJhSW50cm8ge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcblxyXG4jYmxvY0ltYWdlcyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jaW1hZ2VEZWZpbGFudGUge1xyXG4gIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbi5ob3Jyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbiJdfQ== */", ".carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%], .carousel-inner[_ngcontent-%COMP%]    > .item[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n      width: 50%;\n      margin: auto;\n    }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-frhome',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/french/inscription/inscription.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/french/inscription/inscription.component.ts ***!
  \*************************************************************/
/*! exports provided: FrInscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrInscriptionComponent", function() { return FrInscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");









class FrInscriptionComponent {
    constructor(http, formBuilder, cookieService, router) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.cookieService = cookieService;
        this.router = router;
        this.register = this.formBuilder.group({
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirm: '',
            notification: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(res) {
        if (res.password === res.confirm) {
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
                .set('Authorization', 'my-auth-token')
                .set('Content-Type', 'application/json');
            this.http.post('http://127.0.0.1:8888/new', '', {
                params: {
                    firstname: res.firstname,
                    lastname: res.lastname,
                    email: res.email,
                    password: res.password,
                    notification: res.notification
                },
                headers
            })
                .subscribe(result => {
                console.log('resultat : ' + result);
                document.getElementById('error').innerText = '';
                if (result === false) {
                    document.getElementById('error').innerText = 'L\'utilisateur existe déjà';
                    document.getElementById('error').style.display = 'flex';
                }
                else if (result === true) {
                    document.getElementById('error').innerText = 'Va vers login';
                    document.getElementById('error').style.display = 'flex';
                    this.cookieService.set(result.toString(), 'value', 1000 * 60 * 60 * 24 * 2);
                    this.cookieValue = this.cookieService.get('name');
                    this.router.navigate(['/fr/login']);
                }
                else {
                    // @ts-ignore
                    // tslint:disable-next-line:prefer-for-of
                    for (let i = 0; i < result.errors.length; i++) {
                        // @ts-ignore
                        document.getElementById('error').innerHTML += result.errors[i].msg + '<br>';
                        document.getElementById('error').style.display = 'flex';
                    }
                }
            });
        }
        else {
            document.getElementById('error').innerText = 'Veuillez indiquer 2 fois le même mot de passe ! ';
            document.getElementById('error').style.display = 'flex';
        }
    }
    shwPassword() {
        if (document.getElementById('pwd1').getAttribute('type') === 'password') {
            document.getElementById('pwd1').setAttribute('type', 'text');
            document.getElementById('pwd2').setAttribute('type', 'text');
        }
        else {
            document.getElementById('pwd1').setAttribute('type', 'password');
            document.getElementById('pwd2').setAttribute('type', 'password');
        }
    }
}
FrInscriptionComponent.ɵfac = function FrInscriptionComponent_Factory(t) { return new (t || FrInscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FrInscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrInscriptionComponent, selectors: [["app-inscription"]], decls: 38, vars: 1, consts: [[1, "inscription"], ["id", "form", "action", "", "method", "post", "name", "register", 3, "formGroup", "ngSubmit"], ["for", "firstname"], ["type", "text", "id", "firstname", "name", "firstName", "required", "", "formControlName", "firstname"], ["for", "lastname"], ["type", "text", "id", "lastname", "name", "lastName", "required", "", "formControlName", "lastname"], ["for", "mail"], ["type", "email", "id", "mail", "name", "mail", "required", "", "formControlName", "email"], ["for", "pwd1"], ["type", "password", "id", "pwd1", "name", "pwd1", "required", "", "formControlName", "password"], ["for", "shwPwd"], ["type", "checkbox", "name", "shwPwd", "id", "shwPwd", 3, "click"], ["for", "pwd2"], ["type", "password", "id", "pwd2", "name", "pwd2", "required", "", "formControlName", "confirm"], ["id", "notif"], ["type", "radio", "id", "yes", "name", "notification", "value", "yes", "checked", "", "formControlName", "notification"], ["for", "yes"], ["type", "radio", "id", "no", "name", "notification", "value", "no", "formControlName", "notification"], ["for", "no"], ["type", "submit", "id", "submit", "value", "Submit", 1, "submit"], ["href", "/fr/login"], ["type", "button", "value", "Connection"], ["id", "error"]], template: function FrInscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FrInscriptionComponent_Template_form_ngSubmit_2_listener() { return ctx.onSubmit(ctx.register.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pr\u00E9nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nom : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mail : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Voir le mot de passe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FrInscriptionComponent_Template_input_click_19_listener() { return ctx.shwPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Confirmation du mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Voulez-vous recevoir des notifications ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Oui :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Non :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.register);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["FrHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FrFooterComponent"]], styles: [".inscription[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n}\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 1%;\r\n  margin: 1%;\r\n  font-family: \"Champagne & Limousines\", sans-serif;\r\n  font-size: 20px;\r\n  width: 30%;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n#shwPwd[_ngcontent-%COMP%] {\r\n  width: auto;\r\n}\r\n#notif[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], label[_ngcontent-%COMP%] {\r\n  width: auto;\r\n}\r\n#error[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixVQUFVO0FBQ1o7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZnJlbmNoL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zY3JpcHRpb24ge1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGVkZWQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIG1hcmdpbjogMSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2hhbXBhZ25lICYgTGltb3VzaW5lc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcbmxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogMSU7XHJcbn1cclxuXHJcbiNzaHdQd2Qge1xyXG4gIHdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4jbm90aWYgaW5wdXQsIGxhYmVsIHtcclxuICB3aWR0aDogYXV0bztcclxufVxyXG5cclxuI2Vycm9yIHtcclxuICBtYXJnaW46IDAgNSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrInscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inscription',
                templateUrl: './inscription.component.html',
                styleUrls: ['./inscription.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/french/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: FrLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrLoginComponent", function() { return FrLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");









class FrLoginComponent {
    constructor(http, formBuilder, router, cookieService) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.router = router;
        this.cookieService = cookieService;
        this.checkoutForm = this.formBuilder.group({
            username: '',
            password: ''
        });
    }
    ngOnInit() {
    }
    onSubmit(res) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://127.0.0.1:8888/login', '', {
            params: {
                username: res.username,
                password: res.password
            },
            headers
        })
            .subscribe(result => {
            console.log(result);
            // @ts-ignore
            document.getElementById('error').innerText = '';
            // @ts-ignore
            if (result.message) {
                // @ts-ignore
                document.getElementById('error').innerText = result.message;
                document.getElementById('error').style.display = 'inherit';
            }
            else {
                // @ts-ignore
                this.cookieService.set('login', result.userId);
                // @ts-ignore
                localStorage.setItem('likes', result.likes);
                location.replace('/fr/home');
            }
        });
    }
}
FrLoginComponent.ɵfac = function FrLoginComponent_Factory(t) { return new (t || FrLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"])); };
FrLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrLoginComponent, selectors: [["app-login"]], decls: 23, vars: 1, consts: [[1, "pageWeb"], [3, "formGroup", "ngSubmit"], ["for", "username"], ["type", "email", "required", "", "placeholder", "example@gmail.com", "id", "username", "formControlName", "username"], ["for", "password"], ["type", "password", "required", "", "id", "password", "placeholder", "password123", "formControlName", "password"], ["type", "submit", "id", "submit", "value", "Valider", 1, "bouton"], ["href", "/fr/inscription"], ["type", "button", "id", "inscription", "value", "Inscription", 1, "bouton"], ["id", "error"]], template: function FrLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Connectez-vous \u00E0 votre compte");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FrLoginComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmit(ctx.checkoutForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mot de passe : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Mot de passe oubli\u00E9 ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-footerfr");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.checkoutForm);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["FrHeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FrFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  margin: 0 5%;\r\n  background-color: white;\r\n  padding: 1%;\r\n  font-size: 20px;\r\n  text-align: center;\r\n}\r\n\r\ninput[_ngcontent-%COMP%] {\r\n  background-color: #ededed;\r\n  border: none;\r\n  padding: 1%;\r\n  margin: 1%;\r\n  font-family: \"Champagne & Limousines\", sans-serif;\r\n  font-size: 20px;\r\n  width: 30%;\r\n}\r\n\r\nlabel[_ngcontent-%COMP%] {\r\n  margin-left: 1%;\r\n}\r\n\r\n#submit[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 14%;\r\n  margin-right: 2%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n#inscription[_ngcontent-%COMP%] {\r\n  position :relative;\r\n  width: 14%;\r\n  margin-left: 2%;\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.bouton[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 3px solid black;\r\n}\r\n\r\n#error[_ngcontent-%COMP%] {\r\n  \r\n  position: relative;\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtFQUNWLGlEQUFpRDtFQUNqRCxlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO3lCQUN1QjtFQUN2QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvZnJlbmNoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZVdlYiB7XHJcbiAgbWFyZ2luOiAwIDUlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRlZGVkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAxJTtcclxuICBtYXJnaW46IDElO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNoYW1wYWduZSAmIExpbW91c2luZXNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5sYWJlbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4jc3VibWl0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0JTtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuI2luc2NyaXB0aW9uIHtcclxuICBwb3NpdGlvbiA6cmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE0JTtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uYm91dG9uOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XHJcbn1cclxuXHJcbiNlcnJvciB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDAwNTU7XHJcbiAgYm9yZGVyOiByZWQgMXB4IHNvbGlkOyovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/french/presentation/presentation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/french/presentation/presentation.component.ts ***!
  \***************************************************************/
/*! exports provided: FrPresentationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrPresentationComponent", function() { return FrPresentationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/french/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/french/footer/footer.component.ts");




class FrPresentationComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FrPresentationComponent.ɵfac = function FrPresentationComponent_Factory(t) { return new (t || FrPresentationComponent)(); };
FrPresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FrPresentationComponent, selectors: [["app-presentation"]], decls: 26, vars: 0, consts: [[1, "pageWeb"], ["id", "titre"], ["id", "paragraphe"], ["src", "../../../assets/img/ValouKervyn.jpg", "id", "img1"], ["id", "p1"]], template: function FrPresentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-headerfr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Presentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " A propos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Valou Kervyn Artiste peintre belge ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " N\u00E9e \u00E0 Bruxelles le 21 juin 1973, Valou Kervyn d\u00E9couvre la passion pour le dessin et la peinture gr\u00E2ce \u00E0 un atelier qu\u2019elle suivait toutes les semaines depuis l\u2019\u00E2ge de 10 ans.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Apr\u00E8s des humanit\u00E9s artistiques, elle choisit des \u00E9tudes de graphisme \u00E0 l\u2019Ecole de Recherche Graphique (ERG) et Ecole du 75 (Bruxelles) suivi de cours du soir en illustration avec Alain Goffin. En 2012, lors de la cr\u00E9ation d\u2019un r\u00E9seau de d\u00E9coration d\u2019int\u00E9rieur qui regroupe artistes et artisans, elle retrouve ses premiers amours et avec bonheur le chemin de son atelier. Depuis lors, elle y passe ses journ\u00E9es...elles sont rythm\u00E9es de couleurs, de mati\u00E8res, de mouvements, de recherches et d\u2019amusements... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Ma d\u00E9marche artistique");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Attir\u00E9e par les couleurs, les formes et les textures... Curieuse de travailler avec des \u00AB objets \u00BB et des \u00AB mat\u00E9riaux \u00BB diff\u00E9rents... Les couleurs sont superpos\u00E9es , l\u2019acrylique est travaill\u00E9e avec des palettes, des cartons, du fil de fer, du grillage\u2026 Les \u00E9motions sont aussi superpos\u00E9es\u2026 de nature expressive, jumel\u00E9e \u00E0 une forte sensibilit\u00E9, je projette les sentiments du moment m\u00E9lang\u00E9s avec les \u00E9motions ressenties lors de la construction et l\u2019organisation de la toile dans ma t\u00EAte. Je travaille en deux temps, une toile se construit\u2026 d\u2019abord j\u2019imagine, je r\u00EAve et puis au fil du temps je la vois, elle se r\u00E9alise, elle doit sortir\u2026 Alors, je m\u2019emballe, je regroupe le mat\u00E9riel et j\u2019attaque... Ce moment l\u00E0 est comme suspendu... C\u2019est magique quand les id\u00E9es, les ressentis deviennent mati\u00E8re, quand il faut rajouter du sable dans la peinture pour accentuer le mouvement, quand les palettes, les cartons remplis de couleurs transcrivent en toute libert\u00E9 ce qui a \u00E9t\u00E9 imagin\u00E9. Parfois c\u2019est explosif, parfois plus pos\u00E9 .... les techniques varient en fonction de mes \u00E9motions, par contre toujours en couleur\u2026 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-footerfr");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["FrHeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FrFooterComponent"]], styles: [".pageWeb[_ngcontent-%COMP%] {\r\n  background-color: white;\r\n  margin: 0 5%;\r\n  padding: 1%;\r\n}\r\n#img1[_ngcontent-%COMP%] {\r\n  width: 40%;\r\n  padding: 2% 3% 2% 8%;\r\n}\r\n#p1[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  padding: 2% 2% 2% 0%;\r\n}\r\n#p2[_ngcontent-%COMP%]{\r\n  width: 45%;\r\n  padding: 2% 8% 2% 20%;\r\n  text-align: right;\r\n}\r\n#img2[_ngcontent-%COMP%]{\r\n  padding: 2% 2% 2% 8%;\r\n  width: 10%;\r\n}\r\n#p3[_ngcontent-%COMP%]{\r\n  padding: 2% 5%;\r\n  text-align: center;\r\n}\r\n#paragraphe[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n#titre[_ngcontent-%COMP%] {\r\n  padding: 0% 8%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlbmNoL3ByZXNlbnRhdGlvbi9wcmVzZW50YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLFVBQVU7QUFDWjtBQUNBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9mcmVuY2gvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2VXZWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbjogMCA1JTtcclxuICBwYWRkaW5nOiAxJTtcclxufVxyXG4jaW1nMSB7XHJcbiAgd2lkdGg6IDQwJTtcclxuICBwYWRkaW5nOiAyJSAzJSAyJSA4JTtcclxufVxyXG4jcDF7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBwYWRkaW5nOiAyJSAyJSAyJSAwJTtcclxufVxyXG4jcDJ7XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBwYWRkaW5nOiAyJSA4JSAyJSAyMCU7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuI2ltZzJ7XHJcbiAgcGFkZGluZzogMiUgMiUgMiUgOCU7XHJcbiAgd2lkdGg6IDEwJTtcclxufVxyXG4jcDN7XHJcbiAgcGFkZGluZzogMiUgNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNwYXJhZ3JhcGhle1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbiN0aXRyZSB7XHJcbiAgcGFkZGluZzogMCUgOCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FrPresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-presentation',
                templateUrl: './presentation.component.html',
                styleUrls: ['./presentation.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\natha\Documents\web\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map