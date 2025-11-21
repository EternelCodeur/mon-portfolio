import nodemailer from 'nodemailer';

export const config = { runtime: 'nodejs' };

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export default async function handler(req: Request): Promise<Response> {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }
  if (req.method !== 'POST') {
    return new Response('Methode Not Allowed', { status: 405, headers: corsHeaders });
  }

  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM; // ex: no-reply@tondomaine.com
    const smtpTo = process.env.SMTP_TO || 'eternelcodeur@gmail.com';

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom) {
      return new Response(JSON.stringify({ error: 'SMTP not configured' }), {
        status: 503,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for others like 587
      auth: { user: smtpUser, pass: smtpPass },
    });

    const mailFrom = `${name} <${email}>`;

    // Use authenticated address with the visitor's name for display; keep visitor in Reply-To
    await transporter.sendMail({
      from: { name, address: smtpFrom },
      sender: smtpFrom,
      envelope: { from: smtpFrom, to: smtpTo },
      to: smtpTo,
      subject: `[Portfolio] ${subject}`,
      replyTo: { name, address: email },
      text: `Nouveau message de ${name} <${email}>\n\n${message}`,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: 'Invalid request' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
}
