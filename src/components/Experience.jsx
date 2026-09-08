import Reveal from './Reveal'
import { experience } from '../data/portfolioData'

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">Experience</span>
          <h2>Where I've worked</h2>
                  <p>My hands-on experience in web development through my internship. </p>
  
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal as="div" className="timeline-item" key={job.role + job.company}>
              <div className="timeline-period">{job.period}</div>
              <div className="timeline-rail" aria-hidden="true" />
              <div className="timeline-body">
                <h3>{job.role}</h3>
                <p className="timeline-company">
                  {job.company} <span className="timeline-location">— {job.location}</span>
                </p>
                <ul className="timeline-list">
                  {job.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
