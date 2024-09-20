import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbardesign.css'
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
                <Link to="/" className="brand">Ecommerce</Link>
                <ul className="nav-links">
                    {/* <li><Link to="/">Home</Link></li> */}
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/checkout">checkout</Link></li>
                </ul>
                <div className="mobile-menu-btn">
                    <button id="menu-btn" onClick={(e) => { handleMobileBtn(e) }}>
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuVisible && <div id="mobile-menu" className="mobile-nav-links">
                {/* <div id="mobile-menu" className={`mobile-nav-links ${onClick(handleMobileBtn())}`} > */}
                {/* <Link to="/">Home</Link> */}
                <Link to="/products">Product</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/checkout">checkout</Link>
            </div>}

        </nav>


    )
}

export default Navbar