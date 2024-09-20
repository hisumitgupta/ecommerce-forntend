import React, { useState } from 'react'
import '../css/CheckoutDesign.css'
const CartItem = ({ item }) => {

    const [quantity, setQuantity] = useState(item.quantity || 0)

    let getProductItems = JSON.parse(localStorage.getItem('cart-data'));
    
    function handleIncrement(id) {
        setQuantity((prev) => prev + 1);
        let checkPresent = getProductItems.some((Pitem) => {
            return Pitem.id == id;
        })
        if (checkPresent) {
            getProductItems.forEach((data) => {
                if (data.id == id) {
                    data.quantity = data.quantity + 1;
                }
            })
            localStorage.setItem('cartProduct', JSON.stringify(getProductItems));
        }
    }

    function handleDecrement(id) {
        setQuantity((prev) => prev - 1);
        // let getProductItems = JSON.parse(localStorage.getItem('cartProduct'));
        let checkPresent = getProductItems.some((Pitem) => {
            return Pitem.id == id;
        })
        if (checkPresent) {
            let decrementData = getProductItems.map((data) => {
                if (data.id == id) {
                    data.quantity = data.quantity - 1;
                    return data;
                }
            });
            let newFilterData = decrementData.filter((filterData) => {
                if (filterData.quantity !== 0) {
                    return filterData
                }
            })
            localStorage.setItem('cartProduct', JSON.stringify(newFilterData));
        }
    }

    //function 
    function handleDelete(deleteId) {
        let filterProduct = getProductItems.filter((Pitem, index) => {
            if (Pitem.id != deleteId) {
                return Pitem
            }
        })
        localStorage.setItem('cartProduct', JSON.stringify(filterProduct));
        // console.log(getProductItems)
    }

    return (
        <div className="product-container" key={item.id}>
            <div className="delete-icon" onClick={() => handleDelete(item.id)}>
                &times; {/* or use an icon like <i className="fas fa-trash"></i> if using FontAwesome */}
            </div>
            <div className="product-image">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="product-details">
                <h1 className="product-title">{item.title}</h1>
                <p className="product-price">${item.price}</p>
                <p className="product-description">
                    {item.description}
                </p>
                <div className="quantity-container">
                    <button className="quantity-btn minus-btn" disabled={quantity == 0} onClick={() => { handleDecrement(item.id) }}>−</button>
                    <input type="number" className="quantity-input" value={quantity} min="1" readOnly />
                    <button className="quantity-btn plus-btn" disabled={quantity >= 10} onClick={() => handleIncrement(item.id)}>+</button>
                </div>
            </div>
        </div>

    )
}

export default CartItem