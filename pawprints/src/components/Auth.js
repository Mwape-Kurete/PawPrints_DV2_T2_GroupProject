import React, { useState } from 'react';
import './Auth.css';
// import logo from '../path_to_your_logo/logo.png'; // Adjust the path to your actual logo

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    keepLoggedIn: false,
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h1>Welcome Back</h1>
        <p>Welcome Back! Please enter your login details</p>
        <div className="form-toggle">
          <span
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </span>
          <span
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Register
          </span>
        </div>
        <form onSubmit={handleSubmit} className="auth-form">
          {isLogin ? (
            <>
              <label>
                First Name <span>*</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <div className="form-options">
                <label>
                  <input
                    type="checkbox"
                    name="keepLoggedIn"
                    checked={formData.keepLoggedIn}
                    onChange={handleChange}
                  />
                  Keep me logged in
                </label>
                <a href="/forgot-password">Forgot Password</a>
              </div>
            </>
          ) : (
            <>
              <label>
                First Name <span>*</span>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Last Name
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Confirm Password
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </label>
              <label className="agree-terms">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                I’ve read and I agree with your Terms & Conditions
              </label>
            </>
          )}
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
