package com.zelalem.deboEthiopia.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "news_images")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "news_id")
    private News news;

    
    @ManyToOne
    @JoinColumn(name = "business_id")
    private Business business;

    @Lob
    @Column(name = "image", nullable = false, columnDefinition = "MEDIUMBLOB")
    private byte[] image;

    // Constructors
    public Image() {}

    public Image(News news, byte[] image) {
    	this.news = news;
        this.image = image;
    }
    
    public Image(Business business, byte[] image) {
    	this.business = business;
    	this.image = image;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public News getNews() {
        return news;
    }

    public void setNews(News news) {
        this.news = news;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }
}
