package com.zelalem.deboEthiopia.backend.controller;

import com.zelalem.deboEthiopia.backend.model.UserRole;
import com.zelalem.deboEthiopia.backend.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/user-roles")
public class UserRoleController {

    @Autowired
    private UserRoleService userRoleService;

    @PostMapping
    public UserRole assignRoleToUser(@RequestBody UserRole userRole) {
        return userRoleService.assignRoleToUser(userRole);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserRole> getUserRoleById(@PathVariable Long id) {
        Optional<UserRole> userRole = userRoleService.getUserRoleById(id);
        return userRole.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
}
