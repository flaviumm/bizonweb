import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export const runtime = 'edge'

// In-memory rate limiter: 5 requests per IP per minute
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60_000 })
    return false
  }
  if (entry.count >= 5) return true
  entry.count++
  return false
}

function sanitize(val: unknown, maxLen = 2000): string {
  if (typeof val !== 'string') return ''
  return val.trim().slice(0, maxLen)
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const nombre = sanitize(body.nombre)
  const empresa = sanitize(body.empresa)
  const email = sanitize(body.email, 254)
  const mensaje = sanitize(body.mensaje)

  if (!nombre || !email || !mensaje) {
    return NextResponse.json({ error: 'Campos requeridos faltantes' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
  }

  const recipient = process.env.CONTACT_EMAIL ?? 'info@bizon.com.ar'

  try {
    await resend.emails.send({
      from: 'Bizon Web <info@bizon.com.ar>',
      to: recipient,
      replyTo: email,
      subject: `Consulta desde la web — ${nombre}${empresa ? ` (${empresa})` : ''}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#f9f9f9;padding:32px;border-radius:8px">
          <div style="background:#111;padding:20px 32px;border-radius:8px 8px 0 0;margin:-32px -32px 32px;text-align:center">
            <img src="https://bizon.com.ar/uploads/logo_principal_horizontal.png" alt="Bizon Soluciones Industriales" style="height:48px;width:auto" />
          </div>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px 0;color:#666;width:120px">Nombre</td><td style="padding:8px 0;font-weight:600">${nombre}</td></tr>
            ${empresa ? `<tr><td style="padding:8px 0;color:#666">Empresa</td><td style="padding:8px 0;font-weight:600">${empresa}</td></tr>` : ''}
            <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#F26A00">${email}</a></td></tr>
          </table>
          <div style="margin-top:24px;padding:20px;background:#fff;border-radius:8px;border-left:3px solid #F26A00">
            <p style="margin:0;color:#333;line-height:1.6;white-space:pre-wrap">${mensaje}</p>
          </div>
          <p style="margin-top:16px;font-size:12px;color:#999">Respondé directamente a este email para contactar al remitente.</p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact/route]', err)
    return NextResponse.json({ error: 'Error al enviar el email' }, { status: 500 })
  }
}
