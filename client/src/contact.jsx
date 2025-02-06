// File Name: Contact.jsx
// Student’s Name: Muskan Chopra
// Student ID: 301446756
// Date: 1 Feb 2025

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    navigate("/");
  };

  return (
    <section id="contact" className="contact-section w-4/5 mx-auto text-center p-6">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Contact Me</h2>
      
      <div className="text-lg text-gray-700 mb-6">
        <p><strong>Email:</strong> muskanchopra643@gmail.com</p>
        <p><strong>Phone:</strong> +4372976028</p>
        <p><strong>Location:</strong> Brampton, Canada</p>
      </div>

      <div className="contact-form-section bg-gray-100 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Me a Message</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label htmlFor="name" className="block font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange}
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange}
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="form-group mb-4">
            <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange}
              required 
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
