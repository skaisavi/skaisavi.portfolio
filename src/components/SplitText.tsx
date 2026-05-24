'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export default function SplitText({ text, className, delay = 0, stagger = 0.028, as: Tag = 'div' }: SplitTextProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <Tag ref={ref} className={className} aria-label={text}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block' }}
          initial={{ y: 18, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: delay + i * stagger }}
        >
          {char === ' ' ? ' ' : char}
        </motion.span>
      ))}
    </Tag>
  )
}
