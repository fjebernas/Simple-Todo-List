package net.fjebernas.stl.controller;

import net.fjebernas.stl.entity.Todo;
import net.fjebernas.stl.service.TodoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/stl/todos")
public class TodoController {

  private final TodoService todoService;

  public TodoController(TodoService todoService) {
    this.todoService = todoService;
  }

  @GetMapping("/")
  List<Todo> getAllTodo() {
    return todoService.getAll();
  }

  @GetMapping("/{id}")
  Todo getTodoById(@PathVariable Long id) {
    return todoService.getById(id);
  }

  @PostMapping("/")
  ResponseEntity<String> createTodo(@RequestBody Todo todo) {
    todoService.store(todo);
    return ResponseEntity.ok("Todo created successfully.");
  }

  @DeleteMapping("/{id}")
  ResponseEntity<String> deleteTodo(@PathVariable Long id) {
    todoService.destroyById(id);
    return ResponseEntity.ok("Todo deleted successfully.");
  }
}
