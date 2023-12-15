package com.rentHouse.findHouse.models;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class UserUpdateResource {
    private String firstName;
    private String lastName;
    private String userName;
    private String password;

    private String phoneNumber;

    private String email;
    private String profileUrl;
}
