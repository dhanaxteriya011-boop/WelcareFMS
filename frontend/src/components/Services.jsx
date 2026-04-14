import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import styles from './Services.module.css'

const SERVICES = [
  {
    id:1, icon:'🧹', name:'Housekeeping Services',
    img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    short_desc:'Trusted housekeeping for hotels, homes, offices and commercial complexes by experienced, vetted professionals.',
    features:['Dusting of windowsills & ledges','Window glass cleaning','Cobweb removal & garbage clearing','Personalized, cost-effective approach']
  },
  {
    id:2, icon:'🌿', name:'Landscape Services',
    img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    short_desc:'Expert landscaping for lawns, parks, private and public spaces with adroit gardeners and eco-friendly solutions.',
    features:['Lawn & park maintenance','Urban landscape planning','Ecological & scenic design','Coastal & rural land use']
  },
  {
    id:3, icon:'🛡️', name:'Security Services',
    img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
    short_desc:'Reliable security consultancy with flawless training programs and high-grade placements under experienced supervision.',
    features:['Best-in-industry training','High-knowledge guard staff','Superb reliability','Industrial norms compliance']
  },
  {
    id:4, icon:'🔄', name:'Outsourcing Services',
    img:'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80',
    short_desc:'Deft professionals with in-depth domain knowledge delivering outsourcing solutions in a well-organised, prompt manner.',
    features:['Technical facility support','Staffing & manpower supply','Contract management','Supplier coordination']
  },
  {
    id:5, icon:'🌱', name:'Gardening Services',
    img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    short_desc:'Skilled gardening professionals providing wide-ranging services designed to your specific needs and guidelines.',
    features:['Planting & fertilizing','Weed removal','Farm house management','Garden design & beautification']
  },
  {
    id:6, icon:'⚡', name:'Electrical Services',
    img:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&q=80',
    short_desc:'Superior-grade electrical services using advanced technology in adherence with industry standards — client-centric and cost-effective.',
    features:['220KV sub-station maintenance','Earth resistance measurement','Engineers & supervisors supplied','On-time, reliable execution']
  },
  {
    id:7, icon:'🔧', name:'Plumbing Services',
    img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    short_desc:'Sanitary and industrial plumbing services by skilled professionals covering all types of piping work and installations.',
    features:['Sanitary & hydraulic piping','Fire hydrant piping','Chiller & insulated piping','SS, PPR, CPVC & UPVC work']
  },
  {
    id:8, icon:'🍽️', name:'Catering Services',
    img:'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80',
    short_desc:'Exclusive catering for birthdays, weddings, engagements and all events — delectable food by experienced chefs at every price point.',
    features:['Birthday party arrangements','Wedding & engagement catering','Variety of delectable menus','Quality-checked service']
  },
]

function ServiceCard({ svc, index }) {
  const { ref, inView } = useInView({ threshold: 0.08, triggerOnce: true })
  const features = typeof svc.features === 'string' ? JSON.parse(svc.features) : svc.features

  return (
    <div
      ref={ref}
      className={`${styles.card} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className={styles.imgWrap}>
        <img src={svc.img} alt={svc.name} className={styles.img} />
        <div className={styles.imgOverlay} />
        <div className={styles.iconBadge}>{svc.icon}</div>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{svc.name}</h3>
        <p className={styles.desc}>{svc.short_desc}</p>
        <ul className={styles.list}>
          {features.map((f, i) => (
            <li key={i}><span className={styles.check}>✓</span>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="services" className="section" style={{ background: '#fff' }}>
      <div ref={ref} className={`sec-hdr ${inView ? styles.fadeIn : styles.fadeOut}`}>
        <div className="sec-tag">What We Offer</div>
        <h2 className="sec-title">Our Core Services</h2>
        <p className="sec-desc">From precision housekeeping to high-voltage electrical work — every aspect of facility management covered by expert professionals across Chennai.</p>
      </div>
      <div className={styles.grid}>
        {SERVICES.map((s, i) => <ServiceCard key={s.id} svc={s} index={i} />)}
      </div>
    </section>
  )
}