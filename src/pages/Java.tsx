import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const features = [
  {
    title: 'Gardner 6L3B Diesel',
    detail: 'Utterly reliable — a gallon and a half of fuel per hour, cheap and joyful to operate.',
  },
  {
    title: 'Burmese Teak Hull & Deck',
    detail: 'Original hard-wearing teak that shows no sign of rot after decades of hard service.',
  },
  {
    title: 'Ruston Hornsby Auxiliary',
    detail: 'Original single-cylinder diesel, meticulously restored, driving the historic Westinghouse generator.',
  },
  {
    title: 'Harbour Proven',
    detail: 'Once “almost unsinkable” and highly resistant to typhoon damage as a government workhorse.',
  },
]

export function Java() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'M/Y Java — Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="vessel-page" id="top">
        <section className="vessel-hero">
          <div className="vessel-hero-media vessel-hero-media--java" aria-hidden="true">
            <img src="/vessels/java-01.jpg" alt="" />
            <div className="vessel-hero-veil" />
          </div>

          <div className="vessel-hero-content">
            <h1 className="animate-in">Java</h1>
            <p className="hero-lede animate-in delay-1">
              A timeless icon of Hong Kong’s maritime heritage — once Marine 1, still keeping Fragrant Harbour’s story
              afloat.
            </p>
          </div>
        </section>

        <section className="vessel-facts" aria-label="Vessel particulars">
          <div className="vessel-facts-inner">
            <div>
              <span>Commissioned</span>
              <strong>18 March 1935</strong>
            </div>
            <div>
              <span>Length</span>
              <strong>56 feet</strong>
            </div>
            <div>
              <span>Beam</span>
              <strong>3.6 metres</strong>
            </div>
            <div>
              <span>First name</span>
              <strong>Marine 1</strong>
            </div>
          </div>
        </section>

        <section className="vessel-story" id="story">
          <div className="vessel-story-copy">
            <p className="eyebrow">Her Spirit</p>
            <h2>The enduring spirit of the harbour</h2>
            <p>
              The iconic 56-foot wooden launch, Java, began her life in 1935 as the Government vessel Marine 1. Built at
              the Kowloon Docks and maintained with meticulous care by the Hong Kong Government Dockyard, Java has
              served the Fragrant Harbour, survived auction, and been rescued from an uncertain fate.
            </p>
            <p>
              For nearly nine decades, this distinguished craft has navigated the waters of Hong Kong — a silent
              witness to its history and a testament to timeless engineering and restoration.
            </p>
          </div>
          <figure className="vessel-story-media">
            <img src="/vessels/java-04.jpg" alt="Java on the water" loading="lazy" decoding="async" />
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img src="/vessels/java-02.jpg" alt="Java detail" loading="lazy" decoding="async" />
          </figure>
          <div className="vessel-chapter-copy">
            <p className="eyebrow">A Storied Past</p>
            <h2>From government service to private passion</h2>
            <p>
              Java’s history is one of steadfast duty and a second life born from a labour of love, reflecting the deep
              connection vessels can forge with those who care for them.
            </p>
          </div>
        </section>

        <section className="vessel-story">
          <div className="vessel-story-copy">
            <p className="eyebrow">1935–1980s</p>
            <h2>Government workhorse</h2>
            <p>
              Commissioned into service on 18th March 1935, Marine 1 was the oldest craft in the Government fleet for
              decades. As a 17.3-metre launch with a 3.6-metre beam, she was the backbone of the Harbour Moorings Unit —
              her rugged reliability making her indispensable.
            </p>
            <p>
              Powered originally by a rod and chain steering system and a series of engines — including a faithful
              Gardner 6L3B installed in 1970 — she cruised Hong Kong waters at a steady 10 knots. Her all-Burmese teak
              construction, with deck planks an incredible one and three-quarter inches thick, earned her a reputation
              for being “almost unsinkable” and highly resistant to typhoon damage.
            </p>
            <p>
              During a later overhaul, layers of paint were carefully removed to reveal the outstanding original brass
              fixtures and fittings that spoke to her quality and heritage.
            </p>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/java-01.jpg"
              className="img-focus-deck"
              alt="Java as a working launch"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img
              src="/vessels/java-03.jpg"
              className="img-focus-low"
              alt="Java restoration detail"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-copy">
            <p className="eyebrow">1990s–Present</p>
            <h2>Rescue and rebirth</h2>
            <p>
              After being decommissioned and sold at a government auction, Marine 1 faced a bleak future: her new owner
              planned to strip her classic superstructure to make way for living accommodation. It was then in 1997 that
              Roger Field discovered her tied to a mooring in Hebe Haven.
            </p>
            <p>
              Horrified by the planned alterations, Field and his best mate, Geoff Flynn, stepped in. After six months
              of investigation, they found the owner and subsequently purchased the vessel for HK$35,000, saving her
              from being fundamentally altered. Once decommissioned, her name was changed to Java — a choice with
              pleasing Eastern connotations.
            </p>
            <p>
              The restoration became a process of discovery. Beyond the main Gardner engine, Field located and
              completely overhauled the original Ruston Hornsby IVTH single-cylinder diesel, which now runs as smoothly
              as the day it was installed. This small diesel drives the original 110VDC Westinghouse generator — a piece
              of technical history that once powered the entire vessel, including a Kelvin Hughes depth recorder used
              for laying mooring buoys.
            </p>
            <p>
              Field’s work was a meticulous labour of love, focused on preserving the hull and replacing old caulking
              with modern compounds to keep her seaworthy. While some original brass fittings, including her Marine 1
              name plaque, have been lost to time, the soul of the vessel remains intact.
            </p>
          </div>
        </section>

        <section className="vessel-restore" id="design">
          <div className="vessel-restore-intro">
            <p className="eyebrow">Design &amp; Features</p>
            <h2>A testament to classic engineering</h2>
            <p>
              At 56 feet long, Java is a masterpiece of robust, no-nonsense marine design. Her heart is the utterly
              reliable Gardner 6L3B diesel engine. Her construction is a testament to a bygone era — a hull and deck of
              original Burmese teak, unique historical elements such as a water tank inside the smoke stack, and the
              restored Ruston Hornsby auxiliary. Accommodating and sympathetic to the handiwork of her restorer, Java
              offers a tangible connection to Hong Kong’s maritime past.
            </p>
          </div>

          <div className="vessel-features">
            <p className="vessel-features-label">Built to last — and still running true</p>
            <ul>
              {features.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong>
                  <span>{feature.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="charter vessel-charter" id="legacy">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/java-02.jpg)' }}
          />
          <div className="charter-content">
            <p className="eyebrow">A Living Legacy</p>
            <h2>Still at home in Fragrant Harbour</h2>
            <p>
              Java is so much more than an old wooden launch; she is a piece of living history. From her five decades of
              government service maintaining the harbour’s moorings to her current chapter as a cherished family boat
              for trips around Hong Kong Island and to Po Toi for lunch, her story is one of resilience and enduring
              character. Roger Field’s commitment ensured she will remain in Hong Kong — the harbour she has called home
              since 1935.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-brass" to="/contact">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
