import { personalInfo } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          {personalInfo.name}
          <span>{personalInfo.role}</span>
        </div>

        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noreferrer noopener">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer noopener">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>Email</a>
        </div>

        <p className="footer-copy">
          © {year} {personalInfo.name}
        </p>
      </div>
    </footer>
  )
}
