import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div data-testid="header-container" className="header-container">
      <Link data-testid="link-to-root" to="/">
        <img data-testid="header-logo" src={logo} alt="Logo" className="logo" />
      </Link>
      <h1 className="title">Pronóstico del tiempo</h1>
    </div>
  );
};

export default Header;
