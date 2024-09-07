import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About.jsx'
import CheckOut from './pages/CheckOut.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import ProductDetails from './pages/ProductDetails.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Product />} />
        <Route path='/product/:productId' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout' element={<CheckOut />} />
      </Routes>
    </>
  )
}

export default App
