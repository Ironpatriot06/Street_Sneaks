import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Profile.css'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Sign from "../Sign/Sign"


const Profile = () => {
  const navigate = useNavigate();

  
  const handlesign = () =>{
    navigate('/sign');
  };
  const handlesub = () =>{
    navigate('/prof');
    localStorage.setItem('jwtToken', "Tokennhello");
  };

  return (
    <div className='maina'>
    <div className='maine'>
      <Nav />
      <div className="containerr">
        <h2>Login</h2>
        <label htmlFor="email" id="E">Email:</label>
        <input type="email" name="email" className="email" />
        <label htmlFor="pass" id="P">Password:</label>
        <input type="password" name="pass" id="pass" />
        <button type='submit' id="L" onClick={handlesub}>Sumbit</button>
        <span id="O">Not a member? <button className='n' onClick={handlesign}>Sign up</button></span> 
      </div>
      </div>
      <Footer />
    </div>
  )
}

export default Profile
