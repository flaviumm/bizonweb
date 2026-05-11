'use client'

import { useParallax } from '@/hooks/useParallax'

const IMAGES = [
  '/uploads/soldador_2.png',
  '/uploads/bizon_1_3.png',
  '/uploads/viales.png',
]

export default function Gallery() {
  const { sectionRef } = useParallax(0.08)

  return (
    <section ref={sectionRef} style={{ padding: '0', overflow: 'hidden' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', height: 340 }}>
        {IMAGES.map((src, i) => (
          <div key={i} style={{ overflow: 'hidden', position: 'relative' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              style={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'brightness(0.75) saturate(0.85)',
                transition: 'transform 0.6s ease',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
