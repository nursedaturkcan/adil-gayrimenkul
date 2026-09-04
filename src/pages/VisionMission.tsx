import { Link } from 'react-router-dom'
import { HERO_IMAGE } from '../data/gallery'
import teamPhoto from '../assets/images/team.jpeg?w=1200&format=webp&quality=72'
import { ArrowIcon, CompassIcon, EyeIcon } from '../components/Icons'
import { PageHero } from '../components/PageHero'

export function VisionMission() {
  return (
    <>
      <PageHero
        eyebrow="KURUMSAL"
        title="Vizyon ve Misyonumuz"
        text="Adil Gayrimenkul olarak gayrimenkul danışmanlığını ilan yoğunluğuyla değil; güven, şeffaflık ve uzmanlıkla tanımlıyoruz."
        image={HERO_IMAGE}
      />

      <section className="vision-section">
        <img
          src={teamPhoto}
          alt="Adil Gayrimenkul ekibi"
          className="hero-image-team"
          loading="lazy"
          decoding="async"
        />
        <div className="container vision-grid">
          <article id="vizyon" className="vision-card">
            <EyeIcon />
            <h2>Vizyonumuz</h2>
            <p>
              Konya ve çevresinde gayrimenkul danışmanlığının güvenilir yüzü olmak;
              yatırımcıların ve ailelerin ilk başvurduğu, şeffaf ve etik duruşuyla
              öne çıkan kurum haline gelmek.
            </p>
            <ul>
              <li>Doğru lokasyon ve doğru zamanlama ile değer üreten rehberlik</li>
              <li>Kısa vadeli satış baskısı yerine uzun vadeli güven ilişkisi</li>
              <li>Yerel bilgiyi uluslararası standartta hizmet kalitesiyle birleştirmek</li>
            </ul>
          </article>

          <article id="misyon" className="vision-card">
            <CompassIcon />
            <h2>Misyonumuz</h2>
            <p>
              Müşterilerimizin ihtiyaçlarını dinlemek, saha gerçeklerini açıkça
              paylaşmak ve her adımda yanlarında durarak doğru yatırım kararına
              ulaşmalarını sağlamak.
            </p>
            <ul>
              <li>Keşif, analiz ve raporlamada şeffaf süreç</li>
              <li>Konut, ticari ve arsa yatırımlarında uzman kadro</li>
              <li>Hızlı iletişim, net bilgi ve takip edilebilir adımlar</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="principles">
        <div className="container">
          <p className="eyebrow">DEĞERLERİMİZ</p>
          <h2 className="section-title">Çalışma ilkelerimiz</h2>
          <div className="principles-grid">
            <article>
              <span>01</span>
              <h3>Güven</h3>
              <p>Söylediğimiz ile yaptığımız aynıdır. Eksik bilgiyle karar aldırmayız.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Şeffaflık</h3>
              <p>Süreç, risk ve fırsatları açık dilde paylaşır; sürpriz bırakmayız.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Uzmanlık</h3>
              <p>Konya piyasasını yerinden bilir, her öneriyi saha verisiyle destekleriz.</p>
            </article>
            <article>
              <span>04</span>
              <h3>İnsan odaklılık</h3>
              <p>Her aile ve yatırımcı için tek tip çözüm değil, size özel yol çizeriz.</p>
            </article>
          </div>
          <div className="principles-cta">
            <Link to="/iletisim" className="btn btn-gold">
              BİZE ULAŞIN
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
