package com.zelalem.deboEthiopia.backend.repository;

import com.zelalem.deboEthiopia.backend.model.Role;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findById(Long Id);
	
    Role findByName(String name); // Example of a custom method to find a role by title



    
}
