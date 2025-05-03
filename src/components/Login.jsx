// src/components/Login.jsx
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Welcome Back 💜</h2>
        <p>Please login to your Scriblyn account</p>

        <form className="login-form">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="••••••••" required />

          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
