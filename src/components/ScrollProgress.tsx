'use client'

import { useEffect, useRef } from 'react'

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        const scrolled = window.scrollY
        const total = document.documentElement.scrollHeight - window.innerHeight
        bar.style.transform = `scaleX(${total > 0 ? scrolled / total : 0})`
        raf = 0
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return <div className="scroll-progress" ref={barRef} />
}
