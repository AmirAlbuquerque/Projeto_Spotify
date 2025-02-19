import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SingleItem = ({ _id, name, image, banner, artist, idPath }) => {
  return (
    <Link to={`${idPath}/${_id}`} className="single-item">
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
          <div className="single-item__title-2lines">
            <div className="single-item__title">
              <p>{name}</p>
            </div>
          </div>
          <div className="single-item__type">
            <p>{artist ?? "Artista"}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleItem;
