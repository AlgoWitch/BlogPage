// HomePage.jsx (in src/components)
import React, { useState } from 'react';
import './HomePage.css';

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">Scriblyn</div>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li>Home</li>
          <li>Feed</li>
          <li>Communities</li>
          <li>Messages</li>
          <li>Resources</li>
          <li>Profile</li>
        </ul>

        <div className="auth-links">
          {!isLoggedIn ? (
            <>
              <button onClick={handleLoginToggle} className="auth-btn">Login</button>
              <button onClick={handleLoginToggle} className="auth-btn signup">Signup</button>
            </>
          ) : (
            <button onClick={handleLoginToggle} className="auth-btn logout">Logout</button>
          )}
        </div>
      </nav>

      {/* Footer */}
      <footer className="footer">
        <ul>
          <li>About</li>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms</li>
        </ul>
        <div className="socials">
          Follow us → [IG] [LinkedIn]
        </div>
      </footer>
    </div>
  );
}
