'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-72px' })

  return (
    <span ref={ref} className="reveal-wrap">
      <motion.span
        className={className}
        style={{ display: 'block' }}
        initial={{ y: '105%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.span>
    </span>
  )
}
