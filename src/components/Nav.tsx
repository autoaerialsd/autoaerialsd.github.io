import { useState, useEffect } from "react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How It Works" },
  { href: "#portfolio", label: "Gallery" },
  { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
];

export default function Nav({ onBook: _onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-5 md:px-10 py-4"
        style={{ background: "rgba(8,8,8,0.92)", backdropFilter: "blur(8px)" }}
      >
        {/* Logo */}
        <a
          href="#"
          className="no-underline z-[101] relative flex items-center gap-2"
        >
          <div
            className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
            style={{ border: "1px solid rgba(56,189,248,0.3)" }}
          >
            <img
              src="/images/logo_aasd.jpg"
              alt="Auto Aerials SD logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bebas text-[1.35rem] tracking-[0.12em] text-cream leading-none">
            AUTO<span className="text-[#38bdf8]">AERIALS</span> SD
          </span>
        </a>

        {/* Desktop — just the Contact button */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-silver no-underline font-condensed text-[0.8rem] tracking-[0.18em] uppercase transition-colors duration-200 hover:text-[#38bdf8]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="no-underline bg-[#38bdf8] text-black font-condensed font-bold text-[0.82rem] tracking-[0.18em] uppercase px-5 py-[9px] rounded-full transition-all duration-200 hover:bg-[#7dd3fc] hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden relative z-[101] flex flex-col justify-center items-center w-10 h-10 gap-[6px] cursor-pointer bg-transparent border-none p-0"
        >
          {[
            open ? "translateY(7.5px) rotate(45deg)" : "none",
            undefined,
            open ? "translateY(-7.5px) rotate(-45deg)" : "none",
          ].map((transform, i) =>
            transform === undefined ? (
              <span
                key={i}
                className="block h-[1.5px] bg-cream rounded-full transition-all duration-300"
                style={{
                  width: 26,
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "none",
                }}
              />
            ) : (
              <span
                key={i}
                className="block h-[1.5px] bg-cream rounded-full transition-all duration-300 origin-center"
                style={{ width: 26, transform }}
              />
            )
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-[99] md:hidden flex flex-col justify-center items-start px-8 transition-all duration-500"
        style={{
          background: "#080808",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-12px)",
        }}
      >
        <ul className="list-none flex flex-col gap-2 w-full">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-16px)",
                transition: `opacity 0.4s ease ${
                  0.1 + i * 0.07
                }s, transform 0.4s ease ${0.1 + i * 0.07}s`,
              }}
            >
              <a
                href={l.href}
                onClick={handleLinkClick}
                className="font-bebas text-[3rem] tracking-[0.06em] text-cream no-underline leading-none block py-3 border-b border-steel transition-colors duration-200 hover:text-[#38bdf8]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li
            className="mt-6"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateX(0)" : "translateX(-16px)",
              transition: `opacity 0.4s ease ${
                0.1 + links.length * 0.07
              }s, transform 0.4s ease ${0.1 + links.length * 0.07}s`,
            }}
          >
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="inline-block no-underline bg-[#38bdf8] text-black font-condensed font-bold text-[0.95rem] tracking-[0.2em] uppercase px-8 py-4 rounded-full transition-colors duration-200 hover:bg-[#7dd3fc]"
            >
              Contact
            </a>
          </li>
        </ul>

        <p
          className="absolute bottom-10 left-8 font-condensed text-[0.72rem] tracking-[0.3em] uppercase text-smoke"
          style={{
            opacity: open ? 1 : 0,
            transition: "opacity 0.4s ease 0.45s",
          }}
        >
          San Diego · FAA Part 107 Certified
        </p>
      </div>
    </>
  );
}
