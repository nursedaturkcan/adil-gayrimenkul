export const site = {
  name: 'Adil Gayrimenkul',
  tagline: 'Doğru yatırım, güvenilir gayrimenkul',
  phoneDisplay: '+90 538 487 24 20',
  phoneHref: 'tel:+905384872420',
  whatsappHref: 'https://wa.me/905384872420',
  email: 'info@adilgayrimenkul.com',
  address: 'Musalla Bağları Mah. Ankara Cad. No: 12, Selçuklu / Konya',
  hours: 'Pazartesi – Cumartesi, 09:00 – 19:00',
  mapLat: 37.888252,
  mapLng: 32.497814,
}

export const mapEmbedSrc = `https://www.google.com/maps?q=${site.mapLat},${site.mapLng}+(${encodeURIComponent('ADİL GAYRİMENKUL')})&ll=${site.mapLat},${site.mapLng}&z=16&hl=tr&ie=UTF8&iwloc=A&output=embed`

export const mapLink = `https://www.google.com/maps?q=${encodeURIComponent('ADİL GAYRİMENKUL')}@${site.mapLat},${site.mapLng}`
