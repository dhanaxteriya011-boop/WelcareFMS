import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import PageBanner from '../components/shared/PageBanner'
import { StatsBar, CtaBanner } from '../components/index'

const TEAM = [
  { name:'Mr. Rajkumar S.',    role:'Managing Director',     img:'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80', desc:'25+ years in facility management. Visionary leader driving Welcare FMS to excellence.' },
  { name:'Mrs. Preethi R.',    role:'Operations Manager',    img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', desc:'Oversees all service verticals ensuring client satisfaction and quality standards.' },
  { name:'Mr. Karthik M.',     role:'Technical Head',        img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', desc:'Expert in electrical and plumbing systems with 18 years hands-on experience.' },
  { name:'Mrs. Santhiya D.',   role:'Client Relations Head', img:'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', desc:'Builds lasting relationships ensuring every client requirement is exceeded.' },
]

const MILESTONES = [
  { year:'2009', event:'Welcare FMS Founded', desc:'Started with housekeeping services in Chennai with a team of 12 professionals.' },
  { year:'2012', event:'Expanded to Security', desc:'Added security consultancy services, growing to 80+ trained personnel.' },
  { year:'2015', event:'Technical Services Launch', desc:'Launched electrical and plumbing divisions — now serving 200+ clients.' },
  { year:'2018', event:'500 Clients Milestone', desc:'Crossed 500 active clients across hotels, corporates, and residences.' },
  { year:'2021', event:'Catering & Events Added', desc:'Full catering services added for weddings, corporate events, and parties.' },
  { year:'2024', event:'1000+ Projects Done', desc:'Celebrated 1000+ successful facility management projects across Tamil Nadu.' },
]

const VALUES = [
  { ico:'🎯', title:'Excellence',    desc:'We set the highest standards in every service we deliver, no exceptions.' },
  { ico:'🤝', title:'Integrity',     desc:'Honest, transparent operations. We honour every commitment we make to clients.' },
  { ico:'💡', title:'Innovation',    desc:'Continuously improving our processes and adopting best practices in FM.' },
  { ico:'🌱', title:'Sustainability',desc:'Eco-conscious approaches in landscaping, energy, and waste management.' },
  { ico:'👥', title:'People First',  desc:'Our trained workforce is our greatest asset — respected and continuously developed.' },
  { ico:'🏆', title:'Client Focus',  desc:'Every decision we make is guided by what creates the most value for our clients.' },
]

function FadeIn({ children, delay=0 }) {
  const { ref, inView } = useInView({ threshold:.1, triggerOnce:true })
  return (
    <div ref={ref} style={{ opacity:inView?1:0, transform:inView?'none':'translateY(28px)', transition:`opacity .7s ${delay}ms, transform .7s ${delay}ms` }}>
      {children}
    </div>
  )
}

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title="About Welcare FMS"
        subtitle="Chennai's trusted facility management company since 2009 — delivering excellence across housekeeping, security, landscape, electrical, and more."
        breadcrumb="About"
        bg="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
      />

      {/* STORY */}
      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>
            <FadeIn>
              <div style={{ position:'relative' }}>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:14, height:480 }}>
                  <div style={{ borderRadius:20, overflow:'hidden', gridRow:'span 2' }}>
                    <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="Team" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                  </div>
                  <div style={{ borderRadius:20, overflow:'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" alt="Service" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                  </div>
                  <div style={{ borderRadius:20, overflow:'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" alt="Landscape" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
                  </div>
                </div>
                <div style={{ position:'absolute', bottom:-20, right:-20, background:'#4bb543', color:'#fff', borderRadius:18, padding:'20px 26px', boxShadow:'0 14px 45px rgba(75,181,67,.42)', textAlign:'center', zIndex:3 }}>
                  <div style={{ fontFamily:'Playfair Display,serif', fontSize:'2.4rem', fontWeight:900, lineHeight:1 }}>15+</div>
                  <div style={{ fontSize:'.72rem', opacity:.9, marginTop:4, textTransform:'uppercase', letterSpacing:.5 }}>Years of Trust</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="sec-tag" style={{ display:'inline-block', marginBottom:14 }}>Our Story</div>
              <h2 className="sec-title" style={{ textAlign:'left' }}>Built on Trust,<br/>Driven by Excellence</h2>
              <p style={{ color:'#7a8ba0', lineHeight:1.9, marginBottom:18, fontSize:'.97rem' }}>
                Welcare FMS was founded in 2009 in Nungambakkam, Chennai with a simple mission: to provide reliable, professional facility management services that businesses could truly depend on. Starting with a small team of 12 housekeeping professionals, we've grown into a comprehensive facility management partner serving 500+ clients across Tamil Nadu.
              </p>
              <p style={{ color:'#7a8ba0', lineHeight:1.9, marginBottom:28, fontSize:'.97rem' }}>
                Today, Welcare FMS offers 8 service verticals — housekeeping, landscape, security, gardening, electrical, plumbing, catering and outsourcing — all under one trusted roof. Our GST-registered, EPF-compliant, and EST-certified operations ensure full regulatory compliance while delivering world-class service quality at pocket-friendly prices.
              </p>
              <div style={{ display:'flex', gap:16, flexWrap:'wrap' }}>
                <Link to="/services" className="btn-primary" style={{ textDecoration:'none' }}>Explore Our Services →</Link>
                <Link to="/contact" style={{ background:'transparent', border:'2px solid #0f2557', color:'#0f2557', padding:'13px 28px', borderRadius:50, fontWeight:700, fontSize:'.93rem', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8, transition:'all .3s' }}
                  onMouseEnter={e=>{e.currentTarget.style.background='#0f2557';e.currentTarget.style.color='#fff'}}
                  onMouseLeave={e=>{e.currentTarget.style.background='transparent';e.currentTarget.style.color='#0f2557'}}>
                  Get In Touch
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* VALUES */}
      <section className="section" style={{ background:'#f4f7fc' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">What We Stand For</div>
            <h2 className="sec-title">Our Core Values</h2>
            <p className="sec-desc">Every decision we make, every service we deliver is guided by these six principles.</p>
          </div></FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
            {VALUES.map((v,i) => (
              <FadeIn key={v.title} delay={i*80}>
                <div style={{ background:'#fff', borderRadius:20, padding:'28px 26px', border:'1.5px solid #dde6f5', transition:'transform .3s, box-shadow .3s, border-color .3s', cursor:'default' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 20px 55px rgba(15,37,87,.12)';e.currentTarget.style.borderColor='rgba(75,181,67,.35)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='#dde6f5'}}>
                  <div style={{ width:52, height:52, background:'rgba(75,181,67,.1)', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem', marginBottom:16, border:'1px solid rgba(75,181,67,.2)' }}>{v.ico}</div>
                  <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.1rem', fontWeight:800, color:'#0f2557', marginBottom:8 }}>{v.title}</h3>
                  <p style={{ fontSize:'.86rem', color:'#7a8ba0', lineHeight:1.8 }}>{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">Our Journey</div>
            <h2 className="sec-title">15 Years of Growth</h2>
            <p className="sec-desc">From a small housekeeping team to Tamil Nadu's most trusted facility management company.</p>
          </div></FadeIn>
          <div style={{ position:'relative', maxWidth:820, margin:'0 auto' }}>
            {/* vertical line */}
            <div style={{ position:'absolute', left:'50%', top:0, bottom:0, width:2, background:'linear-gradient(to bottom,#4bb543,#0f2557)', transform:'translateX(-50%)', borderRadius:2 }} />
            {MILESTONES.map((m,i) => (
              <FadeIn key={m.year} delay={i*100}>
                <div style={{ display:'flex', justifyContent:i%2===0?'flex-start':'flex-end', marginBottom:40, position:'relative' }}>
                  {/* dot */}
                  <div style={{ position:'absolute', left:'50%', top:20, transform:'translateX(-50%)', width:14, height:14, borderRadius:'50%', background:'#4bb543', border:'3px solid #fff', boxShadow:'0 0 0 4px rgba(75,181,67,.25)', zIndex:1 }} />
                  <div style={{ width:'44%', background:'#f4f7fc', borderRadius:16, padding:'20px 22px', border:'1.5px solid #dde6f5', [i%2===0?'marginRight':'marginLeft']:'6%' }}>
                    <div style={{ fontSize:'.72rem', fontWeight:800, color:'#4bb543', letterSpacing:1.5, textTransform:'uppercase', marginBottom:6 }}>{m.year}</div>
                    <div style={{ fontFamily:'Playfair Display,serif', fontSize:'1rem', fontWeight:800, color:'#0f2557', marginBottom:6 }}>{m.event}</div>
                    <div style={{ fontSize:'.82rem', color:'#7a8ba0', lineHeight:1.7 }}>{m.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background:'#f4f7fc' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">Meet the Team</div>
            <h2 className="sec-title">The People Behind Welcare</h2>
            <p className="sec-desc">Our leadership team brings decades of combined experience in facility management, operations, and client services.</p>
          </div></FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
            {TEAM.map((t,i) => (
              <FadeIn key={t.name} delay={i*90}>
                <div style={{ background:'#fff', borderRadius:20, overflow:'hidden', border:'1.5px solid #dde6f5', transition:'transform .35s, box-shadow .35s', cursor:'default' }}
                  onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 20px 55px rgba(15,37,87,.12)'}}
                  onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
                  <div style={{ height:220, overflow:'hidden' }}>
                    <img src={t.img} alt={t.name} style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', transition:'transform .5s' }}
                      onMouseEnter={e=>e.currentTarget.style.transform='scale(1.07)'}
                      onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
                  </div>
                  <div style={{ padding:'18px 20px' }}>
                    <div style={{ fontFamily:'Playfair Display,serif', fontSize:'1rem', fontWeight:800, color:'#0f2557', marginBottom:4 }}>{t.name}</div>
                    <div style={{ fontSize:'.74rem', fontWeight:700, color:'#4bb543', letterSpacing:1, textTransform:'uppercase', marginBottom:10 }}>{t.role}</div>
                    <div style={{ fontSize:'.82rem', color:'#7a8ba0', lineHeight:1.7 }}>{t.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <FadeIn><div className="sec-hdr">
            <div className="sec-tag">Credentials</div>
            <h2 className="sec-title">Fully Licensed & Compliant</h2>
            <p className="sec-desc">Welcare FMS is registered, certified, and compliant with all applicable regulations in India.</p>
          </div></FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
            {[
              { ico:'📜', label:'GST Registration', val:'33AACF4037FW4037FIZG', desc:'Registered under Goods & Services Tax Act, Government of India.' },
              { ico:'🛡️', label:'EPF Registration', val:'TNMASI559663000', desc:'Employees Provident Fund compliant — all staff are EPF-covered.' },
              { ico:'🏢', label:'EST Registration', val:'51001188850001001', desc:'Registered under Employees State Insurance — full workforce coverage.' },
            ].map((c,i)=>(
              <FadeIn key={c.label} delay={i*100}>
                <div style={{ background:'#f4f7fc', borderRadius:18, padding:'26px 24px', border:'1.5px solid #dde6f5', textAlign:'center' }}>
                  <div style={{ fontSize:'2.4rem', marginBottom:14 }}>{c.ico}</div>
                  <div style={{ fontFamily:'Playfair Display,serif', fontSize:'1rem', fontWeight:800, color:'#0f2557', marginBottom:6 }}>{c.label}</div>
                  <div style={{ fontFamily:'monospace', fontSize:'.8rem', color:'#4bb543', fontWeight:700, background:'rgba(75,181,67,.1)', padding:'5px 14px', borderRadius:50, display:'inline-block', marginBottom:12 }}>{c.val}</div>
                  <div style={{ fontSize:'.83rem', color:'#7a8ba0', lineHeight:1.75 }}>{c.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
