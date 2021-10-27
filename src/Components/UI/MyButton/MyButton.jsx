import React from "react";
import classes from "./MyButton.module.css";

const MyButton = ({ children, disabled = false, ...props}) => {
  return (
    <button
        className={(disabled) ?
            [classes.my__button, classes.my__button_disabled].join(" "):
            [classes.my__button, classes.my__button_active].join(" ")}
        {...props}
        disabled = {disabled}
    >
      {children}
    </button>
  );
};

export default MyButton;
