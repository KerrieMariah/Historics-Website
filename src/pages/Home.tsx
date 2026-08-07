import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { vessels } from '../data'

export function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-media" aria-hidden="true">
            <img src="/vessels/way-foong-charters-01.jpg" alt="" />
            <div className="hero-veil" />
          </div>

          <div className="hero-content">
            <p className="brand-signal animate-in">Hong Kong Historic Vessels Foundation</p>
            <h1 className="animate-in delay-1">
              Historic vessels of <em>Fragrant Harbour</em>
            </h1>
            <p className="hero-lede animate-in delay-2">
              Five Hong Kong-built boats from the 1930s — restored, preserved, and returned to the water as a living
              archive of the city’s maritime heritage.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a className="btn btn-brass" href="#fleet">
                Explore the Fleet
              </a>
              <a className="btn btn-ghost" href="#charter">
                Book a Charter
              </a>
            </div>
          </div>

          <a className="scroll-cue animate-in delay-4" href="#mission" aria-label="Scroll to foundation story">
            <span />
          </a>
        </section>

        <section className="mission" id="mission">
          <div className="mission-inner">
            <div className="mission-waves" aria-hidden="true" />
            <p className="eyebrow">A Living Archive</p>
            <img
              className="mission-mark"
              src="/wayfoon-charters-icon-black.png"
              alt=""
              width={72}
              height={72}
            />
            <h2>Preserving the craft of Hong Kong’s harbour</h2>
            <p>
              The Foundation fosters appreciation for Hong Kong’s rich traditions in boating and boatbuilding. By
              restoring five vessels constructed here in the 1930s, we make the city’s commercial, governmental, and
              recreational maritime heritage accessible — on the water, and in the stories these boats still carry.
            </p>
            <div className="mission-waves mission-waves--flip" aria-hidden="true" />
          </div>
        </section>

        <section className="fleet" id="fleet">
          <div className="fleet-header">
            <p className="eyebrow">The Fleet</p>
            <h2>Five vessels. One harbour’s history.</h2>
            <p>Explore the story behind each vessel in the fleet.</p>
          </div>

          <div className="fleet-grid">
            {vessels.map((vessel) => {
              const isInternal = vessel.href.startsWith('/')
              const content = (
                <>
                  <img src={vessel.image} alt="" loading="lazy" decoding="async" />
                  <div className="vessel-tile-meta">
                    <span className="vessel-tile-year">{vessel.year}</span>
                    <span className="vessel-tile-name">
                      {vessel.designation} {vessel.name}
                    </span>
                    <span className="vessel-tile-type">{vessel.type}</span>
                  </div>
                </>
              )

              return isInternal ? (
                <Link key={vessel.id} className="vessel-tile" to={vessel.href}>
                  {content}
                </Link>
              ) : (
                <a
                  key={vessel.id}
                  className="vessel-tile"
                  href={vessel.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {content}
                </a>
              )
            })}
          </div>
        </section>

        <section className="charter" id="charter">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/so-fong-05.jpg)' }}
          />
          <div className="charter-veil" aria-hidden="true" />
          <div className="charter-content">
            <p className="eyebrow light">Private Charter</p>
            <h2>Embark on a timeless journey</h2>
            <p>
              Experience Hong Kong’s waters aboard flagship vessels Way Foong and So Fong — beautifully preserved
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
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
