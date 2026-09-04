import { useEffect } from 'react'
import { ArrowIcon, CloseIcon } from './Icons'
import type { GalleryItem } from '../data/gallery'

type LightboxProps = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export function Lightbox({ items, index, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[index]

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrev()
      if (event.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  if (!item) return null

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={item.title}>
      <button type="button" className="lightbox-backdrop" aria-label="Kapat" onClick={onClose} />
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Kapat">
        <CloseIcon />
      </button>
      <button type="button" className="lightbox-nav prev" onClick={onPrev} aria-label="Önceki">
        <ArrowIcon />
      </button>
      <figure className="lightbox-figure">
        {item.kind === 'video' ? (
          <video key={item.id} src={item.src} controls autoPlay playsInline />
        ) : (
          <img src={item.src} alt={item.title} />
        )}
      </figure>
      <button type="button" className="lightbox-nav next" onClick={onNext} aria-label="Sonraki">
        <ArrowIcon />
      </button>
    </div>
  )
}
