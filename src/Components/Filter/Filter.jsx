import React from "react";
import classes from "./Filter.module.css";
import MyInput from "../UI/MyInput/MyInput";
import MySelect from "../UI/MySelect/MySelect";

const Filter = ({ breeds, setFilter, filter }) => {
  const pagination = [
    { title: "По 5 записей", _id: 5 },
    { title: "По 10 записей", _id: 10 },
    { title: "По 15 записей", _id: 15 },
  ];
  return (
    <div className={classes.filter}>
      <div>
        <MyInput
          value={filter.title}
          onChange={(ev) => setFilter({ ...filter, title: ev.target.value })}
          placeholder="Поиск..."
        />
      </div>
      <div>
        <MySelect
          value={filter.paginationSort}
          options={pagination}
          onChange={(ev) =>
            setFilter({ ...filter, paginationSort: ev.target.value })
          }
        />
      </div>
      <div>
        <MySelect
          value={filter.breedId}
          options={breeds}
          onChange={(ev) => setFilter({ ...filter, breedId: ev.target.value })}
        />
      </div>
    </div>
  );
};

export default Filter;
