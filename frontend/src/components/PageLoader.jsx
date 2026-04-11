import { useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './PageLoader.module.css'

export default function PageLoader() {
  const [visible, setVisible] = useState(true) // true = shows on first load
  const [hiding, setHiding] = useState(false)
  const location = useLocation()
  const isFirst = useRef(true)

  const show = () => {
    setHiding(false)
    setVisible(true)
    setTimeout(() => {
      setHiding(true)
      setTimeout(() => setVisible(false), 400)
    }, 1200)
  }

  useEffect(() => {
    // First load
    show()
  }, [])

  useEffect(() => {
    // Skip first render (already handled above)
    if (isFirst.current) { isFirst.current = false; return }
    show()
  }, [location.pathname])

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