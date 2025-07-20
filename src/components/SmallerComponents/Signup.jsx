// src/components/SmallerComponents/Signup.jsx
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db} from '.././firebase';
import { useNavigate } from 'react-router-dom';
import {setDoc,doc} from "firebase/firestore";
import {toast} from "react-toastify";
import './Signup.css'; 

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/'); 
      const user = auth.currentUser;
      // console.log(user)
      if(user){
        await setDoc(doc(db,'Users',user.uid),{
          email: user.email,
          firstName: firstName,
          lastName: lastName,

        })
      }
      // console.log("User Registered Successfully!!")
      toast.success("User Registered Successfully!!",{
        position: "top-center"
      })
    } catch (err) {
      setError('Could not create account. Try again.');
      console.log(err.message)
      toast.success(err.message,{
        position: "bottom-center"
      })
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSignup} className="signup-form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email Address"
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
        <button type="submit" className="signup-button">Sign Up</button>
        {error && <p className="signup-error">{error}</p>}
      </form>
      <p className="signup-footer">
        Already have an account?{' '}
        <span onClick={() => navigate('/login')} className="signup-link">Login</span>
      </p>
    </div>
  );
};

export default Signup;
