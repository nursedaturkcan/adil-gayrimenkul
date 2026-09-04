import { Link } from 'react-router-dom'
import { site } from '../data/site'
import { MailIcon, PhoneIcon, PinIcon } from './Icons'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p className="footer-tagline">{site.tagline}</p>
        </div>
        <nav className="footer-links" aria-label="Alt menü">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/vizyon-misyon">Vizyon & Misyon</Link>
          <Link to="/galeri">Galeri</Link>
          <Link to="/haberler">Sektör Haberleri</Link>
          <Link to="/iletisim">İletişim</Link>
        </nav>
        <div className="footer-contact">
          <a href={site.phoneHref}>
            <PhoneIcon /> {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`}>
            <MailIcon /> {site.email}
          </a>
          <p>
            <PinIcon /> {site.address}
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          © {new Date().getFullYear()} Adil Gayrimenkul. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}
