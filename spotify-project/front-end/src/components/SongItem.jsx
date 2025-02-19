import React from "react";
import { Link } from "react-router-dom";

const SongItem = ({ image, name, duration, _id, index }) => {
  return (
    <Link to={`/song/${_id}`} className="song-item">
      <p className="song-item__id">{index + 1}</p>
      <img className="song-item__icon" src={image} alt="imagem musica"></img>
      <h1 className="song-item__name">{name}</h1>
      <p className="song-item__time">{duration}</p>
    </Link>
  );
};

export default SongItem;
