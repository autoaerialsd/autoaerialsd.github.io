import Nav from './components/Nav'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Shows from './components/Shows'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-black text-cream font-barlow font-light overflow-x-hidden" style={{ cursor: 'crosshair' }}>
      <Nav />
      <Hero />
      <HowItWorks />
      <Portfolio />
      <Shows />
      <Pricing />
      <Footer />
    </div>
  )
}
