package com.zelalem.deboEthiopia.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zelalem.deboEthiopia.backend.model.News;

public interface NewsRepository extends JpaRepository<News, Long> {

	
    // Custom query methods can be defined here if needed
}