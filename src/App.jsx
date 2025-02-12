import { useState } from 'react'
import reactLogo from './assets/react.svg'
import swa from './assets/swa.jpg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from '../src/Home/Home'
import Profile from './Profile/Profile'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cart from '../src/Cart/Cart'
import Sneaker from './Sneaker/Sneaker'
import Apparel from './Apparel/Apparel'
import Watches from './Watches/Watches'

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
    </Routes>
  </Router>
  )
}

export default App
