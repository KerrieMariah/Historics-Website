import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const features = [
  {
    title: 'Fore-deck Dining',
    detail: 'A 16-person table for al fresco meals with panoramic views.',
  },
  {
    title: 'Lower-deck Saloon',
    detail: 'Elegant seating for 10, ideal for intimate gatherings.',
  },
  {
    title: 'Aft-deck Lounge',
    detail: 'Space for up to 16 guests to relax in style.',
  },
  {
    title: 'Fully Equipped Galley',
    detail: 'Ready for gourmet preparations.',
  },
  {
    title: 'Head with Shower',
    detail: 'Ensuring convenience on longer cruises.',
  },
]

export function WayFoong() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'M/Y Way Foong — Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="vessel-page" id="top">
        <section className="vessel-hero">
          <div className="vessel-hero-media" aria-hidden="true">
            <img src="/vessels/way-foong-charters-01.jpg" alt="" />
            <div className="vessel-hero-veil" />
          </div>

          <div className="vessel-hero-content">
            <h1 className="animate-in">Way Foong</h1>
            <p className="hero-lede animate-in delay-1">
              A timeless icon of Hong Kong’s maritime heritage — seventy feet of Burmese teak, still keeping the
              islands afloat in style.
            </p>
          </div>
        </section>

        <section className="vessel-facts" aria-label="Vessel particulars">
          <div className="vessel-facts-inner">
            <div>
              <span>Launched</span>
              <strong>September 1930</strong>
            </div>
            <div>
              <span>Length</span>
              <strong>70 feet</strong>
            </div>
            <div>
              <span>Beam</span>
              <strong>13 feet</strong>
            </div>
            <div>
              <span>Built of</span>
              <strong>Burmese teak</strong>
            </div>
          </div>
        </section>

        <section className="vessel-story" id="story">
          <div className="vessel-story-copy">
            <p className="eyebrow">Her Legacy</p>
            <h2>From coal-fired steam to harbour legend</h2>
            <p>
              Way Foong’s legacy begins in September 1930, when she was launched as a coal-fired steam vessel — a
              slightly modified replica of her 1898 predecessor of the same name. Measuring 70 feet in length with a
              13-foot beam, she was designed for both utility and grace, powered by a boiler that propelled her through
              Hong Kong’s bustling waters.
            </p>
            <p>
              In her early years, she served HSBC in unique ways, including the famed “burning picnics” of the 1930s,
              where junior staff from the bank’s Note Cancellation Department used old banknotes as fuel in her furnace.
            </p>
          </div>
          <figure className="vessel-story-media">
            <img
              src="/vessels/way-foong-02.jpg"
              alt="Way Foong on the water"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </section>

        <section className="vessel-chapter">
          <figure className="vessel-chapter-media">
            <img
              src="/vessels/way-foong-01.jpg"
              alt="Way Foong against the Hong Kong skyline"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <div className="vessel-chapter-copy">
            <p className="eyebrow">Seventy Years Afloat</p>
            <h2>A working beauty of teak and tradition</h2>
            <p>
              By the 1980s, Way Foong had evolved into a multifaceted asset for HSBC. Before the Cross Harbour Tunnel’s
              construction, she shuttled executives from the Peak to Central. Later, she provided recreational outings
              for junior officers and continued essential ferry services to remote islands, all while maintained by a
              dedicated crew of five: coxswain, assistant, chief engineer, assistant engineer, and deckhand.
            </p>
            <p>
              Her annual upkeep cost around HK$200,000, reflecting the bank’s commitment to preserving this wooden beauty
              of Burmese teak and yakal. Equipped with a spacious engine room, forward cabin, two heads, and modern
              amenities like radar in an enlarged pilothouse, she embodied a blend of tradition and functionality. Her
              teak decks, softened by years of scrubbing, and graceful lines earned her admiration — often spotted
              keeping the islands afloat in style.
            </p>
            <p>
              After over 70 years of service to HSBC, Way Foong passed into private hands in the early 2000s, acquired by
              a Hong Kong-based family passionate about classic vessels. As longtime admirers, they preserved her 1930s
              charm while ensuring she remains a vital part of Hong Kong’s yachting history.
            </p>
          </div>
        </section>

        <section className="vessel-restore" id="restore">
          <div className="vessel-restore-intro">
            <p className="eyebrow">Restored</p>
            <h2>Lovingly restored for modern luxury</h2>
            <p>
              Way Foong has undergone thoughtful restorations in 2007, 2019, and most recently in 2020 at the Aberdeen
              shipyards under the expert supervision of Jepsen Designs. These updates expanded her aft-deck seating for
              enhanced comfort, remodelled the lower-deck saloon to include a cosy sleeping cabin, and enlarged the
              forward dining area.
            </p>
          </div>

          <div className="vessel-features">
            <p className="vessel-features-label">Built entirely of solid Burmese teak, she now features</p>
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
            Her original features — the shortened funnel, now aesthetic rather than functional, and brass telegraph for
            direct communication — blend effortlessly with updates such as a radar-equipped pilothouse and 10.5 tons of
            pig iron ballast for stability. The result is a vessel that sails smoothly, with a gentle roll even in open
            waters, while honouring her heritage.
          </p>
        </section>

        <section className="charter vessel-charter" id="charter">
          <div
            className="charter-media"
            aria-hidden="true"
            style={{ backgroundImage: 'url(/vessels/way-foong-charters-05.jpg)' }}
          />
          <div className="charter-content">
            <p className="eyebrow">Private Charter</p>
            <h2>Charter Way Foong: sail into history</h2>
            <p>
              Since August 2020, Way Foong has been delighting charter guests with her unique blend of history and
              luxury. Regularly seen in Sai Kung or along Hong Kong Island’s south side — often alongside the fleet’s
              smaller classic launch, Java — she’s the perfect choice for bespoke adventures. Whether a family outing,
              corporate event, or romantic escape, Way Foong offers a rare opportunity to cruise on a living piece of
              Hong Kong’s past.
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
