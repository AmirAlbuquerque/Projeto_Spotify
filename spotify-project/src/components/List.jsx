import React from "react";
import SingleItem from "./SingleItem";
import { artistArray } from "../assets/database/artists";

const List = ({ title, items, listArray }) => {
  return (
    <div className="list">
      <div className="list__title">
        <h2> {title} Populares</h2>
        <a href="/">
          <p>Mostrar tudo</p>
        </a>
      </div>
      <div className="list__container">
        {listArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem {...currObj} key={`${title}${index}`} />
          ))}
      </div>
    </div>
  );
};

export default List;
