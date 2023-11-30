import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search }) {

  const searchPlant = plants.filter((plant) => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <ul className="cards">{
      searchPlant.map((plant, index) => {
        return <PlantCard key={index} {...plant} />
      })
    }</ul>
  );
}

export default PlantList;
