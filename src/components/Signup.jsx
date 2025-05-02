import React from 'react';
import './Auth.css';

export default function Signup() {
  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form className="auth-form">
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
