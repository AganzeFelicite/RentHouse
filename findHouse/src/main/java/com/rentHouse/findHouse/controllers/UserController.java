package com.rentHouse.findHouse.controllers;

import com.rentHouse.findHouse.models.User;
import com.rentHouse.findHouse.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    public UserService userService;
    @PostMapping("/saveUser")
    public ResponseEntity<?> createUser(@RequestBody User user){
        User user1 = userService.createUser(user);
        return  new ResponseEntity<>(user1, HttpStatus.CREATED);

    }

    @GetMapping("/getAll")
    public ResponseEntity<?> getAll(){
        List<User> listOfUser = userService.getAllUser();
        return new ResponseEntity<>(listOfUser, HttpStatus.CREATED);
    }


}
