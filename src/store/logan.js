"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mobx_1 = require("mobx");
var Store = /** @class */ (function () {
    function Store() {
        this.menus = [];
        this.flatMenus = [];
        this.userAuthority = []; // 当前用户权限表
        this.hello = "world";
    }
    __decorate([
        mobx_1.observable
    ], Store.prototype, "menus", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "flatMenus", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "userAuthority", void 0);
    __decorate([
        mobx_1.observable
    ], Store.prototype, "hello", void 0);
    return Store;
}());
exports.default = Store;
