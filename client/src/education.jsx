//File Name: education.jsx
//Student’s Name: Muskan Chopra
//Student ID: 301446756
//Date: 1 Feb 2025
import React from 'react';

export default function Education() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f4f4f9', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', width: '60%', margin: 'auto' }}>
      <h2>Education & Qualifications</h2>

      <div style={{ marginBottom: '20px' }}>
        <h3>Bachelor of Science in Computer Science</h3>
        <p><strong>Dav collge</strong> - Jalandhar, India</p>
        <p><em>Graduation Year:</em> 2023</p>
        <ul>
          <li>Specialization in Data Structures and Algorithms</li>
          <li>Coursework in Software Engineering, Mobile App Development, Networking</li>
          <li>Projects: Developed Android applications, Networking scripts in Python</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Post Graduate advanced diploma</h3>
        <p><strong>Centennial College</strong> - Scarborough, Canada</p>
        <p><em>Graduation Year:</em> 2025</p>
        <ul>
          <li>Focused on Science and Mathematics</li>
          <li>Received the Best Student Award in Computer Science</li>
        </ul>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Certifications</h3>
        <ul>
          <li>Certified Java Programmer (Oracle)</li>
          <li>Google IT Support Professional Certificate</li>
          <li>Advanced Python Programming (Coursera)</li>
        </ul>
      </div>
    </div>
  );
}
