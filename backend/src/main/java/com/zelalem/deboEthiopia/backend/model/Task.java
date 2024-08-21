package com.zelalem.deboEthiopia.backend.model;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;

@Entity
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int optimisticDuration;
    private int pessimisticDuration;
    private int mostLikelyDuration;
    private LocalDate startDate;
    private LocalDate endDate;
    private boolean isCompleted;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User assignedUser; // The user assigned to this task
    
    @ManyToMany
    private List<Task> dependencies;
    
    public Task(String name, int optimisticDuration, int pessimisticDuration, int mostLikelyDuration) {
        this.name = name;
        this.optimisticDuration = optimisticDuration;
        this.pessimisticDuration = pessimisticDuration;
        this.mostLikelyDuration = mostLikelyDuration;
    
    }
    
    public Task(String name, int optimisticDuration, int pessimisticDuration, int mostLikelyDuration, User assignedUser) {
        this.name = name;
        this.optimisticDuration = optimisticDuration;
        this.pessimisticDuration = pessimisticDuration;
        this.mostLikelyDuration = mostLikelyDuration;
        this.assignedUser = assignedUser;
    }

    public Task() {}
  
 public Task(String string, int i, int j, int k, Optional<User> findByUsername) {
		// TODO Auto-generated constructor stub
	}

	// Calculate expected duration using the PERT formula
    public double calculateExpectedDuration() {
        return (optimisticDuration + 4 * mostLikelyDuration + pessimisticDuration) / 6.0;
    }

	public void setDependencies(List<Task> newDependencies) {
		// TODO Auto-generated method stub
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getOptimisticDuration() {
		return optimisticDuration;
	}

	public void setOptimisticDuration(int optimisticDuration) {
		this.optimisticDuration = optimisticDuration;
	}

	public int getPessimisticDuration() {
		return pessimisticDuration;
	}

	public void setPessimisticDuration(int pessimisticDuration) {
		this.pessimisticDuration = pessimisticDuration;
	}

	public int getMostLikelyDuration() {
		return mostLikelyDuration;
	}

	public void setMostLikelyDuration(int mostLikelyDuration) {
		this.mostLikelyDuration = mostLikelyDuration;
	}

	public LocalDate getStartDate() {
		return startDate;
	}

	public void setStartDate(LocalDate startDate) {
		this.startDate = startDate;
	}

	public LocalDate getEndDate() {
		return endDate;
	}

	public void setEndDate(LocalDate endDate) {
		this.endDate = endDate;
	}

	public boolean isCompleted() {
		return isCompleted;
	}

	public void setCompleted(boolean isCompleted) {
		this.isCompleted = isCompleted;
	}

	public List<Task> getDependencies() {
		return dependencies;
	}  
	
	
}
