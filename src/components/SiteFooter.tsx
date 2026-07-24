import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <img src="/logo.svg" alt="" width={48} height={48} />
        <div>
          <strong>Hong Kong Historic Vessels Foundation</strong>
          <span>香港古船協會</span>
        </div>
      </div>
      <nav className="footer-nav" aria-label="Footer">
        <Link to="/wayfoong">Way Foong</Link>
        <Link to="/sofong">So Fong</Link>
        <Link to="/java">Java</Link>
        <Link to="/tai-mo-shan">Tai Mo Shan</Link>
        <Link to="/typhoon">Typhoon</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
      <p className="footer-copy">© {new Date().getFullYear()} hongkonghistoricvessels.com</p>
    </footer>
  )
}
