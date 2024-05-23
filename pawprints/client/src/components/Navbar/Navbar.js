// Navbar.js
import React from "react";
import "./Navbar.css";

import logo from "../../assets/images/logo.svg";
import wishlistIcon from "../../assets/icons/wishlist.svg";
import checkoutIcon from "../../assets/icons/checkout.svg";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = true; // user authentication
  const urlLocation = window.location.href;

  // Function to handle logout
  const handleLogout = () => {
    // Your logout logic here
    // Redirect to the login page
    navigate("/");
  };

  return (
    <div className="main">
      {/* Use className directly without 'style.' */}
      <img className="logoImg" src={logo} alt="Logo" />
      {/* Your user authentication logic goes here */}
      <div className="links">
        {/* Use className directly without 'style.' */}
        <Link to="/" className="link">
          {/* Use className directly without 'style.' */}
          Home
        </Link>
        <Link to="/petmatching" className="link">
          {/* Use className directly without 'style.' */}
          Pet Matching
        </Link>
        <Link to="/contact" className="link">
          {/* Use className directly without 'style.' */}
          Contact Us
        </Link>
        {/* Conditional rendering based on user authentication */}
        {user ? (
          <Link to="/profile" className="link">
            {/* Use className directly without 'style.' */}
            Profile
          </Link>
        ) : (
          <Link to="/" className="link">
            {/* Use className directly without 'style.' */}
            Login
          </Link>
        )}
        <Link to="/wishlist" className="link">
          {/* Use className directly without 'style.' */}
          <img
            className="icon"
            src={wishlistIcon}
            alt="Wishlist Icon"
            style={{ width: "20px", height: "20px" }}
          />
          {/* Set the width and height here */}
        </Link>

        {/* Icon for Checkout */}
        <Link to="/checkout" className="link">
          {/* Use className directly without 'style.' */}
          <img
            className="icon"
            src={checkoutIcon}
            alt="Checkout Icon"
            style={{ width: "20px", height: "20px" }}
          />
          {/* Set the width and height here */}
        </Link>

        {/* Conditional rendering based on URL location */}
        {urlLocation === "http://localhost:3000/profile" && (
          <Link to="/" className="link" onClick={handleLogout}>
            {/* Use className directly without 'style.' */}
            Logout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
