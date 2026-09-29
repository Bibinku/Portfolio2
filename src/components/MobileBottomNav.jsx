import { useEffect, useRef, useState } from 'react'
import { Home, User, Code, Briefcase, FolderKanban, Mail } from 'lucide-react'
import { navLinks } from '../data/portfolioData'

const MOBILE_QUERY = '(max-width: 768px)'
const SCROLL_IDLE_MS = 200

const iconByHref = {
  '#home': Home,
  '#about': User,
  '#skills': Code,
  '#experience': Briefcase,
  '#projects': FolderKanban,
  '#contact': Mail,
}

function useHideWhileScrolling(navRef) {
  const [hidden, setHidden] = useState(false)
  const hiddenRef = useRef(false)
  const timerRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)

    const update = (value) => {
      if (hiddenRef.current !== value) {
        hiddenRef.current = value
        setHidden(value)
      }
    }

    const onScroll = () => {
      if (!mq.matches) return
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

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!elements.length) return undefined

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
                aria-label={link.label}
                title={link.label}
                aria-current={isActive ? 'location' : undefined}
              >
                {Icon && <Icon size={22} aria-hidden="true" />}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}