import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'

// ══════════════════════════════════════════════════
// ABOUT
// ══════════════════════════════════════════════════
const features = [
  { ico:'✅', lbl:'GST Registered',       detail:'33AACF4037FW4037FIZG' },
  { ico:'🏆', lbl:'Industry Certified',   detail:'EPF & EST Compliant'  },
  { ico:'👷', lbl:'Trained Professionals',detail:'Supervised deployment' },
  { ico:'💰', lbl:'Cost Effective',       detail:'Pocket-friendly pricing'},
]

export function About() {
  const { ref:l, inView:lIn } = useInView({ threshold:.1, triggerOnce:true })
  const { ref:r, inView:rIn } = useInView({ threshold:.1, triggerOnce:true })

  return (
    <section id="about" style={{ background:'#f4f7fc', padding:'96px 0' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 6%', display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'center' }}>

        {/* IMAGE COLLAGE */}
        <div ref={l} style={{ position:'relative', opacity:lIn?1:0, transform:lIn?'none':'translateY(32px)', transition:'opacity .75s, transform .75s' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1.05fr .95fr', gap:14, height:500 }}>
            <div style={{ borderRadius:22, overflow:'hidden', position:'relative' }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80" alt="Team" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(15,37,87,.5) 0%, transparent 50%)' }} />
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
              <div style={{ borderRadius:22, overflow:'hidden', flex:1, position:'relative' }}>
                <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&q=80" alt="Housekeeping" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
              <div style={{ borderRadius:22, overflow:'hidden', flex:1, position:'relative' }}>
                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80" alt="Landscape" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              </div>
            </div>
          </div>

          <div style={{ position:'absolute', bottom:-20, right:-20, background:'#4bb543', color:'#fff', borderRadius:18, padding:'20px 26px', boxShadow:'0 14px 45px rgba(75,181,67,.42)', textAlign:'center', zIndex:3 }}>
            <div style={{ fontFamily:'Playfair Display,serif', fontSize:'2.4rem', fontWeight:900, lineHeight:1 }}>15+</div>
            <div style={{ fontSize:'.72rem', opacity:.9, marginTop:4, letterSpacing:.5, textTransform:'uppercase' }}>Years Excellence</div>
          </div>
          <div style={{ position:'absolute', top:-18, left:-18, background:'#0f2557', color:'#fff', borderRadius:16, padding:'16px 20px', boxShadow:'0 10px 32px rgba(15,37,87,.38)', zIndex:3 }}>
            <div style={{ fontSize:'.66rem', color:'#6dd468', letterSpacing:1.8, textTransform:'uppercase', marginBottom:4, fontWeight:700 }}>✓ Registered</div>
            <div style={{ fontSize:'.85rem', fontWeight:700 }}>GST Certified</div>
          </div>
          <div style={{ position:'absolute', bottom:60, left:-30, width:90, height:90, borderRadius:'50%', border:'3px dashed rgba(75,181,67,.3)', zIndex:1, animation:'spin 18s linear infinite' }} />
          <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
        </div>

        {/* TEXT */}
        <div ref={r} style={{ opacity:rIn?1:0, transform:rIn?'none':'translateY(32px)', transition:'opacity .75s .15s, transform .75s .15s' }}>
          <div className="sec-tag" style={{ display:'inline-block', marginBottom:14 }}>About Welcare FMS</div>
          <h2 className="sec-title" style={{ textAlign:'left' }}>Your Trusted Partner<br/>in Facility Excellence</h2>
          <p style={{ color:'#7a8ba0', lineHeight:1.9, marginBottom:16, fontSize:'.97rem' }}>
            Welcare FMS is a premier facility management services company headquartered in Nungambakkam, Chennai. We deliver comprehensive outsourced solutions for hotels, homes, corporate houses, commercial complexes, residential societies and industrial facilities across Tamil Nadu.
          </p>
          <p style={{ color:'#7a8ba0', lineHeight:1.9, marginBottom:30, fontSize:'.97rem' }}>
            With highly trained professionals and full regulatory compliance — GST, EPF, and EST — we ensure every service is rendered with precision, reliability, and a genuine client-first approach at pocket-friendly prices.
          </p>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12, marginBottom:34 }}>
            {features.map(f=>(
              <div key={f.lbl}
                style={{ background:'#fff', borderRadius:14, padding:'14px 16px', border:'1.5px solid #dde6f5', transition:'border-color .3s, transform .3s, box-shadow .3s', cursor:'default' }}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='#4bb543';e.currentTarget.style.transform='translateX(5px)';e.currentTarget.style.boxShadow='0 6px 24px rgba(75,181,67,.12)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='#dde6f5';e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
                <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:5 }}>
                  <div style={{ width:34, height:34, background:'rgba(75,181,67,.1)', borderRadius:9, display:'flex', alignItems:'center', justifyContent:'center', fontSize:17 }}>{f.ico}</div>
                  <div style={{ fontSize:'.85rem', fontWeight:700, color:'#0f2557' }}>{f.lbl}</div>
                </div>
                <div style={{ fontSize:'.74rem', color:'#7a8ba0', paddingLeft:44 }}>{f.detail}</div>
              </div>
            ))}
          </div>
          <Link to="/contact" className="btn-primary" style={{ width:'fit-content', textDecoration:'none' }}>Get In Touch →</Link>
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════
// WHY US
// ══════════════════════════════════════════════════
const whyItems = [
  { ico:'🎯', title:'Precision & Reliability',  desc:'Our professionals are trained to the highest industry standards. Every single job executed with flawless precision under experienced supervision.' },
  { ico:'💰', title:'Pocket-Friendly Pricing',  desc:'Premium quality at competitive, completely transparent rates. We believe excellent facility management should be accessible to every business.' },
  { ico:'🤝', title:'Client-First Approach',    desc:'Every service is personalised to your specific requirements. Close co-ordination with our clients ensures tailored, lasting solutions.' },
  { ico:'📋', title:'Fully Compliant',          desc:'GST registered, EPF compliant, and EST certified. All operations follow industrial norms and regulatory requirements without exception.' },
  { ico:'🏆', title:'One-Stop Solution',        desc:'Eight service verticals under one trusted roof. Deal with a single accountable partner for all your facility management needs.' },
  { ico:'⚡', title:'Prompt Service Delivery',  desc:'Well-organised and prompt execution every time. We understand downtime costs money — so we act fast and always deliver on time.' },
]

export function WhyUs() {
  return (
    <section id="why" style={{ padding:'96px 0', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=60')", backgroundSize:'cover', backgroundPosition:'center', zIndex:0 }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(5,12,35,.96) 0%,rgba(15,37,87,.93) 100%)', zIndex:1 }} />

      <div style={{ position:'relative', zIndex:2, maxWidth:1280, margin:'0 auto', padding:'0 6%' }}>
        <div className="sec-hdr">
          <div className="sec-tag" style={{ background:'rgba(75,181,67,.18)', borderColor:'rgba(75,181,67,.38)', color:'#6dd468' }}>Why Choose Us</div>
          <h2 className="sec-title" style={{ color:'#fff' }}>The Welcare Difference</h2>
          <p className="sec-desc" style={{ color:'rgba(255,255,255,.52)' }}>We go beyond standard facility management to deliver outcomes that truly matter to your organisation.</p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:24 }}>
          {whyItems.map((w,i) => {
            const { ref, inView } = useInView({ threshold:.08, triggerOnce:true })
            return (
              <div key={w.title} ref={ref}
                style={{ background:'rgba(255,255,255,.055)', border:'1px solid rgba(255,255,255,.09)', borderRadius:20, padding:'30px 26px', position:'relative', overflow:'hidden', opacity:inView?1:0, transform:inView?'translateY(0)':'translateY(28px)', transition:`opacity .6s ${(i%3)*90}ms, transform .6s ${(i%3)*90}ms`, cursor:'default' }}
                onMouseEnter={e=>{e.currentTarget.style.background='rgba(255,255,255,.1)';e.currentTarget.style.borderColor='rgba(75,181,67,.35)';e.currentTarget.style.transform='translateY(-5px)'}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.055)';e.currentTarget.style.borderColor='rgba(255,255,255,.09)';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{ position:'absolute', top:10, right:18, fontFamily:'Playfair Display,serif', fontSize:'4rem', fontWeight:900, color:'rgba(255,255,255,.04)', lineHeight:1, pointerEvents:'none' }}>0{i+1}</div>
                <div style={{ width:52, height:52, background:'rgba(75,181,67,.14)', borderRadius:14, display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.6rem', marginBottom:18, border:'1px solid rgba(75,181,67,.2)' }}>{w.ico}</div>
                <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.08rem', fontWeight:800, color:'#fff', marginBottom:10 }}>{w.title}</h3>
                <p style={{ fontSize:'.84rem', color:'rgba(255,255,255,.5)', lineHeight:1.82 }}>{w.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════
// STATS BAR
// ══════════════════════════════════════════════════
function StatCount({ num, suffix, label, ico }) {
  const numRef = useRef(null)
  useEffect(() => {
    const el = numRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      let startTime = null
      const animate = (ts) => {
        if (!startTime) startTime = ts
        const p = Math.min((ts - startTime) / 1600, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        el.textContent = Math.floor(eased * num)
        if (p < 1) requestAnimationFrame(animate)
        else el.textContent = num
      }
      requestAnimationFrame(animate)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [num])
  return (
    <div style={{ textAlign:'center', padding:'10px 0' }}>
      <div style={{ fontSize:'2rem', marginBottom:6 }}>{ico}</div>
      <div style={{ fontFamily:'Playfair Display,serif', fontSize:'2.6rem', fontWeight:900, color:'#fff', lineHeight:1, display:'flex', alignItems:'baseline', justifyContent:'center', gap:'1px' }}>
        <span ref={numRef}>0</span>
        <span>{suffix}</span>
      </div>
      <div style={{ fontSize:'.82rem', color:'rgba(255,255,255,.78)', marginTop:6, letterSpacing:.5 }}>{label}</div>
    </div>
  )
}

export function StatsBar() {
  const stats = [
    { num:8,    suffix:'+', label:'Service Verticals',  ico:'🔧' },
    { num:500,  suffix:'+', label:'Happy Clients',      ico:'😊' },
    { num:15,   suffix:'+', label:'Years Experience',   ico:'📅' },
    { num:1000, suffix:'+', label:'Projects Completed', ico:'✅' },
  ]
  return (
    <div style={{ background:'linear-gradient(135deg,#3da636 0%,#4bb543 50%,#2d7a27 100%)', padding:'52px 6%', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', top:-60, right:-60, width:200, height:200, borderRadius:'50%', background:'rgba(255,255,255,.06)', pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:-80, left:-40, width:280, height:280, borderRadius:'50%', background:'rgba(255,255,255,.04)', pointerEvents:'none' }} />
      <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24, position:'relative', zIndex:1 }}>
        {stats.map(s => <StatCount key={s.label} {...s} />)}
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════
// TESTIMONIALS  — static data only, no API
// ══════════════════════════════════════════════════
const TESTIMONIALS = [
  { id:1, author_name:'Rajesh Kumar',     avatar_initial:'R', author_role:'Facility Manager, IT Park — Chennai',                  rating:5, content:'Welcare FMS has been managing our corporate office housekeeping for 3+ years. Always punctual, professional, and consistently outstanding quality. Best facility partner we have had.' },
  { id:2, author_name:'Priya Venkatesh',  avatar_initial:'P', author_role:'President, Resident Welfare Association, Nungambakkam', rating:5, content:'Their landscaping team transformed our complex beautifully. They understood our vision perfectly, delivered on time, and the pricing was very competitive. Highly recommended!' },
  { id:3, author_name:'Suresh Annamalai', avatar_initial:'S', author_role:'Hotel Operations Manager, Chennai',                    rating:5, content:'Their electrical and plumbing teams are top-notch. Fast execution, highly skilled professionals who follow all safety norms. Our hotel maintenance has never been smoother.' },
]

export function Testimonials() {
  return (
    <section id="testimonials" style={{ background:'#fff', padding:'96px 0' }}>
      <div style={{ maxWidth:1280, margin:'0 auto', padding:'0 6%' }}>
        <div className="sec-hdr">
          <div className="sec-tag">Client Stories</div>
          <h2 className="sec-title">What Our Clients Say</h2>
          <p className="sec-desc">Trusted by businesses and residences across Chennai for reliable, professional facility management since 2009.</p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:28 }}>
          {TESTIMONIALS.map((t,i) => {
            const { ref, inView } = useInView({ threshold:.08, triggerOnce:true })
            return (
              <div key={t.id} ref={ref}
                style={{ background:'#f4f7fc', borderRadius:22, padding:'32px 28px', border:'1.5px solid #dde6f5', position:'relative', overflow:'hidden', opacity:inView?1:0, transform:inView?'translateY(0)':'translateY(28px)', transition:`opacity .65s ${i*110}ms, transform .65s ${i*110}ms`, cursor:'default' }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 22px 64px rgba(15,37,87,.13)';e.currentTarget.style.borderColor='rgba(75,181,67,.32)';e.currentTarget.style.transform='translateY(-6px)'}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.borderColor='#dde6f5';e.currentTarget.style.transform='translateY(0)'}}>
                <div style={{ position:'absolute', top:-8, right:16, fontSize:'8rem', color:'rgba(75,181,67,.06)', fontFamily:'Georgia,serif', lineHeight:1, pointerEvents:'none' }}>"</div>
                <div style={{ color:'#f59e0b', marginBottom:14, letterSpacing:2, fontSize:'.95rem' }}>{'★'.repeat(t.rating||5)}</div>
                <p style={{ fontSize:'.92rem', color:'#4a5568', lineHeight:1.88, fontStyle:'italic', marginBottom:26, position:'relative' }}>"{t.content}"</p>
                <div style={{ display:'flex', alignItems:'center', gap:14 }}>
                  <div style={{ width:48, height:48, borderRadius:'50%', background:`linear-gradient(135deg,${['#0f2557','#1a3a8f','#0d4f8c'][i%3]},${['#1a3a8f','#0d4f8c','#4bb543'][i%3]})`, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:900, fontSize:'1.1rem', flexShrink:0, boxShadow:'0 4px 14px rgba(15,37,87,.25)' }}>{t.avatar_initial}</div>
                  <div>
                    <div style={{ fontWeight:800, fontSize:'.9rem', color:'#0f2557' }}>{t.author_name}</div>
                    <div style={{ fontSize:'.75rem', color:'#7a8ba0', marginTop:3 }}>{t.author_role}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════
// CTA BANNER
// ══════════════════════════════════════════════════
export function CtaBanner() {
  return (
    <section style={{ padding:'88px 6%', position:'relative', overflow:'hidden' }}>
      <div style={{ position:'absolute', inset:0, backgroundImage:"url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=60')", backgroundSize:'cover', backgroundPosition:'center' }} />
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(135deg,rgba(5,12,35,.93) 0%,rgba(75,181,67,.65) 100%)' }} />
      <div style={{ position:'relative', zIndex:2, maxWidth:760, margin:'0 auto', textAlign:'center' }}>
        <div style={{ display:'inline-block', background:'rgba(255,255,255,.12)', border:'1px solid rgba(255,255,255,.2)', borderRadius:50, padding:'7px 20px', fontSize:'.72rem', fontWeight:700, color:'rgba(255,255,255,.85)', letterSpacing:2, textTransform:'uppercase', marginBottom:20 }}>
          📞 Free Consultation Available
        </div>
        <h2 style={{ fontFamily:'Playfair Display,serif', fontSize:'clamp(1.85rem,3.5vw,2.9rem)', fontWeight:900, color:'#fff', lineHeight:1.2, marginBottom:18 }}>
          Ready to Transform<br/>Your Facility?
        </h2>
        <p style={{ fontSize:'1.05rem', color:'rgba(255,255,255,.72)', lineHeight:1.82, marginBottom:38 }}>
          Contact us today and get a customised facility management solution at the best price. Serving hotels, corporates, residences and industries across Chennai & Tamil Nadu.
        </p>
        <div style={{ display:'flex', gap:16, justifyContent:'center', flexWrap:'wrap' }}>
          <Link to="/contact" className="btn-primary" style={{ textDecoration:'none', fontSize:'1rem', padding:'16px 38px', borderRadius:50 }}>
            Get a Free Quote →
          </Link>
          <a href="https://wa.me/919087876366?text=Hello%20Welcare%20FMS%2C%20I%20need%20a%20quote%20for%20facility%20management."
            target="_blank" rel="noreferrer"
            style={{ background:'#25D366', color:'#fff', padding:'16px 32px', borderRadius:50, fontWeight:700, fontSize:'1rem', textDecoration:'none', display:'inline-flex', alignItems:'center', gap:10, boxShadow:'0 8px 28px rgba(37,211,102,.42)', transition:'background .3s, transform .3s' }}
            onMouseEnter={e=>{e.currentTarget.style.background='#128C7E';e.currentTarget.style.transform='translateY(-3px)'}}
            onMouseLeave={e=>{e.currentTarget.style.background='#25D366';e.currentTarget.style.transform='translateY(0)'}}>
            💬 WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  )
}

// ══════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════
const svcs=[['Housekeeping','#services'],['Landscape Services','#services'],['Security Services','#services'],['Outsourcing','#services'],['Gardening','#services'],['Electrical','#services'],['Plumbing','#services'],['Catering','#services']]
const qlinks=[['About Us','#about'],['Our Services','#services'],['Service Gallery','#gallery'],['Client Reviews','#testimonials'],['Find Us','#map'],['Contact Us','#contact']]

export function Footer() {
  return (
    <footer style={{ background:'#060f1e', padding:'72px 6% 28px' }}>
      <div style={{ maxWidth:1280, margin:'0 auto 52px', display:'grid', gridTemplateColumns:'2.2fr 1fr 1fr 1.4fr', gap:52 }}>

        {/* Brand */}
        <div>
          <a href="#hero" style={{ display:'flex', alignItems:'center', gap:14, textDecoration:'none', marginBottom:18 }}>
            <div style={{ width:50, height:50, background:'#fff', borderRadius:'50%', border:'3px solid #4bb543', display:'flex', alignItems:'center', justifyContent:'center', fontSize:24, boxShadow:'0 4px 18px rgba(75,181,67,.3)' }}>🏠</div>
            <div>
              <div style={{ fontFamily:"'Rajdhani', sans-serif", fontSize:'1.55rem', fontWeight:700, color:'#fff', letterSpacing:'3px', lineHeight:1 }}>WELCARE</div>
              <div style={{ fontFamily:"'Rajdhani', sans-serif", fontSize:'.62rem', color:'#6dd468', letterSpacing:'5px', textTransform:'uppercase', marginTop:3, fontWeight:700 }}>F M S</div>
            </div>
          </a>
          <p style={{ fontSize:'.84rem', color:'rgba(255,255,255,.36)', lineHeight:1.88, marginBottom:20 }}>
            Leading facility management services company in Chennai, delivering comprehensive outsourced solutions for hotels, homes, corporates and industrial facilities across Tamil Nadu since 2009.
          </p>
          <div style={{ background:'rgba(255,255,255,.04)', borderRadius:12, padding:'14px 16px', border:'1px solid rgba(255,255,255,.07)' }}>
            {['GST: 33AACF4037FW4037FIZG','EPF: TNMASI559663000','EST: 51001188850001001'].map(r=>(
              <div key={r} style={{ fontSize:'.72rem', color:'rgba(255,255,255,.24)', marginBottom:4, fontFamily:'Courier New,monospace' }}>{r}</div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <div style={{ fontWeight:700, color:'rgba(255,255,255,.8)', fontSize:'.8rem', letterSpacing:1, marginBottom:20, textTransform:'uppercase' }}>Services</div>
          <ul style={{ listStyle:'none' }}>
            {svcs.map(([s,h])=>(
              <li key={s} style={{ marginBottom:10 }}>
                <Link to={h} style={{ fontSize:'.83rem', color:'rgba(255,255,255,.38)', textDecoration:'none', display:'flex', alignItems:'center', gap:7, transition:'color .3s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='#6dd468'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,.38)'}>
                  <span style={{ color:'#4bb543', fontSize:'1.05rem' }}>›</span>{s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <div style={{ fontWeight:700, color:'rgba(255,255,255,.8)', fontSize:'.8rem', letterSpacing:1, marginBottom:20, textTransform:'uppercase' }}>Quick Links</div>
          <ul style={{ listStyle:'none' }}>
            {qlinks.map(([l,h])=>(
              <li key={l} style={{ marginBottom:10 }}>
                <Link to={h} style={{ fontSize:'.83rem', color:'rgba(255,255,255,.38)', textDecoration:'none', display:'flex', alignItems:'center', gap:7, transition:'color .3s' }}
                  onMouseEnter={e=>e.currentTarget.style.color='#6dd468'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,.38)'}>
                  <span style={{ color:'#4bb543', fontSize:'1.05rem' }}>›</span>{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontWeight:700, color:'rgba(255,255,255,.8)', fontSize:'.8rem', letterSpacing:1, marginBottom:20, textTransform:'uppercase' }}>Contact</div>
          {[
            { ico:'📍', txt:'#9/3, 2nd Floor, Pushpa Nagar Main Road,\nNungambakkam, Chennai – 600 034' },
            { ico:'📞', txt:'+91 90878 76366', href:'tel:+919087876366' },
            { ico:'📠', txt:'044 – 28225362 / 4854 6598' },
            { ico:'✉️', txt:'admin@welcarefms.com', href:'mailto:admin@welcarefms.com' },
            { ico:'💬', txt:'+91 95859 49422 (WhatsApp)', href:'https://wa.me/919087876366' },
          ].map((c,i)=>(
            <div key={i} style={{ display:'flex', gap:11, marginBottom:14, alignItems:'flex-start' }}>
              <span style={{ fontSize:15, flexShrink:0, marginTop:2 }}>{c.ico}</span>
              <span style={{ fontSize:'.8rem', color:'rgba(255,255,255,.36)', lineHeight:1.65 }}>
                {c.href
                  ? <a href={c.href} target={c.href.startsWith('http')?'_blank':'_self'} rel="noreferrer" style={{ color:'rgba(255,255,255,.36)', textDecoration:'none', transition:'color .3s' }} onMouseEnter={e=>e.target.style.color='#6dd468'} onMouseLeave={e=>e.target.style.color='rgba(255,255,255,.36)'}>{c.txt}</a>
                  : c.txt.split('\n').map((l,j)=><span key={j}>{l}{j===0&&<br/>}</span>)
                }
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div style={{ maxWidth:1280, margin:'0 auto', borderTop:'1px solid rgba(255,255,255,.07)', paddingTop:26, display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:14 }}>
        <div style={{ fontSize:'.79rem', color:'rgba(255,255,255,.25)' }}>
          © {new Date().getFullYear()} <a href="#hero" style={{ color:'#6dd468', textDecoration:'none' }}>Welcare FMS</a>. All rights reserved. | Facility Management Services, Chennai, Tamil Nadu.
        </div>
        <div style={{ display:'flex', gap:10 }}>
          {[['https://wa.me/919087876366','💬','WhatsApp'],['mailto:admin@welcarefms.com','✉️','Email'],['tel:+919087876366','📞','Call']].map(([h,ico,ttl])=>(
            <a key={ico} href={h} target="_blank" rel="noreferrer" title={ttl}
              style={{ width:38, height:38, borderRadius:'50%', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:16, textDecoration:'none', transition:'background .3s, transform .3s' }}
              onMouseEnter={e=>{e.currentTarget.style.background='#4bb543';e.currentTarget.style.transform='translateY(-3px)'}}
              onMouseLeave={e=>{e.currentTarget.style.background='rgba(255,255,255,.06)';e.currentTarget.style.transform='translateY(0)'}}>
              {ico}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ══════════════════════════════════════════════════
// FLOATING WA
// ══════════════════════════════════════════════════
export function FloatingWA() {
  return (
    <a href="https://wa.me/919087876366?text=Hello%20Welcare%20FMS%2C%20I%20am%20interested%20in%20your%20services."
      target="_blank" rel="noreferrer" title="Chat on WhatsApp"
      style={{ position:'fixed', bottom:28, right:28, zIndex:1100, width:62, height:62, borderRadius:'50%', background:'#25D366', display:'flex', alignItems:'center', justifyContent:'center', textDecoration:'none', boxShadow:'0 8px 30px rgba(37,211,102,.52)', animation:'waPulse 2.5s ease-in-out infinite', transition:'background .3s, transform .3s' }}
      onMouseEnter={e=>{e.currentTarget.style.background='#128C7E';e.currentTarget.style.transform='scale(1.12)';e.currentTarget.style.animation='none'}}
      onMouseLeave={e=>{e.currentTarget.style.background='#25D366';e.currentTarget.style.transform='scale(1)';e.currentTarget.style.animation='waPulse 2.5s ease-in-out infinite'}}>

      {/* WhatsApp SVG icon */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#fff">
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.468.672 4.778 1.845 6.76L2 30l7.45-1.818A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.892-1.613l-.422-.252-4.42 1.08 1.11-4.3-.276-.44A11.6 11.6 0 1 1 16 27.6zm6.37-8.674c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.896 1.132-1.098 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.608.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.087-.174-.78-1.882-1.07-2.576-.282-.676-.568-.584-.78-.594l-.665-.012c-.23 0-.608.086-.926.434-.318.348-1.214 1.186-1.214 2.892s1.243 3.354 1.416 3.586c.174.232 2.446 3.732 5.928 5.234.828.358 1.474.572 1.978.732.83.264 1.587.226 2.184.138.666-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.202-1.656-.086-.144-.318-.23-.666-.404z"/>
      </svg>

      <style>{`@keyframes waPulse{0%,100%{box-shadow:0 8px 30px rgba(37,211,102,.52),0 0 0 0 rgba(37,211,102,.4)}50%{box-shadow:0 8px 30px rgba(37,211,102,.52),0 0 0 18px rgba(37,211,102,0)}}`}</style>
    </a>
  )
}