import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-logo">Scriblyn</div>

      <button className="navbar-toggle" onClick={toggleMenu}>☰</button>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/feed" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Feed</NavLink>
        <NavLink to="/communities" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Communities</NavLink>
        <NavLink to="/messages" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Messages</NavLink>
        <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Resources</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Profile</NavLink>
      </div>

      <div className={`navbar-auth ${menuOpen ? 'active' : ''}`}>
        <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Signup</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
