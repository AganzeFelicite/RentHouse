package com.rentHouse.findHouse.services.serviceImp;

import com.rentHouse.findHouse.Repository.UserRepository;
import com.rentHouse.findHouse.models.User;
import com.rentHouse.findHouse.models.UserUpdateResource;
import com.rentHouse.findHouse.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public Optional<User> getUser(Long userId) {
        Optional<User> user = Optional.ofNullable(userRepository.findById(userId).orElse(null));

        return user;
    }

    @Override
    public boolean login(User user) {
        return false;
    }

    @Override
    public User updateUser(Long id, UserUpdateResource userResouces) {
        Optional<User> userdb = userRepository.findById(id);
        if (userdb != null) {
            User userSaved = userdb.get();

            // Check and update UserName
            if (userResouces.getUserName() != null && !userResouces.getUserName().isEmpty()) {
                userSaved.setUserName(userResouces.getUserName());
            }

            // Check and update FirstName
            if (userResouces.getFirstName() != null && !userResouces.getFirstName().isEmpty()) {
                userSaved.setFirstName(userResouces.getFirstName());
            }

            // Check and update LastName
            if (userResouces.getLastName() != null && !userResouces.getLastName().isEmpty()) {
                userSaved.setLastName(userResouces.getLastName());
            }

            // Check and update Email
            if (userResouces.getEmail() != null && !userResouces.getEmail().isEmpty()) {
                userSaved.setEmail(userResouces.getEmail());
            }

            // Check and update PhoneNumber
            if (userResouces.getPhoneNumber() != null && !userResouces.getPhoneNumber().isEmpty()) {
                userSaved.setPhoneNumber(userResouces.getPhoneNumber());
            }

            // Check and update ProfileUrl
            if (userResouces.getProfileUrl() != null && !userResouces.getProfileUrl().isEmpty()) {
                userSaved.setProfileUrl(userResouces.getProfileUrl());
            }

            // Save the updated user back to the database
            userRepository.save(userSaved);
            return userSaved;
        }
        return null;
    }


}
