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
      name: "Studiously.ai",
      description: "An AI-powered automated data management platform for business professionals, featuring sophisticated email integration and intelligent follow-up systems.",
      details: [
        "Built a full-stack application using TypeScript and Vite for optimal performance and type safety.",
        "Integrated Supabase for real-time database management and authentication, enabling seamless data synchronization.",
        "Implemented comprehensive email integration using Nylas API for automated contact management and outreach.",
        "Developed custom SQL queries for complex data relationships and efficient database operations.",
        "Created automated follow-up reminder systems with customizable frequency settings for enhanced user engagement.",
        "Designed contact stage management with visual pipeline tracking for improved workflow organization.",
        "Built consolidated outreach features allowing users to manage email campaigns and track progress in real-time."
      ],
      technologies: ["TypeScript", "Vite", "Supabase", "Nylas API", "SQL", "React", "Email Integration"],
      image: process.env.PUBLIC_URL + '/images/studiously-example.jpg', // Will need to add this image
      githubLink: "", // Add if available
      demoLink: "https://studiously.ai"
    },
    {
      id: 2,
      name: "LanGauge",
      description: "A language learning platform tailored for Japanese learners, focusing on interactive language practice that adapts to the user's proficiency level.",
      details: [
        "Built a custom API backend using Flask and a lightweight SQLite database to enable fast queries for Japanese words and their definitions.",
        "Customized a word tokenizer API in Python for automatic tagging of Japanese vocabulary and corresponding English definitions to aid user comprehension on the frontend.",
        "Integrated OpenAI API to facilitate language practice, enabling customizable vocabulary size to adapt to users' proficiency levels.",
        "Designed and developed a responsive frontend using React and TypeScript, ensuring seamless API interaction and a user-friendly interface."
      ],
      technologies: ["React", "TypeScript", "Flask", "SQLite", "Python", "OpenAI API"],
      image: process.env.PUBLIC_URL + '/images/langaugeexample.jpg',
      githubLink: "https://github.com/howieyoungdahl/LanGauge",
      demoLink: "https://langaugew3.vercel.app/"
    },
    {
      id: 3,
      name: "ReuseU",
      description: "ReuseU, an application made for students, by students, where you can sell and trade clothes and appliances with people of the same school.",
      details: [
        "Built a full-stack application for selling items using Next.js, TypeScript, and Tailwind CSS.",
        "Implemented NextAuth for authentication and user management.",
        "Designed a responsive frontend with a focus on user experience.",
      ],
      technologies: ["Next.js", "TypeScript", "Flask", "Python", "NextAuth", "Tailwind CSS"],
      image: process.env.PUBLIC_URL + '/images/reuseuexample.jpg',
      githubLink: "",
      demoLink: "https://reuse-u-ruddy.vercel.app/"
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
                    {project.githubLink && <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>}
                    {project.demoLink && <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Website</a>}
                  </div>
                </div>
                <div className="project-image">
                  <img 
                    src={project.image} 
                    alt={`${project.name} screenshot`} 
                    onClick={() => openImageModal(project.image, `${project.name} screenshot`)}
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