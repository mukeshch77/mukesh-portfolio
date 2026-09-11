const nodemailer = require('nodemailer');

function createTransporter() {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
}

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
</html>
  `;
}

async function sendContactEmail(req, res) {
  const { name, email, phone, subject, message } = req.body;

  // ── Check env vars are set ──────────────────────────────────
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
    console.error('❌ EMAIL_USER or EMAIL_PASSWORD missing from .env file.');
    return res.status(500).json({
      success: false,
      message: 'Email is not configured on the server. Please contact me directly.',
    });
  }

  const receiver = process.env.CONTACT_RECEIVER_EMAIL || process.env.EMAIL_USER;

  try {
    const transporter = createTransporter();

    // Verify SMTP credentials before sending (helps catch wrong password early)
    await transporter.verify();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: receiver,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: formatEmailHtml({ name, email, phone, subject, message }),
      text: `New contact from ${name} (${email})\n\nPhone: ${phone || 'Not provided'}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    console.log(`✅ Contact email sent from ${email} — Subject: ${subject}`);
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });

  } catch (error) {
    // Log the real error server-side for debugging
    console.error('❌ Email send error:', error.code, '—', error.message);

    // Provide a helpful (but safe) message back to the client
    let clientMessage = 'Failed to send message. Please try again or email me directly.';
    if (error.code === 'EAUTH') {
      console.error('   → Gmail auth failed. Check EMAIL_USER and EMAIL_PASSWORD in .env');
      console.error('   → Make sure you are using a Gmail App Password, not your account password.');
      console.error('   → Get one at: https://myaccount.google.com/apppasswords');
    } else if (error.code === 'ECONNREFUSED' || error.code === 'ETIMEDOUT') {
      console.error('   → Cannot connect to Gmail SMTP. Check your internet connection.');
    }

    return res.status(500).json({
      success: false,
      message: clientMessage,
    });
  }
}

module.exports = { sendContactEmail };
