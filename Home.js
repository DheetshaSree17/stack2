import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate('/login');
  };

  const handleAddToCart = (item) => {
    alert(`${item} added to cart!`);
  };

  return (
    <div className="home-container">
      <h1 className="page-title">🛒 Product Page</h1>

      <h2 className="section-title">👕 Men's Outfit</h2>
      <div className="product-row">
        <div className="product-card">
          <img src="Men3.jpg" alt="Men Shirt" />
          <p>Casual Shirt</p>
          <button onClick={() => handleAddToCart("Casual Shirt")}>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="men4.jpg" alt="Men Jacket" />
          <p>Leather Jacket</p>
          <button onClick={() => handleAddToCart("Leather Jacket")}>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="men5.jpg" alt="Men Suit" />
          <p>Formal Suit</p>
          <button onClick={() => handleAddToCart("Formal Suit")}>Add to Cart</button>
        </div>
      </div>

      <h2 className="section-title">👗 Women's Outfit</h2>
      <div className="product-row">
        <div className="product-card">
          <img src="w1.jpg" alt="Women Dress" />
          <p>Evening Dress</p>
          <button onClick={() => handleAddToCart("Evening Dress")}>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="w2.jpg" alt="Women Saree" />
          <p>Traditional Saree</p>
          <button onClick={() => handleAddToCart("Traditional Saree")}>Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="w3.jpg" alt="Handbag" />
          <p>Handbag</p>
          <button onClick={() => handleAddToCart("Handbag")}>Add to Cart</button>
        </div>
      </div>

      <button type="button" onClick={handleLogout} className="logout-button">Logout</button>
    </div>
  );
};

export default Home;
