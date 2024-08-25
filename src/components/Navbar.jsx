import React from 'react'
import '../css/Navbardesign.css'

import { useEffect, useState } from 'react'
const Navbar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    // const menuRef = useEffect(null)

    const handleMobileBtn = (e) => {
        // console.log(e.target.parentElement.parentElement.parentElement.parentElement.querySelector('#mobile-menu').classList.remove('dsp-none'))
        setMenuVisible(!menuVisible)
    }

    return (
        <nav className="navbar">
            <div className="container">
                <a href="#" className="brand">Ecommerce</a>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
                <div className="mobile-menu-btn">
                    <button id="menu-btn" onClick={(e) => { handleMobileBtn(e) }}>
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div id="mobile-menu" className="mobile-nav-links"
                style={{ display: menuVisible ? "block" : "none" }}
            >
                <a href="#">Home</a>
                <a href="#">Product</a>
                <a href="#">Contact Us</a>
                <a href="#">About Us</a>
            </div>
        </nav>


    )
}

export default Navbar