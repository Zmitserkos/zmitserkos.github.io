import { Component, OnInit, ViewContainerRef, ViewEncapsulation} from '@angular/core';

import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Todo } from './todo';
import { TodoService } from './todo.service';

import { NgModel } from '@angular/forms';

import { ShareModalContext, ShareModal } from './custom-modal';

@Component({
  selector: 'todo-app',
  templateUrl: 'todo-index.html',
  providers: [Modal]
})

export class AppComponent implements OnInit {
  data: any;

  newTitle: string;

  constructor(vcRef: ViewContainerRef, public modal: Modal, private todoService: TodoService) {
    this.newTitle = '';
    modal.overlay.defaultViewContainer = vcRef;
	}

  ngOnInit(){
    this.data = this.todoService.getData();
  }

  modalOpen() {
    return this.modal.open(ShareModal, overlayConfigFactory({ stateLink: this.data.encodeToUrl(), location: window.location.href + 'share/' }, BSModalContext));
  }

  addTodo(): void {

    this.data.addTodo(this.newTitle);
    this.newTitle = '';
  }

  clearCompleted(): void {

    this.data.clearCompleted();
  }

  hasCompleted(): boolean {
    return this.data.todos.some(function(todo: Todo): boolean {
      return todo.completed;
    });
  }

  getActiveCount(): number {
    let activeCount: number = this.data.todos.filter(function(todo: Todo): boolean {
      return !todo.completed;
    }).length;
    return activeCount;
  }

  getEnding(): string {
    let activeCount: number = this.data.todos.filter(function(todo: Todo): boolean {
      return !todo.completed;
    }).length;

    return activeCount === 1 ? '' : 's';
  }

}
