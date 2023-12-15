package com.rentHouse.findHouse.services;

import com.rentHouse.findHouse.models.Owner;
import com.rentHouse.findHouse.models.OwnerUpdateResource;


import java.util.List;
import java.util.Optional;


public interface OwnerService{
    public Owner createOwner(Owner owner);

    public Owner updateOwner(Long id, OwnerUpdateResource owner);



    public boolean deleteOwner(Long id);

    public List<Owner> getAllOwner();

    public Optional<Owner> getOwner(Long id);

    Optional<Owner> loadByEmail(String email);

}
