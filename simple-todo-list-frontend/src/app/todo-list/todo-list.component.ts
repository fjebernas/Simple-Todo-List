import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos: Todo[] = [];

  constructor(
      private todoService: TodoService,
      private router: Router
    ) {
    
  }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService.getAll().subscribe({
      next: n => this.todos = n,
    });
  }

  deleteTodo(id?: number) {
    this.todoService.delete(id).subscribe({
      error: e => console.error(e),
      complete: () => this.getTodos(),
    });
  }
}
