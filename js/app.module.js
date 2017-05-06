"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home.component");
var matches_completed_pipe_1 = require("./matches-completed-pipe");
var todo_service_1 = require("./todo.service");
var custom_modal_1 = require("./custom-modal");
// routes definition
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' },
    { path: 'share/:state', redirectTo: '/' },
    { path: 'active', component: home_component_1.HomeComponent },
    { path: 'completed', component: home_component_1.HomeComponent },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(appRoutes), angular2_modal_1.ModalModule.forRoot(), bootstrap_1.BootstrapModalModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, matches_completed_pipe_1.MatchesCompletedPipe, custom_modal_1.ShareModal],
        providers: [todo_service_1.TodoService],
        bootstrap: [app_component_1.AppComponent],
        entryComponents: [custom_modal_1.ShareModal]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map