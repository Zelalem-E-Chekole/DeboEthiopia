package com.zelalem.deboEthiopia.backend.service;

import com.zelalem.deboEthiopia.backend.model.Project;
import com.zelalem.deboEthiopia.backend.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {
    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<Project> getAllCrowdfundedProjects() {
        return projectRepository.findByCrowdfundedTrue();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

	public List<Project> getAllProjects() {
		return projectRepository.findAll();
	}
    
    // Additional methods (update, delete, etc.) can be added as needed
}
