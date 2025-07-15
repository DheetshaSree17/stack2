import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';
const LoginReset = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    const userData = JSON.parse(localStorage.getItem(email));

    if (userData) {
      if (userData.password === password) {
        alert("Login Successful!");
        localStorage.setItem("isLoggedIn", "true");
        navigate('/home');
      } else {
        alert("Invalid password!");
      }
    } else {
      alert("Email not found. Please sign up first.");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit">Login</button>
        <div className="link">Don't have an account? <a href="/signup">Sign Up</a></div>
      </form>
    </div>
  );
};

export default LoginReset;
