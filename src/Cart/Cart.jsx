import React, { useState, useEffect } from 'react';
import './Cart.css';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedItems);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax1 = (total) => {
    const tax1 = total * 0.025;
    return parseFloat(tax1.toFixed(2)); 
  };
  const calculateTax2 = (total) => {
    const tax2 = total * 0.025;
    return parseFloat(tax2.toFixed(2)); 
  };

  const calculateShipping = () => {
    return cartItems.length > 0 ? 200 : 0; 
  };

  const calculateDiscount = (code) => {
    if (code === 'DISCOUNT10') {
      return parseFloat((0.1 * getTotal()).toFixed(2));
    } else if (code === 'SNEAKER5') {
      return parseFloat((0.05 * getTotal()).toFixed(2));
    } else if (code === 'RAJESHM50') {
      return parseFloat((0.50 * getTotal()).toFixed(2));
    } 
    return 0;
  };
  

  const getFinalAmount = (code) => {
    const total = getTotal();
    const tax1 = calculateTax1(total);
    const tax2 = calculateTax2(total);
    const shipping = calculateShipping();
    const tot = total + tax1 + tax2 + shipping - discount;
    return parseFloat(tot.toFixed(2));
  };
  

  const handleCouponChange = (e) => {
    setCouponCode(e.target.value);
  };

  const applyCoupon = () => {
    const newDiscount = calculateDiscount(couponCode);
    setDiscount(newDiscount);
  
    if (couponCode === 'DISCOUNT10' || couponCode === 'SNEAKER5' || couponCode === 'RAJESHM69' || couponCode === 'RAJESHMBHADWA') {
      setCouponMessage("Yay! Coupon applied successfully 🎉");
    } else {
      setCouponMessage("Sorry, the coupon code is invalid ❌");
    }
  };
  const staticCartItems = [
    {
      id: 1,
      name: "JORDAN 4  RETRO NAVY SUB",
      price: 15999,
      quantity: 1,
      size: "UK 10",
      image: "https://crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&width=1000"
    },
    {
      id: 2,
      name: "XOXO SHIRT - ROYAL BLUE",
      price: 5900,
      quantity: 2,
      size: "L",
      image: "https://crepdogcrew.com/cdn/shop/files/XOXOFront.jpg?v=1741609715&width=1200"
    }
  ];
  
  localStorage.setItem('cart', JSON.stringify(staticCartItems));
  
  

  return (
    <div className="cart-page">
      <Nav />
      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty 🛒</p>
      ) : (
        <div className="maa">
          <div className="cart-container">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="imf">
                <img src={item.image} alt={item.name} className="cart-image" /></div>
                <div className="cart-details">
                  <h4>{item.name}</h4>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price}</p>
                  <p>Total: ₹{item.price * item.quantity}</p>
                  <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <div className="detai">
              <h3>Amount Summary:</h3>
              <p>Subtotal: ₹{getTotal()}</p>
              <p>SGST(2.5%): ₹{calculateTax1(getTotal())}</p>
              <p>CGST(2.5%): ₹{calculateTax2(getTotal())}</p>
              <p>Shipping Fee: ₹{calculateShipping()}</p>
              <p>Discount: ₹{discount}</p>
              <hr />
              <h3>Total Amount: ₹{getFinalAmount()}</h3>
            </div>

            <div className="coupon-section">
              <input 
                type="text" 
                value={couponCode} 
                onChange={handleCouponChange} 
                placeholder="Enter Coupon Code" 
              />
              <button onClick={applyCoupon} className="apply-coupon-btn">Apply Coupon</button>
            </div>
            {couponMessage && (
  <p
    className={`coupon-message ${
      couponMessage.toLowerCase().includes('yay') ? 'success' : 'error'
    }`}
  >
    {couponMessage}
  </p>
)}

            

            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
