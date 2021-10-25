import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ onChange, placeholder, value }) => {
  return (
    <input
      type="text"
      value={value}
      className={classes.my__input}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default MyInput;
