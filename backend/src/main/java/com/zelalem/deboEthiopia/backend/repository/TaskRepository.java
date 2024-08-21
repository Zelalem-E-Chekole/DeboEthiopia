package com.zelalem.deboEthiopia.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zelalem.deboEthiopia.backend.model.Task;

@Repository 
public interface TaskRepository extends JpaRepository<Task, Long> {

	public  Optional<Task> findById(Long taskId);

	public Task save(Task task);

}
