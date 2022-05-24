import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <Link to="/" className="Navbar__item">
          Home
        </Link>
        <Link to="/shop" className="Navbar__item">
          shop
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
