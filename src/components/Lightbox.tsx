import { useEffect, useRef, useState } from 'react'
import { ArrowIcon, CloseIcon, PlayIcon } from './Icons'
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
          <LightboxVideo src={item.src} poster={item.thumb} title={item.title} />
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

function LightboxVideo({ src, poster, title }: { src: string; poster: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [needsTap, setNeedsTap] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      const play = video.play()
      if (play) {
        play.then(() => setNeedsTap(false)).catch(() => setNeedsTap(true))
      }
    }

    tryPlay()
    return () => {
      video.pause()
    }
  }, [src])

  return (
    <>
      <video
        ref={videoRef}
        key={src}
        poster={poster}
        controls
        playsInline
        preload="auto"
        onPlay={() => setNeedsTap(false)}
      >
        <source src={src} type="video/mp4" />
      </video>
      {needsTap && (
        <button
          type="button"
          className="lightbox-video-play"
          aria-label={`${title} oynat`}
          onClick={() => {
            const video = videoRef.current
            if (!video) return
            void video.play().then(() => setNeedsTap(false)).catch(() => setNeedsTap(true))
          }}
        >
          <PlayIcon />
        </button>
      )}
    </>
  )
}
