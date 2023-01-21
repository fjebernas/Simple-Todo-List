import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css']
})
export class TodoCreateComponent {

  todo: Todo = new Todo();

  constructor(
      private todoService: TodoService,
      private router: Router
    ) {

  }

  onSubmit() {
    this.todoService.store(this.todo).subscribe({
      error: e => console.error(e),
      complete: () => {
        this.router.navigate(['list']);
      }
    });
  }

}
