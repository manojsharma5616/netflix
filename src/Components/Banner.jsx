import React from "react";
import "./Home.scss";
import { FaPlus } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner">
      {/* <img src='https://wallpapercave.com/wp/wp4770372.jpg' alt="banner image" /> */}
        <h1>popularMovies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, magnam!
        </p>
        <div className="button_list">
          <button><FaPlayCircle/> Play</button>
          <button>My List <FaPlus /></button>
        </div>
    </div>
  );
};

export default Banner;
