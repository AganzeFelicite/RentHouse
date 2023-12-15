package com.rentHouse.findHouse.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Entity
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class House {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long HouseId;
    private String location;
    private int capacity;
    private List<String> amenities;
    private double pricePerMonth;

    private List<String> houseImageList;
    @ManyToOne
    @JoinColumn( name = "bookedBy")
    private User user;

    @ManyToOne
    @JoinColumn( name = "likedBy")
    private User likeUser;

    private String bookedDate;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    private Owner owner;

}

