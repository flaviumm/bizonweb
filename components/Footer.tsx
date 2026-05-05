'use client'

export default function Footer() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      padding: '40px 28px', background: '#050505',
      borderTop: '1px solid rgba(255,255,255,0.05)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: 20,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/uploads/logo_principal_horizontal.png" alt="Bizon" style={{ height: 28 }} />
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>
          © 2025 Bizon Soluciones Industriales. Todos los derechos reservados.
        </p>
        <div style={{ display: 'flex', gap: 24 }}>
          {['Servicios', 'Sectores', 'Contacto'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={scrollTo(l.toLowerCase())}
              style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
