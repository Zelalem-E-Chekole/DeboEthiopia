package com.zelalem.deboEthiopia.backend.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;
    
    @Column(length = 500) // add limits based on your requirement
    private String shortenedNews; // Shortened description of the news

    @ElementCollection
    @CollectionTable(name = "news_texts", joinColumns = @JoinColumn(name = "news_id"))
    private List<String> texts = new ArrayList<>();
    
    @OneToMany(mappedBy = "news", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Image> images = new ArrayList<>();

    

    // Constructor, getters, and setters
    public News() {
    }

    public News(String title, Date date, String shortenedNews, List<String> texts, List<Image> images) {
    	this.title = title;
        this.date = date;
        this.shortenedNews = shortenedNews;
        this.texts = texts;
        this.images = images;
	}

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
    
    public String getShortenedNews() {
        return shortenedNews;
    }

    public void setShortenedNews(String shortenedNews) {
        this.shortenedNews = shortenedNews;
    }


    public List<String> getTexts() {
        return texts;
    }

    public void setTexts(List<String> texts) {
        this.texts = texts;
    }

    public List<Image> getImages() {
        return images;
    }

    public void setImages(List<Image> images) {
        this.images = images;
    }
	 
}