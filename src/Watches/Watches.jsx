import React, { useEffect, useState } from 'react';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './Watches.css';
import { FaFilter } from "react-icons/fa";
import { MdSort } from "react-icons/md";
import wat from '../assets/wat.jpg'
import ProductC from "../ProductC/ProductC"
import { useNavigate } from 'react-router-dom';

const Watches = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const handless = () =>{
    navigate("/productC");
  }

  useEffect(() => {
    
    const sneakerProducts = [
      { id: 1, name: 'CASIO MANGA EDITION CLASSIC BLUE', price: 29999, image: "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_918fa7af-6ee5-4d96-8610-670791f128b3.png?v=1724664290&width=1000" },
      { id: 2, name: 'BAPE TYPE 1 CRYSTAL STONE', price: 8000, image:"https://crepdogcrew.com/cdn/shop/files/BAPEType1CrystalStoneBAPEXWatch.png?v=1740997409&width=1000" },
      { id: 3, name: 'CASIO G1523 GA-2100-9A9DR G-SHOCK', price: 9999, image: "https://crepdogcrew.com/cdn/shop/files/CDCEDITSBYAHMAR_20.png?v=1735287731&width=1000" },
      { id: 4, name: 'BAPE Type 1 BAPEX Watch Black/Red', price: 55999, image: "https://crepdogcrew.com/cdn/shop/files/BAPEType1BAPEXWatchred.png?v=1740996552&width=1000" },
      { id: 5, name: 'CASIO MANGA EDITION CLASSIC BLUE', price: 29999, image: "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_918fa7af-6ee5-4d96-8610-670791f128b3.png?v=1724664290&width=1000" },
      { id: 6, name: 'BAPE TYPE 1 CRYSTAL STONE', price: 8000, image:"https://crepdogcrew.com/cdn/shop/files/BAPEType1CrystalStoneBAPEXWatch.png?v=1740997409&width=1000" },
      { id: 7, name: 'CASIO G1523 GA-2100-9A9DR G-SHOCK', price: 9999, image: "https://crepdogcrew.com/cdn/shop/files/CDCEDITSBYAHMAR_20.png?v=1735287731&width=1000" },
      { id: 8, name: 'BAPE Type 1 BAPEX Watch Black/Red', price: 55999, image: "https://crepdogcrew.com/cdn/shop/files/BAPEType1BAPEXWatchred.png?v=1740996552&width=1000" },
      { id: 9, name: 'CASIO MANGA EDITION CLASSIC BLUE', price: 29999, image: "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_918fa7af-6ee5-4d96-8610-670791f128b3.png?v=1724664290&width=1000" },
      { id: 10, name: 'BAPE TYPE 1 CRYSTAL STONE', price: 8000, image:"https://crepdogcrew.com/cdn/shop/files/BAPEType1CrystalStoneBAPEXWatch.png?v=1740997409&width=1000" },
      { id: 11, name: 'CASIO G1523 GA-2100-9A9DR G-SHOCK', price: 9999, image: "https://crepdogcrew.com/cdn/shop/files/CDCEDITSBYAHMAR_20.png?v=1735287731&width=1000" },
      { id: 12, name: 'BAPE Type 1 BAPEX Watch Black/Red', price: 55999, image: "https://crepdogcrew.com/cdn/shop/files/BAPEType1BAPEXWatchred.png?v=1740996552&width=1000" },
    ];

    setProducts(sneakerProducts);
  }, []);

  return (
    <>
    <div className="imgf3">
    </div>
    <div className="category-page">
      <Nav />
      <h2 className="category-heading">Watches</h2>
      <div className="lkj">
      <h2 className="category-heading2"> <FaFilter /> <span>Filter</span></h2>
      <h2 className="category-heading2"> <MdSort /><span>Sort</span></h2>
      </div>

      {products.length === 0 ? (
        <p className="no-products">No watches available right now.</p>
      ) : (
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id} onClick={handless}>
              <img src={product.image} alt={product.name} />
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

export default Watches;
