import Hero           from '../components/Hero'
import ClientsStrip   from '../components/ClientsStrip'
import { StatsBar, About, WhyUs, Testimonials, CtaBanner } from '../components/index'
import Services       from '../components/Services'
import Gallery        from '../components/Gallery'
import ProcessSection from '../components/ProcessSection'
import MapSection     from '../components/MapSection'

export default function Home() {
  return (
    <>
      <Hero />
      <ClientsStrip />
      <StatsBar />
      <About preview />
      <Services preview />
      <ProcessSection />
      <WhyUs />
      <Gallery preview />
      <Testimonials />
      <CtaBanner />
      <MapSection />
    </>
  )
}
