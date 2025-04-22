import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSending, setIsSending] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    })
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el))

    emailjs.init('ilHxRLu57mV8qqYny')

    return () => {
      document.querySelectorAll('.fade-in').forEach(el => observer.unobserve(el))
    }
  }, [])

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setIsSending(true)
    try {
      await emailjs.send(
        'service_zoxhfj7',
        'template_de3ki7l',
        { ...formData, time: new Date().toISOString() }
      )
      setFormSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setFormSubmitted(false), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
    } finally {
      setIsSending(false)
    }
  }

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
              />
            </div>

            <button type="submit" className="btn" disabled={isSending}>
              {isSending
                ? <>
                    <span className="loader" /> Sending…
                  </>
                : 'Send Message'}
            </button>

            {formSubmitted && (
              <div className="success-message">
                ✅ Your message has been sent.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
