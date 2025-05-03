// src/components/HomePage.jsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './HomePage.css';

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="hero-section">
        <h1>Your Space to Share, Listen, and Connect.</h1>
        <p>Post your thoughts, share your journey, connect with others...</p>
        <button>Write a Post</button>
        <button>Explore Communities</button>
      </div>

      <div className="main-feed">
        {/* Add your main feed content here */}
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
