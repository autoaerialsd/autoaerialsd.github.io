const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/autoaerialssd/",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@autoaerials",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6a3 3 0 00-2.1 2.1C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61589667754041",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@autoaerialssd",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
      </svg>
    ),
  },
];

export default function Footer({ onBook: _onBook }: { onBook: () => void }) {
  return (
    <footer
      className="px-4 sm:px-8 lg:px-16 pt-14 pb-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
    >
      <div className="max-w-[960px] mx-auto">
        {/* Top row — logo + social */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10">
          {/* Logo */}
          <a href="#" className="no-underline inline-flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0"
              style={{ border: "1px solid rgba(56,189,248,0.3)" }}
            >
              <img
                src="/optimized/logo_aasd.webp"
                alt="Auto Aerials SD logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bebas text-[1.4rem] tracking-[0.12em] text-cream leading-none">
              AUTO<span style={{ color: "#38bdf8" }}>AERIALS</span> SD
            </span>
          </a>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-10 h-10 rounded-full flex items-center justify-center no-underline transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#888",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "#38bdf8";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(56,189,248,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#888";
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(255,255,255,0.06)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row — contact + copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p
            className="font-condensed text-[0.82rem] tracking-[0.08em]"
            style={{ color: "#888" }}
          >
            <a
              href="tel:2066785640"
              className="no-underline transition-colors duration-200 hover:text-[#38bdf8]"
              style={{ color: "#888" }}
            >
              206-678-5640
            </a>
            {" · "}
            <a
              href="mailto:rod@autoaerials.com"
              className="no-underline transition-colors duration-200 hover:text-[#38bdf8]"
              style={{ color: "#888" }}
            >
              rod@autoaerials.com
            </a>
            {" · "}
            <a
              href="mailto:autoaerialssd@gmail.com"
              className="no-underline transition-colors duration-200 hover:text-[#38bdf8]"
              style={{ color: "#888" }}
            >
              autoaerialssd@gmail.com
            </a>
          </p>
          <p
            className="font-condensed text-[0.75rem] tracking-[0.1em]"
            style={{ color: "#555" }}
          >
            © 2026 Auto Aerials SD · Roderick Rutley · San Diego, CA · FAA Part
            107 Certified
          </p>
          <p
            className="font-condensed text-[0.75rem] tracking-[0.1em]"
            style={{ color: "#888" }}
          >
            © 2026 Need Synq Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
