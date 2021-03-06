import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import CartLink from "./CartLink";

const Navbar = (props) => {
  return (
    <nav className="Navbar">
      <ul className="Navbar__list">
        <NavLink
          to="/"
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

      <CartLink cartLength={props.cartLength} />
    </nav>
  );
};

export default Navbar;
