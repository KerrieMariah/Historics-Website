import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const features = [
  {
    title: 'Teak & Iroko Build',
    detail: 'Robust teak planking on an iroko frame, Hong Kong shipwright craftsmanship from Hung Hom Hop-Kee.',
  },
  {
    title: 'Tear-Drop Iron Keel',
    detail: 'A distinctive cast-iron keel that gives this 26-foot day racer her unmistakable underwater profile.',
  },
  {
    title: 'Perkins 18hp Auxiliary',
    detail: 'A reliable reconditioned diesel, paired with entirely new electrical and navigation systems.',
  },
  {
    title: 'Bermudan Rig',
    detail: 'The existing Bermudan rig was retained after restoration, returning her to the water with grace and pace.',
  },
]

export function Typhoon() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'S/Y Typhoon | Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="vessel-page" id="top">
        <section className="vessel-hero">
          <div className="vessel-hero-media vessel-hero-media--typhoon" aria-hidden="true">
            <img src="/vessels/typhoon-03.jpg" alt="" fetchPriority="high" />
            <div className="vessel-hero-veil" />
          </div>

          <div className="vessel-hero-content">
            <h1 className="animate-in">Typhoon</h1>
            <p className="hero-lede animate-in delay-1">
              Once Mairi Bhan, a resilient Rouse-designed day racer, rescued from the scrap heap and sailing again
              from St. Monans.
            </p>
          </div>
        </section>

        <section className="vessel-facts" aria-label="Vessel particulars">
          <div className="vessel-facts-inner">
            <div>
              <span>Built</span>
              <strong>Late 1920s</strong>
            </div>
            <div>
              <span>Length</span>
              <strong>26 feet</strong>
            </div>
            <div>
              <span>Designer</span>
              <strong>H.S. Rouse</strong>
            </div>
            <div>
              <span>Also known as</span>
              <strong>Mairi Bhan</strong>
            </div>
          </div>
        </section>

        <section className="vessel-story" id="story">
          <div className="vessel-block-heading">
            <p className="eyebrow">The W Class</p>
            <h2>Mairi Bhan: the resilient Rouse-designed day racer</h2>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/typhoon-03.jpg"
              alt="Typhoon, formerly Mairi Bhan, under sail"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-story-body">
            <p>
              The elegant 26-foot Mairi Bhan, now renamed Typhoon, is a classic gaff-rigged day racer, a distinguished
              member of the historic ‘W’ class designed by the renowned H.S. Rouse for the Royal Hong Kong Yacht Club in
              the late 1920s. Commissioned as a competitive four-tonner fleet, seven of these graceful boats were
              initially built.
            </p>
            <p>
              Mairi Bhan was crafted from robust teak with an iroko frame and a distinctive tear-drop cast iron keel by
              the skilled shipwrights at the Hung Hom Hop-Kee shipyard in Hong Kong.
            </p>
          </div>
        </section>

        <section className="vessel-chapter">
          <div className="vessel-block-heading">
            <p className="eyebrow">An Incomplete Past</p>
            <h2>From Hong Kong to obscurity</h2>
          </div>
          <figure className="vessel-chapter-media">
            <img
              src="/vessels/typhoon-04.jpg"
              alt="Typhoon on the hard during her history ashore"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-body">
            <p>
              The vessel’s detailed early history is unfortunately fragmented. It is believed the boat, which may have
              been originally named Typhoon, was shipped to the UK just before the outbreak of the Second World War.
            </p>
            <p>
              Its documented story resumes over two decades later in 1961, when it was purchased by T. Lunt in Wallasea
              Bay, fitted at the time with a towering 40-foot mast and traditional cotton sails.
            </p>
          </div>
        </section>

        <section className="vessel-story">
          <div className="vessel-block-heading">
            <p className="eyebrow">1961–2007</p>
            <h2>A tapestry of stewards</h2>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/typhoon-09.jpg"
              className="img-focus-deck"
              alt="Typhoon during her years of changing ownership"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-story-body">
            <p>
              Ownership of the vessel passed through many hands over the subsequent years. It was officially registered
              in Poole in 1974 and was subsequently owned by a series of individuals, including F. Bedson and Ann Cuff.
            </p>
            <p>
              By 1998, its fortunes had waned, and it was discovered in a sorry state, derelict on land at Penmon Point,
              Anglesey. Its potential was recognised in 2001 by Dr. Yiannis Tridimas, who undertook rerigging work and
              sailed the boat until 2007.
            </p>
          </div>
        </section>

        <section className="vessel-chapter">
          <div className="vessel-block-heading">
            <p className="eyebrow">Near Loss</p>
            <h2>A brush with scrapping</h2>
          </div>
          <figure className="vessel-chapter-media">
            <img
              src="/vessels/typhoon-11.jpg"
              className="img-focus-low"
              alt="Typhoon awaiting rescue and restoration"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-body">
            <p>
              The next chapter began when the boat was acquired by Ian Nicol. A troubled launch attempt resulted in the
              vessel taking on water and being saved from sinking. It was then gifted to a university sailing club, but
              a lack of resources led to further neglect.
            </p>
            <p>
              A powerful storm eventually caused the boat to fall over, holing the hull and damaging the mast. Facing
              the grim prospect of being scrapped on site, the vessel was purchased by its determined current owners,
              who rescued it for a comprehensive restoration.
            </p>
          </div>
        </section>

        <section className="vessel-story">
          <div className="vessel-block-heading">
            <p className="eyebrow">Eight Years</p>
            <h2>A meticulous rebirth</h2>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/typhoon-12.jpg"
              alt="Typhoon during her eight-year restoration"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-story-body">
            <p>
              This ambitious restoration, undertaken near St. Monans, was a profound labour of love spanning eight
              years. The damaged hull was meticulously repaired and fully recaulked, the leaky deck was resealed, and
              the cockpit was entirely rebuilt.
            </p>
            <p>
              A new rudder, tiller, and a reliable reconditioned Perkins 18hp engine were installed, complemented by
              completely new electrical and navigation systems. While the original gaff rig was considered, the existing
              Bermudan rig was ultimately retained to expedite a return to the water.
            </p>
          </div>
        </section>

        <section className="vessel-restore" id="design">
          <div className="vessel-restore-intro">
            <p className="eyebrow">Design &amp; Features</p>
            <h2>Four-tonner grace, rebuilt to sail</h2>
            <p>
              At 26 feet, Typhoon is a compact classic: teak on iroko, a tear-drop cast iron keel, and the lines of
              Rouse’s W-class day racers for the Royal Hong Kong Yacht Club. Eight years of careful work near St. Monans
              returned her hull, deck, and systems to seaworthy form, with performance that has reportedly surpassed all
              expectations.
            </p>
          </div>

          <div className="vessel-features">
            <p className="vessel-features-label">Saved from the scrap heap. Sailing again.</p>
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

        <section className="charter vessel-charter" id="return">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/typhoon-05.jpg)' }}
          />
          <div className="charter-content">
            <p className="eyebrow">Triumphant Return</p>
            <h2>Sailing into a new era</h2>
            <p>
              The beautifully restored Mairi Bhan was triumphantly relaunched in April 2021. Having been returned to its
              former glory, the vessel’s sailing performance has reportedly surpassed all expectations, gracefully
              sailing from its home port of St. Monans and securing its legacy for the future.
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
