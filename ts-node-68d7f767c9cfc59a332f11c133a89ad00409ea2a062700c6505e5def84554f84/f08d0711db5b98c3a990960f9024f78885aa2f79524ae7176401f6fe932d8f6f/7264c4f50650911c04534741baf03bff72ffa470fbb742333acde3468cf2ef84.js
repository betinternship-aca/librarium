"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var material_1 = require("@angular/material");
var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MdButtonModule],
            exports: [material_1.MdButtonModule]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());
exports.AppMaterialModule = AppMaterialModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvaG9zcG9naC9EZXNrdG9wL2JldFByb2plY3RMaWJyYXJpdW0vbGlicmFyaXVtL3NyYy9hcHAvYXBwLW1hdGVyaWFsLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvaG9zcG9naC9EZXNrdG9wL2JldFByb2plY3RMaWJyYXJpdW0vbGlicmFyaXVtL3NyYy9hcHAvYXBwLW1hdGVyaWFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNDQUF1QztBQUN2Qyw4Q0FFMkI7QUFPM0I7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGlCQUFpQjtRQUo3QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyx5QkFBYyxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHlCQUFjLENBQUM7U0FDMUIsQ0FBQztPQUNXLGlCQUFpQixDQUFJO0lBQUQsd0JBQUM7Q0FBQSxBQUFsQyxJQUFrQztBQUFyQiw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1kQnV0dG9uTW9kdWxlXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTWRCdXR0b25Nb2R1bGVdLFxuICBleHBvcnRzOiBbTWRCdXR0b25Nb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1hdGVyaWFsTW9kdWxlIHsgfVxuIl19