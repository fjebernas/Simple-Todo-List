import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos?: Todo[];

  ngOnInit(): void {
    this.todos = [
      {
        "id": 1,
        "title": "testing",
        "description": "test description"
      },
      {
        "id": 2,
        "title": "testing",
        "description": "test description"
      },
      {
        "id": 3,
        "title": "testing",
        "description": "test description"
      },
    ]
  }
}
