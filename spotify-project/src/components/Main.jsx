import React from "react";
import List from "./List";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
      {/* Lista de Artistas */}
      <List title="Artista" items={5} listArray={artistArray} />
      {/* Lista de Músicas */}
      <List title="Música" items={10} listArray={songsArray} />
    </div>
  );
};

export default Main;
