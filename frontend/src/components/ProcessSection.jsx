import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'
import styles from './ProcessSection.module.css'

const STEPS = [
  {
    num:'01', ico:'📋',
    title:'Send Your Enquiry',
    desc:'Fill our contact form or WhatsApp us with your requirements. Our team responds within 2 hours.',
    color:'#0f2557',
  },
  {
    num:'02', ico:'🤝',
    title:'Free Site Assessment',
    desc:'We visit your premises, assess the scope of work, and understand your exact needs — completely free.',
    color:'#1a3a8f',
  },
  {
    num:'03', ico:'📝',
    title:'Custom Proposal',
    desc:'We deliver a detailed, transparent, pocket-friendly proposal tailored to your facility size and requirements.',
    color:'#4bb543',
  },
  {
    num:'04', ico:'🚀',
    title:'Service Deployment',
    desc:'Our trained team is deployed promptly. Regular quality checks and supervisor oversight ensure flawless execution.',
    color:'#0d4f8c',
  },
]

export default function ProcessSection() {
  const { ref, inView } = useInView({ threshold:0.08, triggerOnce:true })

  return (
    <section className={styles.section}>
      <div className={styles.bgShape} />
      <div className="sec-hdr" style={{ position:'relative', zIndex:1 }}>
        <div className="sec-tag">How It Works</div>
        <h2 className="sec-title">Our Simple 4-Step Process</h2>
        <p className="sec-desc">Getting started with Welcare FMS is quick and hassle-free. Here's how we deliver excellence every time.</p>
      </div>

      <div ref={ref} className={`${styles.steps} ${inView ? styles.in : ''}`}>
        {STEPS.map((s, i) => (
          <div
            key={s.num}
            className={styles.step}
            style={{ transitionDelay:`${i * 120}ms` }}
          >
            {/* Connector line */}
            {i < STEPS.length - 1 && <div className={styles.connector} />}

            <div className={styles.stepTop}>
              <div className={styles.stepNum} style={{ background:s.color }}>{s.num}</div>
              <div className={styles.stepIco}>{s.ico}</div>
            </div>
            <h3 className={styles.stepTitle}>{s.title}</h3>
            <p className={styles.stepDesc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
