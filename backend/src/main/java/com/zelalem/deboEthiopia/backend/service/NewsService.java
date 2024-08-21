package com.zelalem.deboEthiopia.backend.service;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zelalem.deboEthiopia.backend.model.Image;
import com.zelalem.deboEthiopia.backend.model.News;
import com.zelalem.deboEthiopia.backend.repository.NewsRepository;

@Service
public class NewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    // Create a new news item with texts and images
    public News createNews(String title, String shortenedNews, List<String> texts, List<Image> images) {
        News news = new News();
        news.setTitle(title);
        news.setShortenedNews(shortenedNews); // Save shortened news
        news.setDate(new Date()); // Set the current date
        news.setTexts(texts);
        news.setImages(images);
        return newsRepository.save(news);
    }

    // Get a news item by ID
    public Optional<News> getNewsById(Long id) {
        return newsRepository.findById(id);
    }

    // Get all news items
    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    // Update an existing news item
    public News updateNews(Long id, News updatedNews) {
        if (newsRepository.existsById(id)) {
            updatedNews.setId(id);
            return newsRepository.save(updatedNews);
        }
        return null; // Or throw an exception
    }

    // Delete a news item
    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }

	
}