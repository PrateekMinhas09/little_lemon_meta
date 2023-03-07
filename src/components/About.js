import React from "react";
import "./About.css"
import Image1 from "../icons_assets/Mario and Adrian A.jpg"
import Image2 from "../icons_assets/restaurant chef B.jpg"

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
          <img className="image-1 about-image" src={Image2} alt="Restaurant Image 1" />
          <div className="about-image-overlay"><img className="image-2 about-image" src={Image1} alt="Restaurant Image 2" /></div>
          
        </div>
      </div>
      </>
    )
}

export default About;