import { Github, Linkedin, ArrowDown } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import profilePhoto from '../assets/profile.jpg'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <span className="hero-kicker">Open to Entry-Level  Developer Roles</span>

          <h1>
            Hi, I'm {personalInfo.name.split(' ')[0]} {personalInfo.name.split(' ').slice(1).join(' ')}
          </h1>
          <p className="hero-role">{personalInfo.role}</p>
          <p className="hero-tagline">{personalInfo.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View my projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact me
            </a>
            <div className="hero-socials">
              <a href={personalInfo.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub profile">
                <Github size={19} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn profile">
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          <div className="hero-scroll-cue">
            <span className="line" aria-hidden="true" />
            <ArrowDown size={14} aria-hidden="true" />
            <span>scroll to explore</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-photo">
              <img src={profilePhoto} alt={`Portrait of ${personalInfo.name}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
