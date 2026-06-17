export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, rgba(56,189,248,0.07) 0%, transparent 65%),
            linear-gradient(160deg, #0d0d0d 0%, #080808 100%)`,
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 60px),
            repeating-linear-gradient(90deg, #fff, #fff 1px, transparent 1px, transparent 60px)`,
        }}
      />

      {/* Gradient overlay bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 50%, rgba(8,8,8,0.6) 85%, #080808 100%)",
        }}
      />

      {/* Content — centered */}
      <div className="relative z-10 px-6 sm:px-10 lg:px-16 pt-32 pb-20 text-center max-w-[860px] mx-auto anim-slideUp">
        {/* Eyebrow line */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-silver opacity-60" />
          <span className="font-condensed text-[0.7rem] tracking-[0.35em] uppercase text-silver">
            San Diego, CA · FAA Part 107 Certified
          </span>
          <div className="w-8 h-px bg-silver opacity-60" />
        </div>

        {/* Headline */}
        <h1
          className="font-bebas leading-[0.92] tracking-[0.02em] mb-6 uppercase"
          style={{ fontSize: "clamp(3.8rem, 10vw, 8.5rem)" }}
        >
          Aerial Shots<br />
          That{" "}
          <span style={{ color: "#38bdf8" }}>Hit Different</span>
        </h1>

        {/* Body */}
        <p className="text-[1.05rem] leading-[1.8] text-silver max-w-[500px] mx-auto mb-10">
          Professional drone photography &amp; video for real estate,
          construction, and the San Diego car scene. Licensed, insured, and
          ready to fly.
        </p>

        {/* CTAs */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <a
            href="https://square.link/u/lX2tnSVO"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline font-condensed font-bold text-[0.88rem] tracking-[0.18em] uppercase px-7 py-[14px] rounded-full transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#38bdf8", color: "#080808" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#7dd3fc")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#38bdf8")}
          >
            Book Now
          </a>
          <a
            href="#portfolio"
            className="no-underline font-condensed font-bold text-[0.88rem] tracking-[0.18em] uppercase px-7 py-[13px] rounded-full border border-silver text-silver transition-all duration-200 hover:border-cream hover:text-cream hover:-translate-y-0.5"
          >
            View Portfolio
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-10 bg-silver" />
          <span className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase text-silver">Scroll</span>
        </div>
      </div>
    </section>
  )
}
