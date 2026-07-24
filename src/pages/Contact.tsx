import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

const EMAIL = 'info@hongkonghistoricvessels.org'

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact Us — Hong Kong Historic Vessels'
    return () => {
      document.title = 'Hong Kong Historic Vessels Foundation'
    }
  }, [])

  return (
    <>
      <SiteHeader />

      <main className="contact-page" id="top">
        <section className="contact-hero">
          <div className="contact-hero-media" aria-hidden="true">
            <img src="/hong-kong-historic-vessels-home-way-foong-05.jpg" alt="" />
            <div className="contact-hero-veil" />
          </div>

          <div className="contact-hero-content">
            <p className="brand-signal animate-in">Hong Kong Historic Vessels</p>
            <h1 className="animate-in delay-1">Contact Us</h1>
            <p className="hero-lede animate-in delay-2">
              For more information about any vessel in our fleet, or to enquire about private charters, please get in
              touch.
            </p>
            <div className="hero-actions animate-in delay-3">
              <a className="btn btn-brass" href={`mailto:${EMAIL}`}>
                Email the Foundation
              </a>
              <Link className="btn btn-ghost" to="/#fleet">
                Explore the Fleet
              </Link>
            </div>
          </div>
        </section>

        <section className="contact-panel" aria-labelledby="contact-email-heading">
          <div className="contact-panel-inner">
            <p className="eyebrow">Direct Line</p>
            <h2 id="contact-email-heading">Write to us</h2>
            <p>
              We welcome enquiries about the fleet, restoration stories, and private charters aboard our flagship
              vessels.
            </p>
            <a className="contact-email" href={`mailto:${EMAIL}`}>
              {EMAIL}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
