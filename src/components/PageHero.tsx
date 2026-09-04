type PageHeroProps = {
  eyebrow: string
  title: string
  text: string
  image: string
}

export function PageHero({ eyebrow, title, text, image }: PageHeroProps) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="page-hero-overlay" />
      <div className="container page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="page-hero-text">{text}</p>
      </div>
    </section>
  )
}
