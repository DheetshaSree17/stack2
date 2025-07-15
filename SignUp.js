import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormStyles.css';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    countryCode: '+91',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, phone, password, confirmPassword } = formData;

    if (!username || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number!");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordPattern.test(password)) {
      alert("Password must be at least 6 characters, with one uppercase and one lowercase letter.");
      return;
    }

    // ✅ Save user data to localStorage
    localStorage.setItem(email, JSON.stringify({ username, password }));

    alert("Signed Up Successfully!");

    setFormData({
      username: '',
      email: '',
      countryCode: '+91',
      phone: '',
      password: '',
      confirmPassword: ''
    });

    navigate('/login');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <div>
          <label>Username</label>
          <input type="text" name="username" value={formData.username} required onChange={handleChange} />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} required onChange={handleChange} />
        </div>

        <div>
          <label>Phone</label>
          <div className="phone-input">
            <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
            </select>
            <input type="text" name="phone" value={formData.phone} required maxLength="10" onChange={handleChange} />
          </div>
        </div>

        <div>
          <label>Password</label>
          <input type="password" name="password" value={formData.password} required onChange={handleChange} />
        </div>

        <div>
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} required onChange={handleChange} />
        </div>

        <button type="submit">Sign Up</button>
        <div className="link">Already have an account? <a href="/login">Login</a></div>
      </form>
    </div>
  );
};

export default SignUp;