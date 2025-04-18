import React from 'react'
import './Sign.css'
import { Navigate, useNavigate } from 'react-router-dom'
import Profile from "../Profile/Profile"
import Prof from "../Prof/Prof"

const Sign = () => {

    const navigate = useNavigate();

  
  const handlesignn = () =>{
    navigate('/profile');
  };

  const handlecreate = () =>{
    navigate('/prof')
    localStorage.setItem('jwtToken', "Tokennhello");
  };

  return (
    <div className="signup-container">
  <form className="signup-form">
    
    
    <label htmlFor="name">Name</label>
    <input type="text" id="name" placeholder="Enter your name" required />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" placeholder="Enter your email" required />

    <label htmlFor="password">Password</label>
    <input type="password" id="password" placeholder="Enter your password" required />

    <button type="submit" onClick={handlecreate}>Create Account</button>
    <p className="signin-link" onClick={handlesignn}>Already have an account? <a href="#">Sign In</a></p>
  </form>
</div>

  )
}

export default Sign
