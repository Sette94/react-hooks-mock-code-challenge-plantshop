import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const url = "http://127.0.0.1:6001/plants"

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPlants(data)
      })
  }, [])

  function searchHandler(searchWord) {
    setSearch(searchWord)
  }



  return (
    <main>
      <NewPlantForm setPlants={setPlants} plants={plants} url={url} />
      <Search searchHandler={searchHandler} />
      <PlantList plants={plants} search={search} />
    </main>
  );
}

export default PlantPage;
