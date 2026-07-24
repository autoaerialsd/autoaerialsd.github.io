import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background video — Ferrari aerial, June 10 golden hour */}
      {/* playsInline + muted required for iOS Safari autoplay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/optimized/dji_fly_20260610_193254_0325_1781146282760_photo_beautify.webp"
      >
        <source src="/images/ferrari-hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay so text/buttons stay readable over any media */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.35) 0%, rgba(8,8,8,0.55) 60%, rgba(8,8,8,0.75) 100%)",
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center anim-slideUp">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-px bg-silver opacity-60" />
          <span className="font-condensed text-[0.7rem] tracking-[0.35em] uppercase text-silver">
            San Diego, CA · FAA Part 107 Certified
          </span>
          <div className="w-8 h-px bg-silver opacity-60" />
        </div>

        {/* Headline */}
        <h1
          className="font-bebas leading-[0.92] tracking-[0.02em] uppercase"
          style={{ fontSize: "clamp(3.8rem, 10vw, 8.5rem)" }}
        >
          Aerial Shots
          <br />
          That <span style={{ color: "#38bdf8" }}>Hit Different</span>
        </h1>

        {/* CTAs */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <Link
            to="/pricing"
            className="no-underline font-condensed font-bold text-[0.95rem] tracking-[0.18em] uppercase px-8 py-[15px] rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
            style={{ background: "#38bdf8", color: "#080808" }}
          >
            Book Now
          </Link>
          <Link
            to="/portfolio"
            className="no-underline font-condensed font-bold text-[0.95rem] tracking-[0.18em] uppercase px-8 py-[14px] rounded-full border-2 border-white text-white transition-all duration-200 hover:bg-white hover:text-black hover:-translate-y-0.5"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-10 bg-silver" />
        <span className="font-condensed text-[0.65rem] tracking-[0.3em] uppercase text-silver">
          Scroll
        </span>
      </div>
    </section>
  );
}
