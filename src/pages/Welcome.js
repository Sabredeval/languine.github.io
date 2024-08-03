// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to Languine</h1>
      <p>Your personal language learning companion</p>
      <div className="buttons">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    </div>
  );
}

export default Welcome;
