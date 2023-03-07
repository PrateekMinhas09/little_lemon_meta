import React from "react";
import GreekSalad from "../icons_assets/greek salad.jpg";
import Hamburger from "../icons_assets/Hamburger.jpg";
import LemonDessert from "../icons_assets/lemon dessert.jpg";
import "./Highlights.css";


function Highlights()
{
    return(<>
      <section className="highlights">
      <div className="highlight-text">
        <h2>Section</h2>
        <button>Online Menu</button>
      </div>
      <div className="highlight-cards">
        <div className="highlight-card">
          <img src={GreekSalad} alt="Item 1" />
          <div className="highlight-card-content">
            <div className="highlight-card-2">
            <h3>Item 1</h3>
            <p className="highlight-card-price">$10.99</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Order Online</button>
          </div>
        </div>
        <div className="highlight-card">
          <img src={Hamburger} alt="Item 2" />
          <div className="highlight-card-content">
          <div className="highlight-card-2">
            <h3>Item 2</h3>
            <p className="highlight-card-price">$12.99</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Order Online</button>
          </div>
        </div>
        <div className="highlight-card">
          <img src={LemonDessert} alt="Item 3" />
          <div className="highlight-card-content">
          <div className="highlight-card-2">
            <h3>Item 3</h3>
            <p className="highlight-card-price">$8.99</p>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Order Online</button>
          </div>
        </div>
      </div>
    </section>
    </>)
}

export default Highlights