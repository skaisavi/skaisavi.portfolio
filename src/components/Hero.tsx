'use client'

import { useEffect, useState } from 'react'
import { TYPEWRITER_PHRASES } from '@/data'
import ParticleField from '@/components/ParticleField'

function useTypewriter(phrases: string[], started: boolean): string {
  const [text, setText] = useState('')
  useEffect(() => {
    if (!started) return
    let pi = 0, ci = 0, deleting = false
    let timer: ReturnType<typeof setTimeout>
    const tick = () => {
      const phrase = phrases[pi]
      if (!deleting) {
        ci++
        setText(phrase.slice(0, ci))
        if (ci === phrase.length) { deleting = true; timer = setTimeout(tick, 2000) }
        else timer = setTimeout(tick, 55 + Math.random() * 40)
      } else {
        ci--
        setText(phrase.slice(0, ci))
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; timer = setTimeout(tick, 420) }
        else timer = setTimeout(tick, 28 + Math.random() * 20)
      }
    }
    tick()
    return () => clearTimeout(timer)
  }, [phrases, started])
  return text
}

const TITLES = [['Frontend', 'Developer.'], ['Web', 'Designer.']]

export default function Hero() {
  const [started, setStarted] = useState(false)
  const [clock, setClock] = useState('')
  const [titleIdx, setTitleIdx] = useState(0)
  const [fading, setFading] = useState(false)
  const typed = useTypewriter(TYPEWRITER_PHRASES, started)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const tick = () => {
      const n = new Date()
      const h = String(n.getHours()).padStart(2, '0')
      const m = String(n.getMinutes()).padStart(2, '0')
      const s = String(n.getSeconds()).padStart(2, '0')
      setClock(`London, ${h}:${m}:${s}`)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setTitleIdx(i => (i + 1) % TITLES.length)
        setFading(false)
      }, 520)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero" id="hero">
      <ParticleField />
      <div className="g1" /><div className="g2" /><div className="g3" /><div className="g4" />

      <div className="hero-bar">
        <span className="hero-bar-center">{clock}</span>
      </div>

      <div className="hero-hw">
        <h1 className={`hero-h${fading ? ' fading' : ''}`}>
          <span>{TITLES[titleIdx][0]}</span>
          <br />
          <span className="it">{TITLES[titleIdx][1]}</span>
        </h1>
      </div>

      <div className="hero-bot">
        <div className="hero-typewriter">
          <span>{typed}</span>
          <span className="caret" />
        </div>
      </div>

      <div className="hero-chips">
        <span className="hero-chip">Based in UK</span>
        <span className="hero-chip">Open to remote</span>
        <span className="hero-chip">Full-time &amp; freelance</span>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll down</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
