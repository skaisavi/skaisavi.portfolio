'use client'

import { Fragment, useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import ParticleField from '@/components/ParticleField'

const ROLES = ['Web Designer.', 'Frontend Developer.']

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [clock, setClock] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -110])
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.86])
  const titleOpacity = useTransform(scrollYProgress, [0, 0.76, 1], [1, 0.72, 0])
  const chipY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const chipOpacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 0.35, 0])

  useEffect(() => { setMounted(true) }, [])

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
    const id = setInterval(() => setRoleIdx(i => (i + 1) % ROLES.length), 4200)
    return () => clearInterval(id)
  }, [])

  const role = ROLES[roleIdx]
  // Group chars by word so the browser only breaks between words, not inside them
  const roleWords = (() => {
    let idx = 0
    return role.split(' ').map(word => {
      const s = idx
      idx += word.length + 1
      return { word, s }
    })
  })()

  return (
    <section ref={heroRef} className="hero" id="hero">
      <ParticleField />
      <div className="g1" /><div className="g2" /><div className="g3" /><div className="g4" />

      <div className="hero-bar">
        <span className="hero-bar-center">{clock}</span>
      </div>

      <motion.div
        className="hero-hw"
        style={{ y: titleY, scale: titleScale, opacity: titleOpacity }}
      >
        <div className="hero-editorial">

          <motion.p
            className="hero-name-label"
            initial={{ opacity: 0, y: 14 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Skaiste Savitri
          </motion.p>

          <motion.div
            className="hero-the-prefix"
            initial={{ opacity: 0, x: -20 }}
            animate={mounted ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            THE
          </motion.div>

          <div className="hero-role-wrap" aria-live="polite" aria-label={role}>
            <AnimatePresence mode="wait">
              <motion.h1
                key={roleIdx}
                className="hero-role-heading"
                exit={{ opacity: 0, y: -18, transition: { duration: 0.22, ease: 'easeIn' } }}
              >
                {roleWords.map(({ word, s }, wi) => (
                  <Fragment key={wi}>
                    <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
                      {word.split('').map((char, ci) => (
                        <motion.span
                          key={ci}
                          initial={{ y: 22, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: (s + ci) * 0.024 }}
                          style={{ display: 'inline-block' }}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </span>
                    {wi < roleWords.length - 1 && ' '}
                  </Fragment>
                ))}
              </motion.h1>
            </AnimatePresence>
          </div>

        </div>
      </motion.div>

      <motion.div className="hero-chips" style={{ y: chipY, opacity: chipOpacity }}>
        {['Based in UK', 'Open to remote', 'Full-time & freelance'].map((chip, i) => (
          <motion.span
            key={chip}
            className="hero-chip"
            initial={{ opacity: 0, y: 14 }}
            animate={mounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.55 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
          >
            {chip}
          </motion.span>
        ))}
      </motion.div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll down</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}
