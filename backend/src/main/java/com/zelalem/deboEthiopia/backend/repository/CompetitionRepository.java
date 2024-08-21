package com.zelalem.deboEthiopia.backend.repository;

import com.zelalem.deboEthiopia.backend.model.Competition;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface CompetitionRepository extends JpaRepository<Competition, Long> {
    // Additional query methods can be defined here if needed
}