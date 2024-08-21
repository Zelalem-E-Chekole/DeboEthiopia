package com.zelalem.deboEthiopia.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zelalem.deboEthiopia.backend.model.Content;
import com.zelalem.deboEthiopia.backend.repository.ContentRepository;

@Service
public class ContentService {

    private final ContentRepository contentRepository;

    @Autowired
    public ContentService(ContentRepository contentRepository) {
        this.contentRepository = contentRepository;
    }

    public List<Content> getAllContents() {
        return contentRepository.findAll();
    }

    public Optional<Content> getContentById(Long id) {
        return contentRepository.findById(id);
    }

    public Content createContent(Content content) {
        return contentRepository.save(content);
    }

    

    public void deleteContent(Long id) {
        contentRepository.deleteById(id);
    }

	public Content updateContent(Long id, Content content) {
		// TODO Auto-generated method stub
		return null;
	}
}
