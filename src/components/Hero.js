import React from "react";
import Restaurant from "../icons_assets/restaurant.jpg";




function Hero(){

    return(<>
    <div className="Hero">

    <div className="hero__text">
        <h1 className="hero_heading">Little Lemon</h1>
        <h2 className="hero_subheading">Chicago</h2>
        <p className="hero_paragraph">
         Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.
        </p>
        <button className="hero_button">Reserve a Table</button>
      </div>
      <div className="hero_image">
        <img src={Restaurant} alt="Hero section" />
      </div>
    </div>
    </>)
}

export default Hero;