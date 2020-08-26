import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <h1 className="title">Pronóstico del tiempo</h1>
    </div>
  );
};

export default Header;
