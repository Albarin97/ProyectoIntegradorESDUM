package com.decrochet.restapi.repo;

import com.decrochet.restapi.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CountryRepo  extends JpaRepository<Country, Long> {
}
