import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: '🏡',
    title: 'Real Estate',
    desc: 'Elevated property views, neighborhood context, and listing video that moves homes faster.',
  },
  {
    icon: '🏗️',
    title: 'Roofing & Construction',
    desc: 'Safe overhead inspections and progress documentation without putting anyone on a ladder.',
  },
  {
    icon: '🏎️',
    title: 'Car Shows & Events',
    desc: 'Cinematic coverage of meets, shows, and events around San Diego.',
  },
  {
    icon: '🔄',
    title: '360° Car Videos',
    desc: 'Signature orbiting aerial videos at car washes and shows — built for the feed.',
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-[80px] lg:py-[120px]" id="services">
      <div className="text-center mb-14">
        <div className="font-condensed text-[0.8rem] tracking-[0.45em] uppercase mb-3" style={{ color: '#38bdf8' }}>
          What We Shoot
        </div>
        <h2 className="font-bebas text-[4rem] sm:text-[5.5rem] tracking-[0.04em] leading-none text-cream">
          Services
        </h2>
      </div>

      <div ref={ref} className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative rounded-xl px-6 py-8 transition-all duration-300 hover:-translate-y-1"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.3), 0 8px 30px rgba(56,189,248,0.06)' }}
            />
            <div className="text-[2.2rem] mb-5 leading-none" aria-hidden="true">{s.icon}</div>
            <div className="font-condensed text-[1.1rem] font-bold tracking-[0.06em] uppercase mb-3 text-cream">
              {s.title}
            </div>
            <p className="text-[0.95rem] leading-[1.75] text-silver">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
