'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01', title: 'Discover',
    body: 'Understand the brand, the user, and the goal before a single pixel is drawn.',
    color: '#22D3EE', glow: 'rgba(34,211,238,.14)',
  },
  {
    num: '02', title: 'Design',
    body: 'Create clean Figma layouts, components, and design systems with real intent.',
    color: '#A78BFA', glow: 'rgba(167,139,250,.14)',
  },
  {
    num: '03', title: 'Build',
    body: 'Turn every design into responsive, type-safe React and TypeScript code.',
    color: '#818CF8', glow: 'rgba(129,140,248,.14)',
  },
  {
    num: '04', title: 'Polish',
    body: 'Layer in motion, accessibility, and that final detail that makes it feel alive.',
    color: '#F472B6', glow: 'rgba(244,114,182,.14)',
  },
]

// Absolute positions within the 300vh section where each card activates.
// Spaced between 20–74% so they all fire during the sticky scroll range.
const TRIGGER_TOPS = ['20%', '38%', '56%', '74%']

export default function DesignToCodeSection() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const triggerRefs = useRef<(HTMLDivElement | null)[]>([null, null, null, null])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    triggerRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i)
            setRevealed(prev => {
              const next = new Set(prev)
              for (let j = 0; j <= i; j++) next.add(j)
              return next
            })
          }
        },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section id="home-about" className="dtc-section">

      {/* Invisible trigger zones scattered through the 300vh scroll space */}
      {TRIGGER_TOPS.map((top, i) => (
        <div
          key={i}
          ref={el => { triggerRefs.current[i] = el }}
          className="dtc-trigger"
          style={{ top }}
          aria-hidden="true"
        />
      ))}

      {/* Sticky viewport that never moves */}
      <div className="dtc-sticky">
        <div className="container dtc-grid">

          {/* ── Left: stable headline ── */}
          <motion.div
            className="dtc-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="sec-tag light">About</span>
            <p className="home-about-lead">
              Building experiences that feel <em>effortless</em> — in code and in Figma.
            </p>
            <p className="home-about-body">
              I&apos;m a frontend developer &amp; web designer based in the UK who genuinely loves what she does.
              I work across the full design-to-code pipeline — Figma concepts, polished UI, and clean production code.
            </p>
            <Link href="/about" className="ghost-link">Read more about me →</Link>
          </motion.div>

          {/* ── Right: card stack ── */}
          <div className="dtc-right">
            <div className="dtc-track">
              {STEPS.map((step, i) => (
                <div key={step.num} className="dtc-step">
                  <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={
                      revealed.has(i)
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 22 }
                    }
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className={`dtc-card${activeIndex === i ? ' dtc-card-active' : ''}`}
                      style={{ '--step-color': step.color, '--step-glow': step.glow } as React.CSSProperties}
                    >
                      <span className="dtc-card-num">{step.num}</span>
                      <div className="dtc-card-info">
                        <h3 className="dtc-card-title">{step.title}</h3>
                        <p className="dtc-card-desc">{step.body}</p>
                      </div>
                      <span className="dtc-card-dot" aria-hidden="true" />
                    </div>
                  </motion.div>

                  {i < STEPS.length - 1 && (
                    <motion.div
                      className="dtc-connector"
                      initial={{ opacity: 0 }}
                      animate={revealed.has(i) ? { opacity: 0.38 } : { opacity: 0 }}
                      transition={{ delay: 0.25, duration: 0.4 }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
