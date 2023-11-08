package com.decrochet.restapi;


import com.decrochet.restapi.model.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class RestApiApplicationTests {

    @Autowired
    protected TestRestTemplate testRestTemplate;

    private final String USER_URL = "/api/v1/user";
    private final String CLIENT_URL = "/api/v1/client";

    @Test
    public void adminPostProductSuccessTest() {
        User user = new User();
        HttpEntity<User> httpEntity = new HttpEntity<>(user);
        ResponseEntity<User> response = testRestTemplate.exchange(
                USER_URL, HttpMethod.POST, httpEntity, User.class);

        assertEquals(response.getStatusCode(), HttpStatus.CREATED);
    }
    @Test
    void contextLoads() {
    }

    @Test
    public void migrationSuccessTest() {
        // migration starts automatically,
        // since Spring Boot runs the Flyway scripts on startup
    }

    @Test
    public void clientGetProductsByBrandSuccessTest() {
        ResponseEntity<User[]> response = testRestTemplate.getForEntity(
                CLIENT_URL + "?roleId=" + 3, User[].class);

        assertEquals(response.getStatusCode(), HttpStatus.OK);
        assertNotNull(response.getBody());
        assertEquals(response.getBody().length, 2);
    }
}
