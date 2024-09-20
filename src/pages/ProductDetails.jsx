import React, { useContext, useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom'
import { productFetch } from '../services/Api';
import '../css/CheckoutDesign.css'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
export default function ProductDetails() {

    const [newData, setNewData] = useState({});
    const [quan, setQuan] = useState(0)
    // const [handle]
    const params = useParams()

    const { cartData, setData, setCartData } = useContext(CartContext)

    useEffect(() => {
        (async function () {
            const productData = await productFetch(params.productId)
            setNewData(productData);
            // setCartData(productData)
        })()
    }, [])
    // console.log(existingData);

    // const handleIncrement = ()=>{
    //     setQuan(quan + 1)
    // }

    const navigate = useNavigate();
    function storeProduct() {
        console.log(cartData)
        newData.quantity = quan;
        // console.log(CartData);
        if (newData.quantity != 0) {
            if (cartData.length == 0) {
                // localStorage.setItem('cartProduct', JSON.stringify([newData]))
                setData(newData);
                // console.log(CartData)
                navigate('/checkout');
            }
            else {
                let getProductItems = JSON.parse(localStorage.getItem('cart-data'));
                const itemIndex = getProductItems.findIndex(i => i.id === newData.id)
                if (itemIndex >= 0) {
                    getProductItems[itemIndex].quantity = newData.quantity
                    setCartData(getProductItems)
                } else {
                    setData(newData);
                }
                navigate('/checkout');



                // let presentCheck = getProductItems.some((item, index) => {
                //     return item.title == newData.title;
                // })
                // if (presentCheck) {
                //     getProductItems.forEach((item) => {
                //         if (item.title == newData.title) {
                //             item.quantity = newData.quantity;
                //             navigate('/checkout');
                //         }
                //     });
                //     // const currentProdcut = getProductItems?.find((product) => product.title == newData?.title)
                //     // localStorage.setItem('cart-data', JSON.stringify(getProductItems));
                //     setData(getProductItems)
                // } else {
                //     // localStorage.setItem('cart-data',JSON.stringify([...getProductItems,newData]))
                //     setData(newData);
                //     navigate('/checkout');
                // }
            }
        }
        else {
            alert('quantity should be more than 1');
        }

    }


    return (
        <div>
            <Navbar />
            <div>
                <div className="product-container" key={newData.id}>
                    <div className="product-image">
                        <img src={newData.image} alt={newData.title} />
                    </div>
                    <div className="product-details">
                        <h1 className="product-title">{newData.title}</h1>
                        <p className="product-price">Price {newData.price}</p>
                        <p className="product-description">
                            {newData.description}
                        </p>
                        <div className="quantity-container">
                            <button className="quantity-btn minus-btn" disabled={quan == 0} onClick={() => setQuan((prev) => prev - 1)}>−</button>
                            <input type="number" className="quantity-input" value={quan} min="1" readOnly />
                            <button className="quantity-btn plus-btn" disabled={quan >= 10} onClick={() => setQuan((prev) => prev + 1)}>+</button>
                            {/* <button className="add-to-cart-btn">Add to Cart</button> */}
                            <button className='buynow-btn' onClick={storeProduct}>buyNow</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
