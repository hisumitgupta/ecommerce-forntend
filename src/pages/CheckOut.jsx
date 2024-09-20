import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import CartItem from '../components/CartItem.jsx'
import { CartContext } from '../context/CartContext';
const CheckOut = () => {
    // console.log(apiFetch)
    const { cartData, setData } = useContext(CartContext)
    // const [productData, setProductData] = useState([])
    // useEffect(() => {
    //     let getProduct = JSON.parse(localStorage.getItem('cartProduct'));
    //     // console.log(getProduct/)
    //     setProductData(getProduct)
    // }, []);

    // console.log(productData);

    return (
        <div>
            <Navbar />
            {cartData.length === 0 ? <h1>No Product Here</h1> : ""}
            <div>
                {cartData.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}

            </div>
        </div >
    )
}

export default CheckOut
