import { useReveal } from "../hooks/useReveal";

const YOUTUBE_URL = "https://www.youtube.com/@autoaerials";

const photos = [
  { src: "/images/gallery-1.jpg", label: "1967 Ford Mustang · Pony Club Show",  tag: "AERIAL · HERO SHOT", span: true },
  { src: "/images/gallery-2.jpg", label: "Porsche 911 · Cars & Coffee SD",       tag: "TOP DOWN" },
  { src: "/images/gallery-3.jpg", label: "Ferrari 488 · Miramar Show",           tag: "45° ANGLE" },
  { src: "/images/gallery-4.jpg", label: "Lamborghini Huracán · Private",        tag: "ORBIT SHOT" },
  { src: "/images/gallery-5.jpg", label: "Dodge Challenger · Sunset Session",    tag: "DUSK SHOOT" },
];

const placeholderSizes = [
  { w: 560, h: 483 },
  { w: 280, h: 240 },
  { w: 280, h: 240 },
  { w: 280, h: 200 },
  { w: 280, h: 200 },
];

export default function Portfolio() {
  const ref = useReveal();

  return (
    <section
      className="px-4 sm:px-8 lg:px-12 pb-[80px] lg:pb-[120px] pt-[60px] lg:pt-[80px]"
      style={{ background: '#111111' }}
      id="portfolio"
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-4 mb-[60px]">
        <div
          className="flex items-center gap-4 font-condensed text-[0.8rem] tracking-[0.4em] uppercase section-label"
          style={{ color: '#38bdf8' }}
        >
          Gallery
        </div>
        <a
          href={YOUTUBE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline font-condensed text-[0.8rem] tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
          style={{ color: '#38bdf8' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
          </svg>
          View Full Portfolio →
        </a>
      </div>

      {/* Grid — each cell links to YouTube */}
      <div
        ref={ref}
        className="reveal grid gap-[3px] grid-cols-1 sm:grid-cols-2 lg:[grid-template-columns:2fr_1fr_1fr] lg:[grid-template-rows:280px_200px]"
      >
        {photos.map((photo, i) => {
          const { w, h } = placeholderSizes[i];
          return (
            <a
              key={i}
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden cursor-pointer block no-underline ${photo.span ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
              style={{ background: '#161616' }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                width={w}
                height={h}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const ph = e.currentTarget.nextElementSibling as HTMLElement;
                  if (ph) ph.style.display = "flex";
                }}
                className="w-full h-[200px] sm:h-[240px] lg:h-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.04]"
              />

              {/* Fallback placeholder */}
              <div
                className="w-full h-[200px] sm:h-[240px] lg:h-full hidden flex-col items-center justify-center gap-3"
                style={{ background: "#161616" }}
              >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                  stroke="rgba(56,189,248,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9h2l1-2h2M22 9h-2l-1-2h-2M9 7h6M12 7v2M8 9a4 4 0 1 0 8 0" />
                  <circle cx="7" cy="18" r="1.5" />
                  <circle cx="17" cy="18" r="1.5" />
                  <line x1="2" y1="9" x2="22" y2="9" />
                  <rect x="9" y="11" width="6" height="4" rx="1" />
                </svg>
                <span className="font-bebas text-[0.9rem] tracking-[0.3em]" style={{ color: "rgba(56,189,248,0.3)" }}>
                  {photo.tag}
                </span>
                <span className="font-condensed text-[0.72rem] tracking-[0.15em] uppercase" style={{ color: "rgba(170,170,170,0.3)" }}>
                  {w} × {h}px
                </span>
              </div>

              {/* Hover label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-5 font-condensed text-[0.85rem] tracking-[0.18em] uppercase text-cream opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                style={{ background: "linear-gradient(to top, rgba(8,8,8,0.92), transparent)" }}
              >
                {photo.label}
              </div>

              {/* YouTube play indicator on hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: 'rgba(56,189,248,0.85)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#080808">
                    <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/>
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
