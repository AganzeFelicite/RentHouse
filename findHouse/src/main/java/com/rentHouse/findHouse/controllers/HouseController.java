package com.rentHouse.findHouse.controllers;

import com.rentHouse.findHouse.models.House;
import com.rentHouse.findHouse.services.HouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/house")
public class HouseController {
    @Autowired
    HouseService houseService;
    @PostMapping("/saveHouse")
    public ResponseEntity<?> createHouse(@RequestBody House house){
        House house1 = houseService.createHouse(house);
        return new ResponseEntity<>(house1, HttpStatus.CREATED);
    }

    @GetMapping("/getAll")
    public  ResponseEntity<?> getAllHouse(){
        List<House> listOfHouses = houseService.getAll();
        return new ResponseEntity<>(listOfHouses, HttpStatus.OK);
    }


}
