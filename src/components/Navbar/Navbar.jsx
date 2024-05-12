import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{ position: "fixed", width: "100%", top: 0, zIndex: 100 }}
    >
      <img src="src/assets/wayang-removebg.png" alt="" className="logo" />
      <div style={{ display: "flex" }}>
        <p>Kulapedia</p>
      </div>

      <ul className="navbar-right">
        <li>
          <Link to="/" className="button-link-navbar">
            Home
          </Link>
        </li>
        <li>
            <a href="#aboutUs">About Us</a>
        </li>
        <li>
            <a href="#categories">Categories</a>
        </li>
        <li>
            <a href="#resep">Recipe's</a>
        </li>
        <li>
            <a href="#contact">Contact Us</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
