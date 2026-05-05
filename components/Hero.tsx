export default function Hero() {
  return (
    <section style={{
      position: 'relative', height: '100vh', width: '100%',
      overflow: 'hidden', background: '#0a0a0a',
    }}>
      <video
        src="/uploads/jxp-veo3-video-1777621396951.mp4"
        autoPlay loop muted playsInline
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', zIndex: 1,
        }}
      />

      <div style={{
        position: 'absolute', inset: 0, zIndex: 2,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.42) 55%, rgba(0,0,0,0.72) 100%)',
      }} />

      <div style={{
        pointerEvents: 'none', position: 'absolute', bottom: 0, left: 0, right: 0,
        height: 192, zIndex: 3,
        background: 'linear-gradient(to bottom, transparent, #0a0a0a)',
      }} />

      <div style={{ position: 'relative', zIndex: 4, height: '100%', width: '100%' }}>

        <div style={{ position: 'absolute', right: 40, top: '14%', textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end' }}>
            <div style={{ width: 96, height: 1, background: 'rgba(255,255,255,0.35)', transform: 'rotate(20deg)' }} />
            <span style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: 'clamp(30px,3.8vw,48px)', letterSpacing: '-0.03em',
            }}>+10 años</span>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            de experiencia
          </div>
        </div>

        <h1 className="hero-title hero-stagger" style={{
          position: 'absolute', left: 40, top: '18%',
          fontSize: 'clamp(68px,13vw,172px)', color: '#fff',
        }}>fuerza</h1>

        <h1 className="hero-title hero-stagger" style={{
          position: 'absolute', right: 40, top: '38%',
          fontSize: 'clamp(68px,13vw,172px)', color: '#F26A00',
          textShadow: '0 0 100px rgba(242,106,0,0.25)',
        }}>industrial</h1>

        <p style={{
          position: 'absolute', left: 40, top: '47%',
          maxWidth: 240, fontSize: 14, lineHeight: 1.7,
          color: 'rgba(255,255,255,0.7)', fontWeight: 300,
        }}>
          Reacondicionamiento, fabricación y mantenimiento para las industrias más exigentes del país.
        </p>

        <h1 className="hero-title hero-stagger" style={{
          position: 'absolute', left: '18%', top: '59%',
          fontSize: 'clamp(68px,13vw,172px)',
          color: 'transparent',
          WebkitTextStroke: '2px rgba(255,255,255,0.22)',
        }}>real</h1>

        <div style={{ position: 'absolute', left: 40, bottom: 90 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: 'clamp(26px,3.2vw,42px)', letterSpacing: '-0.03em',
            }}>+8 rubros</span>
            <div style={{ width: 96, height: 1, background: 'rgba(255,255,255,0.35)', transform: 'rotate(-20deg)' }} />
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
            servicios especializados
          </div>
        </div>

        <div style={{ position: 'absolute', right: 40, bottom: 72, textAlign: 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'flex-end' }}>
            <div style={{ width: 96, height: 1, background: 'rgba(255,255,255,0.35)', transform: 'rotate(-20deg)' }} />
            <span style={{
              fontFamily: 'var(--font-barlow-condensed)', fontWeight: 800,
              fontSize: 'clamp(26px,3.2vw,42px)', letterSpacing: '-0.03em',
              opacity: 0.5, color: 'rgb(80,75,75)',
            }}>1.000 kVA</span>
          </div>
          <div style={{ fontSize: 12, marginTop: 5, textTransform: 'uppercase', letterSpacing: '0.07em', textAlign: 'right', color: 'rgb(80,79,79)' }}>
            cap. en electrógenos
          </div>
        </div>
      </div>
    </section>
  )
}
