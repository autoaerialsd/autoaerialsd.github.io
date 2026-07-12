import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-black text-cream font-barlow px-6 text-center"
      style={{ cursor: "crosshair" }}
    >
      <span className="font-condensed text-[0.72rem] tracking-[0.3em] uppercase text-smoke mb-4">
        San Diego · FAA Part 107 Certified
      </span>

      <h1 className="font-bebas text-[7rem] md:text-[10rem] leading-none tracking-[0.04em] text-amber animate-pulseScale">
        404
      </h1>

      <p className="font-condensed text-sm md:text-base tracking-[0.18em] uppercase text-silver mt-2 mb-10">
        This flight path doesn't exist
      </p>

      <Link
        to="/"
        className="no-underline bg-amber text-black font-condensed font-bold text-[0.82rem] tracking-[0.18em] uppercase px-6 py-3 rounded-full transition-all duration-200 hover:bg-amber-dim hover:-translate-y-0.5"
      >
        Back to Home
      </Link>
    </div>
  );
}
