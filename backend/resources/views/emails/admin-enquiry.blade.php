<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>New Enquiry – Welcare FMS</title>
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{font-family:'Segoe UI',Arial,sans-serif;background:#eef2f7;padding:32px 16px}
  .shell{max-width:620px;margin:0 auto}
  /* Header */
  .hdr{background:linear-gradient(135deg,#0c1f4a 0%,#1a3a8f 100%);border-radius:16px 16px 0 0;padding:32px 36px;text-align:center}
  .brand{font-size:1.7rem;font-weight:900;color:#fff;letter-spacing:3px}
  .brand span{color:#6dd468}
  .brand-sub{font-size:.62rem;color:rgba(255,255,255,.55);letter-spacing:4px;text-transform:uppercase;margin-top:4px}
  /* Alert strip */
  .alert{background:#fffbea;border-left:4px solid #f59e0b;padding:14px 20px;display:flex;align-items:center;gap:12px}
  .alert-ico{font-size:1.4rem;flex-shrink:0}
  .alert-txt{font-size:.85rem;color:#92400e;font-weight:700;letter-spacing:.3px}
  /* Body */
  .body{background:#fff;padding:32px 36px}
  .greeting{font-size:1.1rem;font-weight:700;color:#0c1f4a;margin-bottom:6px}
  .sub-txt{font-size:.9rem;color:#7a8ba0;margin-bottom:28px;line-height:1.6}
  /* Fields */
  .fields{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px}
  .field{background:#f4f7fc;border-radius:12px;padding:14px 16px;border:1px solid #e5eaf3}
  .field-lbl{font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:1.8px;color:#9aacbe;margin-bottom:5px}
  .field-val{font-size:.95rem;color:#0c1f4a;font-weight:600;word-break:break-word}
  .field-val a{color:#1a3a8f;text-decoration:none}
  .field-full{grid-column:1/-1}
  /* Message box */
  .msg{background:#f0f6ff;border-left:4px solid #3b82f6;border-radius:0 12px 12px 0;padding:18px 20px;margin-bottom:28px}
  .msg-lbl{font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:1.8px;color:#9aacbe;margin-bottom:8px}
  .msg-txt{font-size:.93rem;color:#1e293b;line-height:1.75;white-space:pre-line}
  /* Actions */
  .actions{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px}
  .btn{display:inline-block;padding:13px 24px;border-radius:10px;font-weight:700;font-size:.88rem;text-decoration:none;text-align:center;flex:1;min-width:140px}
  .btn-wa{background:#25D366;color:#fff}
  .btn-email{background:#0c1f4a;color:#fff}
  .btn-call{background:#4bb543;color:#fff}
  /* Divider */
  .divider{border:none;border-top:1px solid #e5eaf3;margin:24px 0}
  /* Info note */
  .note{background:#f0fdf4;border-radius:10px;padding:14px 18px;font-size:.82rem;color:#166534;line-height:1.65}
  /* Footer */
  .ftr{background:#f4f7fc;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;border-top:1px solid #e5eaf3}
  .ftr-txt{font-size:.75rem;color:#9aacbe;line-height:1.8}
  .ftr-txt a{color:#4bb543;text-decoration:none}
</style>
</head>
<body>
<div class="shell">

  <!-- Header -->
  <div class="hdr">
    <div class="brand">WELCARE <span>FMS</span></div>
    <div class="brand-sub">Facility Management Services · Chennai</div>
  </div>

  <!-- Alert strip -->
  <div class="alert">
    <span class="alert-ico">🔔</span>
    <span class="alert-txt">New enquiry received from your website — welcarefms.com</span>
  </div>

  <!-- Body -->
  <div class="body">
    <div class="greeting">You have a new customer enquiry!</div>
    <p class="sub-txt">The following details were submitted via the contact form. Please respond within 24 hours.</p>

    <div class="fields">
      <div class="field">
        <div class="field-lbl">Full Name</div>
        <div class="field-val">{{ $enquiry->name }}</div>
      </div>
      <div class="field">
        <div class="field-lbl">Phone Number</div>
        <div class="field-val">
          <a href="tel:{{ $enquiry->phone }}">{{ $enquiry->phone }}</a>
        </div>
      </div>
      <div class="field">
        <div class="field-lbl">Email Address</div>
        <div class="field-val">
          <a href="mailto:{{ $enquiry->email }}">{{ $enquiry->email }}</a>
        </div>
      </div>
      <div class="field">
        <div class="field-lbl">Service Required</div>
        <div class="field-val">{{ $enquiry->service ?: 'Not specified' }}</div>
      </div>
      <div class="field">
        <div class="field-lbl">Enquiry ID</div>
        <div class="field-val">#{{ str_pad($enquiry->id, 5, '0', STR_PAD_LEFT) }}</div>
      </div>
      <div class="field">
        <div class="field-lbl">Submitted On</div>
        <div class="field-val">{{ $enquiry->created_at->format('d M Y, h:i A') }}</div>
      </div>
    </div>

    @if($enquiry->message)
    <div class="msg">
      <div class="msg-lbl">Customer Message</div>
      <div class="msg-txt">{{ $enquiry->message }}</div>
    </div>
    @endif

    <div class="actions">
      <a href="https://wa.me/91{{ preg_replace('/\D/', '', $enquiry->phone) }}?text=Hello+{{ urlencode($enquiry->name) }}%2C+this+is+Welcare+FMS.+We+received+your+enquiry.+How+can+we+help+you?" class="btn btn-wa">
        💬 Reply on WhatsApp
      </a>
      <a href="mailto:{{ $enquiry->email }}?subject=Re: Your Enquiry – Welcare FMS&body=Dear {{ urlencode($enquiry->name) }}," class="btn btn-email">
        ✉️ Reply via Email
      </a>
      <a href="tel:{{ $enquiry->phone }}" class="btn btn-call">
        📞 Call Now
      </a>
    </div>

    <hr class="divider"/>

    <div class="note">
      ✅ <strong>Auto-reply sent:</strong> A thank-you email has been automatically sent to <strong>{{ $enquiry->email }}</strong> confirming receipt of their enquiry.
    </div>
  </div>

  <!-- Footer -->
  <div class="ftr">
    <div class="ftr-txt">
      Welcare FMS · #9/3, 2nd Floor, Pushpa Nagar Main Road, Nungambakkam, Chennai – 600 034<br>
      📞 +91 90878 76366 · <a href="mailto:info@welcarefms.com">info@welcarefms.com</a> · <a href="https://www.welcarefms.com">www.welcarefms.com</a><br>
      GST: 33AACF4037FW4037FIZG · EPF: TNMASI559663000
    </div>
  </div>

</div>
</body>
</html>
