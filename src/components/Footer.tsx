export default function Footer() {
  return (
    <footer className="px-12 py-[60px] border-t border-steel flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left" id="book">
      <div>
        <div className="font-bebas text-[1.4rem] tracking-[0.15em] text-cream">
          Auto<span className="text-amber">.</span>Aerials
        </div>
        <div className="text-[0.8rem] text-smoke mt-1 tracking-[0.08em]">
          San Diego · FAA Part 107 Certified · Est. 2025
        </div>
      </div>
      <ul className="flex flex-wrap gap-8 list-none justify-center">
        {['Instagram', 'Facebook', 'Book a Shoot', 'Contact'].map((link) => (
          <li key={link}>
            <a href="#" className="text-smoke no-underline font-condensed text-[0.8rem] tracking-[0.15em] uppercase transition-colors duration-200 hover:text-amber">
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="text-[0.75rem] text-steel tracking-[0.1em]">© 2025 Auto Aerials</div>
    </footer>
  )
}
