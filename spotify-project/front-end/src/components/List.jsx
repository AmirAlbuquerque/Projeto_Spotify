import React from "react";
import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const List = ({ title, items, listArray, path, idPath }) => {
  // console.log(useLocation());
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  let finalItems;
  finalItems = isHome ? items : listArray.length;
  return (
    <div className="list">
      <div className="list__title">
        <h2> {title} Populares</h2>
        {isHome ? (
          <Link to={path}>
            <p className="list__title--link">Mostrar tudo</p>
          </Link>
        ) : (
          <></>
        )}
      </div>
      <div className="list__container">
        {listArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem {...currObj} idPath={idPath} key={`${title}${index}`} />
          ))}
      </div>
    </div>
  );
};

export default List;
