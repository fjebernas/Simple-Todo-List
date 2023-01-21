package net.fjebernas.stl.service;

import net.fjebernas.stl.entity.Todo;

import java.util.List;

public interface TodoService {

  List<Todo> getAll();

  Todo getById(Long id);

  Todo store(Todo todo);

  void destroyById(Long id);

}
