import React from 'react';
import { Link } from 'react-router-dom';
import './VerticalNav.css';
// import logo from '../path_to_your_logo/logo.png'; // Adjust the path to your actual logo

const VerticalNav = () => {
  return (
    <div className="vertical-nav">
      <div className="logo-container">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
      <Link to="/admin/home">Home</Link>
      <Link to="/admin/approvals">Approvals</Link>
      <Link to="/admin/users">Users</Link>
    </div>
  );
};

export default VerticalNav;
