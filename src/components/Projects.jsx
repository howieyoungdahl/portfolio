// components/Projects.jsx
import React, { useEffect, useState } from 'react';
import './Projects.css';
import ImageModal from './ImageModal';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState({
    src: '',
    alt: ''
  });

  const langaugeImage = process.env.PUBLIC_URL + '/images/langaugeexample.jpg'

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const openImageModal = (src, alt) => {
    setModalImage({ src, alt });
    setModalOpen(true);
  };

  const closeImageModal = () => {
    setModalOpen(false);
  };

  const projects = [
    {
      id: 1,
      name: "LanGauge",
      description: "A language learning platform tailored for Japanese learners, focusing on interactive language practice that adapts to the user's proficiency level.",
      details: [
        "Built a custom API backend using Flask and a lightweight SQLite database to enable fast queries for Japanese words and their definitions.",
        "Customized a word tokenizer API in Python for automatic tagging of Japanese vocabulary and corresponding English definitions to aid user comprehension on the frontend.",
        "Integrated OpenAI API to facilitate language practice, enabling customizable vocabulary size to adapt to users' proficiency levels.",
        "Designed and developed a responsive frontend using React and TypeScript, ensuring seamless API interaction and a user-friendly interface."
      ],
      technologies: ["React", "TypeScript", "Flask", "SQLite", "Python", "OpenAI API"],
      image: "langauge.jpg",
      githubLink: "https://langaugew3.vercel.app/",
      demoLink: "https://langaugew3.vercel.app/"
    },
    {
      id: 2,
      name: "ReuseU",
      description: "ReuseU, an application made for students, by students, where you can sell and trade clothes and appliances with people of the same school.",
      details: [
        "Built a full-stack application for selling items using Next.js, TypeScript, and Tailwind CSS.",
        "Implemented NextAuth for authentication and user management.",
        "Designed a responsive frontend with a focus on user experience.",
      ],
      technologies: ["Next.js", "TypeScript", "Flask", "Python", "NextAuth", "Tailwind CSS"],
      image: "cydoc.jpg",
      githubLink: "#",
      demoLink: "#"
    }
  ];

  return (
    <>
      <div className="projects container">
        <h2 className="section-title fade-in">Projects</h2>
        <div className="projects-showcase">
          <div className="project-tabs fade-in">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-tab ${activeProject === index ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
              >
                <h3>{project.name}</h3>
                <span className="project-tech">{project.technologies.slice(0, 3).join(' / ')}</span>
              </div>
            ))}
          </div>
          <div className="project-content fade-in">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className={`project-details ${activeProject === index ? 'active' : ''}`}
              >
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="project-features">
                    {project.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                  <div className="project-tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Live Demo</a>
                  </div>
                </div>
                <div className="project-image">
                  <img 
                    src={langaugeImage} 
                    alt={`${project.name} screenshot`} 
                    onClick={() => openImageModal(langaugeImage, `${project.name} screenshot`)}
                    title="Click to enlarge"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ImageModal 
        isOpen={modalOpen} 
        onClose={closeImageModal} 
        imageSrc={modalImage.src} 
        imageAlt={modalImage.alt} 
      />
    </>
  );
};

export default Projects;