import React from 'react';
import myImg from "./assets/mypic.jpeg";
import muskan from "./assets/muskan.pdf"

export default function About() {
  return (
    <div className="w-4/5 mx-auto text-center p-6">
      <h2 className="text-4xl font-bold text-purple-700 mb-6">Muskan Chopra</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <img 
         style={{ width: '500px', height: 'auto' }}  // Inline style to set width and maintain aspect ratio
         className="mx-auto mb-6" 
          src={myImg} 
          alt="Muskan Chopra" 
        />
        
        <div>
          <a 
            className="bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-800 transition-all duration-300" 
            target="_blank" 
            href={muskan} 
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </div>
      </div>
      
      <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
        My name is Muskan, and I am currently studying Computer Science and Engineering (CSE). As a budding web developer, I am planning to create an e-commerce website. I prefer utilizing React for this project due to its component-based architecture, large community, JSX for easy rendering, and excellent developer tools.
        <br /><br />
        I believe React.js, virtual DOM, efficient rendering, and reusable components will enable me to build a high-performance, scalable, and user-friendly e-commerce platform. I am excited to learn and grow through this project, gaining valuable experience in front-end development, e-commerce concepts, and project management.
      </p>
    </div>
  );
}
