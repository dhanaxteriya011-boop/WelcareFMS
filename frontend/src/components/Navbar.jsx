import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'About',        href: '#about' },
  { label: 'Services',     href: '#services' },
  { label: 'Gallery',      href: '#gallery' },
  { label: 'Clients',      href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href="#hero" className={styles.logo} onClick={close}>
          <div className={styles.logoCircle}>🏠</div>
          <div>
            <div className={styles.brandName}>WELCARE</div>
            <div className={styles.brandSub}>FMS</div>
          </div>
        </a>

        <ul className={styles.links}>
          {links.map(l => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
          <li><a href="#contact" className={styles.cta}>Contact Us</a></li>
        </ul>

        <button
          className={`${styles.ham} ${open ? styles.open : ''}`}
          onClick={() => setOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a href="#contact" onClick={close}>Contact Us</a>
      </div>
    </>
  )
}
