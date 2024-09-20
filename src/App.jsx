import { json, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About.jsx'
import CheckOut from './pages/CheckOut.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import { CartContext } from './context/CartContext.jsx'
import { useEffect, useState } from 'react'

function App() {
  // const [context, setContext] = useState({
  //   cart: { cartId: "" }
  // })


  let existingData = JSON.parse(localStorage.getItem('cart-data')) ?? []
  // let existingNewData = JSON.parse(localStorage.getItem('cart-data'));
  const [cartData, setCartData] = useState(existingData);

  const setData = (data) => {
    let newData = [...cartData, data];
    setCartData(newData);
  }

  useEffect(() => {
    localStorage.setItem('cart-data', JSON.stringify(cartData));
  }, [cartData])


  return (
    <>
      {/* <cartData.Provider value={{ context, setContext }}> */}
      <CartContext.Provider value={{ cartData, setData, setCartData }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Product />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/checkout' element={<CheckOut />} />
        </Routes>
      </CartContext.Provider>
    </>
  )
}

export default App
