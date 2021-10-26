import React, { useEffect, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./Pagination.module.css";

const Pagination = ({ quantityButtons, page, onClick }) => {
  const [buttons, setButtons] = useState([]);
  useEffect(() => {
    const buttons = [];
    for (let i = 1; i <= quantityButtons; i++) {
      buttons.push(i);
    }
    setButtons(buttons);
  }, [quantityButtons, page]);

  return (
    <div className={classes.pagination}>
      {page + "/" + quantityButtons}
      <br />
      {buttons.map((button) => (
        <MyButton key={button} onClick={() => onClick(button)}>
          {button}
        </MyButton>
      ))}
    </div>
  );
};

export default Pagination;
