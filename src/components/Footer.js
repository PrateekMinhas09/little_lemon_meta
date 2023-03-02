import React from "react";
import "./Footer.css"

function Footer(){

    return(<>

<div className="footer-container">
    <div className="footer-logo">
      <img src="logo.png" alt="Logo" />
    </div>
    
      <div className="footer-section">
        <h3>Doormat Navigation</h3>
        <ul>
         <li><a href="#">Home</a></li> 
        <li><a href="#">About </a></li>
      <li><a href="#">Menu</a></li>  
       <li><a href="#">Reservations</a></li> 
       <li> <a href="#">Order Online</a></li>
        <li><a href="#">Login</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="#">Email</a></li>
          <li><a href="#">Phone</a></li>
          <li><a href="#">Address</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </div>
  
    
    </>)
}

export default Footer;