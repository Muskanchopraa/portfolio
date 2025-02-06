// File Name: Home.jsx
// Student’s Name: Muskan Chopra
// Student ID: 301446756
// Date: 1 Feb 2025
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm Muskan Chopra, a passionate software engineer with experience in
        web and mobile app development. Explore my projects, services, and contact me!
      </p>
      <Link to="/about" className="about-link">Learn More About Me</Link>
    </div>
  );
};

export default Home;
