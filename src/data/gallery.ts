import galleryHero from '../assets/images/galleryImages/galeri14.jpeg'

export type GalleryKind = 'image' | 'video'

export type GalleryItem = {
  id: string
  title: string
  src: string
  kind: GalleryKind
}

const files = import.meta.glob('../assets/images/galleryImages/*', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function isVideo(path: string) {
  return /\.(mp4|webm|mov)$/i.test(path)
}

type ParsedItem = GalleryItem & {
  section: 'gallery' | 'news'
  order: number
}

const parsedItems: ParsedItem[] = Object.entries(files).flatMap(([path, src]) => {
  const newsMatch = path.match(/news?(\d+)\./i)
  const galeriMatch = path.match(/galeri(\d+)\./i)

  if (newsMatch) {
    const order = Number(newsMatch[1])
    return [
      {
        id: `news-${order}`,
        title: `Haber ${order}`,
        src,
        kind: 'image' as const,
        section: 'news' as const,
        order,
      },
    ]
  }

  if (!galeriMatch) return []

  const order = Number(galeriMatch[1])
  const kind: GalleryKind = isVideo(path) ? 'video' : 'image'

  return [
    {
      id: `galeri-${order}`,
      title: kind === 'video' ? `Video ${order}` : `Kare ${order}`,
      src,
      kind,
      section: kind === 'video' ? 'news' : 'gallery',
      order,
    },
  ]
})

function toItem({ id, title, src, kind }: ParsedItem): GalleryItem {
  return { id, title, src, kind }
}

export const galleryPhotos = parsedItems
  .filter((item) => item.section === 'gallery')
  .sort((a, b) => a.order - b.order)
  .map(toItem)

export const newsItems = parsedItems
  .filter((item) => item.section === 'news')
  .sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === 'video' ? -1 : 1
    return a.order - b.order
  })
  .map(toItem)

export const featuredGallery = galleryPhotos.slice(0, 4)

export const GALLERY_HERO = galleryHero

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80'
