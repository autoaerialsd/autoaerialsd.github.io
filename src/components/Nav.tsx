export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-12 py-6"
      style={{ background: 'linear-gradient(to bottom, rgba(8,8,8,0.95), transparent)' }}>
      <a href="#" className="font-bebas text-[1.6rem] tracking-[0.15em] text-cream no-underline">
        Auto<span className="text-amber">.</span>Aerials
      </a>
      <ul className="hidden md:flex gap-10 list-none">
        <li><a href="#how" className="text-silver no-underline font-condensed text-[0.85rem] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-amber">How It Works</a></li>
        <li><a href="#portfolio" className="text-silver no-underline font-condensed text-[0.85rem] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-amber">Gallery</a></li>
        <li><a href="#shows" className="text-silver no-underline font-condensed text-[0.85rem] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-amber">Shows</a></li>
        <li><a href="#pricing" className="text-silver no-underline font-condensed text-[0.85rem] tracking-[0.2em] uppercase transition-colors duration-200 hover:text-amber">Pricing</a></li>
        <li>
          <a href="#book"
            className="bg-amber text-black no-underline font-condensed font-bold text-[0.85rem] tracking-[0.15em] uppercase px-[22px] py-[10px] transition-colors duration-200 hover:bg-[#ffb830]">
            Book Now
          </a>
        </li>
      </ul>
    </nav>
  )
}
