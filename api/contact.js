// api/contact.js
import nodemailer from 'nodemailer';

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (c) => (data += c));
    req.on('end', () => {
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const body = await readJsonBody(req);
  const { name, email, phone, message } = body || {};

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS, // Gmail App Password (16 chars, no spaces)
    },
  });

  const brandName = process.env.BRAND_NAME || 'Foundation Brothers';
  const brandAddress = process.env.BRAND_ADDRESS || '';
  const adminTo = process.env.BRAND_TO || process.env.SMTP_USER;

  const toAdminHtml = `
    <div style="font-family:Inter,system-ui,Arial,sans-serif">
      <h2 style="margin:0 0 12px">New enquiry</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Email:</b> ${email || 'not provided'}</p>
      <pre style="white-space:pre-wrap;background:#f7f7f8;padding:12px;border-radius:8px;border:1px solid #eee">${message}</pre>
      <hr/>
      <div><b>${brandName}</b><br/>${brandAddress}</div>
    </div>
  `;

  const toUserHtml = `
    <div style="font-family:Inter,system-ui,Arial,sans-serif">
      <h2 style="margin:0 0 12px">${brandName}</h2>
      <p>Thanks for contacting us, ${name}. We’ve received your enquiry and will reach out within 24 hours.</p>
    </div>
  `;

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: adminTo,
    subject: `New enquiry from ${name}`,
    html: toAdminHtml,
  });

  if (email) {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: email,
      subject: 'We received your enquiry',
      html: toUserHtml,
    });
  }

  return res.status(200).json({ ok: true });
}