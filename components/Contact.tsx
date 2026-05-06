'use client'

import { useState } from 'react'
import { useParallax } from '@/hooks/useParallax'

type FormState = { nombre: string; empresa: string; email: string; mensaje: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

const INPUT_STYLE: React.CSSProperties = {
  width: '100%', padding: '14px 16px', background: '#111',
  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
  color: '#fff', fontSize: 14, fontFamily: 'var(--font-barlow)', outline: 'none',
  transition: 'border-color 0.2s',
}

const FOCUS_COLOR = 'rgba(242,106,0,0.5)'
const BLUR_COLOR = 'rgba(255,255,255,0.1)'

export default function Contact() {
  const { sectionRef } = useParallax(0.10)
  const [form, setForm] = useState<FormState>({ nombre: '', empresa: '', email: '', mensaje: '' })
  const [status, setStatus] = useState<Status>('idle')

  const set = (k: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }))

  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = FOCUS_COLOR
  }
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderColor = BLUR_COLOR
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section ref={sectionRef} id="contacto" style={{
      padding: '100px 28px', background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/uploads/isotipo_bizon.png" alt="Bizon" style={{ height: 64, marginBottom: 24 }} />
          <h2 style={{
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(44px,7vw,88px)', letterSpacing: '-0.02em', lineHeight: 0.9, marginBottom: 16,
          }}>
            Hablemos<br /><span style={{ color: '#F26A00' }}>de tu proyecto</span>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            Contanos qué necesitás y un especialista de Bizon te contactará para evaluar la solución más eficiente.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 28 }}>
            <a href="mailto:info@bizon.com.ar" aria-label="Email"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 7L2 7" />
              </svg>
              info@bizon.com.ar
            </a>
            <a href="https://www.linkedin.com/company/somosbizon/" target="_blank" rel="noopener" aria-label="LinkedIn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </svg>
              /somosbizon
            </a>
            <a href="https://instagram.com/somosbizon" target="_blank" rel="noopener" aria-label="Instagram"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.45)', fontSize: 13, transition: 'color 0.2s', textDecoration: 'none' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              @somosbizon
            </a>
          </div>
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <h3 style={{ fontFamily: 'var(--font-barlow-condensed)', fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
              ¡Mensaje enviado!
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.5)' }}>Te contactaremos a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {([
                { key: 'nombre', label: 'Nombre completo', placeholder: 'Juan García' },
                { key: 'empresa', label: 'Empresa', placeholder: 'Nombre de tu empresa' },
              ] as const).map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label style={{
                    display: 'block', fontSize: 11, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8,
                  }}>{label}</label>
                  <input
                    type="text" placeholder={placeholder} required
                    value={form[key]}
                    onChange={set(key)}
                    style={INPUT_STYLE}
                    onFocus={onFocus}
                    onBlur={onBlur}
                  />
                </div>
              ))}
            </div>

            <div>
              <label style={{
                display: 'block', fontSize: 11, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8,
              }}>Email</label>
              <input
                type="email" placeholder="tu@empresa.com" required
                value={form.email}
                onChange={set('email')}
                style={INPUT_STYLE}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            <div>
              <label style={{
                display: 'block', fontSize: 11, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 8,
              }}>¿Qué necesitás?</label>
              <textarea
                placeholder="Describí brevemente el trabajo o equipo que necesitás intervenir..."
                required rows={4}
                value={form.mensaje}
                onChange={set('mensaje')}
                style={{ ...INPUT_STYLE, resize: 'vertical' }}
                onFocus={onFocus}
                onBlur={onBlur}
              />
            </div>

            {status === 'error' && (
              <p style={{ color: '#ff4d4d', fontSize: 14, textAlign: 'center' }}>
                Ocurrió un error al enviar. Intentá nuevamente o escribinos directamente.
              </p>
            )}

            <button
              type="submit"
              className="cta-btn"
              disabled={status === 'loading'}
              style={{ width: '100%', padding: '16px', fontSize: 15, opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar consulta →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
