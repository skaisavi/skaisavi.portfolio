'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const spotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    const spot = spotRef.current
    if (!dot || !ring || !spot) return

    let mouseX = 0, mouseY = 0
    let ringX = 0, ringY = 0
    let spotX = 0, spotY = 0
    let rafId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      // Ring: medium lerp
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`

      // Spotlight: lazy lerp
      spotX += (mouseX - spotX) * 0.06
      spotY += (mouseY - spotY) * 0.06
      spot.style.left = `${spotX}px`
      spot.style.top = `${spotY}px`

      rafId = requestAnimationFrame(animate)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, .magnetic, .social-btn, .card-arrow, .timeline-card')) {
        document.body.classList.add('cursor-active')
      }
    }
    const onOut = (e: MouseEvent) => {
      const target = e.target as Element
      if (target.closest('a, button, .magnetic, .social-btn, .card-arrow, .timeline-card')) {
        document.body.classList.remove('cursor-active')
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div className="cursor-spotlight" ref={spotRef} aria-hidden="true" />
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
