import React from "react";
import "./Sidebar.css";
import {Link} from "react-router-dom"
import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaUserPlus,
  FaCog,
} from "react-icons/fa";
import AllTodos from "../components/AllTodos"

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="menu-title">Drivers</p>
      <ul className="menu">
        <li className="active"><FaUsers /><Link to={"/drivers"}>All Drivers</Link></li>
        <li><FaUserCheck />Active Drivers</li>
        <li><FaUserTimes />Inactive Drivers</li>
        <li><FaUserPlus />New Drivers</li>
        <li><FaCog />Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;
