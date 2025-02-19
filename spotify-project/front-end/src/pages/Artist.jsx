import React from "react";
import SongList from "../components/SongList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Artist = () => {
  const { id } = useParams();
  const { name, banner } = artistArray.filter(
    (currentArtist) => currentArtist._id === id
  )[0];
  const songsObj = songsArray.filter(
    (currentSong) => currentSong.artist === name
  );
  const randomSongIndex = Math.floor(Math.random() * songsObj.length - 1);
  const randomSong = randomSongIndex === -1 ? 0 : songsObj[randomSongIndex]._id;
  return (
    <div className="artist">
      <div className="artist__header-container">
        <div
          className="artist__banner"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="artist__name"> {name}</div>
        </div>
      </div>
      <div className="artist__song-list">
        <h2 className="artist__song-list-tilte">Populares</h2>
        <SongList {...songsObj} artist={name} />
      </div>
      <Link to={`/song/${randomSong}`} className="artist__song-play-icon">
        <FontAwesomeIcon icon={faCirclePlay} />
      </Link>
    </div>
  );
};

export default Artist;
