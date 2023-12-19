package com.rentHouse.findHouse.services.serviceImp;

import com.rentHouse.findHouse.Repository.HouseRepository;
import com.rentHouse.findHouse.models.House;
import com.rentHouse.findHouse.services.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HouseServiceImp implements HouseService {
    @Autowired
    private HouseRepository houseRepository;
    @Override
    public House createHouse(House house) {
        if (house != null){
            return  houseRepository.save(house);
        }
        return null;
    }

    @Override
    public boolean deleteHouse(Long houseId) {
        if (houseId != null){
            Optional<House> house = houseRepository.findById(houseId);
            if (house != null){
                houseRepository.deleteById(houseId);
                return true;
            }
            return false;

        }
        return false;
    }

    @Override
    public List<House> searchBasedOnPrice(double pricePerMonth) {
        List<House> searchedHouse = houseRepository.findByPricePerMonth(pricePerMonth);
        return searchedHouse;
    }

    @Override
    public House updateHouse(House house) {
        return null;
    }

    @Override
    public List<House> getAll() {
        return houseRepository.findAll();
    }

    @Override
    public List<House> getByOwner(Long Owner) {
        return null;
    }

    @Override
    public List<House> getLikedHouse(Long userId) {
        return null;
    }

    @Override
    public List<House> getAllNotBooked() {
        return null;
    }
}
