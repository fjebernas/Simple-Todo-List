package net.fjebernas.stl.repository;

import net.fjebernas.stl.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo, Long> {
}
