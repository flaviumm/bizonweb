'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '14px 24px' : '20px 28px',
      transition: 'padding 0.3s',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
    }}>
      <div className="pill-btn" style={{ padding: '10px 20px 10px 14px' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/uploads/logo_principal_horizontal.png"
          alt="Bizon Soluciones Industriales"
          style={{ height: 81, width: 'auto' }}
        />
      </div>

      <div className="pill-btn nav-center" style={{ padding: '6px' }}>
        {['Servicios', 'Sectores', 'Nosotros', 'Contacto'].map((l) => (
          <a key={l} className="nav-link" href={`#${l.toLowerCase()}`} onClick={scrollTo(l.toLowerCase())}>
            {l}
          </a>
        ))}
      </div>

      <button className="cta-btn" onClick={scrollTo('contacto')}>
        Solicitar Presupuesto
      </button>
    </nav>
  )
}
