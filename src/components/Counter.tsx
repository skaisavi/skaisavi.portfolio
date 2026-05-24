'use client'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export default function Counter({ to, suffix = '', prefix = '', duration = 1.8, className }: CounterProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(2, -10 * progress)
      setCount(Math.round(to * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>
}
