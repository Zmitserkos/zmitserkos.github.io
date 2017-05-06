"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var angular2_modal_1 = require("angular2-modal");
var bootstrap_1 = require("angular2-modal/plugins/bootstrap");
var todo_service_1 = require("./todo.service");
var custom_modal_1 = require("./custom-modal");
var AppComponent = (function () {
    function AppComponent(vcRef, modal, todoService) {
        this.modal = modal;
        this.todoService = todoService;
        this.newTitle = '';
        modal.overlay.defaultViewContainer = vcRef;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.data = this.todoService.getData();
    };
    AppComponent.prototype.modalOpen = function () {
        return this.modal.open(custom_modal_1.ShareModal, angular2_modal_1.overlayConfigFactory({ stateLink: this.data.encodeToUrl(), location: window.location.href + 'share/' }, bootstrap_1.BSModalContext));
    };
    AppComponent.prototype.addTodo = function () {
        this.data.addTodo(this.newTitle);
        this.newTitle = '';
    };
    AppComponent.prototype.clearCompleted = function () {
        this.data.clearCompleted();
    };
    AppComponent.prototype.hasCompleted = function () {
        return this.data.todos.some(function (todo) {
            return todo.completed;
        });
    };
    AppComponent.prototype.getActiveCount = function () {
        var activeCount = this.data.todos.filter(function (todo) {
            return !todo.completed;
        }).length;
        return activeCount;
    };
    AppComponent.prototype.getEnding = function () {
        var activeCount = this.data.todos.filter(function (todo) {
            return !todo.completed;
        }).length;
        return activeCount === 1 ? '' : 's';
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'todo-app',
        templateUrl: 'todo-index.html',
        providers: [bootstrap_1.Modal]
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef, bootstrap_1.Modal, todo_service_1.TodoService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map