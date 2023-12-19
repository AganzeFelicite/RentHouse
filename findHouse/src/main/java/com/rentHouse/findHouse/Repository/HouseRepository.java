package com.rentHouse.findHouse.Repository;

import com.rentHouse.findHouse.models.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {
    List<House> findByPricePerMonthLessThan(double maxPrice);

    List<House> findByPricePerMonth(double price);
}
