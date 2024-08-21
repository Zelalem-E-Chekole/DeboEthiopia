package com.zelalem.deboEthiopia.backend.model;

import java.time.LocalDateTime;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "competitions")
public class Competition {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String creator;
    
    @Column(nullable = false)
    private String description;

    @ElementCollection
    private List<String> assessors; // List of assessors' names or identifiers

    @ElementCollection
    private List<String> competitors; // List of competitors' names or identifiers

    @Column(nullable = false)
    private LocalDateTime submissionStartDate;

    @Column(nullable = false)
    private LocalDateTime submissionEndDate;

    @Column(nullable = true)
    private LocalDateTime assessmentEndDate;

    @Column(nullable = true)
    private LocalDateTime competitionCloseDate;

    @Column(nullable = true)
    private String content; // This could store file paths, URLs, or descriptions
    
    // Constructors
    public Competition() {}

    public Competition(String title, String creator, String description, List<String> assessors, List<String> competitors,
                       LocalDateTime submissionStartDate, LocalDateTime submissionEndDate,
                       LocalDateTime assessmentEndDate, LocalDateTime competitionCloseDate, String content) {
        this.title = title;
        this.creator = creator;
        this.description = description;
        this.assessors = assessors;
        this.competitors = competitors;
        this.submissionStartDate = submissionStartDate;
        this.submissionEndDate = submissionEndDate;
        this.assessmentEndDate = assessmentEndDate;
        this.competitionCloseDate = competitionCloseDate;
        this.content = content;
    }
    
    public Competition(String title, String creator,String description,  LocalDateTime submissionStartDate,LocalDateTime submissionEndDate) {
    	this.title = title;
        this.creator = creator;
        this.description = description;
        this.submissionStartDate = submissionStartDate;
        this.submissionEndDate = submissionEndDate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }  

    public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCreator() {
        return creator;
    }

    public void setCreator(String creator) {
        this.creator = creator;
    }

    public List<String> getAssessors() {
        return assessors;
    }

    public void setAssessors(List<String> assessors) {
        this.assessors = assessors;
    }

    public List<String> getCompetitors() {
        return competitors;
    }

    public void setCompetitors(List<String> competitors) {
        this.competitors = competitors;
    }

    public LocalDateTime getSubmissionStartDate() {
        return submissionStartDate;
    }

    public void setSubmissionStartDate(LocalDateTime submissionStartDate) {
        this.submissionStartDate = submissionStartDate;
    }

    public LocalDateTime getSubmissionEndDate() {
        return submissionEndDate;
    }

    public void setSubmissionEndDate(LocalDateTime submissionEndDate) {
        this.submissionEndDate = submissionEndDate;
    }

    public LocalDateTime getAssessmentEndDate() {
        return assessmentEndDate;
    }

    public void setAssessmentEndDate(LocalDateTime assessmentEndDate) {
        this.assessmentEndDate = assessmentEndDate;
    }

    public LocalDateTime getCompetitionCloseDate() {
        return competitionCloseDate;
    }

    public void setCompetitionCloseDate(LocalDateTime competitionCloseDate) {
        this.competitionCloseDate = competitionCloseDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}