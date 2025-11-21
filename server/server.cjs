/*
 Express mail server for local development
 Endpoint: POST /api/contact
 Env vars used: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO
*/

const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.options('/api/contact', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(204).end();
});

app.post('/api/contact', async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  try {
    // Debug: log received body keys to help detect missing fields
    const body = req.body || {};
    const keys = Object.keys(body);
    if (process.env.NODE_ENV !== 'production') {
      console.log('POST /api/contact body keys:', keys);
    }
    const { name, email, subject, message } = body;
    const missing = ['name','email','subject','message'].filter(
      (k) => !String((req.body || {})[k] || '').trim()
    );
    if (missing.length) {
      return res.status(400).json({ error: 'Missing required fields', missing });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM;
    const smtpTo = process.env.SMTP_TO || 'eternelcodeur@gmail.com';

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom) {
      return res.status(503).json({ error: 'SMTP not configured' });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const mailFrom = `${name} <${email}>`;

    // Verify SMTP connection for clearer errors in development
    await transporter.verify();

    await transporter.sendMail({
      from: { name, address: smtpFrom },
      sender: smtpFrom,
      envelope: { from: smtpFrom, to: smtpTo },
      to: smtpTo,
      subject: `[Portfolio] ${subject}`,
      replyTo: { name, address: email },
      text: `Nouveau message de ${name} <${email}>\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: 'Send failed', detail: err?.message || String(err) });
  }
});

app.listen(PORT, () => {
  console.log(`Mail server listening on http://localhost:${PORT}`);
});
