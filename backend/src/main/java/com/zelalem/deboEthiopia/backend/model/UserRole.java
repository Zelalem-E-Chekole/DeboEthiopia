package com.zelalem.deboEthiopia.backend.model;

import java.util.Optional;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class UserRole {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user; // The user associated with this role

    @ManyToOne
    @JoinColumn(name = "role_id")
    private Role role; // The role assigned to the user

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project; // The project for which the role is assigned

    // Constructors, getters, and setters
    public UserRole() {}

    public UserRole(User user, Role role, Project project) {
        this.user = user;
        this.role = role;
        this.project = project;
    }

    public UserRole(Optional<User> findByUsername, Role findByName, Project findByName2) {
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }
}
