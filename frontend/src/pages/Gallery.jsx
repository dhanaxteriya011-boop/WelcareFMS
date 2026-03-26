import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import PageBanner from '../components/shared/PageBanner'
import { CtaBanner } from '../components/index'

const ITEMS = [
  { id:1,  cat:'housekeeping', title:'Hotel Housekeeping',           sub:'Premium hotel cleaning services',    img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',  wide:true  },
  { id:2,  cat:'security',     title:'Security Deployment',           sub:'Trained guard placement',            img:'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=600&q=80',  wide:false },
  { id:3,  cat:'landscape',    title:'Corporate Garden',              sub:'Office campus landscaping',          img:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',  wide:false },
  { id:4,  cat:'housekeeping', title:'Commercial Cleaning',           sub:'Office deep cleaning',               img:'https://img.freepik.com/free-photo/full-shot-people-cleaning-office_23-2150454568.jpg?semt=ais_hybrid&w=740&q=80',  wide:true  },
  { id:5,  cat:'electrical',   title:'Industrial Electrical',         sub:'Sub-station maintenance',            img:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',  wide:false },
  { id:6,  cat:'catering',     title:'Wedding Catering',              sub:'Large-scale event catering',         img:'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',  wide:false },
  { id:7,  cat:'landscape',    title:'Garden Transformation',         sub:'Residential garden redesign',        img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',  wide:true  },
  { id:8,  cat:'plumbing',     title:'Industrial Plumbing',           sub:'Fire hydrant installation',          img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80',  wide:false },
  { id:9,  cat:'security',     title:'Access Control Setup',          sub:'IT park entry management',           img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',  wide:false },
  { id:10, cat:'catering',     title:'Corporate Lunch Service',       sub:'Daily meal management',              img:'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',  wide:true  },
  { id:11, cat:'housekeeping', title:'Hospital Housekeeping',         sub:'Medical facility hygiene',           img:'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',  wide:false },
  { id:12, cat:'landscape',    title:'Park Maintenance',              sub:'Public space upkeep',                img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',  wide:false },
]

const FILTERS = [
  { key:'all',          label:'All Work'    },
  { key:'housekeeping', label:'Housekeeping'},
  { key:'landscape',    label:'Landscape'  },
  { key:'security',     label:'Security'   },
  { key:'electrical',   label:'Electrical' },
  { key:'catering',     label:'Catering'   },
  { key:'plumbing',     label:'Plumbing'   },
]

function GItem({ item, i }) {
  const { ref, inView } = useInView({ threshold:.05, triggerOnce:true })
  const [hov, setHov] = useState(false)
  return (
    <div ref={ref}
      style={{ gridColumn:item.wide?'span 2':'span 1', borderRadius:18, overflow:'hidden', position:'relative', height:240, cursor:'pointer', opacity:inView?1:0, transform:inView?'scale(1)':'scale(.96)', transition:`opacity .55s ${(i%4)*55}ms, transform .55s ${(i%4)*55}ms` }}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <img src={item.img} alt={item.title} style={{ width:'100%', height:'100%', objectFit:'cover', transform:hov?'scale(1.07)':'scale(1)', transition:'transform .55s ease', display:'block' }}/>
      <div style={{ position:'absolute', inset:0, background:`linear-gradient(to top, rgba(9,18,50,.88) 0%, transparent ${hov?'65%':'40%'})`, transition:'all .4s' }} />
      <div style={{ position:'absolute', top:14, left:14, background:'rgba(75,181,67,.88)', color:'#fff', fontSize:'.64rem', fontWeight:700, letterSpacing:1.5, textTransform:'uppercase', padding:'4px 12px', borderRadius:50 }}>{item.cat}</div>
      <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'18px 18px 18px', transform:hov?'translateY(0)':'translateY(8px)', transition:'transform .4s', opacity:hov?1:.85 }}>
        <div style={{ color:'#fff', fontSize:'.92rem', fontWeight:800, marginBottom:4, fontFamily:'Playfair Display,serif' }}>{item.title}</div>
        <div style={{ color:'rgba(255,255,255,.65)', fontSize:'.76rem' }}>{item.sub}</div>
      </div>
    </div>
  )
}

export default function GalleryPage() {
  const [active, setActive] = useState('all')
  const shown = active === 'all' ? ITEMS : ITEMS.filter(i => i.cat === active)

  return (
    <>
      <PageBanner
        title="Our Work Gallery"
        subtitle="Real projects, real results. Browse our portfolio of facility management work across Chennai and Tamil Nadu."
        breadcrumb="Gallery"
        bg="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1600&q=80"
        overlay="linear-gradient(135deg, rgba(7,18,50,.92) 0%, rgba(13,79,140,.82) 100%)"
      />

      <section className="section" style={{ background:'#fff' }}>
        <div style={{ maxWidth:1280, margin:'0 auto' }}>
          {/* Filters */}
          <div style={{ display:'flex', justifyContent:'center', gap:10, flexWrap:'wrap', marginBottom:44 }}>
            {FILTERS.map(f=>(
              <button key={f.key} onClick={()=>setActive(f.key)}
                style={{ padding:'9px 22px', borderRadius:50, border:`2px solid ${active===f.key?'#0f2557':'#dde6f5'}`, background:active===f.key?'#0f2557':'#fff', color:active===f.key?'#fff':'#7a8ba0', fontSize:'.82rem', fontWeight:600, cursor:'pointer', transition:'all .28s', fontFamily:'DM Sans,sans-serif' }}>
                {f.label}
              </button>
            ))}
          </div>

          {/* Masonry-style grid */}
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:18, gridAutoRows:'240px' }}>
            {shown.map((item,i)=><GItem key={item.id} item={item} i={i}/>)}
          </div>

          <div style={{ textAlign:'center', marginTop:48 }}>
            <p style={{ fontSize:'.95rem', color:'#7a8ba0', marginBottom:20 }}>Have a project in mind? We'd love to add it to our portfolio.</p>
            <a href="/contact" className="btn-primary" style={{ textDecoration:'none' }}>Start a Project →</a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background:'#f4f7fc', padding:'64px 6%' }}>
        <div style={{ maxWidth:1280, margin:'0 auto', display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:24 }}>
          {[
            { num:'1000+', label:'Projects Completed',  ico:'✅' },
            { num:'500+',  label:'Happy Clients',        ico:'😊' },
            { num:'8',     label:'Service Categories',   ico:'🔧' },
            { num:'15+',   label:'Years of Excellence',  ico:'🏆' },
          ].map((s,i)=>{
            const { ref, inView } = useInView({ threshold:.1, triggerOnce:true })
            return (
              <div ref={ref} key={s.label} style={{ textAlign:'center', opacity:inView?1:0, transform:inView?'none':'translateY(20px)', transition:`opacity .6s ${i*80}ms, transform .6s ${i*80}ms` }}>
                <div style={{ fontSize:'1.8rem', marginBottom:8 }}>{s.ico}</div>
                <div style={{ fontFamily:'Playfair Display,serif', fontSize:'2.6rem', fontWeight:900, color:'#0f2557' }}>{s.num}</div>
                <div style={{ fontSize:'.85rem', color:'#7a8ba0', marginTop:6 }}>{s.label}</div>
              </div>
            )
          })}
        </div>
      </section>
      <CtaBanner />
    </>
  )
}
