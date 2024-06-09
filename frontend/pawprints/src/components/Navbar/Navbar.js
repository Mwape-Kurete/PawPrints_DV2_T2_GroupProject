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

    // logout
    const handleLogout = () => {

        localStorage.removeItem('user');

        navigate("/");
    };

    return (
        <div className="main">
            <img className="logoImg" src={logo} alt="Logo" />
            <div className="links">
                <Link to="/home" className="link">Home</Link>
                <Link to="/upload-pet" className="link">Upload a Pet</Link>
                <Link to="/all-pets" className="link">
                    Pet Matching
                    </Link>

                {user ? (
                <>
                    <Link to="/profile" className="link">Profile</Link>
                    <button onClick={handleLogout} className="link logout-button">Logout</button>
                </>
                ) : (
                <Link to="/" className="link">Login</Link>
                )}
                
            </div>
        </div>
    );
};

export default Navbar;
