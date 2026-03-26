import { Link } from 'react-router-dom'
import styles from './PageBanner.module.css'

export default function PageBanner({ title, subtitle, breadcrumb, bg, overlay }) {
  return (
    <div className={styles.banner} style={{ '--bg': `url('${bg}')`, '--overlay': overlay || 'rgba(7,18,50,.88)' }}>
      <div className={styles.inner}>
        <div className={styles.breadcrumb}>
          <Link to="/">Home</Link>
          <span className={styles.sep}>›</span>
          <span className={styles.current}>{breadcrumb}</span>
        </div>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff"/>
        </svg>
      </div>
    </div>
  )
}
