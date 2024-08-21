package com.zelalem.deboEthiopia.backend.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name; 
    private String description; 
    private String objectives; 
    private String scope; 
    private LocalDate startDate; 
    private LocalDate endDate; 
    private String status; 
    private boolean crowdfunded; 
    private String budgetDetails; 
    private List<String> relatedEvents; 
    private List<String> contactInfo;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Task> tasks = new ArrayList<>();

    @OneToMany(mappedBy = "project")
    @JsonIgnore
    private Set<UserRole> userRoles = new HashSet<>(); // Roles assigned to users in this project

   @OneToMany(cascade = CascadeType.ALL)
   private List<Image> images = new ArrayList<>(); 

    // Constructors
    public Project(String name) {
        this.name = name;
    }

    public Project(String name, boolean crowdfunded) {
        this.name = name;
        this.crowdfunded = crowdfunded;
    }

    public Project() {}

    // Method to add a task to the project
    public void addTask(Task task) {
        tasks.add(task);
    }

    // Method to remove a task
    public void removeTask(Task task) {
        tasks.remove(task);
    }

    // Calculate the critical path
    public List<Task> calculateCriticalPath() {
        // A map to track the earliest start times for each task
        for (Task task : tasks) {
            task.setStartDate(LocalDate.now()); // Initially set start date as today
        }

        // Calculate the finish dates based on dependencies using a simple forward pass
        for (Task task : tasks) {
            if (task.getDependencies().isEmpty()) {
                task.setEndDate(task.getStartDate().plusDays((int) task.calculateExpectedDuration()));
            } else {
                LocalDate maxEndDate = task.getStartDate();

                for (Task dependency : task.getDependencies()) {
                    if (dependency.getEndDate() != null) {
                        if (dependency.getEndDate().isAfter(maxEndDate)) {
                            maxEndDate = dependency.getEndDate();
                        }
                    }
                }

                task.setStartDate(maxEndDate);
                task.setEndDate(task.getStartDate().plusDays((int) task.calculateExpectedDuration()));
            }
        }

        // Finding the critical path
        List<Task> criticalPath = new ArrayList<>();
        for (Task task : tasks) {
            // A task is critical if any delays in it will delay the project
            if (task.calculateExpectedDuration() == task.getEndDate().toEpochDay() - task.getStartDate().toEpochDay()) {
                criticalPath.add(task);
            }
        }
        return criticalPath;
    }   
    
   
    public boolean isCrowdfunded() {
		return crowdfunded;
	}

	public void setCrowdfunded(boolean crowdfunded) {
		this.crowdfunded = crowdfunded;
	}

	public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Task> getTasks() {
		return tasks;
	}

	public void setTasks(List<Task> tasks) {
		this.tasks = tasks;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getObjectives() {
		return objectives;
	}

	public void setObjectives(String objectives) {
		this.objectives = objectives;
	}

	public String getScope() {
		return scope;
	}

	public void setScope(String scope) {
		this.scope = scope;
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getBudgetDetails() {
		return budgetDetails;
	}

	public void setBudgetDetails(String budgetDetails) {
		this.budgetDetails = budgetDetails;
	}

	public List<String> getRelatedEvents() {
		return relatedEvents;
	}

	public void setRelatedEvents(List<String> relatedEvents) {
		this.relatedEvents = relatedEvents;
	}

	public List<String> getContactInfo() {
		return contactInfo;
	}

	public void setContactInfo(List<String> contactInfo) {
		this.contactInfo = contactInfo;
	}

	public List<Image> getImages() {
		return images;
	}

	public void setImages(List<Image> images) {
		this.images = images;
	}
	
    
    
}