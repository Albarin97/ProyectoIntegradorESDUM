package com.decrochet.restapi.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "payment")
@Getter
@Setter
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotNull
    private Long id;

    @Column(name = "holder_name", nullable = false)
    @NotNull
    private String holderName;

    @Column(name = "card_number", nullable = false)
    @NotNull
    private String cardNumber;

    @Column(name = "expiration", nullable = false)
    @NotNull
    private String expiration;

    @Column(name = "cvv", nullable = false)
    @NotNull
    private String cvv;

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