// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="container navbar-container">
        <a href="#home" className="logo">
          <span className="code">&lt;</span>
          Howard
          <span className="highlight">Y</span>
          <span className="code">/&gt;</span>
        </a>
        <div className={`navbar-links ${mobileNav ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileNav(false)}>Home</a>
          <a href="#about" onClick={() => setMobileNav(false)}>About</a>
          <a href="#projects" onClick={() => setMobileNav(false)}>Projects</a>
          <a href="#skills" onClick={() => setMobileNav(false)}>Skills</a>
          <a href="#contact" onClick={() => setMobileNav(false)}>Contact</a>
        </div>
        <div 
          className={`mobile-nav-toggle ${mobileNav ? 'active' : ''}`}
          onClick={() => setMobileNav(!mobileNav)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;