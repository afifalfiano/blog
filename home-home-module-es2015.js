(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _current_post_blogs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../current-post/blogs */ "./src/app/current-post/blogs.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");






function HomeComponent_article_5_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_article_5_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const blog_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.goto(blog_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n  ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Baca Selengkapnya ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\n  \n    ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const blog_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](blog_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", blog_r1.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", blog_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", blog_r1.authorName, "");
} }
class HomeComponent {
    constructor(blogsSvc, routerSvc, scullySvc) {
        this.blogsSvc = blogsSvc;
        this.routerSvc = routerSvc;
        this.scullySvc = scullySvc;
        this.blogs = [];
        this.blogPosts = [];
    }
    getData() {
        this.blogPosts = this.scullySvc.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(routes => routes.filter(route => route.route.startsWith('/blog/') && route.sourceFile.endsWith('.md'))));
        this.scullySvc.available$.subscribe(data => {
            data.forEach((n) => this.blogs.push(n));
            this.returnedArray = this.blogs.slice(2, 7);
        });
    }
    ngOnInit() {
        this.getData();
        console.log(this.blogs);
        console.log(this.returnedArray);
    }
    pageChanged(event) {
        const startItem = (event.page - 1) * event.itemsPerPage;
        const endItem = event.page * event.itemsPerPage;
        this.returnedArray = this.blogs.slice(startItem, endItem);
    }
    goto(blog) {
        this.routerSvc.navigateByUrl(blog.route);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_current_post_blogs__WEBPACK_IMPORTED_MODULE_2__["Blogs"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], inputs: { blogs: "blogs" }, decls: 14, vars: 3, consts: [[4, "ngFor", "ngForOf"], [1, "pagination-loc"], [3, "totalItems", "maxSize", "pageChanged"], [1, "thumbnail"], ["src", "assets/post.jpg", "alt", "", 1, "img-cover", 3, "click"], [1, "content"], [1, "category"], [1, "date"], [1, "title"], [1, "desc"], [3, "routerLink"], [1, "author"], ["src", "assets/afif-min.jpg", "alt", "AfifAlfiano", 1, "img-author"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-current-post");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sharing is Caring");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HomeComponent_article_5_Template, 28, 6, "article", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n  ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChanged", function HomeComponent_Template_pagination_pageChanged_10_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\n\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.returnedArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("totalItems", ctx.blogs.length)("maxSize", 5);
    } }, styles: ["h1[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 2em;\r\n  text-align: center;\r\n  padding: 20px 0;\r\n  font-style: italic;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-size: 1.8em;\r\n  font-weight: 300;\r\n}\r\n\r\narticle[_ngcontent-%COMP%] {\r\n  border: 2px solid #eee;\r\n  padding: 20px;\r\n  border-radius: 5px;\r\n  font-size: 1.2em;\r\n  width: 60%;\r\n  max-width: 1200px;\r\n  min-width: 300px;\r\n  margin: auto auto 20px;\r\n  position: relative;\r\n  display: flex;\r\n}\r\n\r\n.thumbnail[_ngcontent-%COMP%] {\r\n  max-width: 35%;\r\n  flex: 1;\r\n}\r\n\r\n.img-cover[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  \r\n  transition: 0.4s ease-in;\r\n}\r\n\r\n\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  flex:1;\r\n  padding: 1em 1.7em;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #222;\r\n  text-decoration: underline;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: #000;\r\n}\r\n\r\n.pagination-loc[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  width: 60%;\r\n  padding: 20px;\r\n  display: flex;\r\n  justify-content: center;\r\n  max-width: 1200px;\r\n  min-width: 300px;\r\n  margin: auto auto 20px;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  clear: both;\r\n  font-size: 1.6em;\r\n  font-weight: 500;\r\n  color:#444;\r\n  padding:10px 0;\r\n}\r\n\r\n.date[_ngcontent-%COMP%]{\r\n  float: right;\r\n  font-size: 14px;\r\n  font-weight: normal;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%]{\r\n  text-align: justify;\r\n  margin-bottom: 60px;\r\n}\r\n\r\n.category[_ngcontent-%COMP%]{\r\n  font-size: 14px;\r\n  float: left;\r\n  font-style: italic;\r\n}\r\n\r\n.img-author[_ngcontent-%COMP%]{\r\n  width: 40px;\r\n  border-radius: 50%;\r\n  margin-right: 5px;\r\n}\r\n\r\n.author[_ngcontent-%COMP%]{\r\n  padding:0;\r\n  margin:0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxNQUFNO0VBQ04sa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsYUFBYTtFQUNiLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweCAwO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMS44ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuYXJ0aWNsZSB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2VlZTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IGF1dG8gYXV0byAyMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi50aHVtYm5haWwge1xyXG4gIG1heC13aWR0aDogMzUlO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5pbWctY292ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qIGZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAqL1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbjtcclxufVxyXG5cclxuLyogLmltZy1jb3Zlcjpob3ZlciB7XHJcbiAgZmlsdGVyOiBub25lO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1vdXQ7XHJcbn0gKi9cclxuXHJcbi5jb250ZW50IHtcclxuICBmbGV4OjE7XHJcbiAgcGFkZGluZzogMWVtIDEuN2VtO1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiAjMjIyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24tbG9jIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXJnaW46IGF1dG8gYXV0byAyMHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGZvbnQtc2l6ZTogMS42ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjojNDQ0O1xyXG4gIHBhZGRpbmc6MTBweCAwO1xyXG59XHJcblxyXG4uZGF0ZXtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5kZXNje1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmNhdGVnb3J5e1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi5pbWctYXV0aG9ye1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG5cclxuLmF1dGhvcntcclxuICBwYWRkaW5nOjA7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].Emulated
            }]
    }], function () { return [{ type: _current_post_blogs__WEBPACK_IMPORTED_MODULE_2__["Blogs"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"] }]; }, { blogs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _current_post_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../current-post/shared.module */ "./src/app/current-post/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/pagination */ "./node_modules/ngx-bootstrap/__ivy_ngcc__/pagination/fesm2015/ngx-bootstrap-pagination.js");
/* harmony import */ var _current_post_current_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../current-post/current-post.component */ "./src/app/current-post/current-post.component.ts");











class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _current_post_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
            ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _current_post_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _current_post_shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"],
                    ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationModule"].forRoot(),
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
                        }
                    ])
                ]
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgPluralCase"], _current_post_current_post_component__WEBPACK_IMPORTED_MODULE_6__["CurrentPostComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PagerComponent"], ngx_bootstrap_pagination__WEBPACK_IMPORTED_MODULE_5__["PaginationComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_l"], _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["KeyValuePipe"]]);


/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map