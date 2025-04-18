import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css'
import { MagnifyingGlass, User, Basket,InstagramLogo,FacebookLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div>
      <div className="foot flex">
              <ul className='firs'>
                <li><h1>KNOW MORE</h1></li>
                <li>ABOUT US</li>
                <li>TRACK ORDER</li>
                <li>STORE LOCATOR</li>
                <li>CONTACT US</li>
                <li>FAQ</li>
                <li>SIZE CHART</li>
                <li><InstagramLogo size={36} /> street_sneaks</li>
                {/* <li id="oo"><FacebookLogo size={36} /></li> */}
              </ul>
              <ul className='secon'>
                <li><h1>FOR RETAIL STORES</h1></li>
                <li>CONTACT: +91 9955442245</li>
              </ul>
              <div className="sig flex">
                Sign up for our Loyalty Program:
                <input type="email" placeholder='Email'/>
                <span id="lk">&copy;2025STREETSNEAKS</span>
              </div>
              <ul className='threee'>
                <li><h1>POLICIES</h1></li>
                <li>PRIVACY</li>
                <li>SHIPPING</li>
                <li>TERMS & CONDITIONS</li>
                <li>RETURN POLICY</li>
                <li>EXCHANGE YOUR ORDER</li>
              </ul>
            </div>
    </div>
  )
}

export default Footer
