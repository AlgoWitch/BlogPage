import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Scriblyn</div>
      
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
        <NavLink to="/feed" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Feed</NavLink>
        <NavLink to="/communities" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Communities</NavLink>
        <NavLink to="/messages" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Messages</NavLink>
        <NavLink to="/resources" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Resources</NavLink>
        <NavLink to="/profile" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Profile</NavLink>
      </div>

      <div className="navbar-auth">
        <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Login</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Signup</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
