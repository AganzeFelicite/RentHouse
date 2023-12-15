package com.rentHouse.findHouse.Repository;

import com.rentHouse.findHouse.models.Owner;
import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface
OwnerRepository extends JpaRepository<Owner, Long> {
//public Owner findByEmail(String email);
    Optional<Owner> findByEmail(String email);
    Optional<Owner> findByOwnerName(String username);
    //Optional<Owner> findByUsername(String username);
    Boolean existsByOwnerName(String username);
    Boolean existsByEmail(String email);


}
