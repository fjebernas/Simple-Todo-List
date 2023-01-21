package net.fjebernas.stl.service.impl;

import net.fjebernas.stl.entity.Todo;
import net.fjebernas.stl.repository.TodoRepository;
import net.fjebernas.stl.service.TodoService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoServiceImpl implements TodoService {

  private final TodoRepository todoRepository;

  public TodoServiceImpl(TodoRepository todoRepository) {
    this.todoRepository = todoRepository;
  }

  @Override
  public List<Todo> getAll() {
    return todoRepository.findAll();
  }

  @Override
  public Todo getById(Long id) {
    return todoRepository.findById(id).orElseThrow();
  }

  @Override
  public void store(Todo todo) {
    todoRepository.save(todo);
  }

  @Override
  public void destroyById(Long id) {
    todoRepository.deleteById(id);
  }
}
