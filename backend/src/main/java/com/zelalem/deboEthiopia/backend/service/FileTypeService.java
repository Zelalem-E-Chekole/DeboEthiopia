package com.zelalem.deboEthiopia.backend.service;

import com.zelalem.deboEthiopia.backend.model.FileType;
import com.zelalem.deboEthiopia.backend.repository.FileTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FileTypeService {
    
    private final FileTypeRepository fileTypeRepository;

    @Autowired
    public FileTypeService(FileTypeRepository fileTypeRepository) {
        this.fileTypeRepository = fileTypeRepository;
    }

    public List<FileType> findAll() {
        return fileTypeRepository.findAll();
    }

    public Optional<FileType> findById(Long id) {
        return fileTypeRepository.findById(id);
    }

    public FileType save(FileType fileType) {
        return fileTypeRepository.save(fileType);
    }

    public void deleteById(Long id) {
        fileTypeRepository.deleteById(id);
    }
    
    // Add any additional business logic methods as needed
}
