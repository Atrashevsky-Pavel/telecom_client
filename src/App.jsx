import React, { useState, useEffect } from "react";
import ListDogs from "./Components/ListDogs/ListDogs";
import Pagination from "./Components/Pagination/Pagination";
import BreedsService from "./Api/BreedsService";
import DogsService from "./Api/DogsService";
import Filter from "./Components/Filter/Filter";
import { useGetData } from "./hooks/useGetData";
import { filterPreparation } from "./utils/filterPreparation";
import "./App.css";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [filter, setFilter] = useState({
    breedId: "",
    title: "",
    paginationSort: 5,
  });
  const [pagesState, setPagesState] = useState({
    page: 1,
    quantityButtons: 0,
  });

  const [fetching, isLoading, error] = useGetData(async (page) => {
    const breedsData = [];
    if (breeds.length) {
      breedsData.push(...breeds);
    } else {
      breedsData.push(...(await BreedsService.getBreeds()));
      setBreeds(breedsData);
    }
    const dogsData = await DogsService.getDogs(filterPreparation(page, filter));
    dogsData.data.map((dog) => {
      dog.breed = breedsData.find((breed) => breed._id === dog.breedId).title;
    });
    setPagesState({ page, quantityButtons: dogsData.quantityButtons });
    setDogs(dogsData.data);
  });

  useEffect(() => {
    (async () => {
      await fetching(1);
    })();
  }, [filter]);

  return error ? (
    <h3 className="error">Ошибка {error}</h3>
  ) : (
    <div className="App">
      {isLoading ? (
        <div className="loading">
          <p>Идет загрузка...</p>
        </div>
      ) : (
        <div className="App__content">
          <Filter breeds={breeds} setFilter={setFilter} filter={filter} />
          <ListDogs
            dogs={dogs}
            page={pagesState.page}
            paginationSort={filter.paginationSort}
          />
          <Pagination pagesState={pagesState} onClick={fetching} />
        </div>
      )}
    </div>
  );
};

export default App;
