'use client'

import { useParallax } from '@/hooks/useParallax'

const SERVICES = [
  { title: 'Piletas Industriales', desc: 'Reacondicionamiento estructural y eléctrico de piletas para acumulación de fluidos, lodos y testing.' },
  { title: 'Estructuras Metálicas', desc: 'Fabricación y reacondicionamiento de estructuras, soportes, escaleras, barandas y bandejas antiderrame.' },
  { title: 'Módulos Habitacionales', desc: 'Reacondicionamiento de módulos habitacionales y oficinas móviles, simples o con tren rodante.' },
  { title: 'Instalaciones Antiexplosivas', desc: 'Reacondicionamiento y fabricación de instalaciones eléctricas antiexplosivas certificadas.' },
  { title: 'Tableros Eléctricos', desc: 'Reacondicionamiento y fabricación de tableros de distribución, control y potencia.' },
  { title: 'Grupos Electrógenos', desc: 'Reacondicionamiento y reparación de grupos electrógenos hasta 1.000 kVA.' },
  { title: 'Motores y Bombas', desc: 'Mantenimiento, bobinados y cambio de rodamientos de motores eléctricos y bombas hasta 500 HP.' },
  { title: 'Maquinaria Vial', desc: 'Reparaciones de maquinaria vial: uñas, baldes, chasis y modificaciones generales.' },
]

export default function Services() {
  const { sectionRef } = useParallax(0.12)

  return (
    <section ref={sectionRef} id="servicios" style={{ padding: '100px 28px', background: '#0a0a0a' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 64 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'rgba(242,106,0,0.1)', border: '1px solid rgba(242,106,0,0.3)',
            borderRadius: 999, padding: '6px 16px', marginBottom: 20,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#F26A00', display: 'block' }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F26A00' }}>
              Lo que hacemos
            </span>
          </div>
          <h2 style={{
            fontFamily: 'var(--font-barlow-condensed)', fontWeight: 900, textTransform: 'uppercase',
            fontSize: 'clamp(48px,7vw,92px)', letterSpacing: '-0.02em', lineHeight: 0.9, color: '#fff',
          }}>
            Servicios<br />
            <span style={{ color: '#F26A00' }}>Industriales</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div className="service-num">0{i + 1}</div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/uploads/isotipo_bizon.png" alt="" style={{ height: 28, width: 'auto', opacity: 0.18, filter: 'brightness(10)' }} />
              </div>
              <div className="service-title">{s.title}</div>
              <div className="service-desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
