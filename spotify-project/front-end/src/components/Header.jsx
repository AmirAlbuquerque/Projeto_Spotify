import React from "react";
import logoSpotify from "../assets/logo/spotify-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__imagem"
          src={logoSpotify}
          alt="logo spotify"
        ></img>
      </Link>
      <Link to="/">
        <h1 className="header__marca">SpotiFAKE</h1>
      </Link>
    </div>
  );
};

export default Header;
