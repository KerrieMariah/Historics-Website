import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const features = [
  {
    title: 'Classic Profile',
    detail: 'Teak covering boards, crafted superstructures, and a deck that keeps traditional aesthetics alive.',
  },
  {
    title: 'Period Hardware',
    detail: 'Restored bronze Herreshoff-style fairleads, custom mooring cleats, and a Lilley & Reynolds steering compass.',
  },
  {
    title: 'Twin Hydraulic Drive',
    detail: 'Twin bronze propellers with dual transmission, modern reliability below a classic waterline.',
  },
  {
    title: 'Blue-Water Form',
    detail: '10-foot draft, long waterline, and 24.2-tonne displacement built for serious seafaring.',
  },
]

export function TaiMoShan() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'S/Y Tai Mo Shan | Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="vessel-page" id="top">
        <section className="vessel-hero">
          <div className="vessel-hero-media vessel-hero-media--taimoshan" aria-hidden="true">
            <img src="/vessels/tai-mo-shan-01.jpg" alt="" fetchPriority="high" />
            <div className="vessel-hero-veil" />
          </div>

          <div className="vessel-hero-content">
            <h1 className="animate-in">Tai Mo Shan</h1>
            <p className="hero-lede animate-in delay-1">
              A phoenix risen from the dockyards. Classic elegance restored beyond her original glory, ready for the
              next chapter.
            </p>
          </div>
        </section>

        <section className="vessel-facts" aria-label="Vessel particulars">
          <div className="vessel-facts-inner">
            <div>
              <span>Launched</span>
              <strong>1933</strong>
            </div>
            <div>
              <span>Length</span>
              <strong>61 feet</strong>
            </div>
            <div>
              <span>On deck</span>
              <strong>54 feet</strong>
            </div>
            <div>
              <span>Designer</span>
              <strong>Harold S. Rouse</strong>
            </div>
          </div>
        </section>

        <section className="vessel-story" id="story">
          <div className="vessel-block-heading">
            <p className="eyebrow">Reborn</p>
            <h2>A phoenix risen from the dockyards</h2>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/simplysailingTMS.jpg"
              alt="Tai Mo Shan under sail, a historical photograph"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-story-body">
            <p>
              The majestic 61-foot ketch Tai Mo Shan is a surviving bridge between Hong Kong’s storied maritime past and
              the pinnacle of modern classic restoration. Originally launched in 1933 from the famed Hong Kong &amp;
              Whampoa Dock Co., this Harold S. Rouse-designed vessel has undergone a monumental, four-year restoration
              in Piraeus, Greece, completed in 2025.
            </p>
            <p>
              More than a rebuild, this project was a reincarnation, meticulously returning a forgotten legend to a
              state that surpasses her original glory. Tai Mo Shan is now ready to write her next chapter, embodying a
              perfect synthesis of classic elegance and 21st-century resilience.
            </p>
          </div>
        </section>

        <section className="vessel-chapter">
          <div className="vessel-block-heading">
            <p className="eyebrow">Her Arc</p>
            <h2>A legacy forged in Hong Kong, reborn in Greece</h2>
          </div>
          <figure className="vessel-chapter-media">
            <img
              src="/tai%20mo%20shan.png"
              alt="Historical photograph of Tai Mo Shan sailing off a coastline"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-body">
            <p>
              Tai Mo Shan’s story is one of survival and an unwavering commitment to preservation, a testament to the
              enduring value of craftsmanship.
            </p>
          </div>
        </section>

        <section className="vessel-story">
          <div className="vessel-block-heading">
            <p className="eyebrow">1933</p>
            <h2>Hong Kong origins</h2>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/tai-mo-shan-01.jpg"
              className="img-focus-deck"
              alt="Tai Mo Shan classic lines"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-story-body">
            <p>
              Conceived by the renowned naval architect Harold S. Rouse in collaboration with Edward Cock, Tai Mo Shan
              was a product of one of the Far East’s most prestigious shipyards. Her construction utilised the finest
              materials of the era: a hull of teak and iroko carvel planking, supported by a robust frame of teak,
              camphor, ipol, and yacal.
            </p>
            <p>
              With a significant lead ballast keel and a formidable 12-foot beam, she was built not just for elegance
              but for serious seafaring, her design promising both speed and stability.
            </p>
          </div>
        </section>

        <section className="vessel-chapter">
          <div className="vessel-block-heading">
            <p className="eyebrow">2021–2025</p>
            <h2>The grand rebuild</h2>
          </div>
          <figure className="vessel-chapter-media">
            <img
              src="/tai%20mo%20shan%20grand%20rebuild.jpeg"
              alt="Tai Mo Shan’s deck during the grand rebuild in the yard"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-body">
            <p>
              After nearly nine decades of service, Tai Mo Shan arrived at Boat Masters in Piraeus for what would become
              a comprehensive, stem-to-stern restoration. The vessel was entirely dismantled, with her interior, deck,
              and superstructures carefully recorded and removed.
            </p>
            <p>
              The team executed extensive structural work, including crafting a new laminated stem, fore and aft
              deadwood, and replacing 20% of the original bronze keelbolts. The deck was entirely renewed with new teak
              laid on a marine plywood substrate, while the hull was painstakingly repaired, with areas of planking
              routered and reinstated.
            </p>
            <p>
              A new Yanmar 4JH110 diesel engine and a dual transmission hydraulic drive system with twin stainless steel
              shafts were installed, making her a unique and modern classic. The project also included the construction
              of all-new Douglas fir spars, ensuring her classic Bermudan ketch rig will once again catch the wind.
            </p>
          </div>
        </section>

        <section className="vessel-restore" id="design">
          <div className="vessel-restore-intro">
            <p className="eyebrow">Design &amp; Features</p>
            <h2>Where heritage meets modern engineering</h2>
            <p>
              At 54 feet on deck and displacing 24.2 tonnes, Tai Mo Shan is a substantial and powerful yacht. Her
              design, with a significant 10-foot draft and a long waterline, hints at her blue-water capabilities. The
              restoration has preserved her soul while thoughtfully integrating modern advancements: stainless
              chainplates and structural strength blended with the warm traditional tones of iroko and teak.
            </p>
          </div>

          <div className="vessel-features">
            <p className="vessel-features-label">Classic form. Contemporary resolve.</p>
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

        <section className="charter vessel-charter" id="next-chapter">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/tai-mo-shan-01.jpg)' }}
          />
          <div className="charter-content">
            <p className="eyebrow">Next Chapter</p>
            <h2>A new chapter for a maritime icon</h2>
            <p>
              Tai Mo Shan is much more than a restored yacht; she is a phoenix risen. From her launch in the heart of a
              bustling colonial Hong Kong to her rebirth in a Greek yard nearly a century later, her journey mirrors the
              timeless allure of the sea.
            </p>
            <p>
              This meticulous restoration has not only saved a piece of Hong Kong’s boatbuilding heritage but has
              elevated it, ensuring that the vision of Rouse and Cock will captivate a new generation. She is no longer
              a relic of the past, but a fully realised classic, ready for new horizons with the same grace and power
              she possessed in 1933.
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
