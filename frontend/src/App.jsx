import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar   from './components/Navbar'
import { Footer, FloatingWA } from './components/index'
import Home     from './pages/Home'
import About    from './pages/About'
import Services from './pages/Services'
import Gallery  from './pages/Gallery'
import Clients  from './pages/Clients'
import Contact  from './pages/Contact'
import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main style={{ width:'100%', overflow:'hidden' }}>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery"  element={<Gallery />}  />
          <Route path="/clients"  element={<Clients />}  />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </main>
      <Footer />
      <FloatingWA />
    </BrowserRouter>
  )
}
