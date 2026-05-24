'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

type StoryTone = 'left' | 'right' | 'rise'

interface ScrollStorySectionProps {
  id: string
  chapter: string
  label: string
  children: ReactNode
  className?: string
  tone?: StoryTone
  floatingSlot?: ReactNode
}

export default function ScrollStorySection({
  id,
  chapter,
  label,
  children,
  className = '',
  tone = 'rise',
  floatingSlot,
}: ScrollStorySectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const initialX = tone === 'left' ? -86 : tone === 'right' ? 86 : 0
  const x = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [initialX, 0, 0, -initialX * 0.35])
  const y = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [120, 0, 0, -90])
  const scale = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0.94, 1, 1, 0.97])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.78, 1], [0, 1, 1, 0])
  const blur = useTransform(scrollYProgress, [0, 0.28, 0.75, 1], ['blur(18px)', 'blur(0px)', 'blur(0px)', 'blur(10px)'])

  return (
    <section ref={ref} className={`scroll-story-section ${className}`} id={id}>
      <div className="story-stage">
        {floatingSlot && (
          <div className="story-float">{floatingSlot}</div>
        )}
        <motion.div
          className="story-content"
          style={{ x, y, scale, opacity, filter: blur }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}
