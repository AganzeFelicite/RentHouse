// Home.js
import React from "react";
import Cards from "./Cards";

const ListOfHouses = ({ selectedFilter, list, list2 }) => {
  return (
    <div>
      {selectedFilter === 0 ? <Cards list={list} /> : <Cards list={list2} />}
    </div>
  );
};

export default ListOfHouses;
