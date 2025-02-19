import React from "react";
import SongItem from "./SongItem";
import { songsArray } from "../assets/database/songs";

const SongList = ({ artist }) => {
  return (
    <>
      {songsArray
        .filter((song) => song.artist === artist)
        .map((currSong, index) => (
          <SongItem {...currSong} key={index} index={index} />
        ))}
    </>
  );
};

export default SongList;
