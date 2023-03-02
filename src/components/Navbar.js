import React from 'react'


function Navbar()
{

    return(<>
    <div className="navbar">
        <ul className="nav-items">
        <img src="logo.png" alt="Logo" />
        <a href="#">Home</a>
        <a href="#">About </a>
        <a href="#">Menu</a>
        <a href="#">Reservations</a>
        <a href="#">Order Online</a>
        <a href="#">Login</a>

        </ul>

    </div>
    
    
    </>)

};

export default Navbar;