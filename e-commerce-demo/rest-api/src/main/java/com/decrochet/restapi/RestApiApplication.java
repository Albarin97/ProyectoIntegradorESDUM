package com.decrochet.restapi;

import com.decrochet.restapi.config.WebSecurityConfig;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class RestApiApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext context = SpringApplication.run(RestApiApplication.class, args);

		WebSecurityConfig webSecurityConfig = context.getBean(WebSecurityConfig.class);
	}
}
