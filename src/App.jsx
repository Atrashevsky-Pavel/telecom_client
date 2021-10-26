import React, { useState, useEffect } from "react";
import ListDogs from "./Components/ListDogs/ListDogs";
import Pagination from "./Components/Pagination/Pagination";
import BreedsService from "./Api/BreedsService";
import DogsService from "./Api/DogsService";
import Filter from "./Components/Filter/Filter";
import { useGetData } from "./hooks/useGetData";
import { filterPreparation } from "./utils/filterPreparation";

const App = () => {
  const [dogs, setDogs] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [filter, setFilter] = useState({
    breedId: "",
    title: "",
    paginationSort: 5,
  });
  const [quantityButtons, setQuantityButtons] = useState(0);
  const [page, setPage] = useState(1);

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
    setDogs(dogsData.data);
    setQuantityButtons(dogsData.quantityButtons);
    setPage(page);
  });

  useEffect(() => {
    (async () => {
      await fetching(1);
    })();
  }, [filter]);

  return (
    <div className="App">
      <Filter breeds={breeds} setFilter={setFilter} filter={filter} />
      {error && <h3>Ошибка {error}</h3>}
      {isLoading ? (
        <h1>Идет загрузка</h1>
      ) : (
        <div>
          <ListDogs
            dogs={dogs}
            page={page}
            paginationSort={filter.paginationSort}
          />
          <Pagination
            quantityButtons={quantityButtons}
            page={page}
            onClick={fetching}
          ></Pagination>
        </div>
      )}
    </div>
  );
};

export default App;
