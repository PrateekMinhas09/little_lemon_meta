import React from "react";
import "./Testimonial.css"

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
            <img src="person1.jpg" alt="Person 1" className="testimonial-image" />
            <div className="testimonial-name">
              <h4>John Doe</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>4 stars</p>
          </div>
          <div className="testimonial-info">
            <img src="person2.jpg" alt="Person 2" />
            <div className="testimonial-name">
              <h4>Jane Smith</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>5 stars</p>
          </div>
          <div className="testimonial-info">
            <img src="person3.jpg" alt="Person 3" />
            <div className="testimonial-name">
              <h4>Bob Johnson</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-rating">
            <p>4 stars</p>
          </div>
          <div className="testimonial-info">
            <img src="person4.jpg" alt="Person 4" />
            <div className="testimonial-name">
              <h4>Sarah Williams</h4>
            </div>
          </div>
          <div className="testimonial-review">
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>


    
    </>
    );

};

export default Testimonial;