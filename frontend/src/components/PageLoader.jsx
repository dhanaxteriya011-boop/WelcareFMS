import { useState, useEffect } from 'react'
import styles from './PageLoader.module.css'

let hasLoaded = false  // ← module-level flag, resets only on hard refresh

export default function PageLoader() {
  const [visible, setVisible] = useState(() => !hasLoaded)
  const [hiding, setHiding] = useState(false)

  useEffect(() => {
    if (!visible) return

    const hideTimer = setTimeout(() => {
      setHiding(true)
      const removeTimer = setTimeout(() => {
        setVisible(false)
        hasLoaded = true  // ← set after first load
      }, 400)
      return () => clearTimeout(removeTimer)
    }, 1200)

    return () => clearTimeout(hideTimer)
  }, [visible])

  if (!visible) return null

  return (
    <div className={`${styles.overlay} ${hiding ? styles.hiding : ''}`}>
      <div className={styles.content}>
        <div className={styles.ring}>
          <div className={styles.logoCircle}>
            <img src="/logo.png" alt="Welcare FMS" className={styles.logoImg} />
          </div>
        </div>
        <p className={styles.brandName}>Welcare</p>
        <p className={styles.tagline}>Facility Management Services</p>
      </div>
    </div>
  )
}