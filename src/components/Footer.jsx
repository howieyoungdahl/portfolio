// components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="code">&lt;</span>
          Howard
          <span className="highlight">Y</span>
          <span className="code">/&gt;</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a href="https://linkedin.com/in/howard-youngdahl/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/howieyoungdahl" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div className="footer-copyright">
          &copy; {currentYear} Howard Youngdahl. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;