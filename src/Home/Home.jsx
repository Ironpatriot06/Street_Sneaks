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
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import Product from '../Product/Product'

const Home = () => {


  const navigate = useNavigate();

  const handlesneak = () =>{
    navigate("/sneaker");
  }
  const handleappa = () =>{
    navigate("/apparel");
  }
  const handlewat = () =>{
    navigate("/watches");
  }

  const handlessp = () =>{
    navigate("/product-app");
  }

  const handlesss = () =>{
    navigate("/productC");
  }
  const handless = () =>{
    navigate("/product");
  }
  const handlertt = () =>{
    navigate("/product");
  }

  const imageUrls = [
    "https://crepdogcrew.com/cdn/shop/products/ADIDASYEEZYBOOST350V2BELUGAREFLECTIVE.jpg?v=1744912761&width=1200",
    "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_4239a1cd-7aff-4fcb-867e-b0230b5491a3.png?v=1744911709&width=1000",
    "https://crepdogcrew.com/cdn/shop/files/On_Running_Cloudtilt_LOEWE_Orange.png?v=1744911483&width=1000",
    "https://crepdogcrew.com/cdn/shop/products/AJ1HighLost_Found.jpg?v=1744912576&width=1200",
    "https://crepdogcrew.com/cdn/shop/files/1_6228385e-644a-4b87-a4a4-1fa9c1c1eced.png?v=1744910828&width=1000",
    "https://crepdogcrew.com/cdn/shop/files/1_81971b8f-12b6-4f17-9bec-d534d2f82d04.png?v=1744911933&width=1000",
    "https://crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&width=1000",
    "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_d2205fc8-cbbf-45cf-af06-ccf72471b136.png?v=1744912001&width=1000",
    "https://crepdogcrew.com/cdn/shop/files/Puma_Speedcat_Archive_Haute_Coffee_Frosted_Ivory1.png?v=1744911341&width=500",
    "https://crepdogcrew.com/cdn/shop/products/AirJordan1RetroHighOGTrueBlue.jpg?v=1744912508&width=1200",
    "https://crepdogcrew.com/cdn/shop/files/1_cf6571b1-8948-4468-8848-afb9bb84778f.png?v=1744912284&width=1000",
    "https://crepdogcrew.com/cdn/shop/files/1_6eadab77-8bf3-408a-96ba-bb5699b75fb2.png?v=1744912167&width=1000",
  ];
  
  

  return (
    <div>
      <Nav/>
      <div className="gri flex items-center justify-center bg-gray-100">
  <div className="grid grid-cols-4 gap-6 huu p-6">
    {imageUrls.map((url, index) => (
      <div key={index} className="bgg bg-white rounded shadow hover:shadow-md transition">
        <img
          src={url}
          alt={`Image ${index + 1}`}
          className="w-full h-48 object-cover rounded"
          onClick={handlertt}
        />
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
              <div className="sho flex" onClick={handless}><div className="do imgg"></div><span className='nam'>ON RUNNING CLOUDLILT BLACK IVORY</span> <span className='pri'>From &#8377;21,999.00</span></div>
              <div className="sho flex" onClick={handless}><div className="nk imgg"></div><span className='nam'>JORDAN 4 RETRO NAVY SUB</span> <span className='pri'>From &#8377;15,999.00</span></div>
              <div className="sho flex" onClick={handless}><div className="ad imgg"></div><span className='nam'>ADIDAS SAMBA OG BLACK WHITE GUM</span> <span className='pri'>From &#8377;9,999.00</span></div>
              <div className="sho flex" onClick={handless}><div className="nb imgg"></div><span className='nam'>NEW BALANCE 9060 BONE SPARROW</span> <span className='pri'>From &#8377;11,999.00</span></div>
            </div>
            <button className="view" onClick={handlesneak}>V<span className="nuuu">IEW ALL</span></button>


            <h1 id="po">A<span className='nuu'>PPAREL</span></h1>
            <div className="sele flex">
              <div className="sho flex" onClick={handlessp}><div className="imgg2 hu "></div><span className='nam'>NO FLEX SHIRT -ARMANI WHITE</span> <span className='pri'>From &#8377;4,800.00</span></div>
              <div className="sho flex" onClick={handlessp}><div className="imgg2 imgg22 on"></div><span className='nam'>Antidote shirt - Baby pink</span> <span className='pri'>From &#8377;6,900.00</span></div>
              <div className="sho flex" onClick={handlessp}><div className="imgg2 db"></div><span className='nam'>MAKE-OUT SHIRT</span> <span className='pri'>From &#8377;7.099.00</span></div>
              <div className="sho flex" onClick={handlessp}><div className="imgg2 sp"></div><span className='nam'>XOXO SHIRT - ROYAL BLUE</span> <span className='pri'>From &#8377;5,900.00</span></div>
            </div>
            <button className="view" onClick={handleappa}>V<span className="nuuu">IEW ALL</span></button>


            <h1 id="po">W<span className='nuu'>ATCHES</span></h1>
            <div className="sele flex">
              <div className="sho2 flex" onClick={handlesss}><div className="imgg3 gg"></div><span className='nam'>CASIO MANGA EDITION CLASSIC BLUE</span> <span className='pri'>From &#8377;30,000.00</span></div>
              <div className="sho2 flex" onClick={handlesss}><div className="imgg3 bt"></div><span className='nam'>BAPE TYPE 1 CRYSTAL STONE</span> <span className='pri'>From &#8377;80,00.00</span></div>
              <div className="sho2 flex" onClick={handlesss}><div className="imgg3 gg2"></div><span className='nam'>CASIO G1523 GA-2100-9A9DR G-SHOCK</span> <span className='pri'>From &#8377;9,800.00</span></div>
              <div className="sho2 flex" onClick={handlesss}><div className="imgg3 bt2"></div><span className='nam'>BAPE Type 1 BAPEX Watch Black/Red</span> <span className='pri'>From &#8377;55,000.00</span></div>
            </div>
            <button className="view" onClick={handlewat}>V<span className="nuuu">IEW ALL</span></button>
            <Footer />
        </div>
    </div>
  )
}

export default Home


