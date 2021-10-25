import React, { useState } from "react";
import Dog from "../Dog/Dog";
import classes from "./LIstDogs.module.css";
import Pagination from "../Pagination/Pagination";

const ListDogs = ({ dogs }) => {
  const pageSize = 10;
  const [page, setPage] = useState(1);
  return (
    <div>
      <table className={classes.dogs}>
        <thead>
          <tr className={classes.dogs_head}>
            <th>Номер</th>
            <th>Заголовок</th>
            <th>Порода</th>
            <th>Картинка</th>
          </tr>
        </thead>
        <tbody>
          {dogs
            .slice((page - 1) * pageSize, page * pageSize)
            .map((dog, index) => (
              <Dog
                key={dog.title}
                dog={dog}
                index={index}
                pageSize={pageSize}
                page={page}
              />
            ))}
        </tbody>
      </table>
      <Pagination
        lengthData={dogs.length}
        pageSize={pageSize}
        setPage={setPage}
      />
    </div>
  );
};

export default ListDogs;
