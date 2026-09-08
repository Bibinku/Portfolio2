import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Reusable image slider used inside project cards. Shows one image at a
// time with prev/next controls and dot indicators. If there's only one
// image, navigation is hidden and it behaves like a plain image.
export default function ProjectImageSlider({ images, projectName }) {
  const [index, setIndex] = useState(0)
  const hasMultiple = images.length > 1

  const goTo = (nextIndex) => {
    const total = images.length
    setIndex(((nextIndex % total) + total) % total)
  }

  const goPrev = () => goTo(index - 1)
  const goNext = () => goTo(index + 1)

  if (images.length === 0) {
    return null
  }

  return (
    <div className="project-slider" role="group" aria-label={`${projectName} screenshots`}>
      <div className="slider-viewport">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((image) => (
            <div className="slider-slide" key={image.alt}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {hasMultiple && (
          <>
            <button
              type="button"
              className="slider-btn slider-btn-prev"
              onClick={goPrev}
              aria-label={`Previous ${projectName} screenshot`}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className="slider-btn slider-btn-next"
              onClick={goNext}
              aria-label={`Next ${projectName} screenshot`}
            >
              <ChevronRight size={18} />
            </button>

            <div className="slider-dots">
              {images.map((image, dotIndex) => (
                <button
                  key={image.alt}
                  type="button"
                  className={`slider-dot ${dotIndex === index ? 'is-active' : ''}`}
                  onClick={() => goTo(dotIndex)}
                  aria-label={`Show screenshot ${dotIndex + 1} of ${images.length}`}
                  aria-current={dotIndex === index}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
