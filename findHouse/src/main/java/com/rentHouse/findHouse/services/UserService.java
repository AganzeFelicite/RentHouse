package com.rentHouse.findHouse.services;

import com.rentHouse.findHouse.models.User;
import com.rentHouse.findHouse.models.UserUpdateResource;

import java.util.Optional;

public interface UserService {
    public User createUser(User user);
    public Optional<User> getUser(Long userId);

    public boolean login(User user);



    public User updateUser(Long id, UserUpdateResource userResouces);
}
