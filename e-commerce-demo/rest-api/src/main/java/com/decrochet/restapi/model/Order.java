package com.decrochet.restapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "orders")
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.EAGER)
    @JoinColumn(name = "client_id", nullable = false)
    private User client;

    @Column(name = "subtotal", nullable = false)
    @NotNull
    private Double subtotal;

    @Column(name = "shipping", nullable = false)
    @NotNull
    private Double shipping;

    @Column(name = "taxes", nullable = false)
    @NotNull
    private Double taxes;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "order_statuses",
            joinColumns = { @JoinColumn(name = "order_id") },
            inverseJoinColumns = { @JoinColumn(name = "status_id") }
    )
    Set<OrderStatus> statuses = new HashSet<>();

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "order_product",
            joinColumns = { @JoinColumn(name = "order_id") },
            inverseJoinColumns = { @JoinColumn(name = "product_id") }
    )
    Set<Product> products = new HashSet<>();

    @Column(name = "created_at", columnDefinition = "timestamp with time zone not null")
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp createdAt;

    @Column(name = "updated_at", columnDefinition = "timestamp with time zone not null")
    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp updatedAt;

    @Column(name = "deleted_at", columnDefinition = "timestamp with time zone")
    @Temporal(TemporalType.TIMESTAMP)
    private Timestamp deletedAt;
}