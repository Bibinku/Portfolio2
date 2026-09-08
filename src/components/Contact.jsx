import { useState } from 'react'
import { Mail, Phone, Linkedin, Github, Send } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name || 'N/A'} (${form.email || 'no email provided'})`,
    )
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact">
      <div className="contact-section">
        <div className="container contact-grid">
          <div className="contact-heading">
            <span className="section-number">Contact</span>
            <h2>Let's work together</h2>
            <p>
              I'm open to Full Stack Developer Intern and Junior Developer opportunities. Feel free to reach out via email.
            </p>

            <div className="contact-list">
              <a href={`mailto:${personalInfo.email}`}>
                <Mail size={18} /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}>
                <Phone size={18} /> {personalInfo.phone}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer noopener">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer noopener">
                <Github size={18} /> GitHub
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Bibin KU"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Your email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Tell me a bit about the role..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <p className="form-note">
              Your email app will open with your message ready to send. {personalInfo.email}.
            </p>

            <button type="submit" className="btn btn-primary">
              Send message <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
