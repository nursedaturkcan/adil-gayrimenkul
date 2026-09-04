import { useCallback, useState } from 'react'
import { newsItems, GALLERY_HERO } from '../data/gallery'
import { Lightbox } from '../components/Lightbox'
import { PageHero } from '../components/PageHero'
import { PlayIcon } from '../components/Icons'

export function News() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])
  const prev = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? current : (current - 1 + newsItems.length) % newsItems.length,
      ),
    [],
  )
  const next = useCallback(
    () =>
      setActiveIndex((current) =>
        current === null ? current : (current + 1) % newsItems.length,
      ),
    [],
  )

  return (
    <>
      <PageHero
        eyebrow="HABERLER"
        title="Gayrimenkul sektöründen haberler"
        text="Sektörden gelişmeler, haber kareleri ve videolar."
        image={GALLERY_HERO}
      />

      <section className="gallery-page">
        <div className="container">
          <div className="gallery-grid">
            {newsItems.map((item, index) => (
              <button
                type="button"
                className={item.kind === 'video' ? 'gallery-card is-video' : 'gallery-card'}
                key={item.id}
                onClick={() => setActiveIndex(index)}
              >
                {item.kind === 'video' ? (
                  <span className="gallery-play">
                    <PlayIcon />
                  </span>
                ) : (
                  <img src={item.thumb} alt={item.title} loading="lazy" decoding="async" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <Lightbox
          items={newsItems}
          index={activeIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  )
}
