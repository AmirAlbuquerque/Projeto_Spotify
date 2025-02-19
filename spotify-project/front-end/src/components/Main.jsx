import React from "react";
import List from "./List";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type, isHome }) => {
  // console.log(isHome);
  return (
    <div className="main">
      {/* Lista de Artistas */}
      {type === "artists" || type === undefined ? (
        <List
          title="Artista"
          items={10}
          listArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <List
          title="Música"
          items={20}
          listArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
