import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl: string = "http://localhost:8080/api/stl/todos";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.baseUrl}/`);
  }
}
