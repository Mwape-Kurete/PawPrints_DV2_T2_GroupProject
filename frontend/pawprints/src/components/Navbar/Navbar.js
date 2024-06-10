import React from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo.svg';
import wishlistIcon from '../../assets/icons/wishlist.svg';
import checkoutIcon from '../../assets/icons/checkout.svg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const user = true; // user authentication
    const urlLocation = window.location.href;

    // Function for logout
    const handleLogout = () => {
        // Back to the login page
        navigate('/');
    };

    return (
        <div className="main">
            <img className="logoImg" src={logo} alt="Logo" />
            <div className="links">
                <Link to="/home" className="link">Home</Link>
                <Link to="/upload-pet" className="link">Upload a Pet</Link>
                <Link to="/contact" className="link">Contact Us</Link>
                {user ? (
                    <Link to="/profile" className="link">Profile</Link>
                ) : (
                    <Link to="/" className="link">Login</Link>
                )}
                <Link to="/wishlist" className="link">
                    <img className="icon" src={wishlistIcon} alt="Wishlist Icon" style={{ width: '20px', height: '20px' }} />
                </Link>
                <Link to="/checkout" className="link">
                    <img className="icon" src={checkoutIcon} alt="Checkout Icon" style={{ width: '20px', height: '20px' }} />
                </Link>
                
            </div>
        </div>
    );
};

export default Navbar;
