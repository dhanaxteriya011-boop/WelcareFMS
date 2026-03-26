import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Contact.module.css'

// ── EmailJS config — fill these after signup at emailjs.com (free)
// See README inside ZIP for step-by-step setup
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || 'YOUR_SERVICE_ID'
const EMAILJS_ADMIN_TMPL  = import.meta.env.VITE_EMAILJS_ADMIN_TMPL  || 'YOUR_ADMIN_TEMPLATE_ID'
const EMAILJS_USER_TMPL   = import.meta.env.VITE_EMAILJS_USER_TMPL   || 'YOUR_USER_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || 'YOUR_PUBLIC_KEY'
const ADMIN_EMAIL         = import.meta.env.VITE_ADMIN_EMAIL          || 'info@welcarefms.com'

const SERVICES = [
  'Housekeeping Services','Landscape Services','Security Services',
  'Outsourcing Services','Gardening Services','Electrical Services',
  'Plumbing Services','Catering Services','Multiple Services',
]

const CONTACT_ITEMS = [
  { icon:'📍', label:'Office Address',  value:'#9/3, 2nd Floor, Pushpa Nagar Main Road,\nNungambakkam, Chennai – 600 034' },
  { icon:'📞', label:'Mobile',          value:'+91 90878 76366', href:'tel:+919087876366' },
  { icon:'📠', label:'Office Landline', value:'044 – 28225362 / 4854 6598', href:'tel:04428225362' },
  { icon:'✉️', label:'Email',           value:'info@welcarefms.com', href:'mailto:info@welcarefms.com' },
  { icon:'🌐', label:'Website',         value:'www.welcarefms.com', href:'https://www.welcarefms.com' },
]

// ── Send via EmailJS SDK (no backend needed)
async function sendViaEmailJS(form) {
  // Dynamically load EmailJS SDK
  if (!window.emailjs) {
    await new Promise((resolve, reject) => {
      const s = document.createElement('script')
      s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
      s.onload = resolve
      s.onerror = reject
      document.head.appendChild(s)
    })
    window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
  }

  const now = new Date().toLocaleString('en-IN', {
    day:'2-digit', month:'short', year:'numeric',
    hour:'2-digit', minute:'2-digit', hour12:true
  })

  const params = {
    from_name:    form.name,
    from_email:   form.email,
    from_phone:   form.phone,
    service:      form.service || 'Not specified',
    message:      form.message || '—',
    submitted_on: now,
    admin_email:  ADMIN_EMAIL,
    to_email:     form.email,
    wa_link:      `https://wa.me/91${form.phone.replace(/\D/g,'')}?text=Hello+${encodeURIComponent(form.name)}%2C+this+is+Welcare+FMS+regarding+your+enquiry.`,
  }

  // Send to admin
  await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_ADMIN_TMPL, {
    ...params,
    to_email: ADMIN_EMAIL,
  })

  // Send auto-reply to user
  await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_USER_TMPL, {
    ...params,
    to_email: form.email,
  })
}

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const [form, setForm]       = useState({ name:'', phone:'', email:'', service:'', message:'' })
  const [errors, setErrors]   = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
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
      await sendViaEmailJS(form)
      setSuccess(true)
      setForm({ name:'', phone:'', email:'', service:'', message:'' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setServerError(
        'EmailJS not configured yet. Please add your EmailJS keys to the .env file. See EMAILJS_SETUP.md for instructions.'
      )
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
                <div className={styles.itemVal}>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http')?'_blank':'_self'} rel="noreferrer">{item.value}</a>
                    : item.value.split('\n').map((l,i) => <span key={i}>{l}{i===0 && <br/>}</span>)
                  }
                </div>
              </div>
            </div>
          ))}

          <a
            href="https://wa.me/919585949422?text=Hello%20Welcare%20FMS%2C%20I%20am%20interested%20in%20your%20services."
            target="_blank" rel="noreferrer"
            className={styles.waBtn}
          >
            <span className={styles.waIco}>💬</span>
            <div>
              <div className={styles.waBtnTitle}>Chat on WhatsApp</div>
              <div className={styles.waBtnSub}>+91 95859 49422 — Instant reply</div>
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
              <p>A confirmation email has been sent to <strong>{form.email || 'your inbox'}</strong>.<br/>We will contact you within 24 hours.</p>
              <button className={`btn-primary ${styles.resetBtn}`} onClick={() => setSuccess(false)}>
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className={styles.frow}>
                <div className={styles.fg}>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name" name="name" value={form.name}
                    onChange={handleChange} placeholder="Your full name"
                    className={errors.name ? styles.errInput : ''}
                  />
                  {errors.name && <span className={styles.errMsg}>{errors.name}</span>}
                </div>
                <div className={styles.fg}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    id="phone" name="phone" value={form.phone}
                    onChange={handleChange} placeholder="+91 XXXXX XXXXX"
                    className={errors.phone ? styles.errInput : ''}
                  />
                  {errors.phone && <span className={styles.errMsg}>{errors.phone}</span>}
                </div>
              </div>

              <div className={styles.fg}>
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email" name="email" type="email" value={form.email}
                  onChange={handleChange} placeholder="your@email.com"
                  className={errors.email ? styles.errInput : ''}
                />
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
                <textarea
                  id="message" name="message" value={form.message}
                  onChange={handleChange} placeholder="Tell us about your requirements…"
                  rows={4}
                />
              </div>

              {serverError && (
                <div className={styles.serverErr}>
                  ⚠️ {serverError}
                </div>
              )}

              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
                disabled={loading}
              >
                {loading
                  ? <><span className={styles.spinner} /> Sending email…</>
                  : <>Send Enquiry ✉️</>
                }
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
