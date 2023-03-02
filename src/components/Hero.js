import React from "react";



function Hero(){

    return(<>
    <div className="Hero">

    <div className="hero__text">
        <h1 className="hero_heading">Little Lemon</h1>
        <h2 className="hero_subheading">Chicago</h2>
        <p className="hero_paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className="hero_button">Reserve a Table</button>
      </div>
      <div className="hero_image">
        <img src="https://via.placeholder.com/400x400" alt="Hero section" />
      </div>
    </div>
    </>)
}

export default Hero;