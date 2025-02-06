// File Name: Home.jsx
// Student’s Name: Muskan Chopra
// Student ID: 301446756
// Date: 1 Feb 2025

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container text-center p-6">
      {/* Logo Image */}
      <img 
        src="/assets/logo.webp"  // Correct path from public/assets
        alt="Logo" 
        className="w-40 h-auto mx-auto mb-6"
         
      />
      
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-6">
        Hi, I'm Muskan Chopra, a passionate software engineer with experience in
        web and mobile app development. Explore my projects, services, and contact me!
      </p>
      
      {/* Link to About page */}
      <Link 
        to="/about" 
        className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300"
      >
        Learn More About Me
      </Link>
    </div>
  );
};

export default Home;
