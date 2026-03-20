<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Thank You – Welcare FMS</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#eef2f7;padding:32px 16px}
  .shell{max-width:620px;margin:0 auto}
  /* Header */
  .hdr{background:linear-gradient(135deg,#0c1f4a 0%,#1a3a8f 100%);border-radius:16px 16px 0 0;padding:36px;text-align:center}
  .brand{font-size:1.8rem;font-weight:900;color:#fff;letter-spacing:3px}
  .brand span{color:#6dd468}
  .brand-sub{font-size:.62rem;color:rgba(255,255,255,.55);letter-spacing:4px;text-transform:uppercase;margin-top:5px}
  /* Hero tick */
  .hero{background:#fff;padding:36px 36px 0;text-align:center}
  .tick-circle{width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#4bb543,#2d7a27);display:inline-flex;align-items:center;justify-content:center;font-size:2.4rem;margin-bottom:20px;box-shadow:0 12px 36px rgba(75,181,67,.35)}
  .hero h1{font-size:1.5rem;font-weight:800;color:#0c1f4a;margin-bottom:10px;line-height:1.3}
  .hero p{font-size:.95rem;color:#7a8ba0;line-height:1.8;max-width:460px;margin:0 auto}
  /* Timeline */
  .timeline{background:#fff;padding:28px 36px}
  .tl-title{font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:1.8px;color:#9aacbe;margin-bottom:18px}
  .tl-item{display:flex;align-items:flex-start;gap:14px;margin-bottom:16px}
  .tl-item:last-child{margin-bottom:0}
  .tl-dot{width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.95rem;flex-shrink:0;margin-top:2px}
  .tl-dot.done{background:rgba(75,181,67,.15)}
  .tl-dot.pending{background:rgba(59,130,246,.12)}
  .tl-dot.soon{background:rgba(245,158,11,.12)}
  .tl-text h4{font-size:.9rem;font-weight:700;color:#0c1f4a;margin-bottom:3px}
  .tl-text p{font-size:.8rem;color:#7a8ba0;line-height:1.6}
  /* Enquiry box */
  .eq-box{background:#f0fdf4;border:1px solid #bbf7d0;border-radius:14px;padding:20px 22px;margin:0 36px 24px}
  .eq-title{font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:1.8px;color:#166534;margin-bottom:14px}
  .eq-row{display:flex;align-items:flex-start;gap:10px;margin-bottom:10px;font-size:.88rem}
  .eq-row:last-child{margin-bottom:0}
  .eq-ico{flex-shrink:0;width:18px;text-align:center;font-size:.95rem}
  .eq-lbl{color:#166534;font-weight:600;min-width:80px}
  .eq-val{color:#1e4620}
  /* Services promo */
  .svc-section{background:#fff;padding:0 36px 28px}
  .svc-title{font-size:.75rem;font-weight:800;text-transform:uppercase;letter-spacing:1.8px;color:#9aacbe;margin-bottom:14px}
  .svc-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .svc-chip{background:#f4f7fc;border:1px solid #dde6f5;border-radius:10px;padding:9px 13px;font-size:.82rem;color:#0c1f4a;font-weight:600;display:flex;align-items:center;gap:6px}
  /* CTA */
  .cta-section{background:#fff;padding:0 36px 32px;text-align:center}
  .cta-txt{font-size:.88rem;color:#7a8ba0;margin-bottom:16px;line-height:1.6}
  .btns{display:flex;gap:10px;flex-wrap:wrap;justify-content:center}
  .btn{display:inline-block;padding:12px 22px;border-radius:10px;font-weight:700;font-size:.88rem;text-decoration:none;min-width:140px;text-align:center}
  .btn-wa{background:#25D366;color:#fff}
  .btn-call{background:#0c1f4a;color:#fff}
  /* Footer */
  .ftr{background:#f4f7fc;border-radius:0 0 16px 16px;padding:22px 36px;text-align:center;border-top:1px solid #e5eaf3}
  .ftr-txt{font-size:.73rem;color:#9aacbe;line-height:1.85}
  .ftr-txt a{color:#4bb543;text-decoration:none}
  .unsubscribe{font-size:.68rem;color:#b0bec5;margin-top:10px}
</style>
</head>
<body>
<div class="shell">

  <!-- Header -->
  <div class="hdr">
    <div class="brand">WELCARE <span>FMS</span></div>
    <div class="brand-sub">Facility Management Services · Chennai</div>
  </div>

  <!-- Hero -->
  <div class="hero">
    <div class="tick-circle">✅</div>
    <h1>Thank You, {{ $enquiry->name }}!</h1>
    <p>
      We have successfully received your enquiry
      @if($enquiry->service)
        for <strong>{{ $enquiry->service }}</strong>
      @endif
      and our team will contact you <strong>within 24 hours</strong>.
    </p>
  </div>

  <!-- Enquiry summary -->
  <div class="eq-box">
    <div class="eq-title">📋 Your Enquiry Summary</div>
    <div class="eq-row">
      <span class="eq-ico">🆔</span>
      <span class="eq-lbl">Ref. No.</span>
      <span class="eq-val">#{{ str_pad($enquiry->id, 5, '0', STR_PAD_LEFT) }}</span>
    </div>
    <div class="eq-row">
      <span class="eq-ico">📱</span>
      <span class="eq-lbl">Phone</span>
      <span class="eq-val">{{ $enquiry->phone }}</span>
    </div>
    <div class="eq-row">
      <span class="eq-ico">✉️</span>
      <span class="eq-lbl">Email</span>
      <span class="eq-val">{{ $enquiry->email }}</span>
    </div>
    @if($enquiry->service)
    <div class="eq-row">
      <span class="eq-ico">🔧</span>
      <span class="eq-lbl">Service</span>
      <span class="eq-val">{{ $enquiry->service }}</span>
    </div>
    @endif
    <div class="eq-row">
      <span class="eq-ico">📅</span>
      <span class="eq-lbl">Submitted</span>
      <span class="eq-val">{{ $enquiry->created_at->format('d M Y, h:i A') }}</span>
    </div>
  </div>

  <!-- Timeline -->
  <div class="timeline">
    <div class="tl-title">What Happens Next</div>
    <div class="tl-item">
      <div class="tl-dot done">✅</div>
      <div class="tl-text">
        <h4>Enquiry Received</h4>
        <p>Your details have been saved and our team has been notified immediately.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-dot pending">📞</div>
      <div class="tl-text">
        <h4>We Contact You (Within 24 Hours)</h4>
        <p>Our representative will call or WhatsApp you to understand your requirements in detail.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-dot soon">📝</div>
      <div class="tl-text">
        <h4>Free Site Assessment & Custom Quote</h4>
        <p>We visit your premises, assess scope of work, and provide a transparent, pocket-friendly proposal.</p>
      </div>
    </div>
    <div class="tl-item">
      <div class="tl-dot soon">🚀</div>
      <div class="tl-text">
        <h4>Service Deployment</h4>
        <p>Our trained team is deployed promptly with regular quality checks and supervisor oversight.</p>
      </div>
    </div>
  </div>

  <!-- Services grid -->
  <div class="svc-section">
    <div class="svc-title">Our Complete Range of Services</div>
    <div class="svc-grid">
      <div class="svc-chip"><span>🧹</span> Housekeeping</div>
      <div class="svc-chip"><span>🌿</span> Landscape</div>
      <div class="svc-chip"><span>🛡️</span> Security</div>
      <div class="svc-chip"><span>⚡</span> Electrical</div>
      <div class="svc-chip"><span>🔧</span> Plumbing</div>
      <div class="svc-chip"><span>🍽️</span> Catering</div>
      <div class="svc-chip"><span>🌱</span> Gardening</div>
      <div class="svc-chip"><span>🔄</span> Outsourcing</div>
    </div>
  </div>

  <!-- CTA -->
  <div class="cta-section">
    <p class="cta-txt">Need urgent assistance? Reach us directly — we are available 6 days a week.</p>
    <div class="btns">
      <a href="https://wa.me/919585949422?text=Hello%20Welcare%20FMS%2C%20I%20submitted%20an%20enquiry%20(Ref%20%23{{ str_pad($enquiry->id, 5, '0', STR_PAD_LEFT) }}).%20I%20need%20urgent%20help." class="btn btn-wa">
        💬 WhatsApp Us
      </a>
      <a href="tel:+919087876366" class="btn btn-call">
        📞 +91 90878 76366
      </a>
    </div>
  </div>

  <!-- Footer -->
  <div class="ftr">
    <div class="ftr-txt">
      <strong>Welcare FMS</strong><br>
      #9/3, 2nd Floor, Pushpa Nagar Main Road, Nungambakkam, Chennai – 600 034<br>
      +91 90878 76366 &nbsp;|&nbsp; 044-28225362 &nbsp;|&nbsp;
      <a href="mailto:info@welcarefms.com">info@welcarefms.com</a><br>
      <a href="https://www.welcarefms.com">www.welcarefms.com</a> &nbsp;|&nbsp; GST: 33AACF4037FW4037FIZG
    </div>
    <div class="unsubscribe">This email was sent because you submitted an enquiry on welcarefms.com</div>
  </div>

</div>
</body>
</html>
