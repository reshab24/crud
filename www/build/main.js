webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_service_service__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var HomePage = /** @class */ (function () {
    function HomePage(storageService, plt, toastController) {
        var _this = this;
        this.storageService = storageService;
        this.plt = plt;
        this.toastController = toastController;
        this.items = [];
        this.newItem = {};
        this.plt.ready().then(function () {
            _this.loadItems();
        }).catch();
    }
    // CREATE
    HomePage.prototype.addItem = function () {
        var _this = this;
        this.newItem.modified = Date.now();
        this.newItem.id = Object(__WEBPACK_IMPORTED_MODULE_3_uuid__["v4"])();
        this.storageService.addItem(this.newItem).then(function (item) {
            _this.newItem = {};
            _this.showToast('Item added!');
            _this.loadItems(); // Or add it to the array directly
        }).catch(function (err) {
        });
    };
    // READ
    HomePage.prototype.loadItems = function () {
        var _this = this;
        this.storageService.getItems().then(function (items) {
            _this.items = items;
        }).catch(function (err) {
        });
    };
    // UPDATE
    HomePage.prototype.updateItem = function (item) {
        var _this = this;
        item.title = "UPDATED: " + item.title;
        item.modified = Date.now();
        this.storageService.updateItem(item).then(function (item) {
            _this.showToast('Item updated!');
            console.log(_this.mylist.na);
            _this.mylist.sliding = false;
            // Fix or sliding is stuck afterwards
            _this.loadItems(); // Or update it inside the array directly
        }).catch(function (eror) {
            console.log(eror);
        });
    };
    // DELETE
    HomePage.prototype.deleteItem = function (item) {
        var _this = this;
        this.storageService.deleteItem(item.id).then(function (item) {
            _this.showToast('Item removed!');
            _this.mylist.sliding = false; // Fix or sliding is stuck afterwards
            _this.loadItems(); // Or splice it from the array directly
        }).catch(function (err) {
            console.log(err);
        });
    };
    // Helper
    HomePage.prototype.showToast = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mylist'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* List */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* List */]) === "function" && _a || Object)
    ], HomePage.prototype, "mylist", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/bittint/Desktop/CRUD/crud/src/pages/home/home.html"*/'\n<ion-header>\n    <ion-toolbar color="primary">\n      <ion-title>\n        Ionic Storage\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-item>\n      <ion-label stacked>Title</ion-label>\n      <ion-input [(ngModel)]="newItem.title"></ion-input>\n    </ion-item>\n   \n    <ion-item>\n      <ion-label stacked>Value</ion-label>\n      <ion-input [(ngModel)]="newItem.value"></ion-input>\n    </ion-item>\n   \n    <button ion-button expand="full" (click)="addItem()">Add Item!</button>\n   \n    <ion-list #mylist>\n      <ion-list-header>\n        <ion-label>My Items</ion-label>\n      </ion-list-header>\n      <ion-item-sliding *ngFor="let item of items">\n        <ion-item>\n          <ion-label text-wrap>\n            <h3>{{ item.title }}</h3>\n            <div ion-text color="secondary">\n              <p>{{ item.value }}</p>\n            </div>\n            <p>{{ item.modified | date:\'short\'}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item-options side="right">\n          <button ion-button color="secondary" (click)="updateItem(item)">Update</button>\n          <button ion-button  color="danger" (click)="deleteItem(item)">Delete</button>\n        </ion-item-options>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-content>\n'/*ion-inline-end:"/Users/bittint/Desktop/CRUD/crud/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_service_service__["a" /* ServiceProvider */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ToastController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ITEMS_KEY = 'my-items';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(storage) {
        this.storage = storage;
    }
    // CREATE
    ServiceProvider.prototype.addItem = function (item) {
        var _this = this;
        console.log(item);
        return this.storage.get(ITEMS_KEY).then(function (items) {
            if (items) {
                items.push(item);
                return _this.storage.set(ITEMS_KEY, items);
            }
            else {
                return _this.storage.set(ITEMS_KEY, [item]);
            }
        });
    };
    // READ
    ServiceProvider.prototype.getItems = function () {
        return this.storage.get(ITEMS_KEY);
    };
    // UPDATE
    ServiceProvider.prototype.updateItem = function (item) {
        var _this = this;
        return this.storage.get(ITEMS_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            var newItems = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var i = items_1[_i];
                if (i.id === item.id) {
                    newItems.push(item);
                }
                else {
                    newItems.push(i);
                }
            }
            return _this.storage.set(ITEMS_KEY, newItems);
        });
    };
    // DELETE
    ServiceProvider.prototype.deleteItem = function (id) {
        var _this = this;
        return this.storage.get(ITEMS_KEY).then(function (items) {
            if (!items || items.length === 0) {
                return null;
            }
            var toKeep = [];
            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                var i = items_2[_i];
                if (i.id !== id) {
                    toKeep.push(i);
                }
            }
            return _this.storage.set(ITEMS_KEY, toKeep);
        });
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_service_service__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_service_service__["a" /* ServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/bittint/Desktop/CRUD/crud/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/bittint/Desktop/CRUD/crud/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map