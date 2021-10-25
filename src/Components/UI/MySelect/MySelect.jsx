import React from "react";

const MySelect = ({ options, onChange, value }) => {
  return (
    <select onChange={onChange} value={value}>
      <option value="">Не выбрано</option>
      {options.map((option) => (
        <option key={option._id} value={option._id}>
          {option.title}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
