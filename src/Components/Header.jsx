import React from "react";
import logo from "./image/netflix-logo-png-2562.png";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
const Header = () => {
  return (
    <nav className="header">
      <img src={logo} alt="netflix" />
      <div className="nav_list">
        <Link to={"/"}>TV Shows</Link>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/recentlyAdded"}>Recently Added</Link>
        <Link to={"/myList"}>My List</Link>
      </div>
      <IoIosSearch></IoIosSearch>
    </nav>
  );
};

export default Header;
