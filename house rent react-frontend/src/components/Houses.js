// Houses.js
import React from "react";

import ListOfHouses from "./ListOfHouses";
import useFetch from "./useFetch";
import { list } from "../assets/cards-list";
// import { list2 } from "../assets/cards-list";

const Houses = () => {
  const url = "http://localhost:8080/api/v1/house/getAll";
  const { data, isPending, error } = useFetch(url);
  console.log(data);
  return (
    <div>
      <ListOfHouses selectedFilter={0} list={data} list2={data} />
    </div>
  );
};

export default Houses;
