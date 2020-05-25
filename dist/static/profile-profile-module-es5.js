function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)();
    };

    ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      decls: 14,
      vars: 0,
      consts: [[1, "blog"], [1, "about"], ["src", "assets/afif-min.jpg", "alt", "afifalfiano", 1, "myProfile"], [1, "introduction"], [1, "new"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About this blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Website ini bertujuan untuk membagikan artikel bermanfaat untuk kedepannya demi kemajuan developer indonesia. Semoga dengan adanya tulisan dari Saya ini mampu memompa semangat teman-teman yang ingin mengawali karir sebagai developer. Tidak ada kata terlambat untuk memulai sesuatu. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "blockquote");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\"Mulailah sekarang atau tidak sama sekali!\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Perkenalkan Saya Afif Alfiano berasal dari Yogyakarta. Saya seorang yang ingin terus belajar dan tidak mudah menyerah Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, itaque. Reprehenderit labore beatae ad similique dolorum itaque libero nesciunt harum aspernatur cumque eos voluptatem possimus quas culpa dicta, quasi sed commodi. Accusantium molestias obcaecati tempore dicta quod commodi voluptates ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, eveniet adipisci ipsum voluptatem necessitatibus temporibus aspernatur rerum tenetur explicabo deleniti quam qui, iure asperiores exercitationem fugiat quasi non voluptate quidem minima. Odio nobis quibusdam est impedit id consequuntur labore magni?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["section[_ngcontent-%COMP%]{\r\n    max-width: auto;\r\n    \r\n}\r\n\r\narticle.blog[_ngcontent-%COMP%]{\r\n    color:#eee;\r\n    background-color: rgba(0,0,0, 0.5);\r\n    overflow: hidden;\r\n    position: relative;\r\n    height: 250px;\r\n    display: flex;\r\n    font-size: 21px;\r\n    text-align: center;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n}\r\n\r\narticle.blog[_ngcontent-%COMP%]::after {\r\n    content: '';\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-position: center;\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    background-size: 100%;\r\n    z-index: -1;\r\n  }\r\n\r\narticle.blog[_ngcontent-%COMP%]::after{\r\n    background-image: url(/assets/profile-min.jpg);\r\n}\r\n\r\n.about[_ngcontent-%COMP%]{\r\n    margin: auto;\r\n    width:60%;\r\n    margin-top:20px;\r\n    font-size: 14px;\r\n}\r\n\r\nimg.myProfile[_ngcontent-%COMP%]{\r\n    padding: 2px;\r\n    border-radius: 50%;\r\n    width:120px;\r\n    border: 2px solid grey;\r\n    float: left;\r\n    margin-right: 20px;\r\n}\r\n\r\nblockquote[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    padding:10px;\r\n    border-left: 5px solid beige;\r\n    margin: 5px 150px 0;\r\n    font-style: italic;\r\n    font-weight: 500;    \r\n}\r\n\r\n.introduction[_ngcontent-%COMP%]{\r\n    margin-top:20px;\r\n    position: relative;\r\n    float: left;\r\n}\r\n\r\np.new[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    clear: both;\r\n    font-weight: 500;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlOztBQUVuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbntcclxuICAgIG1heC13aWR0aDogYXV0bztcclxuICAgIFxyXG59XHJcblxyXG5hcnRpY2xlLmJsb2d7XHJcbiAgICBjb2xvcjojZWVlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwgMC41KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5hcnRpY2xlLmJsb2c6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuXHJcbmFydGljbGUuYmxvZzo6YWZ0ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9wcm9maWxlLW1pbi5qcGcpO1xyXG59XHJcblxyXG4uYWJvdXR7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaW1nLm15UHJvZmlsZXtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOjEyMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5ibG9ja3F1b3Rle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBiZWlnZTtcclxuICAgIG1hcmdpbjogNXB4IDE1MHB4IDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICBmb250LXdlaWdodDogNTAwOyAgICBcclxufVxyXG5cclxuLmludHJvZHVjdGlvbntcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5wLm5ld3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-profile',
          templateUrl: './profile.component.html',
          styleUrls: ['./profile.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/profile/profile.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/profile/profile.module.ts ***!
    \*******************************************/

  /*! exports provided: ProfileModule */

  /***/
  function srcAppProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ProfileModule
    });
    ProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ProfileModule_Factory(t) {
        return new (t || ProfileModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
      }])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProfileModule, {
        declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
            path: '',
            component: _profile_component__WEBPACK_IMPORTED_MODULE_1__["ProfileComponent"]
          }])]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=profile-profile-module-es5.js.map