import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
    </div>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>

      <Link className="option" to="/">
        CONTACT
      </Link>
    </div>
  </div>
);

export default Header;
