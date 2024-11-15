import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

import Mcs from "../images/MCS_Logo_WHITE.png";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src={Mcs} alt="Logo" />
      </Link>
      <div className={`nav-links ${menuActive ? "active" : ""}`}>
        <Link to="/events" className="nav-link" onClick={closeMenu}>
          EVENTS
        </Link>
        <Link to="/gallery" className="nav-link" onClick={closeMenu}>
          GALLERY
        </Link>
        <Link to="/team" className="nav-link" onClick={closeMenu}>
          TEAM
        </Link>
        <Link to="/contact" className="nav-link" onClick={closeMenu}>
          CONTACT
        </Link>
      </div>
      <div
        className={`menu-button ${menuActive ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
