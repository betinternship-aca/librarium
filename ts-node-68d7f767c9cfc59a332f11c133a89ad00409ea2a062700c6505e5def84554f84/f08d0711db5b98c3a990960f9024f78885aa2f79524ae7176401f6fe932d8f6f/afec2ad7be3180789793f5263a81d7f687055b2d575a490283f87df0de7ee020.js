"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var app_material_module_1 = require("./app-material.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'librarium' }),
                app_routing_module_1.AppRoutingModule,
                app_material_module_1.AppMaterialModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvaG9zcG9naC9EZXNrdG9wL2JldFByb2plY3RMaWJyYXJpdW0vbGlicmFyaXVtL3NyYy9hcHAvYXBwLm1vZHVsZS50cyIsInNvdXJjZXMiOlsiL2hvbWUvaG9zcG9naC9EZXNrdG9wL2JldFByb2plY3RMaWJyYXJpdW0vbGlicmFyaXVtL3NyYy9hcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLDhEQUF3RDtBQUN4RCxzQ0FBdUM7QUFFdkMsMkRBQXNEO0FBQ3RELGlEQUE2QztBQUM3Qyw2REFBd0Q7QUFjeEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBWnJCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRTtnQkFDWiw0QkFBWTthQUNiO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdDQUFhLENBQUMsb0JBQW9CLENBQUMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFDLENBQUM7Z0JBQ3hELHFDQUFnQjtnQkFDaEIsdUNBQWlCO2FBQ2xCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzFCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QnJvd3Nlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XG5pbXBvcnQge0FwcENvbXBvbmVudH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7QXBwTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vYXBwLW1hdGVyaWFsLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZS53aXRoU2VydmVyVHJhbnNpdGlvbih7YXBwSWQ6ICdsaWJyYXJpdW0nfSksXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBBcHBNYXRlcmlhbE1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFtdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=