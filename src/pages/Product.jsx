import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import '../css/ProductCard.css'
// import '../css/ProductList.css'
import { apiFetch } from '../services/Api.js'
import { Link,useLocation } from 'react-router-dom'
// import React, { useState, useEffect } from 'react';
// import Navbar from './Navbar'; // Adjust import according to your file structure

const Product = () => {
  const [apiData, setApiData] = useState([]);

  const location  = useLocation();
  useEffect(() => {
    (async function (){
        const newData = await apiFetch();
        // console.log(newData);
        setApiData(newData)
    })();
    
  }, [])

  const storeId = (e)=>{
    // console.log(window.location.href)
    // console.log(location.pathname)

    const dataId = e.target.getAttribute('productId');
    sessionStorage.setItem('productId', JSON.stringify(dataId));
  }

  return (
    <div>
      <Navbar />
      <div className='ProductCard-wrapper'>
      {apiData.map((elem) => (
        <div key={elem.id} className="card">
          <img src={elem.image} alt={elem.title} className="card-img" />
          <div className="card-content">
            <h2 className="card-title">{elem.title}</h2>
            <p className="card-price">${elem.price}</p>
            <p className="card-description">{elem.description}</p>
            <p className="card-category">Category: {elem.category}</p>
            <div className="card-rating">
              <span>Rating: {elem.rating.rate}</span> ({elem.rating.count} reviews)
            </div>
            {/* <button className='buynow-btn' >buyNow</button> */}
            <Link to={`/product/${elem.id}`} className='btn-link'><button className='Listbuynow-btn'>buyNow</button></Link> 
            
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Product;
