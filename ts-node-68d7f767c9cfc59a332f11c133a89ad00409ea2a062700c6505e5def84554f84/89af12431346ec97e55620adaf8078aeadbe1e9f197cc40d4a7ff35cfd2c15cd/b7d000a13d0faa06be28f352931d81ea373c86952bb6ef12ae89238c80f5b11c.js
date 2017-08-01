"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_server_1 = require("@angular/platform-server");
var app_module_1 = require("./app.module");
var app_component_1 = require("./app.component");
var AppServerModule = (function () {
    function AppServerModule() {
    }
    AppServerModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_server_1.ServerModule,
                app_module_1.AppModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppServerModule);
    return AppServerModule;
}());
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvaG9zcG9naC9EZXNrdG9wL2JldFByb2plY3RMaWJyYXJpdW0vbGlicmFyaXVtL3NyYy9hcHAvYXBwLnNlcnZlci5tb2R1bGUudHMiLCJzb3VyY2VzIjpbIi9ob21lL2hvc3BvZ2gvRGVza3RvcC9iZXRQcm9qZWN0TGlicmFyaXVtL2xpYnJhcml1bS9zcmMvYXBwL2FwcC5zZXJ2ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDREQUF3RDtBQUN4RCwyQ0FBeUM7QUFDekMsaURBQStDO0FBUy9DO0lBQUE7SUFBK0IsQ0FBQztJQUFuQixlQUFlO1FBUDNCLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCw4QkFBWTtnQkFDWixzQkFBUzthQUNWO1lBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMxQixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZXJ2ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1zZXJ2ZXInO1xuaW1wb3J0IHsgQXBwTW9kdWxlIH0gZnJvbSAnLi9hcHAubW9kdWxlJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBTZXJ2ZXJNb2R1bGUsXG4gICAgQXBwTW9kdWxlXG4gIF0sXG4gIGJvb3RzdHJhcDogW0FwcENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwU2VydmVyTW9kdWxlIHsgfVxuIl19