import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-form">
        <h2>Welcome back to Scriblyn 💜</h2>
        <p className="login-subtext">Log in to share your thoughts and connect.</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Login</button>
      </div>
    </div>
  );
};

export default Login;
