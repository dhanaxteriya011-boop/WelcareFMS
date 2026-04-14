import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Contact.module.css'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api'

const SERVICES = [
  'Housekeeping Services','Landscape Services','Security Services',
  'Outsourcing Services','Gardening Services','Electrical Services',
  'Plumbing Services','Catering Services','Multiple Services',
]

const CONTACT_ITEMS = [
  { icon:'📍', label:'Office Address',  value:'#9/3, 2nd Floor, Pushpa Nagar Main Road,\nNungambakkam, Chennai – 600 034' },
  { icon:'📞', label:'Mobile',          value:'+91 90878 76366', href:'tel:+919087876366' },
  { icon:'📠', label:'Office Landline', value:'044 – 28225362 / 4854 6598', href:'tel:04428225362' },
  {
    icon: '✉️',
    label: 'Email',
    value: ['admin@welcarefms.com', 'info@welcarefms.com']
  }, 
  { icon:'🌐', label:'Website', value:'www.welcarefms.com', href:'https://www.welcarefms.com' },
]

async function submitEnquiry(form) {
  const res = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(form),
  })

  const data = await res.json()

  if (!res.ok) {
    const firstError = data.errors
      ? Object.values(data.errors).flat()[0]
      : (data.message || 'Something went wrong. Please try again.')
    throw new Error(firstError)
  }

  return data
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const [form, setForm]             = useState({ name:'', phone:'', email:'', service:'', message:'' })
  const [errors, setErrors]         = useState({})
  const [loading, setLoading]       = useState(false)
  const [success, setSuccess]       = useState(false)
  const [serverError, setServerError] = useState('')

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'பெயர் கொடுங்கள் / Name is required'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email address'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setServerError('')

    try {
      await submitEnquiry(form)
      setSuccess(true)
      setForm({ name:'', phone:'', email:'', service:'', message:'' })
    } catch (err) {
      console.error('Submit error:', err)
      setServerError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section" style={{ background:'#f4f7fc' }}>
      <div className="sec-hdr">
        <div className="sec-tag">Get In Touch</div>
        <h2 className="sec-title">Let's Work Together</h2>
        <p className="sec-desc">Send us your requirements and we'll get back with a customised solution within 24 hours.</p>
      </div>

      <div ref={ref} className={`${styles.wrap} ${inView ? styles.visible : ''}`}>

        {/* ── LEFT INFO */}
        <div className={styles.info}>
          <h3>Contact Information</h3>
          <p>Reach us through any channel — we respond to all enquiries within 2 hours.</p>

          {CONTACT_ITEMS.map(item => (
            <div key={item.label} className={styles.item}>
              <div className={styles.itemIco}>{item.icon}</div>
              <div>
                <div className={styles.itemLbl}>{item.label}</div>

                {/* ✅ FIXED HERE */}
                <div className={styles.itemVal}>
                  {Array.isArray(item.value) ? (
                    item.value.map((email, i) => (
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
                      {item.value}
                    </a>
                  ) : (
                    item.value.split('\n').map((l, i) => (
                      <span key={i}>
                        {l}
                        {i === 0 && <br />}
                      </span>
                    ))
                  )}
                </div>

              </div>
            </div>
          ))}

          <a
            href="https://wa.me/919087876366?text=Hello%20Welcare%20FMS%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank" rel="noreferrer"
            className={styles.waBtn}
          >
            <span className={styles.waIco}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="22" height="22" fill="currentColor">
                <path d="M16 2C8.268 2 2 8.268 2 16c0 2.468.672 4.778 1.845 6.76L2 30l7.45-1.818A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.56 11.56 0 0 1-5.892-1.613l-.422-.252-4.42 1.08 1.11-4.3-.276-.44A11.6 11.6 0 1 1 16 27.6zm6.37-8.674c-.348-.174-2.06-1.016-2.38-1.132-.318-.116-.55-.174-.78.174-.232.348-.896 1.132-1.098 1.364-.202.232-.404.26-.752.086-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.06-1.936-2.408-.202-.348-.022-.536.152-.708.156-.156.348-.406.522-.608.174-.202.232-.348.348-.58.116-.232.058-.434-.028-.608-.087-.174-.78-1.882-1.07-2.576-.282-.676-.568-.584-.78-.594l-.665-.012c-.23 0-.608.086-.926.434-.318.348-1.214 1.186-1.214 2.892s1.243 3.354 1.416 3.586c.174.232 2.446 3.732 5.928 5.234.828.358 1.474.572 1.978.732.83.264 1.587.226 2.184.138.666-.1 2.06-.842 2.35-1.656.29-.814.29-1.512.202-1.656-.086-.144-.318-.23-.666-.404z"/>
              </svg>
            </span>            
            <div>
              <div className={styles.waBtnTitle}>Chat on WhatsApp</div>
              <div className={styles.waBtnSub}>+91 90878 76366 — Instant reply</div>
            </div>
            <span className={styles.waArr}>→</span>
          </a>
        </div>

        {/* ── RIGHT FORM */}
        <div className={styles.formBox}>
          <h3>Send an Enquiry</h3>

          {success ? (
            <div className={styles.successBox}>
              <div className={styles.successIco}>✅</div>
              <h4>Enquiry Sent Successfully!</h4>
              <p>
                A confirmation email has been sent to <strong>{form.email || 'your inbox'}</strong>.<br />
                We will contact you within 24 hours.
              </p>
              <button
                className={`btn-primary ${styles.resetBtn}`}
                onClick={() => setSuccess(false)}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.frow}>
                <div className={styles.fg}>
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" value={form.name}
                    onChange={handleChange} placeholder="Your full name"
                    className={errors.name ? styles.errInput : ''}/>
                  {errors.name && <span className={styles.errMsg}>{errors.name}</span>}
                </div>

                <div className={styles.fg}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                    className={errors.phone ? styles.errInput : ''}/>
                  {errors.phone && <span className={styles.errMsg}>{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.fg}>
                <label htmlFor="email">Email Address *</label>
                <input id="email" name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com"
                  className={errors.email ? styles.errInput : ''}/>
                {errors.email && <span className={styles.errMsg}>{errors.email}</span>}
              </div>

              <div className={styles.fg}>
                <label htmlFor="service">Service Required</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">— Select a Service —</option>
                  {SERVICES.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              <div className={styles.fg}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" name="message" value={form.message}
                  onChange={handleChange} placeholder="Tell us about your requirements…"
                  rows={4}/>
              </div>

              {serverError && (
                <div className={styles.serverErr}>
                  ⚠️ {serverError}
                </div>
              )}

              <button type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={loading}>
                {loading ? <><span className={styles.spinner} /> Sending…</> : <>Send Enquiry ✉️</>}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  )
}