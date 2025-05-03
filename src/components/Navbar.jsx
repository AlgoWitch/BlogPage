// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Scriblyn</div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/communities">Communities</Link>
        <Link to="/messages">Messages</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/profile">Profile</Link>
      </div>

      <div className="auth-buttons">
        <Link to="/login"><button className="login-btn">Login</button></Link>
        <Link to="/signup"><button className="signup-btn">Signup</button></Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
