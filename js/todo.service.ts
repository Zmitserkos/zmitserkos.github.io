import {Todo} from './todo';

import {Injectable} from "@angular/core";

@Injectable()
export class TodoService {

  allCompleted: boolean;
  todos: Todo[];

  name: string;

  constructor() {
    this.name = 'todos-kasyanenka';

    let persistedTodos = JSON.parse(localStorage.getItem(this.name) || '[]');

    this.todos = persistedTodos.map( (todo: {id: number, title: string, completed: boolean} ) => {

			let ret = new Todo(todo.id, todo.title);
			ret.completed = todo.completed;
			return ret;
		});

    this.allCompleted = this.todos.every(function(todo: Todo): boolean { return todo.completed; });

  }

  getData(): any {
    return this;
  }

  updateLocalStorage(): void {
    localStorage.setItem(this.name, JSON.stringify(this.todos));
  }

  addTodo(text: string): void {

    if (text === null || text === undefined || text.trim() === "") {
      return;
    }

    let newId: number = this.todos.length === 0 ? 1 : Math.max.apply(null, this.todos.map(item => item.id)) + 1;

    this.todos.push(new Todo(newId, text.trim()));

    this.updateLocalStorage();
  }

  delTodo(todo: Todo): void {
    let id: number = todo.id;
    let index: number = 0;
    let n: number = this.todos.length;

    while(index < n) {
      if (this.todos[index].id === id) break;
      index++;
    }

    if (index === n) return;

    this.todos.splice(index, 1);

    this.updateLocalStorage();
    this.toggleCompleted();

  }

  toggleCompleted(): void {
    let allSame: boolean;

    allSame = this.todos.every(function(todo: Todo): boolean { return todo.completed; });
    if (allSame) {
      this.allCompleted = true;
    } else {
      this.allCompleted = false;
    }

    this.updateLocalStorage();
  }

  markAll(): void {
    let currContext = this;

    this.todos.forEach(function(todo: Todo): void {
      todo.completed = currContext.allCompleted;
    });

    this.updateLocalStorage();
  }

  clearCompleted(): void {

    this.todos = this.todos.filter(function(todo: Todo): boolean {
      return !todo.completed;
    });

    this.allCompleted = false;
    this.updateLocalStorage();
  }

  saveTodo(todo: Todo, index: number, text: string): void {

    if (text === null || text === undefined || text.trim() === "") {
      this.delTodo(todo);
      return;
    }

    todo.title = text.trim();
    this.updateLocalStorage();

    todo.editing = false;
  }

  encodeToUrl(): string {

    return this.todos.reduce( (prevValue: string, todo: Todo, index: number) => {
      let label: string = (+todo.completed + '' === '0') ? '0' : '1';
      let todoUrl: string = encodeURIComponent(todo.title);
      return prevValue + (index === 0 ? '' : '/') + label + todoUrl;
    }, '');
  }

  decodeFromUrl(state: string): void {
    let items: string[] = state.split('/');

    this.todos = [];

    items.forEach((item, i) => {
      this.todos.push({
        id: i + 1,
        title: decodeURIComponent(item.slice(1)),
        completed: !!(+item[0]),
        editing: false
      });
    });

    this.updateLocalStorage();
  }

}
