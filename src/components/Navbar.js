import React from 'react'
import { Link , Switch} from 'react-router-dom';
import Logo from "../icons_assets/Logo.svg"

function Navbar()
{

    return(
    <div className="navbar">
        <ul className="nav-items">
        <img src={Logo} alt="Logo" />
        <Link to="/">Home</Link>
        <Link to="/about">About </Link>
        <a href="#">Menu</a>
        <Link to="/reservations" >Reservations</Link>
        <a href="#">Order Online</a>
        <a href="#">Login</a>

        </ul>

    </div>
    
    
   )

};

export default Navbar;