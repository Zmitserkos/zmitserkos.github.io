export class Todo {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.editing = false;
  }
}
