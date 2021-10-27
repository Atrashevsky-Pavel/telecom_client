import React, { useEffect, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./Pagination.module.css";

const Pagination = ({ pagesState, onClick }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const buttons = [];
    for (let i = 1; i <= pagesState.quantityButtons; i++) {
      buttons.push(i);
    }
    setButtons(buttons);
  }, [pagesState]);

  return (
    <div className={classes.pagination}>
      {false}
      {pagesState.quantityButtons !== 0 && (
        <p> {`${pagesState.page}/${pagesState.quantityButtons}`}</p>
      )}
      {buttons.map((button) => (
        <MyButton
          key={button}
          onClick={() => onClick(button)}
          disabled={pagesState.page === button && true}
        >
          {button}
        </MyButton>
      ))}
      {pagesState.quantityButtons !== 0 && (
        <div className={classes.pagination__bottom}>
          <MyButton
            onClick={() => onClick(pagesState.page - 1)}
            disabled={pagesState.page === 1 && true}
          >
            Предыдущая
          </MyButton>
          <MyButton
            onClick={() => onClick(pagesState.page + 1)}
            disabled={pagesState.page === pagesState.quantityButtons && true}
          >
            Следующая
          </MyButton>
        </div>
      )}
    </div>
  );
};

export default Pagination;
