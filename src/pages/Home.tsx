import { Link } from 'react-router-dom'
import { featuredGallery, HERO_IMAGE } from '../data/gallery'
import { site } from '../data/site'
import {
  ArrowIcon,
  FastIcon,
  LocationIcon,
  PhoneIcon,
  PortfolioIcon,
  ShieldIcon,
  WhatsAppIcon,
} from '../components/Icons'

export function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
        <div className="hero-overlay" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">DOĞRU YATIRIM, GÜVENİLİR GAYRİMENKUL</p>
            <h1>Hayalinizdeki Gayrimenkule Güvenle Ulaşın</h1>
            <p className="hero-lead">
              Konya ve çevresinde konut, ticari ve arsa yatırımlarınızda şeffaf süreç,
              uzman kadro ve güvenilir danışmanlık sunuyoruz.
            </p>
            <Link to="/galeri" className="btn btn-outline">
              GALERİYİ İNCELE
              <ArrowIcon />
            </Link>
          </div>

          <aside className="hero-card">
            <p className="hero-card-kicker">Hoş geldiniz</p>
            <h2>Konya’da güvenilir gayrimenkul danışmanlığı</h2>
            <p>
              İlan yayınlamıyoruz. Size özel keşif, doğru lokasyon ve şeffaf süreçle
              yanınızdayız.
            </p>
            <div className="hero-stats">
              <div>
                <strong>15+</strong>
                <span>Yıl tecrübe</span>
              </div>
              <div>
                <strong>500+</strong>
                <span>Tamamlanan süreç</span>
              </div>
              <div>
                <strong>%100</strong>
                <span>Şeffaf yaklaşım</span>
              </div>
            </div>
            <Link to="/iletisim" className="btn btn-gold btn-full">
              RANDEVU AL
              <ArrowIcon />
            </Link>
          </aside>
        </div>
      </section>

      <section className="featured">
        <div className="container featured-layout">
          <div className="featured-intro">
            <p className="vertical-title">GALERİDEN KARELER</p>
            <div>
              <p className="featured-text">
                Ofisimizden ve tamamlanan süreçlerimizden seçilmiş kareler.
              </p>
              <Link to="/galeri" className="btn btn-dark">
                TÜM GALERİ
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div className="featured-track">
            {featuredGallery.map((item) => (
              <Link to="/galeri" className="property-card" key={item.id}>
                <div className="card-image">
                  <img src={item.thumb} alt={item.title} loading="lazy" decoding="async" />
                </div>
              
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="values">
        <div className="container values-grid">
          <article>
            <ShieldIcon />
            <h3>Güvenilir Danışmanlık</h3>
            <p>Her adımda şeffaf bilgi ve yanınızda duran uzman ekip.</p>
          </article>
          <article>
            <PortfolioIcon />
            <h3>Geniş Tecrübe</h3>
            <p>Konut, ticari ve arsa süreçlerinde birikmiş saha deneyimi.</p>
          </article>
          <article>
            <LocationIcon />
            <h3>Değerli Lokasyonlar</h3>
            <p>Konya ve çevresinde doğru bölge seçimi için yerel bilgi.</p>
          </article>
          <article>
            <FastIcon />
            <h3>Hızlı ve Kolay Süreç</h3>
            <p>Keşiften kapanışa kadar sade, takip edilebilir bir yol.</p>
          </article>
          <div className="values-contact">
            <a href={site.whatsappHref} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span>
                <small>WHATSAPP HATTI</small>
                {site.phoneDisplay}
              </span>
            </a>
            <a href={site.phoneHref}>
              <PhoneIcon />
              <span>
                <small>HEMEN ARAYIN</small>
                {site.phoneDisplay}
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="skyline" aria-hidden="true">
          <svg viewBox="0 0 640 160" fill="none">
            <path
              d="M20 140V90h24v50M50 140V70l22-18 22 18v70M100 140V55h18v85M128 140V80h30v60M168 140V48l20-16 20 16v92M220 140V62h16V140M246 140V36h40v104M296 140V72h22v68M328 140V58h36v82M374 140V44l18-14 18 14v96M420 140V78h20v62M450 140V50h28v90M488 140V66h18v74M516 140V40h42v100M568 140V84h28v56"
              stroke="#C9A227"
              strokeWidth="1.4"
            />
            <path d="M0 140h640" stroke="#C9A227" strokeWidth="1.2" />
          </svg>
        </div>
        <div className="container about-preview-grid">
          <div>
            <p className="brand-name">ADİL GAYRİMENKUL</p>
            <p className="about-kicker">Güven, şeffaflık ve doğru yatırım.</p>
          </div>
          <p className="about-copy">
            Gayrimenkulde doğru karar; acele ilan değil, doğru bilgi ve güvenilir
            rehberlikle alınır. Vizyonumuz ve misyonumuz, her müşterimize bu
            standartta hizmet vermektir.
          </p>
          <Link to="/vizyon-misyon" className="btn btn-dark">
            HAKKIMIZDA
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </>
  )
}
