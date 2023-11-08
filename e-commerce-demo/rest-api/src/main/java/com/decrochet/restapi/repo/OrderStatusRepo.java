package com.decrochet.restapi.repo;

import com.decrochet.restapi.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderStatusRepo  extends JpaRepository<OrderStatus, Long> {
}
