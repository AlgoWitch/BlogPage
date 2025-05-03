import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-form">
        <h2>Join Scriblyn and start sharing ✨</h2>
        <p className="signup-subtext">Create an account to connect with the community.</p>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
