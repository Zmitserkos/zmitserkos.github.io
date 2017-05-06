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
var todo_1 = require("./todo");
var core_1 = require("@angular/core");
var TodoService = (function () {
    function TodoService() {
        this.name = 'todos-kasyanenka';
        var persistedTodos = JSON.parse(localStorage.getItem(this.name) || '[]');
        this.todos = persistedTodos.map(function (todo) {
            var ret = new todo_1.Todo(todo.id, todo.title);
            ret.completed = todo.completed;
            return ret;
        });
        this.allCompleted = this.todos.every(function (todo) { return todo.completed; });
    }
    TodoService.prototype.getData = function () {
        return this;
    };
    TodoService.prototype.updateLocalStorage = function () {
        localStorage.setItem(this.name, JSON.stringify(this.todos));
    };
    TodoService.prototype.addTodo = function (text) {
        if (text === null || text === undefined || text.trim() === "") {
            return;
        }
        var newId = this.todos.length === 0 ? 1 : Math.max.apply(null, this.todos.map(function (item) { return item.id; })) + 1;
        this.todos.push(new todo_1.Todo(newId, text.trim()));
        this.updateLocalStorage();
    };
    TodoService.prototype.delTodo = function (todo) {
        var id = todo.id;
        var index = 0;
        var n = this.todos.length;
        while (index < n) {
            if (this.todos[index].id === id)
                break;
            index++;
        }
        if (index === n)
            return;
        this.todos.splice(index, 1);
        this.updateLocalStorage();
        this.toggleCompleted();
    };
    TodoService.prototype.toggleCompleted = function () {
        var allSame;
        allSame = this.todos.every(function (todo) { return todo.completed; });
        if (allSame) {
            this.allCompleted = true;
        }
        else {
            this.allCompleted = false;
        }
        this.updateLocalStorage();
    };
    TodoService.prototype.markAll = function () {
        var currContext = this;
        this.todos.forEach(function (todo) {
            todo.completed = currContext.allCompleted;
        });
        this.updateLocalStorage();
    };
    TodoService.prototype.clearCompleted = function () {
        this.todos = this.todos.filter(function (todo) {
            return !todo.completed;
        });
        this.allCompleted = false;
        this.updateLocalStorage();
    };
    TodoService.prototype.saveTodo = function (todo, index, text) {
        if (text === null || text === undefined || text.trim() === "") {
            this.delTodo(todo);
            return;
        }
        todo.title = text.trim();
        this.updateLocalStorage();
        todo.editing = false;
    };
    TodoService.prototype.encodeToUrl = function () {
        return this.todos.reduce(function (prevValue, todo, index) {
            var label = (+todo.completed + '' === '0') ? '0' : '1';
            var todoUrl = encodeURIComponent(todo.title);
            return prevValue + (index === 0 ? '' : '/') + label + todoUrl;
        }, '');
    };
    TodoService.prototype.decodeFromUrl = function (state) {
        var _this = this;
        var items = state.split('/');
        this.todos = [];
        items.forEach(function (item, i) {
            _this.todos.push({
                id: i + 1,
                title: decodeURIComponent(item.slice(1)),
                completed: !!(+item[0]),
                editing: false
            });
        });
        this.updateLocalStorage();
    };
    return TodoService;
}());
TodoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map