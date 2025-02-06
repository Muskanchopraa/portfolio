// File Name: Projects.jsx
// Student’s Name: Muskan Chopra
// Student ID: 301446756
// Date: 1 Feb 2025

import React from 'react';
import reactImg from './assets/react1.jpg';
import androidImg from './assets/android.webp';
import pythonImg from './assets/python.webp';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project-list">
        <div className="project">
          <img src={reactImg} alt="Project 1" width="300" height="200" />
          <h3>Project 1: React Portfolio</h3>
          <p>Developed a personal portfolio using React and deployed on Netlify.</p>
        </div>
        <div className="project">
          <img src={androidImg} alt="Project 2" width="300" height="200" />
          <h3>Project 2: Android App</h3>
          <p>Built an Android application using Kotlin and Jetpack Compose.</p>
        </div>
        <div className="project">
          <img src={pythonImg} alt="Project 3" width="300" height="200" />
          <h3>Project 3: Python Automation</h3>
          <p>Automated data processing tasks using Python and Pandas.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
