import { NextResponse } from 'next/server';
import siteConfig from '../../../../site.config';

export async function POST(request: Request) {
  const data = await request.json();
  const entry = { ...data, submitted_at: new Date().toISOString() };

  console.log('[LEAD CAPTURE]', JSON.stringify(entry));

  // Send notification email via Resend
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey && siteConfig.notifications.provider === 'resend') {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: `${siteConfig.name} <notifications@${siteConfig.domain}>`,
          to: [siteConfig.notificationEmail],
          subject: `📥 New Lead: ${data.name || 'Unknown'} — ${siteConfig.name}`,
          html: `
            <h2>New Lead Capture</h2>
            <table style="border-collapse:collapse;font-family:sans-serif;">
              ${data.name ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Name</td><td>${data.name}</td></tr>` : ''}
              ${data.email ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Email</td><td><a href="mailto:${data.email}">${data.email}</a></td></tr>` : ''}
              ${data.phone ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Phone</td><td><a href="tel:${data.phone}">${data.phone}</a></td></tr>` : ''}
              ${data.zip ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Zip</td><td>${data.zip}</td></tr>` : ''}
              ${data.service ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Service</td><td>${data.service}</td></tr>` : ''}
              ${data.message ? `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;">Message</td><td>${data.message}</td></tr>` : ''}
            </table>
            <p style="margin-top:16px;color:#666;font-size:13px;">
              Captured on <a href="https://${siteConfig.domain}">${siteConfig.name}</a>
            </p>
          `,
        }),
      });
    } catch (err) {
      console.error('Failed to send lead notification email:', err);
    }
  }

  return NextResponse.json({ success: true });
}
