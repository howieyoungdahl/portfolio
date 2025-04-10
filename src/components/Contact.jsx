// components/Contact.jsx
import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally send the data to a server
    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset the submission message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className="contact container">
      <h2 className="section-title fade-in">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info fade-in">
          <div className="contact-item">
            <div className="icon">📧</div>
            <div className="info">
              <h3>Email</h3>
              <p>hosidyoungdahl@gmail.com</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="icon">🔗</div>
            <div className="info">
              <h3>Social</h3>
              <div className="social-links">
                <a href="https://linkedin.com/in/howard-youngdahl/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/howieyoungdahl" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-form fade-in">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
            {formSubmitted && (
              <div className="success-message">Your message has been sent. I'll get back to you soon!</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;