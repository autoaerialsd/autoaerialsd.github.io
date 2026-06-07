import { useReveal } from '../hooks/useReveal'

const plans = [
  {
    tier: 'Essential',
    price: '79',
    desc: 'Perfect for a quick keepsake or social post.',
    features: ['3 aerial photos', 'Standard edit', 'Web-res delivery', '48hr turnaround'],
    featured: false,
  },
  {
    tier: 'Signature',
    price: '149',
    desc: 'The full aerial experience. Our most popular package.',
    features: ['8 aerial photos', 'Premium retouching', 'Print-ready files', '24hr turnaround', '1 short video clip'],
    featured: true,
  },
  {
    tier: 'Elite',
    price: '249',
    desc: 'For collectors, dealers, and show winners.',
    features: ['15+ aerial photos', 'Cinematic edit', 'Full 4K video', 'Same-day preview', 'Private shoot option'],
    featured: false,
  },
]

interface Props {
  onBook: (pkg: string) => void
}

export default function Pricing({ onBook }: Props) {
  const ref = useReveal()

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-[120px]" id="pricing">
      <div
        className="font-condensed text-[0.8rem] tracking-[0.4em] uppercase mb-0 section-label"
        style={{ color: '#38bdf8' }}
      >
        Pricing
      </div>
      <div ref={ref} className="reveal grid md:grid-cols-3 gap-[2px] mt-[60px]" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className="relative transition-colors duration-300"
            style={{
              background: plan.featured ? '#1a1a1a' : '#111111',
              padding: plan.featured ? '64px 36px 48px' : '48px 36px',
            }}
          >
            {plan.featured && (
              <div
                className="absolute top-0 left-0 right-0 text-center py-2 font-condensed text-[0.75rem] tracking-[0.25em] font-bold text-black"
                style={{ background: '#38bdf8' }}
              >
                MOST POPULAR
              </div>
            )}
            <div className="font-condensed text-[0.85rem] tracking-[0.3em] uppercase text-silver mb-4">
              {plan.tier}
            </div>
            <div className="font-bebas text-[4.5rem] leading-none mb-2 text-cream">
              <sup className="font-barlow text-[1.4rem] font-light align-super">$</sup>{plan.price}
            </div>
            <p className="text-[0.95rem] text-silver mb-8 leading-[1.7]">{plan.desc}</p>
            <ul className="list-none mb-10">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="text-[0.95rem] text-silver py-3 flex items-center gap-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="font-bold flex-shrink-0" style={{ color: '#38bdf8' }}>—</span>{f}
                </li>
              ))}
            </ul>
            <button
              onClick={() => onBook(plan.tier)}
              className="block w-full text-center px-6 py-4 font-condensed text-[0.9rem] tracking-[0.2em] uppercase font-bold transition-all duration-200 cursor-pointer rounded-lg"
              style={
                plan.featured
                  ? { background: '#38bdf8', color: '#080808', border: 'none' }
                  : { background: 'transparent', color: '#aaa', border: '1px solid rgba(255,255,255,0.15)' }
              }
              onMouseEnter={e => {
                if (plan.featured) {
                  (e.currentTarget as HTMLButtonElement).style.background = '#7dd3fc'
                } else {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#38bdf8'
                  ;(e.currentTarget as HTMLButtonElement).style.color = '#38bdf8'
                }
              }}
              onMouseLeave={e => {
                if (plan.featured) {
                  (e.currentTarget as HTMLButtonElement).style.background = '#38bdf8'
                } else {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.15)'
                  ;(e.currentTarget as HTMLButtonElement).style.color = '#aaa'
                }
              }}
            >
              Book This
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}
