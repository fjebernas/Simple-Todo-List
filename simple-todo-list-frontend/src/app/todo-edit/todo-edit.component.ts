import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent {
  
  todo: Todo = new Todo();

  constructor(
      private todoService: TodoService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) { }

  ngOnInit(): void {
    this.getTodo();
  }

  getTodo() {
    this.todoService.getById(
      this.activatedRoute.snapshot.params['id']
    ).subscribe({
      error: e => console.error(e),
      next: n => this.todo = n,
    });
  }

  goBack(id?: number) {
    this.router.navigate(['show', this.todo.id]);
  }
  
  onSubmit() {

  }
}
