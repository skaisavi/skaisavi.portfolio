'use client'
import { useEffect, useState } from 'react'

const SECTIONS = [
  { id: 'hero',        label: 'Intro'     },
  { id: 'home-about',  label: 'About'     },
  { id: 'home-work',   label: 'Work'      },
  { id: 'home-skills', label: 'Skills'    },
  { id: 'home-cta',    label: "Let's Talk" },
]

export default function SectionNav() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveId(id) },
        { threshold: 0.4 }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="section-nav" aria-label="Page sections">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`section-nav-dot${activeId === id ? ' active' : ''}`}
          onClick={() => scrollTo(id)}
          aria-label={`Go to ${label}`}
        >
          <span className="section-nav-label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
