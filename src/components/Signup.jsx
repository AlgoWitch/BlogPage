// src/components/Signup.jsx
import React from 'react';
import './Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Join Scriblyn 💫</h2>
        <p>Create your account to start sharing your story</p>

        <form className="signup-form">
          <label>Name</label>
          <input type="text" placeholder="Your name" required />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" required />

          <label>Password</label>
          <input type="password" placeholder="••••••••" required />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
