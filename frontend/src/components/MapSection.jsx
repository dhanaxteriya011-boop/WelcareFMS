import { useInView } from 'react-intersection-observer'
import styles from './MapSection.module.css'

const CONTACT_ITEMS = [
  { ico:'📍', label:'Office Address',  val:'#9/3, 2nd Floor, Pushpa Nagar Main Road, Nungambakkam, Chennai – 600 034' },
  { ico:'📞', label:'Mobile',          val:'+91 90878 76366', href:'tel:+919087876366' },
  { ico:'📠', label:'Landline',        val:'044 – 28225362 / 4854 6598', href:'tel:04428225362' },
  { ico:'✉️', label:'Email',           val:'admin@welcarefms.com', href:'mailto:admin@welcarefms.com' },
  { ico:'🌐', label:'Website',         val:'www.welcarefms.com', href:'https://www.welcarefms.com' },
  { ico:'💬', label:'WhatsApp',        val:'+91 95859 49422', href:'https://wa.me/919087876366' },
]

const TIMINGS = [
  { day:'Monday – Friday',   time:'9:00 AM – 7:00 PM' },
  { day:'Saturday',          time:'9:00 AM – 5:00 PM' },
  { day:'Sunday',            time:'10:00 AM – 2:00 PM (Emergency only)' },
]

export default function MapSection() {
  const { ref, inView } = useInView({ threshold:0.08, triggerOnce:true })

  return (
    <section className={styles.section}>
      {/* Header */}
      <div className="sec-hdr" style={{ marginBottom:48 }}>
        <div className="sec-tag">Find Us</div>
        <h2 className="sec-title">Visit Our Office</h2>
        <p className="sec-desc">We are conveniently located in Nungambakkam, Chennai — in the heart of the city.</p>
      </div>

      <div ref={ref} className={`${styles.wrap} ${inView ? styles.in : ''}`}>
        {/* LEFT — Map embed */}
        <div className={styles.mapCol}>
          <div className={styles.mapContainer}>
            {/* Google Maps embed — Nungambakkam, Chennai */}
            <iframe
              title="Welcare FMS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2339!3d13.0612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d24b1a1a1b%3A0x0!2sPushpa+Nagar+Main+Rd%2C+Nungambakkam%2C+Chennai%2C+Tamil+Nadu+600034!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className={styles.iframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Pin overlay card */}
            <div className={styles.pinCard}>
              <div className={styles.pinIcon}>📍</div>
              <div>
                <div className={styles.pinName}>Welcare FMS</div>
                <div className={styles.pinAddr}>Nungambakkam, Chennai</div>
              </div>
              <a
                href="https://www.google.com/maps/search/Welcare+FMS+Nungambakkam+Chennai"
                target="_blank" rel="noreferrer"
                className={styles.pinBtn}
              >Get Directions →</a>
            </div>
          </div>
        </div>

        {/* RIGHT — Contact details */}
        <div className={styles.infoCol}>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          <p className={styles.infoSub}>Reach us through any channel below — we respond to all enquiries within 2 hours.</p>

          <div className={styles.items}>
            {CONTACT_ITEMS.map(item => (
              <div key={item.label} className={styles.item}>
                <div className={styles.itemIco}>{item.ico}</div>
                <div>
                  <div className={styles.itemLbl}>{item.label}</div>
                  <div className={styles.itemVal}>
                    {item.href
                      ? <a href={item.href} target={item.href.startsWith('http')?'_blank':'_self'} rel="noreferrer">{item.val}</a>
                      : item.val
                    }
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Office hours */}
          <div className={styles.hours}>
            <div className={styles.hoursTitle}>🕐 Office Hours</div>
            {TIMINGS.map(t => (
              <div key={t.day} className={styles.hourRow}>
                <span className={styles.hourDay}>{t.day}</span>
                <span className={styles.hourTime}>{t.time}</span>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/919087876366?text=Hello%20Welcare%20FMS%2C%20I%20need%20facility%20management%20services."
            target="_blank" rel="noreferrer"
            className={styles.waCta}
          >
            <span className={styles.waIco}>💬</span>
            <div>
              <div className={styles.waTitle}>Chat on WhatsApp</div>
              <div className={styles.waSub}>+91 95859 49422 — Instant reply</div>
            </div>
            <span className={styles.waArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
