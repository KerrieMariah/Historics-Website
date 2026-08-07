import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const features = [
  {
    title: 'Overall Length',
    detail: '25 metres overall, with a 21.43-metre waterline.',
  },
  {
    title: 'Sail Area',
    detail: '242 square metres of sail across her classic gaff schooner rig.',
  },
  {
    title: 'Perkins Sabre',
    detail: '190hp auxiliary power — up to 9 knots, with an 800-nautical-mile range.',
  },
  {
    title: 'Lead Ballast',
    detail: '30,000 pounds of lead — recognised as the largest ever cast in Hong Kong at the time.',
  },
  {
    title: 'Accommodation',
    detail: 'Seven guests in three staterooms, plus crew quarters, with Webasto air conditioning and a HEM water maker.',
  },
]

export function SoFong() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'S/Y So Fong — Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="vessel-page" id="top">
        <section className="vessel-hero">
          <div className="vessel-hero-media vessel-hero-media--sofong" aria-hidden="true">
            <img src="/vessels/so-fong-15.jpg" alt="" />
            <div className="vessel-hero-veil" />
          </div>

          <div className="vessel-hero-content">
            <h1 className="animate-in">So Fong</h1>
            <p className="hero-lede animate-in delay-1">
              An enduring classic schooner’s journey — “Beautiful Girl” in Cantonese, home again in Fragrant Harbour
              after nearly nine decades at sea.
            </p>
          </div>
        </section>

        <section className="vessel-facts" aria-label="Vessel particulars">
          <div className="vessel-facts-inner">
            <div>
              <span>Launched</span>
              <strong>March 1937</strong>
            </div>
            <div>
              <span>Length</span>
              <strong>82 feet</strong>
            </div>
            <div>
              <span>Designer</span>
              <strong>Sparkman &amp; Stephens</strong>
            </div>
            <div>
              <span>Built at</span>
              <strong>Ah King Slipway</strong>
            </div>
          </div>
        </section>

        <section className="vessel-story" id="story">
          <div className="vessel-story-copy">
            <p className="eyebrow">Her Return</p>
            <h2>An enduring classic schooner’s journey</h2>
            <p>
              The elegant 82-foot gaff-rigged schooner So Fong represents one of Hong Kong’s finest maritime creations.
              Designed by the renowned firm Sparkman &amp; Stephens and built in 1937 at the historic Ah King Slipway,
              this graceful vessel was commissioned by American yachtsman A. Thornton Baker. Her name means “Beautiful
              Girl” in Cantonese.
            </p>
            <p>
              After nearly nine decades of remarkable global travel and multiple careful restorations, So Fong has
              triumphantly returned to her Hong Kong birthplace to join the historic fleet in early 2025.
            </p>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/so-fong-15.jpg"
              alt="So Fong under sail"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img
              src="/vessels/so-fong-14.jpg"
              alt="So Fong on the water"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-copy">
            <p className="eyebrow">1937</p>
            <h2>Masterful construction and epic maiden voyage</h2>
            <p>
              So Fong was meticulously constructed over seven months by approximately 250 skilled artisans at the
              prestigious Ah King Slipway. The vessel featured exquisite teak planking, a sturdy yacal keel and frames,
              elegant camphor deck beams, and intricate Chinese carvings that showcased local craftsmanship. Her
              impressive hollow Sitka spruce masts were specially imported from Germany’s celebrated Abeking &amp;
              Rasmussen yard.
            </p>
            <p>
              Immediately after her launch in March 1937, she embarked on an ambitious 30,000-mile circumnavigation,
              sailing through the Philippines, South Seas, Indian Ocean, Red Sea, Mediterranean, and South Atlantic,
              finally reaching San Juan, Puerto Rico in April 1938.
            </p>
          </div>
        </section>

        <section className="vessel-story">
          <div className="vessel-story-copy">
            <p className="eyebrow">1940s–1990</p>
            <h2>Wartime service and dramatic Cold War captivity</h2>
            <p>
              During the turbulent years of World War II, the reliable So Fong was requisitioned by the U.S. Coast Guard
              for essential wartime operations. After the conflict ended, she returned to the Pacific and established a
              distinguished racing career.
            </p>
            <p>
              In a dramatic turn of events in 1984, Vietnamese authorities seized the vessel in the Pacific, suspecting
              espionage due to her sophisticated navigation equipment. After spending nearly a decade abandoned at
              anchor, the determined classic yacht enthusiast Robert Verschoyle located the neglected So Fong in 1989.
              He completed an intensive 11-month restoration in Saigon before executing a daring nighttime escape in
              1990.
            </p>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/so-fong-10.jpg"
              className="img-focus-deck"
              alt="So Fong sailing offshore"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img
              src="/vessels/so-fong-02.jpg"
              className="img-focus-low"
              alt="So Fong restored and sailing"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-copy">
            <p className="eyebrow">2000–2025</p>
            <h2>Modern renaissance and triumphant homecoming</h2>
            <p>
              Following her dramatic escape, So Fong underwent further extensive restoration in Antibes, France from
              2000–2002. Based in Mallorca during the early 2000s, she achieved racing glory by winning the prestigious
              2006 Trophée Rolex at the Voiles de St. Tropez.
            </p>
            <p>
              After being listed for sale in 2013, she changed ownership in early 2025 for approximately $1.2 million,
              culminating in her emotional return to Hong Kong waters.
            </p>
          </div>
        </section>

        <section className="vessel-restore" id="design">
          <div className="vessel-restore-intro">
            <p className="eyebrow">Technical Excellence</p>
            <h2>Timeless design, still ready for sea</h2>
            <p>
              The majestic So Fong measures 25 metres overall with a 21.43-metre waterline and carries an impressive 242
              square metres of sail. Powered by a dependable 190hp Perkins Sabre engine, she achieves a respectable top
              speed of 9 knots with an 800-nautical-mile range. Her robust construction includes 30,000 pounds of lead
              ballast, recognised as the largest ever cast in Hong Kong at the time.
            </p>
          </div>

          <div className="vessel-features">
            <p className="vessel-features-label">Classic form. Modern systems.</p>
            <ul>
              {features.map((feature) => (
                <li key={feature.title}>
                  <strong>{feature.title}</strong>
                  <span>{feature.detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="vessel-restore-note">
            The beautifully appointed vessel accommodates seven guests in three comfortable staterooms plus crew
            quarters, seamlessly blending original features like hand-carved panelling with modern systems including
            efficient Webasto air conditioning and a reliable HEM water maker.
          </p>
        </section>

        <section className="charter vessel-charter" id="homecoming">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/so-fong-05.jpg)' }}
          />
          <div className="charter-content">
            <p className="eyebrow">Home Again</p>
            <h2>Back where her story began</h2>
            <p>
              Nearly ninety years after she first slipped into Hong Kong waters, So Fong sails once more among the
              city’s historic fleet — a Sparkman &amp; Stephens classic, built by local hands, returned at last to
              Fragrant Harbour. Now happily back in her home waters, she continues to sail as a proud testament to both
              classic yacht design and Hong Kong’s rich boatbuilding heritage.
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
