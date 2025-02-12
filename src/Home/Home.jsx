import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import { MagnifyingGlass, User, Basket,InstagramLogo,FacebookLogo } from "@phosphor-icons/react";
import swa from '../assets/swa.jpg'
import Profile from '../Profile/Profile'
import Cart from '../Cart/Cart'
import Sneaker from '../Sneaker/Sneaker'
import Apparel from '../Apparel/Apparel'
import Watches from '../Watches/Watches';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const handleprofile = () =>{
    navigate("/profile");
  }
  const handlecart = () =>{
    navigate("/cart");
  }
  const handlesneak = () =>{
    navigate("/sneaker");
  }
  const handleappa = () =>{
    navigate("/apparel");
  }
  const handlewat = () =>{
    navigate("/watches");
  }

  return (
    <div>
        <nav>
            <ul>
                <li id="rt"><div className="barcode-text">STREET SNEAKS</div></li>
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
                <li onClick={handleprofile}><User size={35} /></li>
                <li onClick={handlecart}><Basket size={35} /></li>
            </ul>
        </nav>
        <div className="gri flex items-center justify-center  bg-gray-100">
        <div className="grid grid-cols-4 gap-13 hu">
      {[1, 2, 3, 4, 5, 6,7,8,9,10,11,12].map((item) => (
        <div key={item} className="bgg">
          Item {item}
        </div>
      ))}
    </div>
        </div>
        <div className="main">
            <div className="selec flex gap-31">
              <div className="boxs onee" onClick={handleappa}><span>A<span className='nu'>PPAREL</span></span></div>
              <div className="boxs twoo" onClick={handlesneak}><span>S<span className='nu'>NEAKERS</span></span></div>
              <div className="boxs thre" onClick={handlewat}><span>W<span className='nu'>ATCHES</span></span></div>
            </div>
            <h1 id="po">S<span className='nuu'>NEAKERS</span></h1>
            <div className="sele flex">
              <div className="sho flex"><div className="imgg"></div><span className='nam'>ADDIDS YEEZY 350 CARBON BELUGA</span> <span className='pri'>From &#8377;15,000.00</span></div>
              <div className="sho flex"><div className="imgg"></div><span className='nam'>ADDIDS YEEZY 350 CARBON BELUGA</span> <span className='pri'>From &#8377;15,000.00</span></div>
              <div className="sho flex"><div className="imgg"></div><span className='nam'>ADDIDS YEEZY 350 CARBON BELUGA</span> <span className='pri'>From &#8377;15,000.00</span></div>
              <div className="sho flex"><div className="imgg"></div><span className='nam'>ADDIDS YEEZY 350 CARBON BELUGA</span> <span className='pri'>From &#8377;15,000.00</span></div>
            </div>
            <button className="view" onClick={handlesneak}>V<span className="nuuu">IEW ALL</span></button>


            <h1 id="po">A<span className='nuu'>PPAREL</span></h1>
            <div className="sele flex">
              <div className="sho flex"><div className="imgg2"></div><span className='nam'>NO FLEX SHIRT -ARMANI WHITE</span> <span className='pri'>From &#8377;4,800.00</span></div>
              <div className="sho flex"><div className="imgg2"></div><span className='nam'>NO FLEX SHIRT -ARMANI WHITE</span> <span className='pri'>From &#8377;4,800.00</span></div>
              <div className="sho flex"><div className="imgg2"></div><span className='nam'>NO FLEX SHIRT -ARMANI WHITE</span> <span className='pri'>From &#8377;4,800.00</span></div>
              <div className="sho flex"><div className="imgg2"></div><span className='nam'>NO FLEX SHIRT -ARMANI WHITE</span> <span className='pri'>From &#8377;4,800.00</span></div>
            </div>
            <button className="view" onClick={handleappa}>V<span className="nuuu">IEW ALL</span></button>


            <h1 id="po">W<span className='nuu'>ATCHES</span></h1>
            <div className="sele flex">
              <div className="sho2 flex"><div className="imgg3"></div><span className='nam'>SWATCH X OMEGA BIOCERAMINC MOONSWATCH MISSION MERCURY</span> <span className='pri'>From &#8377;29,800.00</span></div>
              <div className="sho2 flex"><div className="imgg3"></div><span className='nam'>SWATCH X OMEGA BIOCERAMINC MOONSWATCH MISSION MERCURY</span> <span className='pri'>From &#8377;29,800.00</span></div>
              <div className="sho2 flex"><div className="imgg3"></div><span className='nam'>SWATCH X OMEGA BIOCERAMINC MOONSWATCH MISSION MERCURY</span> <span className='pri'>From &#8377;29,800.00</span></div>
              <div className="sho2 flex"><div className="imgg3"></div><span className='nam'>SWATCH X OMEGA BIOCERAMINC MOONSWATCH MISSION MERCURY</span> <span className='pri'>From &#8377;29,800.00</span></div>
            </div>
            <button className="view" onClick={handlewat}>V<span className="nuuu">IEW ALL</span></button>

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
    </div>
  )
}

export default Home


