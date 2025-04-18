import React, { useState } from 'react';
import './ProductA.css';
import shoe2 from "../assets/shoe2.jpg"
import shoe from "../assets/shoe.jpg"
import Nav from "../Nav/Nav"
import Footer from '../Footer/Footer';
import { IoMdAdd } from "react-icons/io";
import { RiSubtractLine } from "react-icons/ri";


const ProductA = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [ count, setCount ] = useState(1);
  const [cartMessage, setCartMessage] = useState('Add to Cart');

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
          <img src={"https://crepdogcrew.com/cdn/shop/files/XOXOBack.jpg?v=1741609716&width=1200"} alt="thumb1" className="thumbnail one" />
          <img src={"https://crepdogcrew.com/cdn/shop/files/XOXOFront.jpg?v=1741609715&width=1200"} alt="thumb2" className="thumbnail" />
        </div>
        <div className="main-image">
          <img src={"https://crepdogcrew.com/cdn/shop/files/XOXOFront.jpg?v=1741609715&width=1200"} alt="product" />
        </div>
      </div>
      <div className="right-column">
        <p className="brand">XOXO</p>
        <h1 className="title">XOXO SHIRT - ROYAL BLUE</h1>
        <p className="price">
          MRP ₹5990 <span className="old-price">MRP ₹8,599</span>
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

export default ProductA;
