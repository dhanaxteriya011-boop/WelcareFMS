import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const stats = [
  { num: 8,   suffix: '+', label: 'Service Verticals' },
  { num: 500, suffix: '+', label: 'Happy Clients'     },
  { num: 15,  suffix: '+', label: 'Years of Trust'    },
]

// ── Fixed counter: renders number + suffix inline
function Counter({ num, suffix, label }) {
  const numRef = useRef(null)
  useEffect(() => {
    const el = numRef.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let startTime = null
      const duration = 1800
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        el.textContent = Math.floor(eased * num)
        if (progress < 1) requestAnimationFrame(animate)
        else el.textContent = num
      }
      requestAnimationFrame(animate)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [num])

  return (
    <div className={styles.stat}>
      <div className={styles.statNum}>
        <span ref={numRef}>0</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  )
}

const fadeUp  = { hidden:{ opacity:0, y:30 }, show:{ opacity:1, y:0 } }
const fadeRight = { hidden:{ opacity:0, x:50 }, show:{ opacity:1, x:0 } }

const heroCards = [
  { img:'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80', tag:'Housekeeping', label:'Professional Housekeeping' },
  { img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=80', tag:'Security',    label:'Security Services'     },
  { img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&q=80', tag:'Landscape',   label:'Landscape & Garden'    },
  { img:'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=500&q=80', tag:'Electrical',  label:'Electrical Services'   },
]

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgImg} />
      <div className={styles.overlay} />
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.gridLines} />

      <div className={styles.inner}>
        {/* LEFT */}
        <div className={styles.left}>
          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay:.15, duration:.6 }} className={styles.pill}>
            <span className={styles.dot} />
            Trusted Facility Management — Chennai
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" transition={{ delay:.3, duration:.7 }} className={styles.title}>
            Complete <span className={styles.hl}>Facility</span><br/>
            Management<br/>Solutions
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" transition={{ delay:.5, duration:.6 }} className={styles.sub}>
            Welcare FMS delivers world-class facility management across Chennai — housekeeping, security, electrical, plumbing, catering and more — all under one trusted roof.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay:.7, duration:.6 }} className={styles.btns}>
            <a href="#services" className="btn-primary">Our Services →</a>
            <a href="#contact"  className="btn-ghost">Get a Free Quote</a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay:.9, duration:.6 }} className={styles.statsRow}>
            {stats.map(s => <Counter key={s.label} {...s} />)}
          </motion.div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          {heroCards.map((c, i) => (
            <motion.div
              key={c.tag}
              variants={fadeRight} initial="hidden" animate="show"
              transition={{ delay:.4 + i * .13, type:'spring', stiffness:70 }}
              className={`${styles.card} ${i % 2 === 1 ? styles.cardOff : ''}`}
            >
              <img src={c.img} alt={c.label} className={styles.cardImg} />
              <div className={styles.cardGrad} />
              <span className={styles.cardTag}>{c.tag}</span>
              <span className={styles.cardLabel}>{c.label}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div variants={fadeUp} initial="hidden" animate="show" transition={{ delay:1.4 }} className={styles.scrollHint}>
        <div className={styles.scrollMouse}><div className={styles.scrollWheel} /></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  )
}
