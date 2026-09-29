import { personalInfo } from '../data/portfolioData'

// Always clickable. Place your CV at public/assets/Bibin_KU_CV.pdf
// (served from /assets/Bibin_KU_CV.pdf). If the file is missing, the browser
// opens the new tab with a 404 instead of the button being disabled.
export default function DownloadCvButton({ className = '', onClick }) {
  const { cvUrl, cvFileName } = personalInfo

  return (
    <a
      href={cvUrl}
      download={cvFileName}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary ${className}`.trim()}
      aria-label="Download CV as PDF"
      onClick={onClick}
    >
      Download CV
    </a>
  )
}
