import { Component, ElementRef, Renderer, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { AppComponent }   from './app.component';

import { Todo } from './todo';
import { TodoService } from './todo.service';

import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Router } from '@angular/router';

@Component({
  selector: 'home-app',
  templateUrl: './home.html'
})

export class HomeComponent implements OnInit {
  data: any;
  editedText: string;

  filterParam: boolean;
  private subscription: Subscription;

  constructor(private todoService: TodoService, private rd: Renderer, private activateRoute: ActivatedRoute, private router: Router) {

    this.editedText = '';

    router.events.subscribe( (val: any) => {
      if (val.url && val.url.slice(0, 6) === '/share') {
        let state = val.url.slice(7);

        this.data.decodeFromUrl(state);
      };
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

  ngOnInit() {
    this.data = this.todoService.getData();
  }

  // set the input element focused after editting mode activation
  @ViewChild('editInput') el:ElementRef;
  ngAfterViewChecked() {
    if (this.el) {
      this.rd.invokeElementMethod(this.el.nativeElement, 'focus');
    }
  }

  delTodo(todo: Todo): void {
    this.data.delTodo(todo);
  }

  markAll(): void {
    this.data.markAll();
  }


  toggleCompleted(): void {
    this.data.toggleCompleted();
  }

  setEditing(todo: Todo): void {
    if (this.data.todos.some(function(todo: Todo): boolean {return todo.editing;})) {return;}

    todo.editing = true;
    this.editedText = todo.title;
  };

  cancelEditing(todo: Todo): void {
    todo.editing = false;
    this.editedText = '';
  }

  doBlurEvent(todo: Todo, index: number, event: any): void {
    var target = event.target;

    target.blur();
  }

  saveTodo(todo: Todo, index: number): void {

    if (todo.editing) {
      this.data.saveTodo(todo, index, this.editedText);

      this.editedText = '';
    }
  }

}
