import { ExternalLink, Github } from 'lucide-react'
import Reveal from './Reveal'
import ProjectImageSlider from './ProjectImageSlider'
import { projects } from '../data/portfolioData'

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-number">Projects</span>
          <h2>Things I've built</h2>
          <p>Two Django projects built during and after my internship — one live, one on GitHub.</p>
        </Reveal>

        <div>
          {projects.map((project) => (
            <Reveal as="div" className="project-card" key={project.name}>
              <div className="project-visual">
                <ProjectImageSlider images={project.images} projectName={project.name} />
              </div>

              <div className="project-body">
                <h3 className="project-name">{project.name}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>

                <ul className="project-features">
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span className="tech-chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary btn-sm"
                    >
                      Live demo <ExternalLink size={15} />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-outline btn-sm"
                    >
                      View code <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
