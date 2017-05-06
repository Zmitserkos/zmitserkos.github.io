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
var todo_service_1 = require("./todo.service");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(todoService, rd, activateRoute, router) {
        var _this = this;
        this.todoService = todoService;
        this.rd = rd;
        this.activateRoute = activateRoute;
        this.router = router;
        this.editedText = '';
        router.events.subscribe(function (val) {
            if (val.url && val.url.slice(0, 6) === '/share') {
                var state = val.url.slice(7);
                _this.data.decodeFromUrl(state);
            }
            ;
        });
        if (activateRoute.snapshot.url &&
            activateRoute.snapshot.url[0] &&
            activateRoute.snapshot.url[0].path == 'active') {
            this.filterParam = false;
            return;
        }
        if (activateRoute.snapshot.url &&
            activateRoute.snapshot.url[0] &&
            activateRoute.snapshot.url[0].path == 'completed') {
            this.filterParam = true;
            return;
        }
        this.filterParam = null;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.data = this.todoService.getData();
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        if (this.el) {
            this.rd.invokeElementMethod(this.el.nativeElement, 'focus');
        }
    };
    HomeComponent.prototype.delTodo = function (todo) {
        this.data.delTodo(todo);
    };
    HomeComponent.prototype.markAll = function () {
        this.data.markAll();
    };
    HomeComponent.prototype.toggleCompleted = function () {
        this.data.toggleCompleted();
    };
    HomeComponent.prototype.setEditing = function (todo) {
        if (this.data.todos.some(function (todo) { return todo.editing; })) {
            return;
        }
        todo.editing = true;
        this.editedText = todo.title;
    };
    ;
    HomeComponent.prototype.cancelEditing = function (todo) {
        todo.editing = false;
        this.editedText = '';
    };
    HomeComponent.prototype.doBlurEvent = function (todo, index, event) {
        var target = event.target;
        target.blur();
    };
    HomeComponent.prototype.saveTodo = function (todo, index) {
        if (todo.editing) {
            this.data.saveTodo(todo, index, this.editedText);
            this.editedText = '';
        }
    };
    return HomeComponent;
}());
__decorate([
    core_1.ViewChild('editInput'),
    __metadata("design:type", core_1.ElementRef)
], HomeComponent.prototype, "el", void 0);
HomeComponent = __decorate([
    core_1.Component({
        selector: 'home-app',
        templateUrl: './home.html'
    }),
    __metadata("design:paramtypes", [todo_service_1.TodoService, core_1.Renderer, router_1.ActivatedRoute, router_2.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map