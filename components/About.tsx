'use client'

import { useParallax } from '@/hooks/useParallax'

const STATS = [
  { n: '+10', label: 'años de experiencia' },
  { n: '8',   label: 'líneas de servicio' },
  { n: '1.000', label: 'kVA en electrógenos' },
  { n: '500', label: 'HP en motores y bombas' },
]

const RADII = ['12px 0 0 0', '0 12px 0 0', '0 0 0 12px', '0 0 12px 0']

export default function About() {
  const { sectionRef } = useParallax(0.12)

  return (
    <section ref={sectionRef} id="nosotros" style={{ padding: '100px 28px', background: '#0a0a0a' }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(242,106,0,0.1)', border: '1px solid rgba(242,106,0,0.3)',
            borderRadius: 999, padding: '6px 16px', marginBottom: 24,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F26A00', display: 'block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F26A00' }}>
              Quiénes somos
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(40px,6vw,78px)', letterSpacing: '-0.02em', lineHeight: 0.92, marginBottom: 28,
          }}>
            Experiencia<br />que se nota<br />
            <span style={{ color: '#F26A00' }}>en campo</span>
          </h2>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', fontWeight: 300, marginBottom: 20 }}>
            Bizon Soluciones Industriales opera en el corazón de las industrias más exigentes de Argentina. Nos especializamos en reacondicionamiento, fabricación y mantenimiento de equipos e infraestructura crítica.
          </p>
          <p style={{ fontSize: 15.5, lineHeight: 1.75, color: 'rgba(255,255,255,0.6)', fontWeight: 300 }}>
            Nuestro equipo trabaja en bases operativas, talleres, campamentos y sitios industriales con grupos electrógenos, motores, tableros e infraestructura de alta exigencia.
          </p>
          <div style={{ marginTop: 36 }}>
            <button
              className="cta-btn"
              onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Trabajemos juntos
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {STATS.map(({ n, label }, i) => (
            <div key={i} style={{
              padding: '36px 28px',
              background: i % 2 === 0 ? '#111' : '#0e0e0e',
              borderRadius: RADII[i],
            }}>
              <div style={{
                fontFamily: 'var(--font-barlow-condensed)', fontWeight: 900,
                fontSize: 'clamp(36px,4vw,56px)', letterSpacing: '-0.02em', color: '#F26A00', lineHeight: 1,
              }}>{n}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 8, lineHeight: 1.4 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
