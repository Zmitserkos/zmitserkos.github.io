"use strict";
var Todo = (function () {
    function Todo(id, title) {
        this.id = id;
        this.title = title;
        this.completed = false;
        this.editing = false;
    }
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map