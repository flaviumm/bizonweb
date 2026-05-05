'use client'

import { useParallax } from '@/hooks/useParallax'

const SECTORS = [
  'Oil & Gas',
  'Minería',
  'Energía',
  'Construcción Industrial',
  'Empresas Constructoras',
  'Contratistas de Campo',
]

export default function Sectors() {
  const { sectionRef } = useParallax(0.10)

  return (
    <section ref={sectionRef} id="sectores" style={{
      padding: '80px 28px', background: '#080808',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40, justifyContent: 'space-between' }}>
          <div>
            <p style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 12 }}>
              Industrias que atendemos
            </p>
            <h3 style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: 'clamp(32px,4vw,52px)', letterSpacing: '-0.02em', textTransform: 'uppercase',
            }}>
              Sectores
            </h3>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {SECTORS.map((s) => (
              <span key={s} className="sector-pill">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
