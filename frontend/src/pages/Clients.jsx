import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import PageBanner from '../components/shared/PageBanner'
import { CtaBanner } from '../components/index'

const TESTIMONIALS = [
  { name:'Rajesh Kumar',      role:'Facility Manager, Prestige IT Park',         init:'R', stars:5, quote:'Welcare FMS has been our housekeeping partner for 3+ years. Always punctual, professional and consistently outstanding quality. Best facility partner we have had in Chennai.' },
  { name:'Priya Venkatesh',   role:'President, Nungambakkam Resident Welfare',    init:'P', stars:5, quote:'Their landscaping team transformed our complex beautifully. They understood our vision perfectly, delivered on time and the pricing was very competitive. Highly recommended!' },
  { name:'Suresh Annamalai',  role:'Hotel Operations Manager, The Leela Chennai', init:'S', stars:5, quote:'Electrical and plumbing teams are top-notch. Fast execution, highly skilled, follow all safety norms. Our hotel maintenance has never been smoother since engaging Welcare.' },
  { name:'Deepa Krishnamurthy',role:'HR Director, Cognizant Technology',          init:'D', stars:5, quote:'We outsourced our entire campus facility management to Welcare. The transition was seamless and the quality of service has been exceptional. Our employees love the cleanliness.' },
  { name:'Arjun Venkataraman', role:'MD, Annapoorna Wedding Palace',              init:'A', stars:5, quote: "Welcare catered our daughter's wedding for 800 guests. The food was absolutely delicious and the service was impeccable. Several guests specifically complimented the catering." },
  { name:'Dr. Meenakshi P.',   role:'Administrator, Apollo Speciality Hospital',  init:'M', stars:5, quote:'Hospital hygiene is critical. Welcare understands this and maintains the highest cleaning standards. Their bio-waste management procedures are excellent and compliant.' },
]

const SECTORS = [
  { ico:'🏨', name:'5-Star Hotels',          count:'45+ hotels' },
  { ico:'🏢', name:'IT Parks & Tech Campuses',count:'60+ companies' },
  { ico:'🏭', name:'Industrial Facilities',   count:'30+ units' },
  { ico:'🏘️', name:'Residential Societies',  count:'80+ societies' },
  { ico:'🏫', name:'Schools & Colleges',      count:'25+ institutions' },
  { ico:'🏥', name:'Hospitals & Clinics',     count:'20+ facilities' },
  { ico:'🏬', name:'Shopping Malls',          count:'15+ malls' },
  { ico:'🏛️', name:'Government Offices',     count:'10+ offices' },
  { ico:'🎪', name:'Event Venues',            count:'35+ venues' },
  { ico:'🚀', name:'Startups & SMEs',         count:'120+ companies' },
]

const FAQS = [
  { q:'How quickly can you start services?',         a:'We can deploy a team within 24–48 hours of contract signing for most services. For large-scale deployments, we need 3–5 working days to arrange adequate staffing and equipment.' },
  { q:'Do you provide services on weekends?',         a:'Yes, we operate 6 days a week. For emergency requirements, we have an on-call team available on Sundays as well. Our WhatsApp number is monitored 7 days a week.' },
  { q:'Are your staff background-verified?',         a:'Absolutely. All our personnel undergo thorough police verification, document checks and skills assessment before deployment. We maintain records for all deployed staff.' },
  { q:'What areas do you cover?',                    a:'We primarily serve Chennai and all districts of Tamil Nadu. For large projects, we can deploy teams to neighbouring states as well. Contact us with your location for confirmation.' },
  { q:'Do you offer monthly or annual contracts?',   a:'Yes, we offer flexible engagement models — per visit, monthly contracts, quarterly, and annual AMC (Annual Maintenance Contracts). Annual contracts offer the best pricing.' },
  { q:'Is GST invoice provided?',                    a:'Yes, we are GST-registered (33AACF4037FW4037FIZG) and provide proper GST invoices for all services. We are also EPF and EST compliant.' },
]

function FadeIn({ children, delay=0 }) {
  const { ref, inView } = useInView({ threshold:.08, triggerOnce:true })
  return (
    <div ref={ref} style={{ opacity:inView?1:0, transform:inView?'none':'translateY(28px)', transition:`opacity .7s ${delay}ms, transform .7s ${delay}ms` }}>
      {children}
    </div>
  )
}

export default function ClientsPage() {
  return (
    <>
      <PageBanner
        title="Our Clients"
        subtitle="Trusted by 500+ businesses, hotels, residences and institutions across Chennai and Tamil Nadu for reliable facility management."
        breadcrumb="Clients"
        bg="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
        overlay="linear-gradient(135deg, rgba(5,12,35,.94) 0%, rgba(15,37,87,.9) 100%)"
      />

      {/* Sectors */}
      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">Who We Serve</div>
            <h2 className="sec-title">Industries We Work With</h2>
            <p className="sec-desc">Welcare FMS serves a diverse range of sectors with customised facility management solutions.</p>
          </div></FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(5,1fr)', gap:18 }}>
            {SECTORS.map((s,i)=>(
              <FadeIn key={s.name} delay={i*60}>
                <div style={{ background:'#f4f7fc', borderRadius:18, padding:'24px 18px', textAlign:'center', border:'1.5px solid #dde6f5', transition:'transform .3s, box-shadow .3s, border-color .3s', cursor:'default' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-5px)';e.currentTarget.style.boxShadow='0 16px 45px rgba(15,37,87,.12)';e.currentTarget.style.borderColor='rgba(75,181,67,.35)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='#dde6f5'}}>
                  <div style={{ fontSize:'2.2rem', marginBottom:10 }}>{s.ico}</div>
                  <div style={{ fontFamily:'Playfair Display,serif', fontSize:'.9rem', fontWeight:800, color:'#0f2557', marginBottom:6, lineHeight:1.3 }}>{s.name}</div>
                  <div style={{ fontSize:'.72rem', color:'#4bb543', fontWeight:700, letterSpacing:.5 }}>{s.count}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div style={{ background:'linear-gradient(135deg,#0c1f4a,#1a3a8f)', padding:'52px 6%' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
          {[['500+','Active Clients'],['1000+','Projects Completed'],['15+','Years of Service'],['98%','Client Retention Rate']].map(([n,l],i)=>{
            const { ref, inView } = useInView({ threshold:.5, triggerOnce:true })
            return (
              <div ref={ref} key={l} style={{ textAlign:'center', opacity:inView?1:0, transform:inView?'none':'translateY(20px)', transition:`opacity .6s ${i*90}ms, transform .6s ${i*90}ms` }}>
                <div style={{ fontFamily:'Playfair Display,serif', fontSize:'2.8rem', fontWeight:900, color:'#6dd468', lineHeight:1 }}>{n}</div>
                <div style={{ fontSize:'.82rem', color:'rgba(255,255,255,.6)', marginTop:8, letterSpacing:.5 }}>{l}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Testimonials */}
      <section className="section" style={{ background:'#f4f7fc' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">Client Stories</div>
            <h2 className="sec-title">What Our Clients Say</h2>
            <p className="sec-desc">Real feedback from real clients across various industries in Chennai and Tamil Nadu.</p>
          </div></FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:26 }}>
            {TESTIMONIALS.map((t,i)=>(
              <FadeIn key={t.name} delay={i*90}>
                <div style={{ background:'#fff', borderRadius:22, padding:'30px 26px', border:'1.5px solid #dde6f5', position:'relative', overflow:'hidden', cursor:'default', transition:'transform .3s, box-shadow .3s, border-color .3s' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 22px 60px rgba(15,37,87,.12)';e.currentTarget.style.borderColor='rgba(75,181,67,.3)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='#dde6f5'}}>
                  <div style={{ position:'absolute', top:-8, right:16, fontSize:'8rem', color:'rgba(75,181,67,.06)', fontFamily:'Georgia,serif', lineHeight:1, pointerEvents:'none' }}>"</div>
                  <div style={{ color:'#f59e0b', marginBottom:14, letterSpacing:2 }}>{'★'.repeat(t.stars)}</div>
                  <p style={{ fontSize:'.9rem', color:'#4a5568', lineHeight:1.88, fontStyle:'italic', marginBottom:24 }}>"{t.quote}"</p>
                  <div style={{ display:'flex', alignItems:'center', gap:13 }}>
                    <div style={{ width:48, height:48, borderRadius:'50%', background:`linear-gradient(135deg,#0f2557,#1a3a8f)`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:'1.1rem', flexShrink:0, boxShadow:'0 4px 14px rgba(15,37,87,.25)' }}>{t.init}</div>
                    <div>
                      <div style={{ fontWeight:800, fontSize:'.9rem', color:'#0f2557' }}>{t.name}</div>
                      <div style={{ fontSize:'.75rem', color:'#7a8ba0', marginTop:3 }}>{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">FAQ</div>
            <h2 className="sec-title">Frequently Asked Questions</h2>
            <p className="sec-desc">Answers to the most common questions from our clients.</p>
          </div></FadeIn>
          <div>
            {FAQS.map((f,i)=>{
              const { ref, inView } = useInView({ threshold:.08, triggerOnce:true })
              return (
                <div ref={ref} key={f.q} style={{ borderBottom:'1.5px solid #f0f4fa', padding:'22px 0', opacity:inView?1:0, transform:inView?'none':'translateY(18px)', transition:`opacity .6s ${i*80}ms, transform .6s ${i*80}ms` }}>
                  <div style={{ display:'flex', alignItems:'flex-start', gap:16 }}>
                    <div style={{ width:32, height:32, borderRadius:9, background:'rgba(75,181,67,.1)', border:'1px solid rgba(75,181,67,.2)', display:'flex', alignItems:'center', justifyContent:'center', color:'#4bb543', fontWeight:900, fontSize:'1rem', flexShrink:0 }}>Q</div>
                    <div>
                      <div style={{ fontFamily:'Playfair Display,serif', fontSize:'1rem', fontWeight:800, color:'#0f2557', marginBottom:8 }}>{f.q}</div>
                      <div style={{ fontSize:'.88rem', color:'#7a8ba0', lineHeight:1.82 }}>{f.a}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <div style={{ textAlign:'center', marginTop:44 }}>
            <p style={{ fontSize:'.95rem', color:'#7a8ba0', marginBottom:18 }}>Have more questions? We're happy to help.</p>
            <Link to="/contact" className="btn-primary" style={{ textDecoration:'none' }}>Ask Us Anything →</Link>
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}