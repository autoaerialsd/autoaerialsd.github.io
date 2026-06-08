import { useEffect, useState } from 'react'

const phrases = [
  'Powering up rotors...',
  'Calibrating gimbal...',
  'Checking airspace...',
  'Ready for takeoff.',
]

export default function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [exiting, setExiting] = useState(false)

  // Progress bar + phrase cycling
  useEffect(() => {
    const duration = 2600 // total ms
    const interval = 18
    const steps = duration / interval
    let current = 0

    const timer = setInterval(() => {
      current++
      const pct = Math.min(Math.round((current / steps) * 100), 100)
      setProgress(pct)

      // cycle phrases at 25 / 55 / 80 %
      if (pct >= 25 && pct < 26) setPhraseIndex(1)
      if (pct >= 55 && pct < 56) setPhraseIndex(2)
      if (pct >= 80 && pct < 81) setPhraseIndex(3)

      if (pct >= 100) {
        clearInterval(timer)
        setTimeout(() => {
          setExiting(true)
          setTimeout(onDone, 700)
        }, 400)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{
        background: '#080808',
        opacity: exiting ? 0 : 1,
        transition: exiting ? 'opacity 0.7s ease' : 'none',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.07) 0%, transparent 65%)',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #38bdf8, #38bdf8 1px, transparent 1px, transparent 50px),
            repeating-linear-gradient(90deg, #38bdf8, #38bdf8 1px, transparent 1px, transparent 50px)`,
        }}
      />

      {/* Content */}
      <div className="relative flex flex-col items-center gap-6 w-full max-w-[340px] px-6">

        {/* Drone icon — pulsing */}
        <div
          className="relative flex items-center justify-center"
          style={{ animation: 'dronePulse 2s ease-in-out infinite' }}
        >
          {/* Outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: 110,
              height: 110,
              border: '1px solid rgba(56,189,248,0.2)',
              animation: 'ringExpand 2s ease-in-out infinite',
            }}
          />
          {/* Logo image */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center overflow-hidden"
            style={{
              background: 'rgba(56,189,248,0.08)',
              border: '1px solid rgba(56,189,248,0.3)',
            }}
          >
            <img
              src="/images/logo_aasd.jpg"
              alt="Auto Aerials SD"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Logo text */}
        <div className="text-center">
          <div className="font-bebas text-[2rem] tracking-[0.15em] text-cream leading-none">
            AUTO<span style={{ color: '#38bdf8' }}>AERIALS</span> SD
          </div>
          <div className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase mt-1" style={{ color: 'rgba(56,189,248,0.5)' }}>
            San Diego · FAA Part 107
          </div>
        </div>

        {/* Phrase */}
        <div
          className="font-condensed text-[0.82rem] tracking-[0.2em] uppercase text-center"
          style={{
            color: 'rgba(255,255,255,0.5)',
            minHeight: '1.4em',
            transition: 'opacity 0.3s ease',
          }}
          key={phraseIndex}
        >
          {phrases[phraseIndex]}
        </div>

        {/* Progress bar */}
        <div className="w-full">
          <div
            className="w-full h-[2px] rounded-full overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.08)' }}
          >
            <div
              className="h-full rounded-full transition-all duration-[18ms] ease-linear"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, rgba(56,189,248,0.6), #38bdf8)',
                boxShadow: '0 0 8px rgba(56,189,248,0.6)',
              }}
            />
          </div>
          <div
            className="font-condensed text-[0.65rem] tracking-[0.2em] mt-2 text-right"
            style={{ color: 'rgba(56,189,248,0.5)' }}
          >
            {progress}%
          </div>
        </div>

        {/* HUD dots */}
        <div className="flex gap-2 items-center">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: progress > i * 33 + 10 ? '#38bdf8' : 'rgba(255,255,255,0.15)',
                transition: 'background 0.3s ease',
                boxShadow: progress > i * 33 + 10 ? '0 0 6px rgba(56,189,248,0.8)' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Corner HUD accents */}
      {[
        'top-6 left-6',
        'top-6 right-6 rotate-90',
        'bottom-6 left-6 -rotate-90',
        'bottom-6 right-6 rotate-180',
      ].map((pos) => (
        <div key={pos} className={`absolute ${pos}`} style={{ opacity: 0.3 }}>
          <div className="w-5 h-[1px] bg-[#38bdf8]" />
          <div className="w-[1px] h-5 bg-[#38bdf8] -mt-[1px]" />
        </div>
      ))}

      <style>{`
        @keyframes dronePulse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ringExpand {
          0% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.25); opacity: 0.1; }
          100% { transform: scale(1); opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
