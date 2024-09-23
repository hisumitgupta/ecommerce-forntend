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
        // <div>
        //     <Navbar />
        //     {cartData.length === 0 ? <h1>No Product Here</h1> : ""}
        //     <div>
        //         {cartData.map((item) => (
        //             <CartItem item={item} key={item.id} />
        //         ))}
        //     </div>
        // </div >

        <div >
            <Navbar />
            <div className="cart-container">

                {/* <div className=''> */}
                <div className="cart-items">
                    {cartData.length === 0 ? <h1>No Product Here</h1> : ""}
                    <div className="cart-items-list">
                        {cartData.map((item) => (
                            <CartItem item={item} key={item.id} />
                        ))}
                    </div>
                </div>
                {/* </div> */}

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartData.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>${item.price * item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="cart-total">
                        <h3>Total: ${cartData.reduce((acc, item) => acc + (item.price * item.quantity), 0)}</h3>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default CheckOut
