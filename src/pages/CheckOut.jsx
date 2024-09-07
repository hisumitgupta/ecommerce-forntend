import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import { apiFetch } from '../services/Api.js'
const CheckOut = () => {
    // console.log(apiFetch)
    return (
        <div>
            <Navbar />
            <div>
            {<div className="product-container">
                <div className="product-image">
                    <img src="product-image.jpg" alt="Product Name"/>
                </div>
                <div className="product-details">
                    <h1 className="product-title">Product Name</h1>
                    <p className="product-price">$49.99</p>
                    <p className="product-description">
                        This is a brief description of the product. It highlights the key features and benefits of the product, making it appealing to potential buyers.
                    </p>
                    <button className="add-to-cart-btn">Add to Cart</button>
                </div>
            </div>}
            
            </div>
        </div>
    )
}

export default CheckOut