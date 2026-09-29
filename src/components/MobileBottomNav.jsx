import { useEffect, useRef, useState } from 'react'
import { Home, User, Wrench, Briefcase, FolderKanban, Mail } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

const MOBILE_QUERY = '(max-width: 768px)'
const SCROLL_IDLE_MS = 200 // show again after scrolling has stopped this long

const iconByHref = {
  '#home': Home,
  '#about': User,
  '#skills': Wrench,
  '#experience': Briefcase,
  '#projects': FolderKanban,
  '#contact': Mail,
}

/** Hide while the page is scrolling, show again once it has been idle for SCROLL_IDLE_MS. */
function useHideWhileScrolling(navRef) {
  const [hidden, setHidden] = useState(false)
  const hiddenRef = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)

    const update = (value) => {
      if (hiddenRef.current !== value) {
        hiddenRef.current = value
        setHidden(value) // only re-render when the value actually flips
      }
    }

    const onScroll = () => {
      if (!mq.matches) return
      // Keyboard users focused inside the nav must not lose it mid-scroll.
      const nav = navRef.current
      if (nav && nav.contains(document.activeElement) && document.activeElement.matches(':focus-visible')) return

      update(true)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => update(false), SCROLL_IDLE_MS)
    }

    const onBreakpointChange = () => {
      if (!mq.matches) {
        window.clearTimeout(timerRef.current)
        update(false)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    mq.addEventListener('change', onBreakpointChange)
    return () => {
      window.removeEventListener('scroll', onScroll)
      mq.removeEventListener('change', onBreakpointChange)
      window.clearTimeout(timerRef.current)
    }
  }, [navRef])

  const show = () => {
    window.clearTimeout(timerRef.current)
    hiddenRef.current = false
    setHidden(false)
  }

  return [hidden, show]
}

/** Tracks which section sits around the middle of the viewport. */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return undefined

    // Thin band just above the viewport middle: the section crossing it is "current".
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return active
}

const sectionIds = navLinks.map((link) => link.href.slice(1))

export default function MobileBottomNav() {
  const navRef = useRef(null)
  const [hidden, show] = useHideWhileScrolling(navRef)
  const active = useActiveSection(sectionIds)

  return (
    <nav
      ref={navRef}
      className={`bottom-nav ${hidden ? 'is-hidden' : ''}`}
      aria-label="Section navigation"
      // Tabbing into the bar with a keyboard always reveals it.
      onFocus={(event) => {
        if (event.target.matches(':focus-visible')) show()
      }}
    >
      <ul className="bottom-nav-list">
        {navLinks.map((link) => {
          const id = link.href.slice(1)
          const Icon = iconByHref[link.href]
          const isActive = active === id
          return (
            <li key={link.href}>
              <a
                href={link.href}
                className={`bottom-nav-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                {Icon && <Icon size={18} aria-hidden="true" />}
                <span>{link.label}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
