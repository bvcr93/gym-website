import React from "react";
import Bike from "../assets/bike.jpg";
import "./Home.css";
import {Link} from "react-router-dom"
const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Bike})` }}>
      <div className="home-section">
        <h1 className="homeh1">Power in every bite</h1>
        <p className="offer">
          We offer quality dietary supplements made with special care to anybody
          who wants to reach their body's fullest potential.
        </p>
        <Link to ="/shop">
        <button className="btn">SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
