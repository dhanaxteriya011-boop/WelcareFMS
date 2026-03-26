import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import PageBanner from '../components/shared/PageBanner'
import { CtaBanner } from '../components/index'

const ALL_SERVICES = [
  {
    id:1, ico:'🧹', name:'Housekeeping Services', cat:'Cleaning',
    img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',
    tagline:'Spotless spaces, professional care',
    desc:'We are among the trusted organisations engaged in undertaking admirable Housekeeping Services. All services are rendered by expert professionals who have years of experience. Widely demanded by hotels, homes, corporate houses, commercial complexes, residential societies and offices.',
    features:['Dusting of windowsills, ledges & partitions','Window glass & mirror cleaning','Cobweb removal throughout premises','Garbage clearing & waste management','Floor mopping, scrubbing & polishing','Toilet & washroom deep cleaning','Carpet & upholstery care','Pantry & kitchen maintenance'],
    clients:['5-Star Hotels','Corporate Offices','Shopping Malls','Residential Societies'],
    available:'Daily / Weekly / Monthly contracts',
  },
  {
    id:2, ico:'🌿', name:'Landscape Services', cat:'Outdoor',
    img:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80',
    tagline:'Beautiful spaces, expert hands',
    desc:'We are renowned service providers of Landscaping Services. With skilled professionals possessing in-depth knowledge, we render these services to add grace to lawns, parks, private and public spaces. Landscape planners handle urban, rural and coastal land use.',
    features:['Lawn mowing, edging & maintenance','Ornamental plant care & pruning','Irrigation system installation & management','Park & public garden maintenance','Seasonal planting & bed care','Soil health management & fertilizing','Pest & disease control for plants','Outdoor lighting installation'],
    clients:['Corporate Campuses','Residential Complexes','Hotels & Resorts','Public Parks'],
    available:'Monthly / Seasonal / Project basis',
  },
  {
    id:3, ico:'🛡️', name:'Security Services', cat:'Safety',
    img:'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=700&q=80',
    tagline:'Reliable protection, trained professionals',
    desc:'Driven by perfection, we are instrumental in providing Security Consultancy services that are highly reliable and worthwhile. We assure jobs under the strict supervision of experienced professionals who follow industrial norms with assurance.',
    features:['24/7 security guard deployment','Access control & visitor management','CCTV monitoring & surveillance support','Emergency response training','Fire safety & evacuation drills','Background-verified personnel','Female security officers available','Supervisory rounds & reports'],
    clients:['IT Parks','Banks & Finance','Hospitals','Residential Gated Communities'],
    available:'24/7 round-the-clock deployment',
  },
  {
    id:4, ico:'🔄', name:'Outsourcing Services', cat:'Business',
    img:'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=80',
    tagline:'Expert manpower, seamless operations',
    desc:'With the support of our technical facilities, we offer comprehensive Outsourcing services using deft professionals who possess in-depth and vast knowledge in their respective fields. Services provided in a well-organised and prompt manner.',
    features:['Skilled manpower supply on contract','Technical support staff deployment','Administrative & back-office outsourcing','Contract workforce management','Payroll processing for deployed staff','On-site supervisor provision','Performance monitoring & reporting','Flexible engagement models'],
    clients:['Manufacturing Units','IT Companies','Healthcare Facilities','Retail Chains'],
    available:'Short-term / Long-term contracts',
  },
  {
    id:5, ico:'🌱', name:'Gardening Services', cat:'Outdoor',
    img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=80',
    tagline:'Thriving gardens, skilled care',
    desc:'Our team of skilled and trained professionals has the capability to provide clients with a wide variety of gardening services. These services are designed as per the specific needs and guidelines of our esteemed clients.',
    features:['Scraping & preparation of top soil layer','Planting of trees, shrubs & flowers','Fertilizing & composting programs','Getting rid of weeds & invasive plants','Farm house garden management','Custom garden design & layout','Water feature maintenance','Seasonal garden transformations'],
    clients:['Bungalows & Villas','Farm Houses','Corporate Gardens','Hotels & Resorts'],
    available:'Weekly / Monthly / Annual packages',
  },
  {
    id:6, ico:'⚡', name:'Electrical Services', cat:'Technical',
    img:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=700&q=80',
    tagline:'Safe, efficient, industry-grade work',
    desc:'With years of experience, we provide superior grade Electrical Services using advanced technology in adherence with industry standards. Illustrious for our client-centric approach and cost effectiveness, this service is rendered in varied places.',
    features:['220KV sub-station maintenance','LT/HT panel installation & servicing','Earth resistance measurement & reporting','Switchyard maintenance & testing','Transformer servicing & oil testing','Generator AMC & breakdown service','Power factor correction','Energy audit & management'],
    clients:['Industrial Plants','Hospitals','Data Centres','Commercial Buildings'],
    available:'AMC / On-call / Project basis',
  },
  {
    id:7, ico:'🔧', name:'Plumbing Services', cat:'Technical',
    img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80',
    tagline:'Expert plumbing, reliable solutions',
    desc:'Backed by skilled professionals, we are involved in providing Sanitary Plumbing Service and Industrial Plumbing Service. All work executed on time with high reliability.',
    features:['Sanitary plumbing installation & repair','Pneumatic piping work','Hydraulic piping systems','Fire hydrant piping & testing','Chiller & cooling piping work','Insulated piping for industrial use','SS, PPR, CPVC & UPVC pipeline work','Drainage & sewage line maintenance'],
    clients:['Hotels','Hospitals','Industrial Facilities','Commercial Complexes'],
    available:'On-call / AMC / Project basis',
  },
  {
    id:8, ico:'🍽️', name:'Catering Services', cat:'Food',
    img:'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=700&q=80',
    tagline:'Delectable food, memorable events',
    desc:'Being one of the reputed organisations of the industry, we offer an exclusive range of catering services. This offered service has a high attraction among clients. These services are checked on industry set parameters of quality to offer faultless service.',
    features:['Wedding & engagement catering','Birthday party arrangements','Corporate event catering','Traditional South Indian meals','Live counters & food stations','Experienced professional chefs','Hygienic food preparation standards','Customised menus & dietary options'],
    clients:['Weddings & Events','Corporate Offices','Birthday Parties','Cultural Functions'],
    available:'Per event / Bulk order basis',
  },
]

const CATS = ['All','Cleaning','Outdoor','Safety','Technical','Business','Food']

function ServiceCard({ s, i }) {
  const { ref, inView } = useInView({ threshold:.07, triggerOnce:true })
  const [open, setOpen] = useState(false)
  return (
    <div ref={ref} style={{ opacity:inView?1:0, transform:inView?'none':'translateY(28px)', transition:`opacity .6s ${(i%3)*80}ms, transform .6s ${(i%3)*80}ms` }}>
      <div style={{ background:'#fff', borderRadius:22, overflow:'hidden', border:'1.5px solid #dde6f5', transition:'transform .35s, box-shadow .35s', cursor:'default' }}
        onMouseEnter={e=>{e.currentTarget.style.transform='translateY(-6px)';e.currentTarget.style.boxShadow='0 24px 64px rgba(15,37,87,.14)'}}
        onMouseLeave={e=>{e.currentTarget.style.transform='none';e.currentTarget.style.boxShadow='none'}}>
        {/* Image */}
        <div style={{ height:200, overflow:'hidden', position:'relative' }}>
          <img src={s.img} alt={s.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform .6s' }}
            onMouseEnter={e=>e.currentTarget.style.transform='scale(1.07)'}
            onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}/>
          <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(15,37,87,.5) 0%, transparent 50%)' }} />
          <div style={{ position:'absolute', top:12, left:12, background:'rgba(75,181,67,.9)', color:'#fff', fontSize:'.66rem', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', padding:'4px 12px', borderRadius:50 }}>{s.cat}</div>
          <div style={{ position:'absolute', bottom:12, left:12, width:40, height:40, background:'rgba(255,255,255,.95)', borderRadius:11, display:'flex', alignItems:'center', justifyContent:'center', fontSize:20 }}>{s.ico}</div>
        </div>
        {/* Body */}
        <div style={{ padding:'22px 22px 24px' }}>
          <h3 style={{ fontFamily:'Playfair Display,serif', fontSize:'1.05rem', fontWeight:800, color:'#0f2557', marginBottom:6 }}>{s.name}</h3>
          <p style={{ fontSize:'.8rem', color:'#4bb543', fontWeight:700, marginBottom:10, letterSpacing:.3 }}>{s.tagline}</p>
          <p style={{ fontSize:'.83rem', color:'#7a8ba0', lineHeight:1.72, marginBottom:16 }}>{s.desc.substring(0,120)}…</p>
          {/* Features (expandable) */}
          <div style={{ borderTop:'1px solid #f0f4fa', paddingTop:14 }}>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4px 8px', marginBottom:14 }}>
              {(open ? s.features : s.features.slice(0,4)).map(f=>(
                <div key={f} style={{ display:'flex', alignItems:'flex-start', gap:6, fontSize:'.76rem', color:'#4a5568' }}>
                  <span style={{ color:'#4bb543', fontWeight:700, fontSize:'.78rem', flexShrink:0, marginTop:1 }}>✓</span>{f}
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:10, alignItems:'center', flexWrap:'wrap' }}>
              <button onClick={()=>setOpen(p=>!p)} style={{ background:'none', border:'none', color:'#7a8ba0', fontSize:'.76rem', cursor:'pointer', padding:0, transition:'color .3s' }}
                onMouseEnter={e=>e.currentTarget.style.color='#4bb543'} onMouseLeave={e=>e.currentTarget.style.color='#7a8ba0'}>
                {open ? '▲ Show less' : `▼ +${s.features.length - 4} more`}
              </button>
              <Link to="/contact" style={{ marginLeft:'auto', background:'rgba(75,181,67,.09)', border:'1px solid rgba(75,181,67,.25)', color:'#2d7a27', padding:'8px 18px', borderRadius:50, fontSize:'.78rem', fontWeight:700, textDecoration:'none', transition:'all .3s' }}
                onMouseEnter={e=>{e.currentTarget.style.background='#4bb543';e.currentTarget.style.color='#fff'}}
                onMouseLeave={e=>{e.currentTarget.style.background='rgba(75,181,67,.09)';e.currentTarget.style.color='#2d7a27'}}>
                Get Quote →
              </Link>
            </div>
          </div>
          {/* Meta */}
          <div style={{ marginTop:14, paddingTop:14, borderTop:'1px solid #f0f4fa', display:'flex', gap:8, flexWrap:'wrap' }}>
            <span style={{ fontSize:'.7rem', color:'#9aacbe', background:'#f4f7fc', padding:'4px 10px', borderRadius:50 }}>🕐 {s.available}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const [cat, setCat] = useState('All')
  const filtered = cat === 'All' ? ALL_SERVICES : ALL_SERVICES.filter(s => s.cat === cat)

  return (
    <>
      <PageBanner
        title="Our Services"
        subtitle="Eight comprehensive facility management service verticals — all under one trusted roof, serving Chennai and Tamil Nadu since 2009."
        breadcrumb="Services"
        bg="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        overlay="linear-gradient(135deg, rgba(7,18,50,.93) 0%, rgba(15,37,87,.87) 100%)"
      />

      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          {/* Filter */}
          <div style={{ display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap', marginBottom:48 }}>
            {CATS.map(c=>(
              <button key={c} onClick={()=>setCat(c)}
                style={{ padding:'9px 22px', borderRadius:50, border:`2px solid ${cat===c?'#0f2557':'#dde6f5'}`, background:cat===c?'#0f2557':'#fff', color:cat===c?'#fff':'#7a8ba0', fontSize:'.82rem', fontWeight:600, cursor:'pointer', transition:'all .28s', fontFamily:'DM Sans,sans-serif' }}>
                {c}
              </button>
            ))}
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:26 }}>
            {filtered.map((s,i)=><ServiceCard key={s.id} s={s} i={i}/>)}
          </div>
        </div>
      </section>

      {/* Why choose our services */}
      <section className="section" style={{ background:'#f4f7fc' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          <div className="sec-hdr">
            <div className="sec-tag">Why Welcare</div>
            <h2 className="sec-title">What Makes Our Services Different</h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:22 }}>
            {[
              { ico:'⚡', title:'Fast Deployment',    desc:'Teams deployed within 24–48 hours of contract signing.' },
              { ico:'📋', title:'Detailed SLAs',       desc:'Service Level Agreements with clear KPIs and accountability.' },
              { ico:'👔', title:'Uniformed Staff',     desc:'All personnel in branded uniforms with ID cards and training certificates.' },
              { ico:'📊', title:'Monthly Reports',     desc:'Detailed service reports with quality scores delivered every month.' },
            ].map((w,i)=>{
              const { ref, inView } = useInView({ threshold:.1, triggerOnce:true })
              return (
                <div ref={ref} key={w.title} style={{ background:'#fff', borderRadius:18, padding:'26px 22px', border:'1.5px solid #dde6f5', textAlign:'center', opacity:inView?1:0, transform:inView?'none':'translateY(22px)', transition:`opacity .6s ${i*90}ms, transform .6s ${i*90}ms` }}>
                  <div style={{ fontSize:'2.2rem', marginBottom:14 }}>{w.ico}</div>
                  <h4 style={{ fontFamily:'Playfair Display,serif', fontSize:'1rem', fontWeight:800, color:'#0f2557', marginBottom:8 }}>{w.title}</h4>
                  <p style={{ fontSize:'.83rem', color:'#7a8ba0', lineHeight:1.75 }}>{w.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
