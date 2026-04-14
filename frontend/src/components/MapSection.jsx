import { useInView } from 'react-intersection-observer'
import styles from './MapSection.module.css'

const CONTACT_ITEMS = [
  { ico:'📍', label:'Office Address',  val:'#9/3, 2nd Floor, Pushpa Nagar Main Road, Nungambakkam, Chennai – 600 034' },
  { ico:'📞', label:'Mobile',          val:'+91 90878 76366', href:'tel:+919087876366' },
  { ico:'📠', label:'Landline',        val:'044 – 28225362 / 4854 6598', href:'tel:04428225362' },
  { ico:'✉️', label:'Email',           val:['admin@welcarefms.com', 'info@welcarefms.com'] },
  { ico:'🌐', label:'Website',         val:'www.welcarefms.com', href:'https://www.welcarefms.com' },
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
      <div className="sec-hdr" style={{ marginBottom:48 }}>
        <div className="sec-tag">Find Us</div>
        <h2 className="sec-title">Visit Our Office</h2>
        <p className="sec-desc">We are conveniently located in Nungambakkam, Chennai — in the heart of the city.</p>
      </div>

      <div ref={ref} className={`${styles.wrap} ${inView ? styles.in : ''}`}>

        {/* LEFT — Map embed */}
        <div className={styles.mapCol}>
          <div className={styles.mapContainer}>
            <iframe
              title="Welcare FMS Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2339!3d13.0612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d24b1a1a1b%3A0x0!2sPushpa+Nagar+Main+Rd%2C+Nungambakkam%2C+Chennai%2C+Tamil+Nadu+600034!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className={styles.iframe}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
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
                    {Array.isArray(item.val) ? (
                      item.val.map((email, i) => (
                        <div key={i}>
                          <a href={`mailto:${email}`}>{email}</a>
                        </div>
                      ))
                    ) : item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                      >
                        {item.val}
                      </a>
                    ) : (
                      item.val
                    )}
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
          <span className={styles.waIco}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.468.672 4.778 1.845 6.76L2 30l7.45-1.818A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.892-1.613l-.422-.252-4.42 1.08 1.11-4.3-.276-.44A11.6 11.6 0 1 1 16 27.6zm6.37-8.674c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.896 1.132-1.098 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.608.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.087-.174-.78-1.882-1.07-2.576-.282-.676-.568-.584-.78-.594l-.665-.012c-.23 0-.608.086-.926.434-.318.348-1.214 1.186-1.214 2.892s1.243 3.354 1.416 3.586c.174.232 2.446 3.732 5.928 5.234.828.358 1.474.572 1.978.732.83.264 1.587.226 2.184.138.666-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.202-1.656-.086-.144-.318-.23-.666-.404z"/>
              </svg>
            </span>             
            <div>
              <div className={styles.waTitle}>Chat on WhatsApp</div>
              <div className={styles.waSub}>+91 9087876366 — Instant reply</div>
            </div>
            <span className={styles.waArrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}