package com.zelalem.deboEthiopia.backend.controller;

import com.zelalem.deboEthiopia.backend.model.FileType;
import com.zelalem.deboEthiopia.backend.service.FileTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/file-types") // Base URL for your API
public class FileTypeController {
    
    private final FileTypeService fileTypeService;

    @Autowired
    public FileTypeController(FileTypeService fileTypeService) {
        this.fileTypeService = fileTypeService;
    }

    @GetMapping
    public ResponseEntity<List<FileType>> getAllFileTypes() {
        List<FileType> fileTypes = fileTypeService.findAll();
        return new ResponseEntity<>(fileTypes, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<FileType> getFileTypeById(@PathVariable Long id) {
        Optional<FileType> fileType = fileTypeService.findById(id);
        return fileType.map(ResponseEntity::ok)
                       .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<FileType> createFileType(@RequestBody FileType fileType) {
        FileType createdFileType = fileTypeService.save(fileType);
        return new ResponseEntity<>(createdFileType, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<FileType> updateFileType(@PathVariable Long id, @RequestBody FileType fileType) {
        Optional<FileType> existingFileType = fileTypeService.findById(id);
        
        if (existingFileType.isPresent()) {
            fileType.setId(id); // Ensure the ID stays the same
            FileType updatedFileType = fileTypeService.save(fileType);
            return new ResponseEntity<>(updatedFileType, HttpStatus.OK);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteFileType(@PathVariable Long id) {
        fileTypeService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}