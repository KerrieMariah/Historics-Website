import { type ReactNode, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { vessels, type Vessel } from '../data'
import { useReveal } from '../hooks/useReveal'

function Reveal({ className = '', children }: { className?: string; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        element.classList.add('is-revealed')
        observer.disconnect()
      },
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}

function FleetRow({ vessel, flip }: { vessel: Vessel; flip: boolean }) {
  const ref = useReveal<HTMLAnchorElement>()

  return (
    <Link
      ref={ref}
      className={`fleet-row reveal${flip ? ' fleet-row--flip' : ''}`}
      to={vessel.href}
    >
      <figure className="fleet-row-media">
        <img
          src={vessel.image}
          alt={`${vessel.designation} ${vessel.name}`}
          loading="lazy"
          decoding="async"
        />
      </figure>
      <div className="fleet-row-copy">
        <p className="eyebrow">
          {vessel.designation} · {vessel.year}
        </p>
        <h3>{vessel.name}</h3>
        <p className="fleet-row-type">{vessel.type}</p>
        <p>{vessel.blurb}</p>
        <span className="btn btn-line">Discover {vessel.name}</span>
      </div>
    </Link>
  )
}

export function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src="/vessels/way-foong-charters-01.jpg" alt="" fetchPriority="high" />
            <div className="hero-veil" />
          </div>

          <div className="hero-content">
            <p className="brand-signal animate-in">Hong Kong Historic Vessels Foundation</p>
            <h1 className="animate-in delay-1">
              Historic vessels of <em>Fragrant Harbour</em>
            </h1>
            <p className="hero-lede animate-in delay-2">
              Five Hong Kong-built boats from the 1930s, restored, preserved, and returned to the water as a living
              archive of the city’s maritime heritage.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a className="btn btn-brass" href="#fleet">
                Explore the Fleet
              </a>
              <Link className="btn btn-ghost" to="/contact">
                Get in Touch
              </Link>
            </div>
          </div>

          <a className="scroll-cue animate-in delay-4" href="#mission" aria-label="Scroll to foundation story">
            <span />
          </a>
        </section>

        <section className="mission" id="mission">
          <Reveal className="mission-inner">
            <div className="mission-waves" aria-hidden="true" />
            <p className="eyebrow">A Living Archive</p>
            <img className="mission-mark" src="/logo-outline.png" alt="" />
            <h2>Preserving the craft of Hong Kong’s harbour</h2>
            <p>
              The Foundation fosters appreciation for Hong Kong’s rich traditions in boating and boatbuilding. By
              restoring five vessels constructed here in the 1930s, we make the city’s commercial, governmental, and
              recreational maritime heritage accessible on the water, and in the stories these boats still carry.
            </p>
            <img
              className="mission-words"
              src="/logo-words.png"
              alt="Hong Kong Historic Vessels Foundation"
            />
            <div className="mission-actions">
              <Link className="btn btn-line" to="/contact">
                Get in Touch
              </Link>
            </div>
            <div className="mission-waves mission-waves--flip" aria-hidden="true" />
          </Reveal>
        </section>

        <section className="fleet" id="fleet">
          <Reveal className="fleet-header">
            <p className="eyebrow">The Fleet</p>
            <h2>Five vessels. One harbour’s history.</h2>
            <p>Explore the story behind each vessel in the fleet.</p>
          </Reveal>

          <div className="fleet-list">
            {vessels.map((vessel, index) => (
              <FleetRow key={vessel.id} vessel={vessel} flip={index % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="charter vessel-charter" id="charter">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/so-fong-05.jpg)' }}
          />
          <Reveal className="charter-content">
            <p className="eyebrow">Private Charter</p>
            <h2>Embark on a timeless journey</h2>
            <p>
              Experience Hong Kong’s waters aboard flagship vessels Way Foong and So Fong, beautifully preserved
              classics available for private charter through our sister organisation, Hong Kong Classic Charters.
            </p>
            <a
              className="btn btn-brass"
              href="https://hongkonghistoricvessels.com/"
              target="_blank"
              rel="noreferrer"
            >
              Book Your Charter
            </a>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
