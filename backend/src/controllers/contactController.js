// Uses Resend (https://resend.com) to send emails via HTTPS — not SMTP.
// This works on Render free tier which blocks outbound SMTP ports.

function formatEmailHtml({ name, email, phone, subject, message }) {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'short',
  });

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    body { font-family: 'Segoe UI', Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; color: #1a1a2e; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(135deg, #1e3a5f, #3b82f6); padding: 28px 32px; }
    .header h1 { color: white; margin: 0; font-size: 20px; font-weight: 600; }
    .header p { color: rgba(255,255,255,0.75); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 28px 32px; }
    .field { margin-bottom: 20px; }
    .field label { display: block; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #6b7280; margin-bottom: 6px; }
    .field .value { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px 14px; font-size: 14px; color: #1f2937; line-height: 1.5; }
    .message-value { white-space: pre-wrap; min-height: 80px; }
    .footer { background: #f9fafb; border-top: 1px solid #e5e7eb; padding: 16px 32px; }
    .footer p { font-size: 12px; color: #9ca3af; margin: 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📬 New Portfolio Contact</h1>
      <p>Someone reached out through your portfolio website</p>
    </div>
    <div class="body">
      <div class="field">
        <label>From</label>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <label>Email</label>
        <div class="value"><a href="mailto:${email}" style="color:#3b82f6;text-decoration:none;">${email}</a></div>
      </div>
      ${phone ? `<div class="field"><label>Phone</label><div class="value">${phone}</div></div>` : ''}
      <div class="field">
        <label>Subject</label>
        <div class="value">${subject}</div>
      </div>
      <div class="field">
        <label>Message</label>
        <div class="value message-value">${message}</div>
      </div>
    </div>
    <div class="footer">
      <p>Received on ${timestamp} IST · Sent via portfolio contact form</p>
    </div>
  </div>
</body>
</html>`;
}

async function sendContactEmail(req, res) {
  const { name, email, phone, subject, message } = req.body;

  // ── Check env vars ────────────────────────────────────────────
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY missing from environment variables.');
    return res.status(500).json({
      success: false,
      message: 'Email service not configured. Please contact me directly.',
    });
  }

  const receiver = process.env.CONTACT_RECEIVER_EMAIL;
  if (!receiver) {
    console.error('❌ CONTACT_RECEIVER_EMAIL missing from environment variables.');
    return res.status(500).json({
      success: false,
      message: 'Email service not configured. Please contact me directly.',
    });
  }

  // ── Send via Resend API (HTTPS — works on Render free tier) ──
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [receiver],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html: formatEmailHtml({ name, email, phone, subject, message }),
        text: `New contact from ${name} (${email})\n\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('❌ Resend API error:', response.status, JSON.stringify(data));
      return res.status(500).json({
        success: false,
        message: 'Failed to send message. Please try again or email me directly.',
      });
    }

    console.log(`✅ Email sent via Resend. ID: ${data.id} | From: ${email} | Subject: ${subject}`);
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });

  } catch (error) {
    console.error('❌ Resend fetch error:', error.message);
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again or email me directly.',
    });
  }
}

module.exports = { sendContactEmail };
