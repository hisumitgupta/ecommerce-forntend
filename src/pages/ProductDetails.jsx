import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productFetch } from '../services/Api';
import '../css/CheckoutDesign.css'
import Navbar from '../components/Navbar';

export default function ProductDetails() {

    const [newData, setNewData] = useState({});
    const [quan, setQuan] = useState(0)
    // const [handle]
    const params = useParams()

    useEffect(() => {
        (async function () {
            const productData = await productFetch(params.productId)
            setNewData(productData);
        })()
    }, [])

    // const handleIncrement = ()=>{
    //     setQuan(quan + 1)
    // }


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
                            <button className="quantity-btn minus-btn" disabled={quan == 0} onClick={() => setQuan((prev) => prev-1)}>−</button>
                            <input type="number" className="quantity-input" value={quan} min="1"/>
                            <button className="quantity-btn plus-btn" disabled={quan >= 10} onClick={() => setQuan((prev) => prev+1)}>+</button>
                            <button className="add-to-cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
