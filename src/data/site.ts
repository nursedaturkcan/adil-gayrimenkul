export const site = {
  name: 'Adil Gayrimenkul',
  tagline: 'Doğru yatırım, güvenilir gayrimenkul',
  phoneDisplay: '+90 538 487 24 20',
  phoneHref: 'tel:+905384872420',
  whatsappHref: 'https://wa.me/905384872420',
  email: 'info@adilgayrimenkul.com',
  address: 'Kemerli cad nişantaşı mah. No:2/B Selçuklu / Konya',
  hours: 'Pazartesi – Cumartesi, 09:00 – 19:00',
  mapLat: 37.87647,
  mapLng: 32.479829,
}

const mapQuery = encodeURIComponent(`${site.address} ADİL GAYRİMENKUL`)

export const mapEmbedSrc = `https://www.google.com/maps?q=${mapQuery}&ll=${site.mapLat},${site.mapLng}&z=17&hl=tr&ie=UTF8&iwloc=A&output=embed`

export const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`
