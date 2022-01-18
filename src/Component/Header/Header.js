import React from "react";
import "./Header.css";
import "../../responsive.css";
import logo from "../../images/logo.png";
import { FiSearch } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="container">
      <nav>
        {/* Logo Part */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
            <p>CFC</p>
          </Link>
        </div>

        {/* nav menu */}
        <ul>
          <li>
            <Link to="/">Discover</Link>
          </li>
          <li>
            <Link to="/cookbook">Cookbook</Link>
          </li>
          <li>
            <Link to="/youtube">Youtube</Link>
          </li>
          <li className="btn login">
            <Link to="/login">login</Link>
          </li>
        </ul>
        <span className="hambarger">
          <FaBars />
        </span>
      </nav>
      {/* Search___Bar */}
      <div className="search__bar">
        <FiSearch />
        <input type="search" placeholder="Search here" />
      </div>
    </section>
  );
};

export default Header;
