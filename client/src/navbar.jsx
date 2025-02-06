// File Name: Navbar.jsx
// Student’s Name: Muskan Chopra
// Student ID: 301446756
// Date: 1 Feb 2025
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/logo.webp';

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;