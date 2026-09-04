import { useCallback, useState } from 'react'
import { galleryPhotos, GALLERY_HERO } from '../data/gallery'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? current : (current - 1 + galleryPhotos.length) % galleryPhotos.length,
      ),
    [],
  )
  const next = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? current : (current + 1) % galleryPhotos.length,
      ),
    [],
  )

  return (
    <>
      <PageHero
        eyebrow="GALERİ"
        title="Çalışmalarımızdan kareler"
        text="Ofis, ekip ve tamamlanan süreçlerimizden fotoğraflar."
        image={GALLERY_HERO}
      />

      <section className="gallery-page">
        <div className="container">
          <div className="gallery-grid">
            {galleryPhotos.map((item, index) => (
              <button
                type="button"
                className="gallery-card"
                key={item.id}
                onClick={() => setActiveIndex(index)}
              >
                <img src={item.src} alt={item.title} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={galleryPhotos}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
