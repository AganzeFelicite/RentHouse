package com.rentHouse.findHouse.services;

import com.rentHouse.findHouse.models.House;


import java.util.List;

public interface HouseService {
    public House createHouse(House house);

    public boolean deleteHouse(Long houseId);

    public List<House> searchBasedOnPrice(double pricePerMonth);

    public House updateHouse(House house);

    public List<House> getAll();

    public List<House> getByOwner(Long Owner);

    public List<House> getLikedHouse(Long userId);

    public List<House> getAllNotBooked();

}
