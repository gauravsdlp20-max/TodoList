import React from "react";
import "./Navbar.css";
import { FaBars, FaBell, FaSearch, FaTruckMoving } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <FaBars className="icon"/>
        <span className="logo"><FaTruckMoving /><Link to={"/"} className="header"><strong>Digi Deliver</strong></Link></span>
      </div>
      <div className="navbar-center">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="navbar-right">
        <ul>
          <li>Drivers</li>
          <li>Users</li>
          <li>Jobs</li>
        </ul>
        <FaBell className="icon" />
        <img
          className="profile"
          src="https://static.vecteezy.com/system/resources/thumbnails/071/408/430/small/portrait-of-positive-young-guy-in-t-shirt-looking-at-camera-on-light-grey-studio-background-confident-millennial-man-with-dark-hair-wearing-casual-clothes-posing-and-smiling-photo.jpg"
          alt="profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;
