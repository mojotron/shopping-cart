import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <NavLink
          to="/"
          // TODO active is already in use add better solution
          className={({ isActive }) =>
            isActive ? "Navbar__item active" : "Navbar__item"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "Navbar__item active" : "Navbar__item"
          }
        >
          shop
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
