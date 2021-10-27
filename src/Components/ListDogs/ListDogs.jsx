import React from "react";
import Dog from "../Dog/Dog";
import classes from "./LIstDogs.module.css";

const ListDogs = ({ dogs, page, paginationSort }) => {
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
          {dogs.map((dog, index) => (
            <Dog
              key={dog.title}
              dog={dog}
              index={index}
              page={page}
              paginationSort={paginationSort}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListDogs;
