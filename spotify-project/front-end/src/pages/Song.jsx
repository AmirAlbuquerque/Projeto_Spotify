import React from "react";
import { useState } from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Song = () => {
  const indexSongsArray = songsArray.map((currSong, index) => ({
    index: index,
    songId: currSong._id,
  }));

  const { id } = useParams();
  const { image, name, duration, artist, audio } = songsArray.filter(
    (currentSong) => currentSong._id === id
  )[0];

  const artistObj = artistArray.filter(
    (currentSong) => currentSong.name === artist
  )[0];

  const randomSongIndex = Math.floor(Math.random() * songsArray.length - 1);
  const randomSong =
    randomSongIndex === -1 ? 0 : songsArray[randomSongIndex]._id;

  const [isRandomActive, setIsRandomActive] = useState(false);
  const handleRandomToggle = (newState) => {
    setIsRandomActive(newState);
  };

  return (
    <>
      <div className="main">
        <div className="song__pag">
          <div className="song__img">
            <img src={image} alt={`Imagem da música ${name}`} />
          </div>
          <div className="song__player">
            <Link to={`/artist/${artistObj._id}`}>
              <img
                className="song__player__next"
                src={artistObj.image}
                alt={`Imagem do artista "${artistObj.name}"`}
              />
            </Link>
            <Player
              indexSongsArray={indexSongsArray}
              duration={duration}
              id={id}
              audio={audio}
              idRandomSong={randomSong}
              isRandomActive={isRandomActive}
              onToggleRandom={handleRandomToggle}
            />
            <div className="song__player__name">
              <p>{name}</p>
              <p className="song__player__name--artist">{artist}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Song;
