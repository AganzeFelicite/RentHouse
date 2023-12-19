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
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String userName;
    private String password;

    private String phoneNumber;

    private String email;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<House> bookedHouses;

    @OneToMany(mappedBy = "likeUser", cascade = CascadeType.ALL)
    private List<House> likedHouses;

    private String profileUrl;

    public User(String firstName, String lastName, String userName, String password, String phoneNumber, String email, List<House> bookedHouses, List<House> likedHouses, String profileUrl) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.bookedHouses = bookedHouses;
        this.likedHouses = likedHouses;
        this.profileUrl = profileUrl;
    }
}
