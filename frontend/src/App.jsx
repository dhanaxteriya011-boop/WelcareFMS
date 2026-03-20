import { useEffect } from 'react'
import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import Services        from './components/Services'
import Gallery         from './components/Gallery'
import Contact         from './components/Contact'
import MapSection      from './components/MapSection'
import ProcessSection  from './components/ProcessSection'
import ClientsStrip    from './components/ClientsStrip'
import { About, WhyUs, StatsBar, Testimonials, CtaBanner, Footer, FloatingWA } from './components/index'
import './App.css'

export default function App() {
  useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth' }, [])

  return (
    <>
      <Navbar />
      <main style={{ width:'100%', overflow:'hidden' }}>
        <Hero />
        <ClientsStrip />
        <StatsBar />
        <About />
        <Services />
        <ProcessSection />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <MapSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </>
  )
}
