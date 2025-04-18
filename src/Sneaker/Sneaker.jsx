import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Sneaker.css';
import { FaFilter } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import shoe2 from '../assets/shoe2.jpg'
import Product from "../Product/Product"
import { useNavigate } from 'react-router-dom';

const Sneaker = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const handless = () =>{
    navigate("/product");
  }

  useEffect(() => {
    
    const sneakerProducts = [
      { id: 1, name: 'ADIDAS SAMBA OG WHITE GUM', price: 9999, image: "//crepdogcrew.com/cdn/shop/files/1_81971b8f-12b6-4f17-9bec-d534d2f82d04.png?v=1744911933&amp;width=1080" },
      { id: 2, name: 'JORDAN 4 RETRO NAVY SUB ', price: 15999, image: "//crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&amp;width=1080" },
      { id: 3, name: 'ON RUNNING CLOUDLILT BLACK IVORY', price: 21999, image: "//crepdogcrew.com/cdn/shop/files/1_401119fa-69e1-4ded-abdb-2e955a732591.png?v=1744911722&amp;width=1080"},
      { id: 4, name: 'NEW BALANCE 9060 BONE SPARROW', price: 11999, image: "//crepdogcrew.com/cdn/shop/files/NewBalance9060BoneSparrow.png?v=1744911372&amp;width=540" },
      { id: 5, name: 'ADIDAS SAMBA OG WHITE GUM', price: 9999, image: "//crepdogcrew.com/cdn/shop/files/1_81971b8f-12b6-4f17-9bec-d534d2f82d04.png?v=1744911933&amp;width=1080" },
      { id: 6, name: 'JORDAN 4 RETRO NAVY SUB ', price: 15999, image: "//crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&amp;width=1080" },
      { id: 7, name: 'ON RUNNING CLOUDLILT BLACK IVORY', price: 21999, image: "//crepdogcrew.com/cdn/shop/files/1_401119fa-69e1-4ded-abdb-2e955a732591.png?v=1744911722&amp;width=1080"},
      { id: 8, name: 'NEW BALANCE 9060 BONE SPARROW', price: 11999, image: "//crepdogcrew.com/cdn/shop/files/NewBalance9060BoneSparrow.png?v=1744911372&amp;width=540" },
      { id: 9, name: 'ADIDAS SAMBA OG WHITE GUM', price: 9999, image: "//crepdogcrew.com/cdn/shop/files/1_81971b8f-12b6-4f17-9bec-d534d2f82d04.png?v=1744911933&amp;width=1080" },
      { id: 10, name: 'JORDAN 4 RETRO NAVY SUB ', price: 15999, image: "//crepdogcrew.com/cdn/shop/files/1_a6c57b52-aef1-4300-afc8-8c65d0542e66.png?v=1744910930&amp;width=1080" },
      { id: 11, name: 'ON RUNNING CLOUDLILT BLACK IVORY', price: 21999, image: "//crepdogcrew.com/cdn/shop/files/1_401119fa-69e1-4ded-abdb-2e955a732591.png?v=1744911722&amp;width=1080"},
      { id: 12, name: 'NEW BALANCE 9060 BONE SPARROW', price: 11999, image: "//crepdogcrew.com/cdn/shop/files/NewBalance9060BoneSparrow.png?v=1744911372&amp;width=540" },
    ];

    setProducts(sneakerProducts);
  }, []);

  return (
    <>
    <div className="imgf">
    </div>
    <div className="category-page">
      <Nav />
      <h2 className="category-heading">Sneakers</h2>
      <div className="lkj">
      <h2 className="category-heading2"> <FaFilter /> <span>Filter</span></h2>
      <h2 className="category-heading2"> <MdSort /><span>Sort</span></h2>
      </div>

      {products.length === 0 ? (
        <p className="no-products">No sneakers available right now.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id} onClick={handless}>
              <img src={product.image} alt={product.name}  className='kju'/>
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <button
                onClick={() => {
                  const cart = JSON.parse(localStorage.getItem('cart')) || [];
                  const exists = cart.find(item => item.id === product.id);
                  if (!exists) {
                    cart.push({ ...product, quantity: 1, size: 'M' });
                    localStorage.setItem('cart', JSON.stringify(cart));
                    alert('Added to cart!');
                  } else {
                    alert('Already in cart');
                  }
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
    </>
  );
};

export default Sneaker;
