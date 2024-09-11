import React from 'react'
import Navbar from './components/common/Navbar'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Footer from './components/common/Footer'
import Product from './components/Product'
import Cart from './components/Cart'


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='' element={} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
