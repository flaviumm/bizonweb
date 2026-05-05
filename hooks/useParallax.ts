'use client'

import { useEffect, useRef } from 'react'

export function useParallax(speed = 0.18) {
  const sectionRef = useRef<HTMLElement>(null)
  const innerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const inner = innerRef.current
    if (!section) return

    let entered = false

    section.style.opacity = '0'
    section.style.transform = 'translateY(48px)'
    section.style.transition =
      'opacity 0.85s cubic-bezier(0.22,1,0.36,1), transform 0.85s cubic-bezier(0.22,1,0.36,1)'

    const reveal = () => {
      if (entered) return
      entered = true
      section.style.opacity = '1'
      section.style.transform = 'translateY(0)'
    }

    const onScroll = () => {
      if (!entered) {
        const rect = section.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.88) reveal()
      }
      if (inner) {
        const rect = section.getBoundingClientRect()
        const center = rect.top + rect.height / 2 - window.innerHeight / 2
        inner.style.transform = `translateY(${center * speed}px)`
      }
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [speed])

  return { sectionRef, innerRef }
}
