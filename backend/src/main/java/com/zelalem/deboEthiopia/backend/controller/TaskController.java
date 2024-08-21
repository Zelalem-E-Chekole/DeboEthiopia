package com.zelalem.deboEthiopia.backend.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zelalem.deboEthiopia.backend.model.Task;
import com.zelalem.deboEthiopia.backend.service.TaskService;

@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    @Autowired
    private TaskService taskService;
    
    @PostMapping
    public Task createTask(@RequestBody Task task) {
        return taskService.createTask(task);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Optional<Task> task = taskService.getTaskById(id);
        return task.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}/duration")
    public ResponseEntity<Void> updateTaskDuration(@PathVariable Long id, @RequestBody int newDuration) {
        taskService.updateTaskDuration(id, newDuration);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/dependencies")
    public ResponseEntity<Void> updateTaskDependencies(@PathVariable Long id, @RequestBody List<Long> dependencyIds) {
        taskService.updateTaskDependencies(id, dependencyIds);
        return ResponseEntity.ok().build();
    }
    
    
}