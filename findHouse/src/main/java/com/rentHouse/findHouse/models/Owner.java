package com.rentHouse.findHouse.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.extern.java.Log;

import java.util.List;
@Entity
@AllArgsConstructor
@Getter
@Setter
@Data
@NoArgsConstructor

public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String ownerName;
    private String contactNumber;

    private String email;

    private String password;
    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<House> listOfHouses;

    private String ownerProfileUrl;

    public Owner(String ownerName, String contactNumber, String email, String password, List<House> listOfHouses, String ownerProfileUrl) {
        this.ownerName = ownerName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.password = password;
        this.listOfHouses = listOfHouses;
        this.ownerProfileUrl = ownerProfileUrl;
    }
}
