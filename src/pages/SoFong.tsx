import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

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
            <img src="/vessel-so-fong.jpg" alt="" />
            <div className="vessel-hero-veil" />
          </div>

          <div className="vessel-hero-content">
            <p className="brand-signal animate-in">Hong Kong Historic Vessels</p>
            <p className="vessel-kicker animate-in delay-1">S/Y · 1937 · Hong Kong-Built Gaff Schooner</p>
            <h1 className="animate-in delay-1">So Fong</h1>
            <p className="hero-lede animate-in delay-2">
              An enduring classic schooner’s journey — “Beautiful Girl” in Cantonese, home again in Fragrant Harbour
              after nearly nine decades at sea.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a className="btn btn-brass" href="#story">
                Read Her Story
              </a>
              <Link className="btn btn-ghost" to="/#fleet">
                Explore the Fleet
              </Link>
            </div>
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
              src="/vessel-so-fong.jpg"
              alt="So Fong under sail — placeholder for hong-kong-historic-vessels-so-fong-photos-15"
            />
            <figcaption>Placeholder · so-fong-photos-15</figcaption>
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img
              src="/hong-kong-historic-vessels-home-so-fong-02.jpg"
              alt="So Fong construction detail — placeholder for hong-kong-historic-vessels-so-fong-photos-14"
            />
            <figcaption>Placeholder · so-fong-photos-14</figcaption>
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
              src="/vessel-so-fong.jpg"
              className="img-focus-deck"
              alt="So Fong on the water — placeholder for hong-kong-historic-vessels-so-fong-photos-10"
            />
            <figcaption>Placeholder · so-fong-photos-10</figcaption>
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img
              src="/hong-kong-historic-vessels-home-so-fong-02.jpg"
              className="img-focus-low"
              alt="So Fong restored — placeholder for hong-kong-historic-vessels-so-fong-photos-02"
            />
            <figcaption>Placeholder · so-fong-photos-02</figcaption>
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

        <section className="charter vessel-charter" id="homecoming">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessel-so-fong.jpg)' }}
          />
          <div className="charter-veil" aria-hidden="true" />
          <div className="charter-content">
            <p className="eyebrow light">Home Again</p>
            <h2>Back where her story began</h2>
            <p>
              Nearly ninety years after she first slipped into Hong Kong waters, So Fong sails once more among the
              city’s historic fleet — a Sparkman &amp; Stephens classic, built by local hands, returned at last to
              Fragrant Harbour.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-brass" to="/#fleet">
                Meet the Fleet
              </Link>
              <Link className="btn btn-ghost" to="/contact">
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
