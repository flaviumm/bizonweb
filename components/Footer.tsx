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
        <img src="/uploads/logo_negativo_naranja.svg" alt="Bizon" style={{ height: 36, width: 'auto' }} />
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.25)', letterSpacing: '0.04em' }}>
          © 2025 Bizon Soluciones Industriales. Todos los derechos reservados.
        </p>
        <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
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
          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.1)', margin: '0 4px' }} />
          <a
            href="mailto:info@bizon.com.ar"
            aria-label="Email"
            style={{ display: 'inline-flex', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-10 7L2 7" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/somosbizon/"
            target="_blank" rel="noopener" aria-label="LinkedIn"
            style={{ display: 'inline-flex', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/somosbizon"
            target="_blank" rel="noopener" aria-label="Instagram"
            style={{ display: 'inline-flex', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#F26A00')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.4)')}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
