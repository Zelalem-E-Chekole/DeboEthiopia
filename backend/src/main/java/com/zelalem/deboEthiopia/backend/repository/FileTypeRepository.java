package com.zelalem.deboEthiopia.backend.repository;

import com.zelalem.deboEthiopia.backend.model.FileType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FileTypeRepository extends JpaRepository<FileType, Long> {
    // You can define custom query methods here if needed
}