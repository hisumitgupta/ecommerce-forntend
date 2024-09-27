import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/AboutUs.css'
const About = () => {
  return (

    <div>
            <Navbar/>
      {/* <h1>About</h1> */}
      <section className="why-shop">
        <h2>Why Shop With Us?</h2>
        <ul>
            <li>Fast & Free Shipping</li>
            <li>24/7 Customer Support</li>
            <li>Secure Payments</li>
            <li>Easy Returns</li>
        </ul>
    </section>
      </div>
  )
}

export default About