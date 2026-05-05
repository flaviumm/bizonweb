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

  const handleSubmit = async (e: React.FormEvent) => {
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
