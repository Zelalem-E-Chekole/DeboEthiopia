package com.zelalem.deboEthiopia.backend.service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zelalem.deboEthiopia.backend.exception.ResourceNotFoundException;
import com.zelalem.deboEthiopia.backend.model.Task;
import com.zelalem.deboEthiopia.backend.repository.TaskRepository;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;
    
    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public void updateTaskDuration(Long taskId, int newDuration) {
        try {
            Task task = taskRepository.findById(taskId).get();
            task.setMostLikelyDuration(newDuration);
            taskRepository.save(task);
        } catch (NoSuchElementException e) {
            throw new ResourceNotFoundException("Task not found");
        }
    }

    public void updateTaskDependencies(Long taskId, List<Long> dependencyIds) {
        try {
            Task task = taskRepository.findById(taskId).get();
            List<Task> newDependencies = dependencyIds.stream()
                    .map(taskRepository::findById)
                    .filter(Optional::isPresent)
                    .map(Optional::get)
                    .collect(Collectors.toList());
            task.setDependencies(newDependencies);
            taskRepository.save(task);
        } catch (NoSuchElementException e) {
            throw new ResourceNotFoundException("Task not found");
        }
    }

    public double getExpectedDuration(Long taskId) {
        try {
            Task task = taskRepository.findById(taskId).get();
            return task.calculateExpectedDuration();
        } catch (NoSuchElementException e) {
            throw new ResourceNotFoundException("Task not found");
        }
    }
}