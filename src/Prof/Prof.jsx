import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Prof.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import shoe2 from '../assets/shoe2.jpg'
import shif from '../assets/shif.jpg'

const Prof = (props) => {
  return (
    <div className='maini'>
      <Nav />
      <h1 id="acc">My Account</h1>
      <div className="sep"></div>
      <ul>
        <li className="det">Name : &ensp;John Doe{props.name}</li>
        <li className="det">Age : &ensp;25{props.age}</li>
        <li className="det">Gender : &ensp; Male{props.gen}</li>
        <li className="det">Contact No. : &ensp; +919910236676{props.num}</li>
        <li className="det">Email : &ensp; johndoe@gmail.com{props.em}</li>
        
      </ul>
      <div className="sep"></div>
      <ul className="addre">
        <li>Billing Address <textarea name="Billing" id="te1">VIT CHENNAI KELAMBAKKAM, 600127</textarea></li>
        <li>Delivery Address<textarea name="Delivery" id="te2">VIT CHENNAI KELAMBAKKAM, 600127</textarea></li>
      </ul>
      <div className="sep"></div>
      <h3 className="ord">Order History:</h3>
      <ul>
        <div className="bov">
      <li className="orde">
  <img src="https://crepdogcrew.com/cdn/shop/products/ADIDASYEEZYBOOST350V2BELUGAREFLECTIVE.jpg?v=1744912761&width=1200" alt="shoe" className="order-img" />
  <div className="order-info">
    <p>Nike Dunk Low Retro Red</p>
    <p>UK:8</p>
    <p>Rs.7,999</p>
    <p>Purchased: 10th October 2024</p>
  </div>
</li>
</div>
<div className="bov">
      <li className="orde">
  <img src="https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_d2205fc8-cbbf-45cf-af06-ccf72471b136.png?v=1744912001&width=1000" alt="shoe" className="order-img" />
  <div className="order-info">
    <p>ADIDAS FOAM RUNNERS YEEZY</p>
    <p>UK:8</p>
    <p>Rs.9,999</p>
    <p>Purchased: 16th AUGUST 2024</p>
  </div>
</li>
</div>
<div className="bov">
      <li className="orde">
  <img src=    "https://crepdogcrew.com/cdn/shop/files/Puma_Speedcat_Archive_Haute_Coffee_Frosted_Ivory1.png?v=1744911341&width=500" alt="shoe" className="order-img" />
  <div className="order-info">
    <p>PUMA SPEED LOW RETRO BROWN</p>
    <p>UK:8</p>
    <p>Rs.4,999</p>
    <p>Purchased: 29th January 2025</p>
  </div>
</li>
</div>
<div className="bov">
      <li className="orde">
  <img src="//crepdogcrew.com/cdn/shop/files/Amex-front_F.jpg?v=1743248000&width=1200" alt="shoe" className="order-img" />
  <div className="order-info">
    <p>Armani White Beach Shirt</p>
    <p>Large</p>
    <p>Rs.11,999</p>
    <p>Purchased: 3th December 2024</p>
  </div>
</li>
</div>

      </ul>
  
      <Footer />
    </div>
  )
}

export default Prof
