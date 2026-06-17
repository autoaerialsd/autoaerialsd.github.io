import { useReveal } from '../hooks/useReveal'

const plans = [
  {
    tier: 'Car Show',
    price: '79',
    squareUrl: 'https://square.link/u/IX2tnSVO',
    desc: 'Capture your vehicle from a perspective most enthusiasts never experience.',
    features: [
      '12 professionally edited aerial photos',
      '2 cinematic 360° orbit videos',
      'Front, rear & four-corner perspectives',
      'Multiple flight heights & compositions',
      'AI-enhanced editing & color grading',
      'Same-day delivery',
    ],
    featured: false,
    badge: null,
  },
  {
    tier: 'Showcase',
    price: '149',
    squareUrl: 'https://square.link/u/L8JUfKTJ',
    desc: 'Take your vehicle beyond the standard aerial shoot with custom compositions and cinematic orbit patterns.',
    features: [
      '12 professionally edited aerial photos',
      '4 cinematic 360° orbit videos',
      'Multiple elevations & flight distances',
      'Front, rear & four-corner perspectives',
      '2 custom requested shots of your choice',
      'Aerial selfie with you & your vehicle',
      'AI-enhanced editing & color grading',
      'Same-day delivery',
    ],
    featured: true,
    badge: 'Most Popular',
  },
  {
    tier: 'Feature',
    price: '249',
    squareUrl: 'https://square.link/u/LGoy53d3',
    desc: 'The ultimate Auto Aerials experience — designed for serious enthusiasts, collectors, and feature-worthy builds.',
    features: [
      'Everything in Showcase',
      'Hero portrait session — owner & vehicle',
      '1–2 min cinematic feature film',
      '20-sec social edit (Shorts / Reels / TikTok)',
      'All raw photo & video files',
      'USB thumb drive delivery',
      'AI-enhanced editing & color grading',
      'Same-day delivery of edited content',
    ],
    featured: false,
    badge: null,
  },
]

export default function Pricing(_props: { onBook: (pkg: string) => void }) {
  const ref = useReveal()

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-[120px]" id="pricing">
      <div className="text-center mb-[60px]">
        <div
          className="font-condensed text-[0.8rem] tracking-[0.4em] uppercase mb-3"
          style={{ color: '#38bdf8' }}
        >
          Pricing
        </div>
        <h2 className="font-bebas text-[4rem] sm:text-[5rem] tracking-[0.04em] leading-none text-cream">
          Pick Your Package
        </h2>
      </div>

      <div
        ref={ref}
        className="reveal grid md:grid-cols-3 gap-[2px]"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      >
        {plans.map((plan) => (
          <div
            key={plan.tier}
            className="relative flex flex-col transition-colors duration-300"
            style={{
              background: plan.featured ? '#1a1a1a' : '#111111',
              padding: plan.featured ? '0 36px 48px' : '48px 36px',
            }}
          >
            {/* Featured badge */}
            {plan.badge && (
              <div
                className="text-center py-[10px] font-condensed text-[0.75rem] tracking-[0.25em] font-bold text-black mb-8"
                style={{ background: '#38bdf8' }}
              >
                {plan.badge.toUpperCase()}
              </div>
            )}

            {/* Tier + price */}
            <div className={plan.featured && !plan.badge ? 'pt-12' : ''}>
              <div className="font-condensed text-[0.85rem] tracking-[0.3em] uppercase text-silver mb-3">
                {plan.tier}
              </div>
              <div className="font-bebas text-[4.5rem] leading-none mb-2 text-cream">
                <sup className="font-barlow text-[1.4rem] font-light align-super">$</sup>{plan.price}
              </div>
              <p className="text-[0.95rem] text-silver mb-8 leading-[1.7]">{plan.desc}</p>
            </div>

            {/* Features */}
            <ul className="list-none mb-10 flex-1">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="text-[0.92rem] text-silver py-3 flex items-start gap-3"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: '#38bdf8' }}>—</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href={plan.squareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 font-condensed text-[0.9rem] tracking-[0.2em] uppercase font-bold transition-all duration-200 rounded-lg mt-auto no-underline"
              style={
                plan.featured
                  ? { background: '#38bdf8', color: '#080808' }
                  : { background: 'transparent', color: '#aaa', border: '1px solid rgba(255,255,255,0.15)' }
              }
              onMouseEnter={e => {
                if (plan.featured) {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#7dd3fc'
                } else {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = '#38bdf8'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#38bdf8'
                }
              }}
              onMouseLeave={e => {
                if (plan.featured) {
                  (e.currentTarget as HTMLAnchorElement).style.background = '#38bdf8'
                } else {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.15)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = '#aaa'
                }
              }}
            >
              Book This
            </a>
          </div>
        ))}
      </div>

      {/* Perfect for */}
      <div className="mt-10 grid md:grid-cols-3 gap-4 max-w-full">
        {[
          'Perfect for car shows, Cars & Coffee events, weekend cruises, and enthusiasts who want premium aerial content.',
          'Perfect for enthusiasts, show cars, builds, and owners who want a complete collection for social media and forums.',
          'Perfect for milestone builds, magazine-worthy cars, social media creators, and anyone who wants the full experience.',
        ].map((text, i) => (
          <p
            key={i}
            className="font-condensed text-[0.78rem] tracking-[0.08em] leading-[1.7] text-center px-2"
            style={{ color: '#555' }}
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  )
}
