import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-show',
  templateUrl: './todo-show.component.html',
  styleUrls: ['./todo-show.component.css']
})
export class TodoShowComponent implements OnInit {

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

  editTodo(id?: number) {
    this.router.navigate(['edit', id]);
  }
  
}
