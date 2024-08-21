package com.zelalem.deboEthiopia.backend.controller;

import com.zelalem.deboEthiopia.backend.model.Business;
import com.zelalem.deboEthiopia.backend.service.BusinessService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/businesses")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    @GetMapping
    public List<Business> getAllBusinesses() {
        return businessService.getAllBusinesses();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Business> getBusinessById(@PathVariable Long id) {
        return businessService.getBusinessById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Business createBusiness(@RequestBody Business business) {
        return businessService.saveBusiness(business);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Business> updateBusiness(@PathVariable Long id, @RequestBody Business businessDetails) {
        return businessService.getBusinessById(id)
            .map(business -> {
                business.setName(businessDetails.getName());
                business.setOwner(businessDetails.getOwner());
                business.setDescription(businessDetails.getDescription());
                business.setLocation(businessDetails.getLocation());
                business.setImages(businessDetails.getImages());
                business.setContactInformation(businessDetails.getContactInformation());
                return ResponseEntity.ok(businessService.saveBusiness(business));
            }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBusiness(@PathVariable Long id) {
        businessService.deleteBusiness(id);
        return ResponseEntity.noContent().build();
    }
}