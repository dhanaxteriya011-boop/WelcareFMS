import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Gallery.module.css'

const ALL_ITEMS = [
  { id:1,  cat:'housekeeping', title:'Hotel Housekeeping',          img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&q=80',  wide:true  },
  { id:2,  cat:'security',     title:'Security Personnel',           img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80',  wide:false },
  { id:3,  cat:'landscape',    title:'Landscape Design',             img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80',  wide:false },
  { id:4,  cat:'landscape',    title:'Garden Maintenance',           img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',     wide:true  },
  { id:5,  cat:'electrical',   title:'Electrical Services',          img:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80',  wide:false },
  { id:6,  cat:'catering',     title:'Event Catering',               img:'https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&q=80',  wide:false },
  { id:7,  cat:'plumbing',     title:'Plumbing Work',                img:'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80',  wide:false },
  { id:8,  cat:'housekeeping', title:'Commercial Cleaning',          img:'https://images.unsplash.com/photo-1527515637462-cff94aca208b?w=500&q=80',  wide:false },
  { id:9,  cat:'security',     title:'Security Training',            img:'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=500&q=80',  wide:false },
  { id:10, cat:'landscape',    title:'Urban Landscaping',            img:'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=700&q=80',  wide:true  },
  { id:11, cat:'catering',     title:'Wedding Catering',             img:'https://images.unsplash.com/photo-1555244162-803834f70033?w=500&q=80',     wide:false },
  { id:12, cat:'electrical',   title:'Industrial Electrical',        img:'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80',  wide:false },
]

const FILTERS = [
  { key:'all',          label:'All Services'  },
  { key:'housekeeping', label:'Housekeeping'  },
  { key:'landscape',    label:'Landscape'     },
  { key:'security',     label:'Security'      },
  { key:'electrical',   label:'Electrical'    },
  { key:'catering',     label:'Catering'      },
  { key:'plumbing',     label:'Plumbing'      },
]

function GalleryItem({ item, index }) {
  const { ref, inView } = useInView({ threshold:0.05, triggerOnce:true })
  return (
    <div
      ref={ref}
      className={`${styles.item} ${item.wide ? styles.wide : ''} ${inView ? styles.visible : ''}`}
      style={{ transitionDelay:`${(index % 5) * 60}ms` }}
    >
      <img src={item.img} alt={item.title} className={styles.img} loading="lazy" />
      <div className={styles.ov}>
        <span className={styles.ovTag}>{item.cat}</span>
        <div className={styles.ovTitle}>{item.title}</div>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [active, setActive] = useState('all')
  const { ref, inView } = useInView({ threshold:0.1, triggerOnce:true })

  const shown = active === 'all' ? ALL_ITEMS : ALL_ITEMS.filter(i => i.cat === active)

  return (
    <section id="gallery" className="section" style={{ background:'#f4f7fc' }}>
      <div className="sec-hdr">
        <div className="sec-tag">Our Work</div>
        <h2 className="sec-title">Service Gallery</h2>
        <p className="sec-desc">A glimpse into our professional service delivery across various domains and client locations in Chennai.</p>
      </div>

      <div ref={ref} className={`${styles.filters} ${inView ? styles.filtersIn : ''}`}>
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`${styles.fBtn} ${active === f.key ? styles.fActive : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {shown.map((item, i) => <GalleryItem key={item.id} item={item} index={i} />)}
      </div>
    </section>
  )
}
