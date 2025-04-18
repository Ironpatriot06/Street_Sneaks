import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Apparel.css';
import { FaFilter } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import shif from '../assets/shif.jpg'
import { useNavigate } from 'react-router-dom';
import ProductApp from "../ProductApp/ProductApp"

const Apparel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handlesss = () =>{
    navigate("/product-app");
  }

  useEffect(() => {
    
    const sneakerProducts = [
      { id: 1, name: 'NO FLEX SHIRT -ARMANI WHITE', price: 6900, image: "//crepdogcrew.com/cdn/shop/files/Amex-front_F.jpg?v=1743248000&width=1200" },
      { id: 2, name: 'ANTIDOTE SHIRT - BABY PINK', price: 4800, image: "//crepdogcrew.com/cdn/shop/files/antidote_f.jpg?v=1743179109&amp;width=1920" },
      { id: 3, name: 'MAKE-OUT SHIRT', price: 7099, image: "//crepdogcrew.com/cdn/shop/files/image.jpg?v=1744394413&width=1200"},
      { id: 4, name: 'XOXO SHIRT - ROYAL BLUE', price: 5900, image: "https://crepdogcrew.com/cdn/shop/files/XOXOFront.jpg?v=1741609715&width=1200" },
      { id: 5, name: 'NO FLEX SHIRT -ARMANI WHITE', price: 6900, image: "//crepdogcrew.com/cdn/shop/files/Amex-front_F.jpg?v=1743248000&width=1200" },
      { id: 6, name: 'ANTIDOTE SHIRT - BABY PINK', price: 4800, image: "//crepdogcrew.com/cdn/shop/files/antidote_f.jpg?v=1743179109&amp;width=1920" },
      { id: 7, name: 'MAKE-OUT SHIRT', price: 7099, image: "//crepdogcrew.com/cdn/shop/files/image.jpg?v=1744394413&width=1200"},
      { id: 8, name: 'XOXO SHIRT - ROYAL BLUE', price: 5900, image: "https://crepdogcrew.com/cdn/shop/files/XOXOFront.jpg?v=1741609715&width=1200" },
      { id: 9, name: 'NO FLEX SHIRT -ARMANI WHITE', price: 6900, image: "//crepdogcrew.com/cdn/shop/files/Amex-front_F.jpg?v=1743248000&width=1200" },
      { id: 10, name: 'ANTIDOTE SHIRT - BABY PINK', price: 4800, image: "//crepdogcrew.com/cdn/shop/files/antidote_f.jpg?v=1743179109&amp;width=1920" },
      { id:11, name: 'MAKE-OUT SHIRT', price: 7099, image: "//crepdogcrew.com/cdn/shop/files/image.jpg?v=1744394413&width=1200"},
      { id: 12, name: 'XOXO SHIRT - ROYAL BLUE', price: 5900, image: "https://crepdogcrew.com/cdn/shop/files/XOXOFront.jpg?v=1741609715&width=1200" },
      
    ];

    setProducts(sneakerProducts);
  }, []);

  return (
    <>
    <div className="imgf2">
    </div>
    <div className="category-page">
      <Nav />
      <h2 className="category-heading">Apparel</h2>
      <div className="lkj">
      <h2 className="category-heading2"> <FaFilter /> <span>Filter</span></h2>
      <h2 className="category-heading2"> <MdSort /><span>Sort</span></h2>
      </div>

      {products.length === 0 ? (
        <p className="no-products">No sneakers available right now.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id} onClick={handlesss}>
              <img src={product.image } alt={product.name} />
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

export default Apparel;
