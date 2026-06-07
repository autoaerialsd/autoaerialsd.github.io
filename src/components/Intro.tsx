import { useReveal } from '../hooks/useReveal'

const stats = [
  { value: '4K', label: 'RAW footage' },
  { value: '107', label: 'FAA Certified' },
  { value: '48h', label: 'Turnaround' },
  { value: '100%', label: 'Licensed & Insured' },
]

export default function Intro() {
  const ref = useReveal()

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-[80px] lg:py-[100px]">
      <div
        ref={ref}
        className="reveal rounded-2xl overflow-hidden max-w-[1100px] mx-auto"
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Blue top accent */}
        <div className="h-[3px]" style={{ background: 'linear-gradient(90deg, #38bdf8, rgba(56,189,248,0.1))' }} />

        <div className="grid lg:grid-cols-2 gap-0">

          {/* Left — intro text */}
          <div
            className="px-8 sm:px-12 py-12 lg:py-16"
            style={{ borderRight: '1px solid rgba(255,255,255,0.06)' }}
          >
            <div
              className="font-condensed text-[0.8rem] tracking-[0.45em] uppercase mb-4 section-label"
              style={{ color: '#38bdf8' }}
            >
              What We Do
            </div>
            <h2 className="font-bebas text-[2.8rem] sm:text-[3.5rem] tracking-[0.03em] leading-[1] text-cream mb-6">
              San Diego's Drone<br />
              Photography Crew
            </h2>
            <p className="text-[1rem] leading-[1.85] text-silver mb-5">
              Auto Aerials SD brings professional aerial coverage to the streets,
              job sites, and showrooms of San Diego. Whether you need a listing
              to stand out, a construction site documented safely, or your show
              car shot from the sky — we've got the gear, the license, and the eye
              for the shot.
            </p>
            <p className="text-[1rem] leading-[1.85] text-silver">
              Every flight is planned, legal, and delivered fast. We fly under
              FAA Part 107 certification, carry full insurance, and treat every
              shoot like it matters — because it does.
            </p>
          </div>

          {/* Right — stat grid */}
          <div className="grid grid-cols-2">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center py-10 px-6 text-center transition-colors duration-200 hover:bg-white/[0.03]"
                style={{
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  borderRight: i % 2 === 0 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div
                  className="font-bebas text-[3.2rem] leading-none mb-2"
                  style={{ color: '#38bdf8' }}
                >
                  {s.value}
                </div>
                <div className="font-condensed text-[0.75rem] tracking-[0.25em] uppercase text-silver">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
