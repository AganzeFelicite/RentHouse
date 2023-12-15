package com.rentHouse.findHouse.controllers;

import com.rentHouse.findHouse.Repository.OwnerRepository;
import com.rentHouse.findHouse.models.Owner;
import com.rentHouse.findHouse.models.OwnerUpdateResource;
import com.rentHouse.findHouse.services.serviceImp.OwnerServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@AllArgsConstructor
@RestController
@RequestMapping(value = "/api/v1/owner")
public class OwnerController {

    @Autowired
    private OwnerServiceImp ownerServiceImp;

    @PostMapping("/saveOwner")
    public ResponseEntity<?> saveOwner(@RequestBody Owner owner) {
        if (owner != null) {
            Owner ownerSaved = ownerServiceImp.createOwner(owner);
            return new ResponseEntity<>(ownerSaved, HttpStatus.CREATED);
        } else {
            // If the input data is invalid, return a more informative response
            return new ResponseEntity<>("Invalid input data", HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/updateOwner/{id}")
    public ResponseEntity<?> updateOwner(@PathVariable Long id, @RequestBody OwnerUpdateResource owner) {
        String NOT_UPDATED = "User with email %s cannot be updated";
        if (owner != null) {
            Owner updatedOwner = ownerServiceImp.updateOwner(id, owner);
            return new ResponseEntity<>(updatedOwner, HttpStatus.OK);
        }
        return new ResponseEntity<>(String.format(NOT_UPDATED, owner.getEmail()), HttpStatus.NOT_MODIFIED);
    }

    @GetMapping("/all")
    public ResponseEntity<?> getAllOwners() {
        List<Owner> listOfOwners = ownerServiceImp.getAllOwner();
        return new ResponseEntity<>(listOfOwners, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOneOwner(@PathVariable Long id) {
        Optional<Owner> owner = ownerServiceImp.getOwner(id);
        return new ResponseEntity<>(owner, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOwner(@PathVariable Long id) {
        Boolean flag = ownerServiceImp.deleteOwner(id);
        return new ResponseEntity<>(flag, HttpStatus.OK);
    }
}
