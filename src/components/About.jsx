// components/About.jsx
import React, { useEffect } from 'react';
import './About.css';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="about container">
      <h2 className="section-title fade-in">About Me</h2>
      <div className="about-content">
        <div className="about-image fade-in">
          <div className="image-frame">
            <img src="/images/about.jpeg" alt="Howard Youngdahl" />
          </div>
        </div>
        <div className="about-text">
          <p className="fade-in">
            Hey, I'm Howie or Howard, a Computer Science and Japanese major at Grinnell College with a passion for beautiful software. My journey in coding began during my undergraduate studies, where I discovered my love for solving complex problems with code.
          </p>
          <p className="fade-in">
            During my time at Cydoc LLC, I honed my skills in fullstack development, working with technologies like React, TypeScript, Python, and AWS. I also had the incredible opportunity to study abroad at Waseda University in Tokyo, enhancing my Japanese language skills.
          </p>
          <p className="fade-in">
            I'm particularly interested in creating applications that address real-world challenges while providing seamless user experiences. My background in both Computer Science and Japanese gives me a unique perspective on problem-solving and cross-cultural communication.
          </p>
          <div className="about-details fade-in">
            <div className="detail">
              <span className="label">Name:</span>
              <span className="value">Howard Youngdahl</span>
            </div>
            <div className="detail">
              <span className="label">Email:</span>
              <span className="value">hosidyoungdahl@gmail.com</span>
            </div>
            <div className="detail">
              <span className="label">Education:</span>
              <span className="value">BA in Computer Science & Japanese, Grinnell College</span>
            </div>
          </div>
          <div className="about-links fade-in">
            <a href="https://linkedin.com/in/howard-youngdahl/" target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
            <a href="https://github.com/howieyoungdahl" target="_blank" rel="noopener noreferrer" className="btn btn-outline">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;