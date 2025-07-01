// src/components/SmallerComponents/Login.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '.././firebase'; // make sure the path is correct
import { useNavigate } from 'react-router-dom';
import './Login.css'; // CSS file to style this page

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // redirect to homepage after login
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>
        {error && <p className="login-error">{error}</p>}
      </form>
      <p className="login-footer">
        Don't have an account?{' '}
        <span className="login-link" onClick={() => navigate('/signup')}>
          Sign up
        </span>
      </p>
    </div>
  );
};

export default Login;
