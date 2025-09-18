// Simple contact API using Express + Nodemailer
// Env required: SMTP_USER, SMTP_PASS, BRAND_TO=info.foundationbrothers@gmail.com, BRAND_NAME=Foundation Brothers, BRAND_ADDRESS

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();
const PORT = process.env.PORT || 5174;

app.use(cors());
app.use(bodyParser.json());

const BRAND_TO = process.env.BRAND_TO || 'info.foundationbrothers@gmail.com';
const BRAND_NAME = process.env.BRAND_NAME || 'Foundation Brothers';
const BRAND_ADDRESS = process.env.BRAND_ADDRESS || 'Mansarovar, Jaipur, Rajasthan, India';
const LOGO_URL = process.env.BRAND_LOGO_URL || 'http://localhost:5173/assets/logo.png';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const baseStyles = `font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;`;

function brandHeader(title) {
  return `
  <table width="100%" cellpadding="0" cellspacing="0" style="${baseStyles}background:#f6f7f9;padding:24px 0;">
    <tr>
      <td></td>
      <td style="max-width:640px;margin:0 auto;background:white;border:1px solid #edf0f3;border-radius:12px;overflow:hidden">
        <div style="padding:20px 24px;border-bottom:1px solid #f0f2f5;display:flex;align-items:center;gap:12px">
          <img src="${LOGO_URL}" alt="${BRAND_NAME}" height="28" />
          <span style="font-weight:600;color:#111827">${BRAND_NAME}</span>
        </div>
        <div style="padding:24px">`;
}

function brandFooter() {
  return `
        </div>
        <div style="padding:16px 24px;border-top:1px solid #f0f2f5;color:#6b7280;font-size:12px">
          <div>${BRAND_NAME}</div>
          <div>${BRAND_ADDRESS}</div>
        </div>
      </td>
      <td></td>
    </tr>
  </table>`;
}

function adminHtml(payload) {
  const { name, email, phone, message } = payload;
  return (
    brandHeader('New enquiry') +
    `<h2 style="margin:0 0 12px;color:#111827">New enquiry received</h2>
     <p style="margin:0 0 16px;color:#374151">You have a new message from the contact form.</p>
     <table cellpadding="0" cellspacing="0" style="width:100%;font-size:14px;color:#111827">
       <tr><td style="padding:6px 0;color:#6b7280">Name</td><td style="padding:6px 0">${name}</td></tr>
       <tr><td style="padding:6px 0;color:#6b7280">Email</td><td style="padding:6px 0">${email}</td></tr>
       <tr><td style="padding:6px 0;color:#6b7280">Phone</td><td style="padding:6px 0">${phone || '-'}</td></tr>
       <tr><td style="padding:6px 0;color:#6b7280;vertical-align:top">Message</td><td style="padding:6px 0;white-space:pre-wrap">${(message || '').replace(/</g,'&lt;')}</td></tr>
     </table>` +
    brandFooter()
  );
}

function userHtml(payload) {
  const { name } = payload;
  return (
    brandHeader('We received your enquiry') +
    `<h2 style="margin:0 0 12px;color:#111827">Thanks, ${name || 'there'}!</h2>
     <p style="margin:0 0 12px;color:#374151">We’ve received your message and our team will get back to you shortly.</p>
     <p style="margin:0 0 12px;color:#374151">In the meantime, you can reply to this email if you’d like to add more details.</p>` +
    brandFooter()
  );
}

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body || {};
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  try {
    // Send to brand inbox
    await transporter.sendMail({
      from: `${BRAND_NAME} <${process.env.SMTP_USER}>`,
      to: BRAND_TO,
      subject: `New enquiry from ${name}`,
      html: adminHtml({ name, email, phone, message }),
      replyTo: email,
    });
    // Send confirmation to user
    await transporter.sendMail({
      from: `${BRAND_NAME} <${process.env.SMTP_USER}>`,
      to: email,
      subject: `We received your message — ${BRAND_NAME}`,
      html: userHtml({ name }),
    });
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on http://localhost:${PORT}`);
});


