import { useReveal } from '../hooks/useReveal'

const photos = [
  {
    bg: `radial-gradient(ellipse at 40% 60%, rgba(232,160,32,0.12) 0%, transparent 50%), linear-gradient(135deg, #0f0f0f 0%, #1a1506 40%, #0d0d0d 100%)`,
    label: '1967 Ford Mustang · Pony Club Show',
    tag: 'AERIAL · HERO SHOT',
    tagColor: 'rgba(232,160,32,0.3)',
    span: true,
  },
  {
    bg: 'linear-gradient(135deg, #0a0a12 0%, #0d1520 50%, #080808 100%)',
    label: 'Porsche 911 · Cars & Coffee SD',
    tag: 'TOP DOWN',
    tagColor: 'rgba(100,120,200,0.3)',
  },
  {
    bg: 'linear-gradient(135deg, #120a0a 0%, #200d0d 50%, #080808 100%)',
    label: 'Ferrari 488 · Miramar Show',
    tag: '45° ANGLE',
    tagColor: 'rgba(200,60,40,0.3)',
  },
  {
    bg: 'linear-gradient(135deg, #0a120a 0%, #0d200d 50%, #080808 100%)',
    label: 'Lamborghini Huracán · Private',
    tag: 'ORBIT SHOT',
    tagColor: 'rgba(40,180,60,0.3)',
  },
  {
    bg: 'linear-gradient(135deg, #120a12 0%, #1a0d1a 50%, #080808 100%)',
    label: 'Dodge Challenger · Sunset Session',
    tag: 'DUSK SHOOT',
    tagColor: 'rgba(160,60,200,0.3)',
  },
]

export default function Portfolio() {
  const ref = useReveal()

  return (
    <section className="px-12 pb-[120px] pt-[80px] bg-carbon" id="portfolio">
      <div className="flex items-center gap-4 font-condensed text-[0.72rem] tracking-[0.4em] uppercase text-amber mb-[60px] section-label">
        Gallery
      </div>
      <div ref={ref} className="reveal grid gap-[3px]"
        style={{ gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '280px 200px' }}>
        {photos.map((photo, i) => (
          <div key={i}
            className="group relative overflow-hidden cursor-pointer"
            style={photo.span ? { gridRow: 'span 2' } : {}}>
            <div className="w-full h-full flex items-center justify-center transition-transform duration-[600ms] group-hover:scale-[1.04]"
              style={{ background: photo.bg }}>
              <span className="font-bebas text-[0.85rem] tracking-[0.25em]" style={{ color: photo.tagColor }}>
                {photo.tag}
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5 font-condensed text-[0.78rem] tracking-[0.18em] uppercase text-silver opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
              style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9), transparent)' }}>
              {photo.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
