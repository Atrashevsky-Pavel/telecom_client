import React, { useState, useEffect } from "react";
import ListDogs from "./Components/ListDogs/ListDogs";
import BreedsService from "./Api/BreedsService";
import DogsService from "./Api/DogsService";
import Filter from "./Components/Filter/Filter";
import { useGetData } from "./hooks/useGetData";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [filter, setFilter] = useState({ breedId: "", title: "" });

  const [fetching, isLoading, error] = useGetData(async () => {
    const breedsData = [];
    if (breeds.length) {
      breedsData.push(...breeds);
    } else {
      breedsData.push(...(await BreedsService.getBreeds()));
      setBreeds(breedsData);
    }
    const dogsData = await DogsService.getDogs(filter);
    dogsData.map((dog) => {
      dog.breed = breedsData.find((breed) => breed._id === dog.breedId).title;
    });
    setDogs(dogsData);
  });

  useEffect(() => {
    (async () => {
      await fetching();
    })();
  }, [filter]);

  return (
    <div className="App">
      <Filter breeds={breeds} setFilter={setFilter} filter={filter} />
      {error && <h3>Ошибка {error}</h3>}
      {isLoading ? <h1>Идет загрузка</h1> : <ListDogs dogs={dogs} />}
    </div>
  );
};

export default App;
