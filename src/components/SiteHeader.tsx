import { useEffect, useId, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { vessels } from '../data'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fleetOpen, setFleetOpen] = useState(false)
  const [mobileFleetOpen, setMobileFleetOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const fleetMenuId = useId()
  const fleetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setFleetOpen(false)
    setMobileFleetOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    if (!fleetOpen) return

    const onPointerDown = (event: MouseEvent) => {
      if (!fleetRef.current?.contains(event.target as Node)) {
        setFleetOpen(false)
      }
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setFleetOpen(false)
    }

    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [fleetOpen])

  const close = () => {
    setMenuOpen(false)
    setFleetOpen(false)
    setMobileFleetOpen(false)
  }

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Link className="brand" to="/" aria-label="Hong Kong Historic Vessels Foundation">
          <img src="/logo.svg" alt="" width={56} height={56} />
          <span className="brand-text">
            <span className="brand-name">Hong Kong Historic Vessels</span>
            <span className="brand-zh">香港古船協會</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <div className={`nav-dropdown ${fleetOpen ? 'is-open' : ''}`} ref={fleetRef}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-expanded={fleetOpen}
              aria-controls={fleetMenuId}
              aria-haspopup="menu"
              onClick={() => setFleetOpen((open) => !open)}
            >
              Explore the Fleet
              <span className="nav-caret" aria-hidden="true" />
            </button>
            <div className="nav-dropdown-panel" id={fleetMenuId} role="menu">
              <div className="nav-dropdown-panel-inner">
                {vessels.map((vessel) => (
                  <Link key={vessel.id} to={vessel.href} role="menuitem" onClick={close}>
                    <span className="nav-vessel-name">
                      {vessel.designation} {vessel.name}
                    </span>
                    <span className="nav-vessel-meta">{vessel.year}</span>
                  </Link>
                ))}
                <Link className="nav-dropdown-all" to="/#fleet" role="menuitem" onClick={close}>
                  View all vessels
                </Link>
              </div>
            </div>
          </div>
          <Link to="/#mission">The Foundation</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div
        className={`mobile-nav ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
        {...(!menuOpen ? { inert: true } : {})}
      >
        <div className={`mobile-fleet ${mobileFleetOpen ? 'is-open' : ''}`}>
          <button
            type="button"
            className="mobile-fleet-trigger"
            aria-expanded={mobileFleetOpen}
            onClick={() => setMobileFleetOpen((open) => !open)}
          >
            Explore the Fleet
            <span className="nav-caret" aria-hidden="true" />
          </button>
          <div className="mobile-fleet-list">
            {vessels.map((vessel) => (
              <Link key={vessel.id} to={vessel.href} onClick={close}>
                {vessel.designation} {vessel.name}
              </Link>
            ))}
            <Link to="/#fleet" onClick={close}>
              View all vessels
            </Link>
          </div>
        </div>
        <Link to="/#mission" onClick={close}>
          The Foundation
        </Link>
        <Link to="/contact" onClick={close}>
          Contact Us
        </Link>
      </div>
    </>
  )
}
