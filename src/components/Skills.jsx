import Reveal from './Reveal'
import { skillGroups } from '../data/portfolioData'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">Skills</span>
          <h2>What I work with</h2>
          <p>Technologies and tools I use to build web applications.</p>
        </Reveal>

        <Reveal>
          <div className="skills-layout">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span className="skill-tag" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
