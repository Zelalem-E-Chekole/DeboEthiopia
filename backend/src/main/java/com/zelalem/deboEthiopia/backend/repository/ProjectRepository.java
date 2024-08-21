package com.zelalem.deboEthiopia.backend.repository;

import com.zelalem.deboEthiopia.backend.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByCrowdfundedTrue(); // Custom query to find all crowdfunded projects

    //List<Project> findAll();
    
	Project findByName(String string);
}
