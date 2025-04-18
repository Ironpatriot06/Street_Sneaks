import { useState } from 'react'
import reactLogo from './assets/react.svg'
import swa from './assets/swa.jpg'
import './App.css'
import Home from '../src/Home/Home'
import Profile from './Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from '../src/Nav/Nav'
import Cart from '../src/Cart/Cart'
import Sneaker from './Sneaker/Sneaker'
import Apparel from './Apparel/Apparel'
import Watches from './Watches/Watches'
import Footer from '../src/Footer/Footer'
import Prof from '../src/Prof/Prof'
import Product from '../src/Product/Product'
import ProductApp from './ProductApp/ProductApp'
import ProductC from '../src/ProductC/ProductC'
import Sign from "../src/Sign/Sign"
import { MagnifyingGlass, User, Basket,InstagramLogo,FacebookLogo } from "@phosphor-icons/react";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/sneaker" element={<Sneaker />} />
      <Route path="/apparel" element={<Apparel />} />
      <Route path="/watches" element={<Watches />} />
      <Route path="/nav" element={<Nav />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/prof" element={<Prof />} />
      <Route path="/product" element={<Product />} />
      <Route path="/product-app" element={<ProductApp />} />
      <Route path="/productC" element={<ProductC />} />
      <Route path="/sign" element={<Sign />} />
    </Routes>
  </Router>
  )
}

export default App
