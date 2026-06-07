import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'Find Us at a Show',
    desc: 'We set up at local car shows across San Diego. Check our upcoming shows list and look for the Auto Aerials tent.',
  },
  {
    number: '02',
    title: 'We Fly Your Car',
    desc: 'Our licensed FAA Part 107 pilot captures your vehicle from multiple aerial angles. Shots take 10–15 minutes per car.',
  },
  {
    number: '03',
    title: 'You Get the Shot',
    desc: 'Edited, high-resolution photos delivered to your inbox within 48 hours. Print-ready. Social-ready. Show-worthy.',
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-[120px]" id="how">
      <div
        className="font-condensed text-[0.8rem] tracking-[0.4em] uppercase mb-[60px] section-label"
        style={{ color: '#38bdf8' }}
      >
        How It Works
      </div>
      <div ref={ref} className="reveal grid md:grid-cols-3 gap-[2px]" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {steps.map((step) => (
          <div
            key={step.number}
            className="group px-10 py-14 relative overflow-hidden transition-colors duration-300"
            style={{ background: '#111111' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
            onMouseLeave={e => (e.currentTarget.style.background = '#111111')}
          >
            <div
              className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(90deg, transparent, #38bdf8, transparent)' }}
            />
            {/* Step number — changes on parent hover via CSS group */}
            <div className="font-bebas text-[5rem] leading-none mb-6 transition-colors duration-300 group-hover:text-[rgba(56,189,248,0.35)]" style={{ color: '#2a2a2a' }}>
              {step.number}
            </div>
            <div className="font-condensed text-[1.4rem] font-bold tracking-[0.08em] uppercase mb-4 text-cream">
              {step.title}
            </div>
            <p className="text-[1rem] leading-[1.8] text-silver">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
