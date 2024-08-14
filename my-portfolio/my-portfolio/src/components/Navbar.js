import React from 'react';
import '../css/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">My Portfolio</div>
            <ul className="navbar-links">
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;