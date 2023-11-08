package com.decrochet.restapi.service;

import com.decrochet.restapi.model.Role;
import com.decrochet.restapi.model.User;
import com.decrochet.restapi.repo.RoleRepo;
import com.decrochet.restapi.repo.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepo userRepo;
    private final RoleRepo roleRepo;

    public User save (User user) {
        /*User savedUser = userRepo.save(user);

        return savedUser;*/
        return  user;
    }

    public List<User> getUsersByRole(Long roleId) {
        List<User> users = userRepo.getUsersByRole(roleRepo.findById(roleId).get());

        if (users.size() == 0) {
            return null;
        }

        return users;
    }

    public List<User> getAll() {
        return userRepo.findAll();
    }
}
