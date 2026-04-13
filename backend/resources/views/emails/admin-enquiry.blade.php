<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>Thank You – Welcare FMS</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:Arial,Helvetica,sans-serif;">

<table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:24px 0;">
  <tr><td align="center">
  <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dde3ec;">

    {{-- HEADER --}}
    <tr>
      <td style="background:#1a3c6e;padding:28px 32px;text-align:center;">
        <div style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:2px;">
          WELCARE <span style="color:#4fc3f7;">FMS</span>
        </div>
        <div style="font-size:12px;color:#90caf9;margin-top:4px;letter-spacing:1px;">
          Facility Management Services · Chennai
        </div>
      </td>
    </tr>

    {{-- HERO --}}
    <tr>
      <td style="padding:36px 32px 24px;text-align:center;border-bottom:1px solid #e8edf5;">
        <div style="font-size:44px;margin-bottom:16px;">✅</div>
        <h1 style="margin:0 0 12px;font-size:24px;color:#1a3c6e;font-weight:700;">
          Thank You, {{ $data['name'] }}!
        </h1>
        <p style="margin:0;font-size:15px;color:#4a5568;line-height:1.7;">
          We have successfully received your enquiry
          @if(!empty($data['service']))
            for <strong style="color:#1a3c6e;">{{ $data['service'] }}</strong>
          @endif
          and our team will contact you <strong style="color:#1a3c6e;">within 24 hours</strong>.
        </p>
      </td>
    </tr>

    {{-- ENQUIRY SUMMARY --}}
    <tr>
      <td style="padding:28px 32px;">
        <div style="background:#f0f6ff;border-radius:10px;border:1px solid #c3d9f5;padding:24px;">
          <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:16px;letter-spacing:0.5px;">
            📋 YOUR ENQUIRY SUMMARY
          </div>

          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;">
                <span style="font-size:13px;color:#718096;">🆔 Ref. No.</span>
              </td>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;text-align:right;">
                <strong style="font-size:13px;color:#1a3c6e;">#{{ $data['ref'] }}</strong>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;">
                <span style="font-size:13px;color:#718096;">📱 Phone</span>
              </td>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;text-align:right;">
                <span style="font-size:13px;color:#2d3748;">{{ $data['phone'] }}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;">
                <span style="font-size:13px;color:#718096;">✉️ Email</span>
              </td>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;text-align:right;">
                <span style="font-size:13px;color:#2d3748;">{{ $data['email'] }}</span>
              </td>
            </tr>
            @if(!empty($data['service']))
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;">
                <span style="font-size:13px;color:#718096;">🔧 Service</span>
              </td>
              <td style="padding:8px 0;border-bottom:1px solid #dde8f5;text-align:right;">
                <span style="font-size:13px;color:#2d3748;">{{ $data['service'] }}</span>
              </td>
            </tr>
            @endif
            <tr>
              <td style="padding:8px 0;">
                <span style="font-size:13px;color:#718096;">📅 Submitted</span>
              </td>
              <td style="padding:8px 0;text-align:right;">
                <span style="font-size:13px;color:#2d3748;">{{ $data['submitted_at'] }}</span>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>

    {{-- WHAT HAPPENS NEXT --}}
    <tr>
      <td style="padding:0 32px 28px;">
        <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:16px;letter-spacing:0.5px;">
          WHAT HAPPENS NEXT
        </div>

        {{-- Step 1 --}}
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
          <tr>
            <td width="40" valign="top">
              <div style="width:32px;height:32px;background:#1a3c6e;border-radius:50%;text-align:center;line-height:32px;font-size:14px;">✅</div>
            </td>
            <td style="padding-left:12px;" valign="top">
              <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:2px;">Enquiry Received</div>
              <div style="font-size:13px;color:#718096;line-height:1.6;">Your details have been saved and our team has been notified immediately.</div>
            </td>
          </tr>
        </table>

        {{-- Step 2 --}}
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
          <tr>
            <td width="40" valign="top">
              <div style="width:32px;height:32px;background:#e8f0fe;border:2px solid #1a3c6e;border-radius:50%;text-align:center;line-height:28px;font-size:14px;">📞</div>
            </td>
            <td style="padding-left:12px;" valign="top">
              <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:2px;">We Contact You <span style="font-weight:400;color:#718096;">(Within 24 Hours)</span></div>
              <div style="font-size:13px;color:#718096;line-height:1.6;">Our representative will call or WhatsApp you to understand your requirements in detail.</div>
            </td>
          </tr>
        </table>

        {{-- Step 3 --}}
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
          <tr>
            <td width="40" valign="top">
              <div style="width:32px;height:32px;background:#e8f0fe;border:2px dashed #90aed4;border-radius:50%;text-align:center;line-height:28px;font-size:14px;">📝</div>
            </td>
            <td style="padding-left:12px;" valign="top">
              <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:2px;">Free Site Assessment &amp; Custom Quote</div>
              <div style="font-size:13px;color:#718096;line-height:1.6;">We visit your premises, assess scope of work, and provide a transparent, pocket-friendly proposal.</div>
            </td>
          </tr>
        </table>

        {{-- Step 4 --}}
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td width="40" valign="top">
              <div style="width:32px;height:32px;background:#e8f0fe;border:2px dashed #90aed4;border-radius:50%;text-align:center;line-height:28px;font-size:14px;">🚀</div>
            </td>
            <td style="padding-left:12px;" valign="top">
              <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:2px;">Service Deployment</div>
              <div style="font-size:13px;color:#718096;line-height:1.6;">Our trained team is deployed promptly with regular quality checks and supervisor oversight.</div>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    {{-- SERVICES GRID --}}
    <tr>
      <td style="padding:24px 32px;background:#f8faff;border-top:1px solid #e8edf5;border-bottom:1px solid #e8edf5;">
        <div style="font-size:14px;font-weight:700;color:#1a3c6e;margin-bottom:14px;text-align:center;letter-spacing:0.5px;">
          OUR COMPLETE RANGE OF SERVICES
        </div>
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td align="center" style="padding:4px;">
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🧹 Housekeeping</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🌿 Landscape</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🛡️ Security</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">⚡ Electrical</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🔧 Plumbing</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🍽️ Catering</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🌱 Gardening</span>
              <span style="display:inline-block;background:#e8f0fe;color:#1a3c6e;font-size:12px;font-weight:600;padding:6px 12px;border-radius:20px;margin:3px;">🔄 Outsourcing</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    {{-- CTA --}}
    <tr>
      <td style="padding:28px 32px;text-align:center;">
        <p style="margin:0 0 18px;font-size:14px;color:#718096;">
          Need urgent assistance? Reach us directly — we are available 6 days a week.
        </p>
        <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
          <tr>
            <td style="padding-right:8px;">
              <a href="https://wa.me/919585949422?text=Hello%20Welcare%20FMS%2C%20I%20submitted%20an%20enquiry%20(Ref%20%23{{ $data['ref'] }}).%20I%20need%20urgent%20help."
                 style="display:inline-block;background:#25d366;color:#ffffff;font-size:14px;font-weight:600;padding:12px 20px;border-radius:8px;text-decoration:none;">
                💬 WhatsApp Us
              </a>
            </td>
            <td>
              <a href="tel:+919087876366"
                 style="display:inline-block;background:#1a3c6e;color:#ffffff;font-size:14px;font-weight:600;padding:12px 20px;border-radius:8px;text-decoration:none;">
                📞 +91 90878 76366
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    {{-- FOOTER --}}
    <tr>
      <td style="background:#1a3c6e;padding:24px 32px;text-align:center;">
        <div style="font-size:13px;color:#90caf9;line-height:1.8;">
          <strong style="color:#ffffff;">Welcare FMS</strong><br/>
          #9/3, 2nd Floor, Pushpa Nagar Main Road, Nungambakkam, Chennai – 600 034<br/>
          +91 90878 76366 &nbsp;|&nbsp; 044-28225362 &nbsp;|&nbsp;
          <a href="mailto:admin@welcarefms.com" style="color:#4fc3f7;text-decoration:none;">admin@welcarefms.com</a><br/>
          <a href="https://www.welcarefms.com" style="color:#4fc3f7;text-decoration:none;">www.welcarefms.com</a>
          &nbsp;|&nbsp; GST: 33AACF4037FW4037FIZG
        </div>
        <div style="font-size:11px;color:#64b5f6;margin-top:12px;">
          This email was sent because you submitted an enquiry on welcarefms.com
        </div>
      </td>
    </tr>

  </table>
  </td></tr>
</table>

</body>
</html>