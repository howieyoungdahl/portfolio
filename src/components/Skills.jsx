// components/Skills.jsx
import React, { useEffect } from 'react';
import './Skills.css';

const Skills = () => {
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

  const skills = [
    {
      category: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C", "Assembly"]
    },
    {
      category: "Frontend Development",
      items: ["React", "Redux", "HTML5", "CSS3", "Semantic UI"]
    },
    {
      category: "Backend Development",
      items: ["Flask", "AWS Lambda", "SQLite", "RESTful APIs"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "Linux", "VS Code", "AWS", "Jest", "Enzyme"]
    },
    {
      category: "Languages",
      items: ["English (Fluent)", "Japanese (Advanced)"]
    }
  ];

  return (
    <div className="skills container">
      <h2 className="section-title fade-in">Skills</h2>
      <div className="skills-content">
        <div className="skills-intro fade-in">
          <p>Through academic studies, professional experience, and personal projects, I've developed a diverse set of technical skills and competencies:</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-category fade-in">
              <h3>{skill.category}</h3>
              <div className="skill-items">
                {skill.items.map((item, i) => (
                  <div key={i} className="skill-item">
                    <span className="skill-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="skills-footer fade-in">
          <p>Currently expanding my knowledge in Machine Learning and Cloud Architecture.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;