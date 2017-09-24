"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Vinay Sharma ';
        this.city = 'Hyderabad';
        this.street = '342 park avenue';
        this.hideAddress = false;
        this.region = 'east';
    }
    AppComponent.prototype.addressClick = function () {
        this.hideAddress = !this.hideAddress;
    };
    AppComponent.prototype.changeAddress = function (region) {
        this.region = region;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  \t<h1> {{name}}</h1>\n  \t<p><i>{{name}} is at {{street}} in {{city}} in {{region}} region</i></p>\n  \t<label>Name: <input [(ngModel)]=\"name\"> </label>\n  \t<br/>\n  \t<label><input type=\"checkbox\" [(ngModel)]=\"hideAddress\"> Hide Address</label>\n  \t<div [hidden]=\"hideAddress\">\n  \t\t<fieldset>\n  \t\t\t<label>Street: <input [(ngModel)]=\"street\"></label>\n  \t\t</fieldset>\n  \t\t<fieldset>\n  \t\t\t<label>City: <input [(ngModel)]=\"city\"> </label>\n  \t\t</fieldset>\n  \t\t<fieldset>\n  \t\t\t<select [(ngModel)]=\"region\">\n\t\t\t\t<option>north</option>\n\t\t\t\t<option>east</option>\n\t\t\t\t<option>west</option>\n\t\t\t\t<option>south</option>\n  \t\t\t</select>\n  \t\t</fieldset>\n  \t</div>\n  ",
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map