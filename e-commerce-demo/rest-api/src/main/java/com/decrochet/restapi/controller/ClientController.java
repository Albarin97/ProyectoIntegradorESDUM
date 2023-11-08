package com.decrochet.restapi.controller;

import com.decrochet.restapi.model.User;
import com.decrochet.restapi.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/client")
@RequiredArgsConstructor
public class ClientController {

    private  final UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getUsersByBrand(@RequestParam Long roleId) {
        List<User> users = userService.getUsersByRole(roleId);

        if (users == null) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            return new ResponseEntity<>(HttpStatus.OK);
        }

        return new ResponseEntity<>(users, HttpStatus.OK);
    }
}