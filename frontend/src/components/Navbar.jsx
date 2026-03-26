import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styles from './Navbar.module.css'

const LINKS = [
  { label: 'Home',     to: '/'         },
  { label: 'About',    to: '/about'    },
  { label: 'Services', to: '/services' },
  { label: 'Gallery',  to: '/gallery'  },
  { label: 'Clients',  to: '/clients'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const location = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

        {/* ── LOGO: circular green-outlined badge ── */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoCircle}>
            <img
              src="/logo.png"
              alt="Welcare FMS"
              className={styles.logoImg}
            />
          </div>
        </Link>

        {/* ── NAV LINKS ── */}
        <ul className={styles.links}>
          {LINKS.map(l => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`${styles.navLink} ${location.pathname === l.to ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/contact" className={styles.cta}>Contact Us</Link>
          </li>
        </ul>

        {/* ── HAMBURGER ── */}
        <button
          className={`${styles.ham} ${open ? styles.open : ''}`}
          onClick={() => setOpen(p => !p)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`${styles.mobile} ${open ? styles.mobileOpen : ''}`}>
        {LINKS.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={`${styles.mobileLink} ${location.pathname === l.to ? styles.mobileActive : ''}`}
          >
            {l.label}
          </Link>
        ))}
        <Link to="/contact" className={styles.mobileCta}>Contact Us</Link>
      </div>
    </>
  )
}