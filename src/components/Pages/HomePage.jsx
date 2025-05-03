// src/components/HomePage.jsx
import React from 'react';
import Navbar from '../SmallerComponents/Navbar';
import Footer from '../SmallerComponents/Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div>

      <div className="hero-section">
        <h1>Your Space to Share, Listen, and Connect.</h1>
        <p>Post your thoughts, share your journey, connect with others...</p>
        <button>Write a Post</button>
        <button>Explore Communities</button>
      </div>

      <div className="main-feed">
        {/* Add your main feed content here */}
      </div>


    </div>
  );
}

export default HomePage;
