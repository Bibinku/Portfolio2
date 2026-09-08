import Reveal from './Reveal'
import { personalInfo, aboutPoints } from '../data/portfolioData'

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">About</span>
          <h2>Where I'm starting from</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-summary">
            <p>{personalInfo.summary}</p>
            <div className="about-meta">
              <div>
                <strong>Based in</strong> — {personalInfo.location}
              </div>
              <div>
                <strong>Looking for</strong> —Software Developer Intern & &amp;  Entry-Level Developer Roles
              </div>
            </div>
          </Reveal>

          <div className="about-points">
            {aboutPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80} className="about-point">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
