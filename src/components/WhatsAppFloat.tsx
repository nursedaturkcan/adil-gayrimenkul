import { site } from '../data/site'
import { WhatsAppIcon } from './Icons'

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={site.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp ile yazın"
    >
      <WhatsAppIcon />
    </a>
  )
}
