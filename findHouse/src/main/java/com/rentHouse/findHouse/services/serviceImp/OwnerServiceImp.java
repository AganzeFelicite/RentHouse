package com.rentHouse.findHouse.services.serviceImp;

import com.rentHouse.findHouse.Repository.OwnerRepository;
import com.rentHouse.findHouse.models.Owner;
import com.rentHouse.findHouse.models.OwnerUpdateResource;
import com.rentHouse.findHouse.services.OwnerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OwnerServiceImp implements OwnerService {
    @Autowired
    private OwnerRepository ownerRepository;

    @Override
    public Owner createOwner(Owner owner) {

        try{
            boolean exist = ownerRepository.exists(Example.of(owner));
            if(!exist){
            ownerRepository.save(owner);
            return owner;
            }

        }catch (Exception e){
            e.printStackTrace();

        }
        return  null;
    }

    @Override
    public Owner updateOwner(Long id, OwnerUpdateResource owner) {
        Optional<Owner> savedFlag = ownerRepository.findById(id);
        if (savedFlag.isPresent()) {
            Owner savedOwner = savedFlag.get();

            // Check and update OwnerName
            if (owner.getOwnerName() != null && !owner.getOwnerName().isEmpty()) {
                savedOwner.setOwnerName(owner.getOwnerName());
            }

            // Check and update OwnerProfileUrl
            if (owner.getOwnerProfileUrl() != null && !owner.getOwnerProfileUrl().isEmpty()) {
                savedOwner.setOwnerProfileUrl(owner.getOwnerProfileUrl());
            }

            // Check and update Email
            if (owner.getEmail() != null && !owner.getEmail().isEmpty()) {
                savedOwner.setEmail(owner.getEmail());
            }

            // Check and update ContactNumber
            if (owner.getContactNumber() != null && !owner.getContactNumber().isEmpty()) {
                savedOwner.setContactNumber(owner.getContactNumber());
            }

            // Check and update Password
            if (owner.getPassword() != null && !owner.getPassword().isEmpty()) {
                savedOwner.setPassword(owner.getPassword());
            }

            // Save the updated owner back to the database
            ownerRepository.save(savedOwner);
            return  savedOwner;
        }

        return null;
    }


    @Override
    public boolean deleteOwner(Long id) {
        ownerRepository.deleteById(id);
        return true;
    }

    @Override
    public List<Owner> getAllOwner() {
        return ownerRepository.findAll();
    }

    @Override
    public Optional<Owner> getOwner(Long id) {
        Optional<Owner> owner = ownerRepository.findById(id);

        return owner;
    }

    @Override
    public Optional<Owner> loadByEmail(String email) {
        return ownerRepository.findByEmail(email);
    }
}
