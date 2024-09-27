import React from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/HomePage.css'
import {useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar/>
      {/* <h1>Home</h1> */}
      <header className="hero">
        <h1>Welcome to ShopEase</h1>
        <p>Your One-Stop Online Shopping Destination</p>
        <a href="#" className="btn" onClick={()=> navigate('/products')}>Start Shopping</a>
    </header>
      </div>
  )
}

export default Home