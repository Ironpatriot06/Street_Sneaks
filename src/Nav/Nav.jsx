import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css'
import Profile from "../Profile/Profile"
import Prof from "../Prof/Prof"

import { MagnifyingGlass, User, Basket,InstagramLogo,FacebookLogo } from "@phosphor-icons/react";

const Nav = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [ showComp , setshowComp ] = useState(false);


    
    const handlelogin = () => {
      const token = localStorage.getItem('jwtToken');
      if (token) {
        navigate("/prof");
      } else {
        navigate("/profile");
      }
    };
    
    const navigate = useNavigate();

    const handleprofile = () =>{
        navigate("/profile");
      }
      const handlecart = () =>{
        navigate("/cart");
      }
      const handlehome = () =>{
        navigate('../');
      };

  return (
    <div>
      <nav>
            <ul>
                <li id="rt"><div className="barcode-text" onClick={handlehome}>STREET SNEAKS</div></li>
                <li id="rtt">
            {showSearch ? (
              <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onBlur={() => setShowSearch(false)}
                autoFocus
              />
            ) : (
              <MagnifyingGlass
                size={35}
                onClick={() => setShowSearch(true)}
                className="search-icon"
              />
            )}
          </li>
          <li onClick={handlelogin}><User size={35} /></li>

                
                <li onClick={handlecart}><Basket size={35} /></li>
            </ul>
        </nav> 
    </div>
  )
}

export default Nav
