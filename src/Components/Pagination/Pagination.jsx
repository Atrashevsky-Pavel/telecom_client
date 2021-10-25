import React, { useEffect, useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./Pagination.module.css";

const Pagination = ({ lengthData, pageSize, setPage }) => {
  const [buttons, setButton] = useState([]);
  useEffect(() => {
    const buttonArr = [];
    for (let i = 0; i < lengthData / pageSize; i++) {
      buttonArr.push(i + 1);
    }
    setButton(buttonArr);
  }, [lengthData, pageSize]);

  return (
    <div className={classes.pagination}>
      {buttons.length > 1
        && buttons.map((button) => (
            <MyButton key={button} onClick={() => setPage(button)}>
              {button}
            </MyButton>
          ))
       }
    </div>
  );
};

export default Pagination;
