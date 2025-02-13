import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { artistArray } from "../assets/database/artists";

const SingleItem = ({ id, name, image, banner, artist }) => {
  return (
    <div className="single-item">
      <div className="single-item__block">
        <div className="single-item__img">
          <img
            className="single-item__artist-img"
            src={image}
            alt={`Imagem do artista ${name}`}
          />
          <div className="single-item__play-icon">
            <FontAwesomeIcon icon={faCirclePlay} />
          </div>
        </div>
        <div className="single-item__details">
          <div className="single-item__title">
            <p>{name}</p>
          </div>
          <div className="single-item__type">
            <p>{artist ?? "Artista"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
