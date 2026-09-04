import { useState, type FormEvent } from 'react'
import { HERO_IMAGE } from '../data/gallery'
import { mapEmbedSrc, mapLink, site } from '../data/site'
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../components/Icons'
import { PageHero } from '../components/PageHero'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '').trim()
    const phone = String(data.get('phone') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()
    const text = [
      'Merhaba, Adil Gayrimenkul iletişim formundan yazıyorum.',
      `Ad Soyad: ${name}`,
      `Telefon: ${phone}`,
      `Mesaj: ${message}`,
    ].join('\n')

    window.open(
      `${site.whatsappHref}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
  }

  return (
    <>
      <PageHero
        eyebrow="İLETİŞİM"
        title="Bize ulaşın"
        text="Ücretsiz keşif, yatırım görüşmesi veya genel sorularınız için formu doldurun ya da doğrudan arayın."
        image={HERO_IMAGE}
      />

      <section className="contact-page">
        <div className="container contact-layout">
          <form className="contact-form" onSubmit={onSubmit}>
            <h2>Mesaj gönderin</h2>
            <p>
              WhatsApp ile gönder’e basınca sohbet açılır; adınız ve mesajınız hazır gelir.
              Göndermeyi WhatsApp üzerinden tamamlamanız yeterlidir.
            </p>
            <label>
              Ad Soyad
              <input name="name" type="text" required placeholder="Adınız" />
            </label>
            <label>
              Telefon
              <input name="phone" type="tel" required placeholder="05xx xxx xx xx" />
            </label>
            <label>
              Mesajınız
              <textarea name="message" rows={5} required placeholder="Nasıl yardımcı olalım?" />
            </label>
            <button type="submit" className="btn btn-gold btn-full">
              <WhatsAppIcon />
              WHATSAPP İLE GÖNDER
            </button>
            {sent && (
              <p className="form-success">
                WhatsApp açıldı. Mesajı oradan göndererek bize ulaşabilirsiniz.
              </p>
            )}
          </form>

          <aside className="contact-aside">
            <div className="contact-box">
              <h3>İletişim bilgileri</h3>
              <a href={site.phoneHref}>
                <PhoneIcon />
                <span>
                  <small>Telefon</small>
                  {site.phoneDisplay}
                </span>
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noreferrer">
                <WhatsAppIcon />
                <span>
                  <small>WhatsApp</small>
                  {site.phoneDisplay}
                </span>
              </a>
              <a href={`mailto:${site.email}`}>
                <MailIcon />
                <span>
                  <small>E-posta</small>
                  {site.email}
                </span>
              </a>
              <p>
                <PinIcon />
                <span>
                  <small>Adres</small>
                  {site.address}
                </span>
              </p>
              <p className="contact-hours">{site.hours}</p>
            </div>
            <div className="gold-cta">
              <p>Hemen görüşelim</p>
              <a className="btn btn-dark btn-full" href={site.phoneHref}>
                <PhoneIcon /> {site.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>

        <div className="map-wrap">
          <div className="map-frame">
            <iframe
              title="Adil Gayrimenkul konum"
              src={mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-pin-label">
              ADİL GAYRİMENKUL
            </div>
          </div>
          <a className="map-link" href={mapLink} target="_blank" rel="noreferrer">
            Google Haritalar’da aç
          </a>
        </div>
      </section>
    </>
  )
}
