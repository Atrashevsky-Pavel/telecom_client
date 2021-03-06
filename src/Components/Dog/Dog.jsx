import React from "react";
import classes from "./Dog.module.css";

const Dog = ({ dog, index, paginationSort, page }) => {
  return (
    <tr className={classes.dog__body}>
      <td>{index + 1 + paginationSort * (page - 1)}</td>
      <td>{dog.title}</td>
      <td>{dog.breed}</td>
      <td>
        <img className={classes.dog__image} alt={dog.title} src={dog.image} />
      </td>
    </tr>
  );
};

export default Dog;
