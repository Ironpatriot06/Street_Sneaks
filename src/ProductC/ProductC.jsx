import React, { useState } from 'react';
import './ProductC.css';
import shoe2 from "../assets/shoe2.jpg"
import shoe from "../assets/shoe.jpg"
import Nav from "../Nav/Nav"
import Footer from '../Footer/Footer';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";


const ProductA = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [ count, setCount ] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1);
  };
  

  const sizes = [
    'XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'
  ];
  

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <>
    <div className="product-page">
      <Nav />
      <div className="left-column">
        <div className="thumbnail-list">
          <img src={"https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar02_6a0e1d53-fd20-42a4-934a-55fc138d9fb2.png?v=1722076414&width=1000"} alt="thumb1" className="thumbnail one" />
          <img src={"https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_918fa7af-6ee5-4d96-8610-670791f128b3.png?v=1724664290&width=1000" } alt="thumb2" className="thumbnail" />
        </div>
        <div className="main-image">
          <img src={"https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_918fa7af-6ee5-4d96-8610-670791f128b3.png?v=1724664290&width=1000" } alt="product" />
        </div>
      </div>
      <div className="right-column">
        <p className="brand">CASIO - GSHOCK</p>
        <h1 className="title">CASIO MANGA EDITION CLASSIC BLUE</h1>
        <p className="price">
          MRP ₹29999 <span className="old-price">MRP ₹40,999</span>
        </p>
        <p className="tax">Tax included.</p>

        <p className="label">Color: BLUE</p>
        <div className="color-box">BLUE</div>

        <p className="label">ONE SIZE</p>
        <div className="size-grid">
         
        </div>
        
          <button className="add-ca">Add to Cart</button>
          <button className="add-ca">Buy Now</button>

          <div className="counter">
          <span id="kol"><RiSubtractLine onClick={decrement}/></span><span>{count}</span><span id="lokl"><IoMdAdd  onClick={increment}/></span>
          </div>

          <span id="ou">Delivery Timeline: 3-4 business days</span>
      </div>
    </div>
      <Footer />
      </>
  );
};

export default ProductA;
