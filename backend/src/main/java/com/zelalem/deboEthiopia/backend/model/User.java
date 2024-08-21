package com.zelalem.deboEthiopia.backend.model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;



import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;

@Entity
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username; // Username of the user
    private String password;
    private String email; // Email of the user
    private String fullname;
    
    @Lob
    @Column(name = "profile-image",columnDefinition = "MEDIUMBLOB")
    private Byte[] profileImage;

    @OneToMany(mappedBy = "user")
    private Set<UserRole> userRoles = new HashSet<>(); // User's roles across projects

    @OneToMany(mappedBy = "assignedUser")
    private Set<Task> tasks = new HashSet<>();
    
    @JsonManagedReference
    @OneToMany(mappedBy = "creator", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<Content> contents; 

    // Constructors, getters, and setters
    public User() {}
    
    public User(String username, String email, String password) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.profileImage = profileImage;
    }
    
    public User(String username, String email, String password, Byte[] profileImage) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.profileImage = profileImage;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
    

    public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Content> getContents() {
		return contents;
	}

	public void setContents(Set<Content> contents) {
		this.contents = contents;
	}
	
	

	public Byte[] getProfileImage() {
		return profileImage;
	}

	public void setProfileImage(Byte[] profileImage) {
		this.profileImage = profileImage;
	}

	public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

    public Set<Task> getTasks() {
        return tasks;
    }

    public void setTasks(Set<Task> tasks) {
        this.tasks = tasks;
    }

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	

//	public Set<Content> getContents() {
//		return contents;
//	}
//
//	public void setContents(Set<Content> contents) {
//		this.contents = contents;
//	}
//	
    
}