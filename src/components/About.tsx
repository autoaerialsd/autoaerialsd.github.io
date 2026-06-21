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

          {/* Right — photo panel */}
          <div
            className="relative min-h-[300px] lg:min-h-0 overflow-hidden"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.06)' }}
          >
            <img
              src="/images/dji_fly_20260614_082138_0358_1781579867029_photo.JPG"
              alt="Auto Aerials SD drone shoot"
              className="w-full h-full object-cover"
              style={{ minHeight: '300px' }}
            />

            {/* Subtle dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.1) 100%)' }}
            />

            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-6 h-[1px]" style={{ background: 'rgba(56,189,248,0.6)' }} />
            <div className="absolute top-4 right-4 w-[1px] h-6" style={{ background: 'rgba(56,189,248,0.6)' }} />
            <div className="absolute bottom-4 left-4 w-6 h-[1px]" style={{ background: 'rgba(56,189,248,0.6)' }} />
            <div className="absolute bottom-4 left-4 w-[1px] h-6" style={{ background: 'rgba(56,189,248,0.6)' }} />

            {/* Badge */}
            <div
              className="absolute bottom-5 right-5 font-condensed text-[0.65rem] tracking-[0.25em] uppercase px-3 py-1 rounded"
              style={{
                background: 'rgba(8,8,8,0.7)',
                border: '1px solid rgba(56,189,248,0.3)',
                color: 'rgba(56,189,248,0.8)',
                backdropFilter: 'blur(4px)',
              }}
            >
              San Diego · FAA Part 107
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
