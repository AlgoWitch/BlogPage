// src/components/SmallerComponents/Navbar.jsx
import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate('/');
  };

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
        {!isLoggedIn ? (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
            <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Signup</NavLink>
          </>
        ) : (
          <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
