import { useReveal } from '../hooks/useReveal'

const credentials = [
  'FAA Part 107',
  'Insured',
  'Remote ID Registered',
  'San Diego County',
]

export default function About() {
  const ref = useReveal()

  return (
    <section className="px-4 sm:px-8 lg:px-12 py-[80px] lg:py-[120px]" id="about">
      {/* Outer container card */}
      <div
        ref={ref}
        className="reveal rounded-2xl overflow-hidden"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Blue top accent bar */}
        <div className="h-[3px] w-full" style={{ background: 'linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.2))' }} />

        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left — text content */}
          <div className="px-8 sm:px-12 py-12 lg:py-16">
            <div
              className="flex items-center gap-4 font-condensed text-[0.8rem] tracking-[0.4em] uppercase mb-4 section-label"
              style={{ color: '#38bdf8' }}
            >
              About
            </div>
            <h2 className="font-bebas text-[3rem] sm:text-[3.8rem] tracking-[0.04em] leading-none mb-6 text-cream">
              Who's Flying
            </h2>
            <p className="text-[1rem] leading-[1.8] text-silver mb-6 max-w-[520px]">
              Auto Aerials SD is a San Diego–based drone outfit run by{' '}
              <span className="text-cream font-medium">Roderick Rutley</span> — an FAA Part
              107 certified pilot with a deep background in unmanned systems and a
              serious love for car culture.
            </p>
            <p className="text-[1rem] leading-[1.8] text-silver mb-10 max-w-[520px]">
              Every flight is licensed, insured, and dialed in. Whether it's a
              listing, a jobsite, or a show car at golden hour, you get clean,
              professional footage and someone who actually cares about the shot.
            </p>

            {/* Credential badges */}
            <ul className="flex flex-wrap gap-3 list-none">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="font-condensed text-[0.78rem] tracking-[0.2em] uppercase px-4 py-2 rounded-lg"
                  style={{
                    color: '#38bdf8',
                    border: '1px solid rgba(56,189,248,0.3)',
                    background: 'rgba(56,189,248,0.06)',
                  }}
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — visual panel */}
          <div
            className="relative flex items-center justify-center min-h-[280px] lg:min-h-0"
            style={{
              background: 'rgba(56,189,248,0.03)',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* Grid pattern overlay */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, #38bdf8, #38bdf8 1px, transparent 1px, transparent 40px),
                  repeating-linear-gradient(90deg, #38bdf8, #38bdf8 1px, transparent 1px, transparent 40px)`,
              }}
            />

            {/* Drone icon */}
            <div className="relative flex flex-col items-center gap-4">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.2)' }}
              >
                <svg
                  width="38" height="38" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(56,189,248,0.7)" strokeWidth="1.2"
                  strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M2 9h2l1-2h2M22 9h-2l-1-2h-2M9 7h6M12 7v2M8 9a4 4 0 1 0 8 0" />
                  <circle cx="7" cy="18" r="1.5" />
                  <circle cx="17" cy="18" r="1.5" />
                  <line x1="2" y1="9" x2="22" y2="9" />
                  <rect x="9" y="11" width="6" height="4" rx="1" />
                </svg>
              </div>
              <div className="font-condensed text-[0.72rem] tracking-[0.3em] uppercase text-center" style={{ color: 'rgba(56,189,248,0.5)' }}>
                San Diego, CA<br />FAA Part 107 Certified
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-6 h-[1px]" style={{ background: 'rgba(56,189,248,0.4)' }} />
            <div className="absolute top-4 right-4 w-[1px] h-6" style={{ background: 'rgba(56,189,248,0.4)' }} />
            <div className="absolute bottom-4 left-4 w-6 h-[1px]" style={{ background: 'rgba(56,189,248,0.4)' }} />
            <div className="absolute bottom-4 left-4 w-[1px] h-6" style={{ background: 'rgba(56,189,248,0.4)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
