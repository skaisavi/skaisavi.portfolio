'use client'

import { useEffect, useState } from 'react'

const INTRO_DURATION = 4000
const INTRO_WORDS = ['Design', 'Code', 'Motion']

export default function Loader() {
  const [gone, setGone] = useState(false)
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const delay = reduceMotion ? 450 : INTRO_DURATION
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => setGone(true), delay)
    const unlockTimer = setTimeout(() => {
      document.body.style.overflow = previousOverflow
    }, delay + 1000)

    if (!reduceMotion) {
      const startTime = performance.now()
      const countDuration = delay - 200
      let rafId: number

      const animate = (now: number) => {
        const t = Math.min((now - startTime) / countDuration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setPct(Math.round(eased * 100))
        if (t < 1) rafId = requestAnimationFrame(animate)
      }

      rafId = requestAnimationFrame(animate)

      return () => {
        cancelAnimationFrame(rafId)
        clearTimeout(timer)
        clearTimeout(unlockTimer)
        document.body.style.overflow = previousOverflow
      }
    }

    return () => {
      clearTimeout(timer)
      clearTimeout(unlockTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className={`loader intro-loader${gone ? ' gone' : ''}`} role="status" aria-live="polite">
      <div className="intro-loader-glow" aria-hidden="true" />
      <div className="intro-loader-glow intro-loader-glow--2" aria-hidden="true" />
      <div className="intro-loader-counter" aria-hidden="true">{String(pct).padStart(3, '0')}</div>
      <div className="intro-loader-inner">
        <p className="intro-loader-kicker">Portfolio</p>
        <div className="intro-loader-title" aria-label="Skaiste Savitri">
          <span>Skaiste</span>
          <span>Savitri</span>
        </div>
        <div className="intro-loader-words" aria-hidden="true">
          {INTRO_WORDS.map(word => (
            <span key={word}>{word}</span>
          ))}
        </div>
        <div className="intro-loader-line" aria-hidden="true" />
      </div>
    </div>
  )
}
