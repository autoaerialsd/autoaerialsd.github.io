import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import HowItWorks from './components/HowItWorks'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BookingModal from './components/BookingForm'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalPackage, setModalPackage] = useState('')

  function openModal(pkg = '') {
    setModalPackage(pkg)
    setModalOpen(true)
  }

  return (
    <>
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <div
        className="bg-black text-cream font-barlow font-light overflow-x-hidden"
        style={{
          cursor: 'crosshair',
          opacity: loading ? 0 : 1,
          transition: 'opacity 0.5s ease 0.1s',
        }}
      >
        <Nav onBook={() => openModal()} />
        <Hero />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Pricing onBook={(pkg) => openModal(pkg)} />
        <About />
        <Contact />
        <Footer onBook={() => openModal()} />
        <BookingModal
          isOpen={modalOpen}
          defaultPackage={modalPackage}
          onClose={() => setModalOpen(false)}
        />
      </div>
    </>
  )
}
