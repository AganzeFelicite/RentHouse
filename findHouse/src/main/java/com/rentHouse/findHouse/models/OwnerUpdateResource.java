package com.rentHouse.findHouse.models;

import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
@Data
@AllArgsConstructor
public class OwnerUpdateResource {
    private String ownerName;
    private String contactNumber;

    private String email;

    private String password;

    private String ownerProfileUrl;
}
