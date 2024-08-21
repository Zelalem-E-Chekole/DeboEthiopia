package com.zelalem.deboEthiopia.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Content {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    @ManyToOne // Establish a many-to-one relationship with User
    @JoinColumn(name = "user_id") // Specify the foreign key column
    @JsonIgnore
    private User creator;
   
   
    @ManyToOne // Establish a many-to-one relationship with FileType
    @JoinColumn(name = "file_type_id") // Specify the foreign key column here
    private FileType fileType;
    //private String downloadLink;
    
    
    public Content() {
    	
    }

	public Content(String title, String description,  FileType fileType) {
		this.title = title;
		this.description = description;
		//this.creator = creator;
		this.fileType = fileType;
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

//	public User getCreator() {
//		return creator;
//	}
//
//	public void setCreator(User creator) {
//		this.creator = creator;
//	}

	 @Enumerated(EnumType.STRING)
	public FileType getFileType() {
		return fileType;
	}

	public void setFileType(FileType fileType) {
		this.fileType = fileType;
	}
	
    
    
    
}