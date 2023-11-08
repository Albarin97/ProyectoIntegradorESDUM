package com.decrochet.restapi.repo;

import com.decrochet.restapi.model.Role;
import com.decrochet.restapi.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {

    List<User> getUsersByRole(Role role);
}
