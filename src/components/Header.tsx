import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { site } from '../data/site'
import {
  ArrowIcon,
  CalendarIcon,
  ChevronIcon,
  CloseIcon,
  MenuIcon,
  PhoneIcon,
} from './Icons'
import { Logo } from './Logo'

const navClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'nav-link is-active' : 'nav-link'

export function Header() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [kurumsalOpen, setKurumsalOpen] = useState(false)
  const kurumsalActive = location.pathname === '/vizyon-misyon'

  const closeMenus = () => {
    setOpen(false)
    setKurumsalOpen(false)
  }

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand-link" aria-label="Adil Gayrimenkul anasayfa" onClick={closeMenus}>
          <Logo />
        </Link>

        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Ana menü">
          <NavLink to="/" className={navClass} end onClick={closeMenus}>
            ANA SAYFA
          </NavLink>

          <div className={kurumsalOpen ? 'nav-dropdown is-open' : 'nav-dropdown'}>
            <button
              type="button"
              className={kurumsalActive ? 'nav-link is-active dropdown-trigger' : 'nav-link dropdown-trigger'}
              aria-expanded={kurumsalOpen}
              onClick={() => setKurumsalOpen((value) => !value)}
            >
              KURUMSAL
              <ChevronIcon className="nav-chevron" />
            </button>
            <div className="dropdown-menu">
              <NavLink to="/vizyon-misyon#vizyon" onClick={closeMenus}>
                Vizyonumuz
              </NavLink>
              <NavLink to="/vizyon-misyon#misyon" onClick={closeMenus}>
                Misyonumuz
              </NavLink>
            </div>
          </div>

          <NavLink to="/galeri" className={navClass} onClick={closeMenus}>
            GALERİ ve REFERANSLARIMIZ
          </NavLink>
          <NavLink to="/haberler" className={navClass} onClick={closeMenus}>
            SEKTÖR HABERLERİ
          </NavLink>
          <NavLink to="/iletisim" className={navClass} onClick={closeMenus}>
            İLETİŞİM
          </NavLink>
          <Link to="/iletisim" className="btn btn-gold nav-cta" onClick={closeMenus}>
            <CalendarIcon />
            ÜCRETSİZ KEŞİF AL
          </Link>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={site.phoneHref}>
            <PhoneIcon className="header-phone-icon" />
            <span>
              <small>Bizi Arayın</small>
              {site.phoneDisplay}
            </span>
          </a>
          <Link to="/iletisim" className="btn btn-gold">
            <CalendarIcon />
            ÜCRETSİZ KEŞİF AL
            <ArrowIcon />
          </Link>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </header>
  )
}
