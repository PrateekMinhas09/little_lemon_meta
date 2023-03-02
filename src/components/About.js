import React from "react";
import "./About.css"

function About()
{


    return(
        <><div className="about-section">
        <div className="about-details">
          <div className="restaurant-name">Little Lemon</div>
          <div className="restaurant-place">Chicago</div>
          <div className="restaurant-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className="about-images">
          <img className="image-1 about-image" src="image1.jpg" alt="Restaurant Image 1" />
          <img className="image-2 about-image" src="image2.jpg" alt="Restaurant Image 2" />
        </div>
      </div>
      </>
    )
}

export default About;