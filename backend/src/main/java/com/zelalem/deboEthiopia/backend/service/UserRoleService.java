package com.zelalem.deboEthiopia.backend.service;

import com.zelalem.deboEthiopia.backend.model.UserRole;
import com.zelalem.deboEthiopia.backend.repository.UserRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserRoleService {

    @Autowired
    private UserRoleRepository userRoleRepository;

    public UserRole assignRoleToUser(UserRole userRole) {
        return userRoleRepository.save(userRole);
    }

    public Optional<UserRole> getUserRoleById(Long id) {
        return userRoleRepository.findById(id);
    }
}