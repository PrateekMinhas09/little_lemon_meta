import React from "react";
import "./Testimonial.css"
import John from "../icons_assets/john_doe.jpg";
import Jane from "../icons_assets/jane_smith.jpg";
import Bob from "../icons_assets/Bob_Johnson.jpg";
import Sarah from "../icons_assets/Sarah_Williams.jpg";

function Testimonial(){

    return(
    <>
     <div className="testimonial-container">
      <div className="testimonial-heading">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>5 stars</p>
          </div>
          <div className="testimonial-info">
            <img src={John} alt="Person 1" className="testimonial-image" />
            <div className="testimonial-name">
              <h4>John Doe</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>I had an incredible dining experience at Little Lemon!. </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>4 stars</p>
          </div>
          <div className="testimonial-info">
            <img src={Jane} alt="Person 2" className="testimonial-image"/>
            <div className="testimonial-name">
              <h4>Jane Smith</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>The food was really lovely</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>5 stars</p>
          </div>
          <div className="testimonial-info">
            <img src={Bob} alt="Person 3" className="testimonial-image"/>
            <div className="testimonial-name">
              <h4>Bob Johnson</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>I really enjoyed the atmosphere along with the cozy food </p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>4 stars</p>
          </div>
          <div className="testimonial-info">
            <img src={Sarah} alt="Person 4" className="testimonial-image"/>
            <div className="testimonial-name">
              <h4>Sarah Williams</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>The hamburger was exceptional along with the beverages</p>
          </div>
        </div>
      </div>
    </div>


    
    </>
    );

};

export default Testimonial;