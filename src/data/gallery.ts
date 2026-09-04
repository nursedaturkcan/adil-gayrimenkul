import galleryHero from '../assets/images/galleryImages/galeri14.jpeg?w=1200&format=webp&quality=72'

export type GalleryKind = 'image' | 'video'

export type GalleryItem = {
  id: string
  title: string
  src: string
  thumb: string
  kind: GalleryKind
}

const imageThumbs = import.meta.glob('../assets/images/galleryImages/*.{jpeg,jpg,png}', {
  eager: true,
  query: { w: '640', format: 'webp', quality: '70' },
  import: 'default',
}) as Record<string, string>

const imageFull = import.meta.glob('../assets/images/galleryImages/*.{jpeg,jpg,png}', {
  eager: true,
  query: { w: '1400', format: 'webp', quality: '78' },
  import: 'default',
}) as Record<string, string>

const videos = import.meta.glob('../assets/images/galleryImages/*.{mp4,webm,mov}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

function fileName(path: string) {
  return (path.split('?')[0] ?? path).split('/').pop() ?? path
}

function isVideo(path: string) {
  return /\.(mp4|webm|mov)$/i.test(path)
}

type ParsedItem = GalleryItem & {
  section: 'gallery' | 'news'
  order: number
}

function parsePath(path: string): { section: 'gallery' | 'news'; order: number; kind: GalleryKind } | null {
  const newsMatch = path.match(/news?(\d+)\./i)
  if (newsMatch) {
    return { section: 'news', order: Number(newsMatch[1]), kind: 'image' }
  }

  const galeriMatch = path.match(/galeri(\d+)\./i)
  if (!galeriMatch) return null

  const order = Number(galeriMatch[1])
  const kind: GalleryKind = isVideo(path) ? 'video' : 'image'
  return {
    section: kind === 'video' ? 'news' : 'gallery',
    order,
    kind,
  }
}

const imageItems: ParsedItem[] = Object.entries(imageThumbs).flatMap(([path, thumb]) => {
  const meta = parsePath(path)
  if (!meta || meta.kind === 'video') return []

  const name = fileName(path)
  const fullEntry = Object.entries(imageFull).find(([fullPath]) => fileName(fullPath) === name)
  const src = fullEntry?.[1] ?? thumb
  const order = meta.order

  return [
    {
      id: meta.section === 'news' ? `news-${order}` : `galeri-${order}`,
      title: meta.section === 'news' ? `Haber ${order}` : `Kare ${order}`,
      src,
      thumb,
      kind: 'image' as const,
      section: meta.section,
      order,
    },
  ]
})

const videoItems: ParsedItem[] = Object.entries(videos).flatMap(([path, src]) => {
  const meta = parsePath(path)
  if (!meta || meta.kind !== 'video') return []

  return [
    {
      id: `galeri-${meta.order}`,
      title: `Video ${meta.order}`,
      src,
      thumb: src,
      kind: 'video' as const,
      section: 'news' as const,
      order: meta.order,
    },
  ]
})

function toItem({ id, title, src, thumb, kind }: ParsedItem): GalleryItem {
  return { id, title, src, thumb, kind }
}

export const galleryPhotos = imageItems
  .filter((item) => item.section === 'gallery')
  .sort((a, b) => a.order - b.order)
  .map(toItem)

export const newsItems = [...videoItems, ...imageItems.filter((item) => item.section === 'news')]
  .sort((a, b) => {
    if (a.kind !== b.kind) return a.kind === 'video' ? -1 : 1
    return a.order - b.order
  })
  .map(toItem)

export const featuredGallery = galleryPhotos.slice(0, 4)

export const GALLERY_HERO = galleryHero

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=70'
