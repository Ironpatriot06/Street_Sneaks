import React, { useState } from 'react';
import './Product.css';
import shoe2 from "../assets/shoe2.jpg"
import shoe from "../assets/shoe.jpg"
import Nav from "../Nav/Nav"
import Footer from '../Footer/Footer';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";


const Product = () => {
  const [selectedSize, setSelectedSize] = useState('UK 3');
  const [cartMessage, setCartMessage] = useState('Add to Cart');

  const [ count, setCount ] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1);
  };
  

  const sizes = [
    'UK 3', 'UK 3.5', 'UK 4', 'UK 4.5', 'UK 5', 'UK 5.5',
    'UK 6', 'UK 6.5', 'UK 7', 'UK 7.5', 'UK 8', 'UK 8.5',
    'UK 9', 'UK 9.5', 'UK 10', 'UK 10.5', 'UK 11'
  ];

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const product = {
    id: 1001,
    name: "JORDAN 4 RETRO NAVY SUB",
    price: 15999,
    quantity: count,
    size: selectedSize,
    image: "https://crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&width=1080"
  };

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyInCart = cart.some(item => item.id === product.id && item.size === product.size);
  
    if (alreadyInCart) {
      setCartMessage('Already in Cart');
    } else {
      cart.push(product);
      localStorage.setItem('cart', JSON.stringify(cart));
      setCartMessage('Added to Cart');
    }
  };
  

  return (
    <>
    <div className="product-page">
      <Nav />
      <div className="left-column">
        <div className="thumbnail-list">
          <img src={"//crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&amp;width=1080"} alt="thumb1" className="thumbnail one" />
          <img src={"//crepdogcrew.com/cdn/shop/files/2_6de68890-d817-468d-a18a-6d81abade749.png?v=1744910930&amp;width=1080"} alt="thumb2" className="thumbnail" />
        </div>
        <div className="main-image">
          <img src={"//crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&amp;width=1080"} alt="product" />
        </div>
      </div>
      <div className="right-column">
        <p className="brand">JORDAN</p>
        <h1 className="title">JORDAN 4 RETRO NAVY SUB</h1>
        <p className="price">
          MRP ₹15,999 <span className="old-price">MRP ₹18,000</span>
        </p>
        <p className="tax">Tax included.</p>

        <p className="label">Color: WHITE</p>
        <div className="color-box">WHITE</div>

        <p className="label">Size: {selectedSize}</p>
        <div className="size-grid">
          {sizes.map((size) => (
            <button
              key={size}
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
        
        <button className="add-ca" onClick={addToCart}>{cartMessage}</button>

          
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

export default Product;
