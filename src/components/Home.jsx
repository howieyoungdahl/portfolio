import React, { useEffect, useState, useRef } from 'react';
import './Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const imagePath = process.env.PUBLIC_URL + '/images/profile.jpeg'
  const roles = [
    "Fullstack Developer",
    "UI Artist",
    "Competitive Programmer",
    "Comp Sci/Japanese Major",
    "Code is art"
  ];
  
  const typingRef = useRef(null);

  useEffect(() => {
    // Typing animation logic
    const handleTyping = () => {
      const currentIndex = loopNum % roles.length;
      const fullText = roles[currentIndex];
      
      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1) 
        : fullText.substring(0, displayText.length + 1)
      );
      
      // Set typing speed - faster when deleting
      setTypingSpeed(isDeleting ? 40: 80);
      
      // If completed typing the word
      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } 
      // If finished deleting
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        // Small pause before typing the next word
        setTypingSpeed(80);
      }
    };
    
    typingRef.current = setTimeout(handleTyping, typingSpeed);
    
    return () => clearTimeout(typingRef.current);
  }, [displayText, isDeleting, loopNum, roles, typingSpeed]);

  useEffect(() => {
    // Smooth scroll behavior with reduced speed
    document.documentElement.style.scrollBehavior = 'smooth';
    document.documentElement.style.scrollPaddingTop = '80px'; // Account for fixed navbar

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Add a slight delay for staggered animations
          const delay = entry.target.dataset.delay || 0;
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, delay);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    });
    
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
      el.dataset.delay = index * 150; // Increased delay between animations
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
      observer.observe(el);
    });

    // Add scroll event listener for parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
      document.documentElement.style.scrollBehavior = 'auto';
      document.documentElement.style.scrollPaddingTop = '0';
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="home container">
      <div className="home-content">
        <div className="text-content parallax" data-speed="0.3">
          <p className="greeting fade-in">Hello, I'm</p>
          <h1 className="name fade-in">Howard Youngdahl</h1>
          <p className="tagline fade-in">
            <span className="code">// </span>
            <span className="typing-text">{displayText}</span>
            <span className="cursor"></span>
          </p>
          <p className="description fade-in">
            Entry level Fullstack | Frontend Development
          </p>
          <div className="home-buttons fade-in">
            <a href="#projects" className="btn">View My Work</a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>
        </div>
        <div className="home-image parallax" data-speed="0.5">
          <div className="image-container">
            <img src={imagePath} alt="Howard Youngdahl" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator fade-in">
        <span>Scroll Down</span>
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Home;