import Reveal from './Reveal'
import { education, certifications } from '../data/portfolioData'

export default function Education() {
  return (
    <section id="education" className="split-section">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">Education</span>
          <h2>Education &amp; certifications</h2>
        </Reveal>

        <div className="edu-cert-grid">
          <Reveal as="div" className="edu-cert-col">
            <h3 className="col-title">Education</h3>
            {education.map((item) => (
              <div className="edu-item" key={item.degree}>
                <p className="edu-degree">{item.degree}</p>
                <p className="edu-institution">{item.institution}</p>
                <p className="edu-period">{item.period}</p>
              </div>
            ))}
          </Reveal>

          <Reveal as="div" delay={100} className="edu-cert-col" id="certifications">
            <h3 className="col-title">Certifications</h3>
            {certifications.map((item) => (
              <div className="cert-item" key={item.title}>
                <p className="cert-title">{item.title}</p>
                <p className="cert-issuer">{item.issuer}</p>
                <p className="cert-year">{item.year}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
