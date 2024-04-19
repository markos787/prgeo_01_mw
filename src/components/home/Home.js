import React from "react";
import "./Home.css";
import plan_wat from "./plan_wat.jpg";
function Home({ text }) {
  return (
    <div className="home">
      <div className="homme_top">
        <div className="home_top_about">o projekcie</div>
      </div>
      <div className="home_botton"></div>
      <div className="home_left">
        <img className="plan_wat" src={plan_wat} alt="logo" />
      </div>

      <div className="home_right">
        <div className="home_right_title">Geoportal</div>

        <div className="home_right_subtitle">
          Strona internetowa z interaktywną mapą
        </div>

        <button className="home_right_btn">START</button>
      </div>
    </div>
  );
}

export default Home;
