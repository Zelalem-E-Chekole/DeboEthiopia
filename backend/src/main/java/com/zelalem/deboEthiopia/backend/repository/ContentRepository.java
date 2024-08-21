package com.zelalem.deboEthiopia.backend.repository;

import com.zelalem.deboEthiopia.backend.model.Content;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContentRepository extends JpaRepository<Content, Long> {
}
