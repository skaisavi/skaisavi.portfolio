'use client'
import { useEffect, useState } from 'react'

const ATMOSPHERES = [
  {
    id: 'hero',
    layers: [
      'radial-gradient(ellipse 900px 800px at 78% 12%, rgba(168,85,247,.28) 0%, transparent 62%)',
      'radial-gradient(ellipse 700px 600px at 8% 88%, rgba(236,72,153,.16) 0%, transparent 60%)',
      'radial-gradient(ellipse 500px 500px at 40% 55%, rgba(20,184,166,.08) 0%, transparent 60%)',
    ],
  },
  {
    id: 'home-about',
    layers: [
      'radial-gradient(ellipse 800px 700px at 0% 50%, rgba(20,184,166,.20) 0%, transparent 60%)',
      'radial-gradient(ellipse 600px 600px at 100% 60%, rgba(168,85,247,.14) 0%, transparent 60%)',
      'radial-gradient(ellipse 400px 400px at 55% 20%, rgba(99,102,241,.08) 0%, transparent 60%)',
    ],
  },
  {
    id: 'home-work',
    layers: [
      'radial-gradient(ellipse 700px 600px at 92% 40%, rgba(168,85,247,.18) 0%, transparent 60%)',
      'radial-gradient(ellipse 600px 500px at 5% 70%, rgba(236,72,153,.12) 0%, transparent 60%)',
      'radial-gradient(ellipse 350px 350px at 50% 85%, rgba(249,115,22,.07) 0%, transparent 60%)',
    ],
  },
  {
    id: 'home-skills',
    layers: [
      'radial-gradient(ellipse 700px 600px at 50% 5%, rgba(99,102,241,.20) 0%, transparent 60%)',
      'radial-gradient(ellipse 500px 500px at 85% 80%, rgba(168,85,247,.14) 0%, transparent 60%)',
      'radial-gradient(ellipse 300px 300px at 8% 60%, rgba(20,184,166,.08) 0%, transparent 60%)',
    ],
  },
  {
    id: 'home-cta',
    layers: [
      'radial-gradient(ellipse 700px 600px at 5% 70%, rgba(20,184,166,.16) 0%, transparent 60%)',
      'radial-gradient(ellipse 600px 500px at 95% 40%, rgba(168,85,247,.16) 0%, transparent 60%)',
      'radial-gradient(ellipse 400px 400px at 50% 30%, rgba(236,72,153,.10) 0%, transparent 60%)',
    ],
  },
]

export default function ScrollAtmosphere() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    ATMOSPHERES.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { threshold: 0.25 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <>
      <div style={{ position: 'fixed', inset: 0, background: '#09090F', zIndex: -2, pointerEvents: 'none' }} />
      {ATMOSPHERES.map(({ id, layers }) => (
        <div
          key={id}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: -1,
            background: layers.join(', '),
            opacity: activeId === id ? 1 : 0,
            transition: 'opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
            pointerEvents: 'none',
          }}
        />
      ))}
    </>
  )
}
