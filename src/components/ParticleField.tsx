'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number;  y: number
  ox: number; oy: number   // origin (random start)
  vx: number; vy: number   // velocity
  r: number                // radius (1–2 → diameter 2–4px)
  color: string
  ax: number; ay: number   // drift amplitude
  fx: number; fy: number   // drift frequency (cycles/s, period 4–8 s)
  px: number; py: number   // drift phase offset
}

const COLORS = [
  'rgba(179,157,255,0.6)',
  'rgba(249,130,192,0.5)',
  'rgba(255,255,255,0.3)',
]

const REPEL_RADIUS = 120
const REPEL_FORCE  = 60
const SPRING_K     = 0.06
const FRICTION     = 0.92

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const stateRef  = useRef<{
    particles: Particle[]
    mouse: { x: number; y: number }
    raf: number
  }>({ particles: [], mouse: { x: -9999, y: -9999 }, raf: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const s     = stateRef.current
    const COUNT = window.innerWidth < 768 ? 40 : 80

    // Initialise canvas size + particle array
    const init = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      if (!w || !h) return
      canvas.width  = w
      canvas.height = h

      s.particles = Array.from({ length: COUNT }, () => {
        const ox = rand(0, w)
        const oy = rand(0, h)
        return {
          x: ox, y: oy, ox, oy,
          vx: 0, vy: 0,
          r:     rand(1, 2),
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          ax:    rand(8, 15),
          ay:    rand(8, 15),
          fx:    1 / rand(4, 8),
          fy:    1 / rand(4, 8),
          px:    rand(0, Math.PI * 2),
          py:    rand(0, Math.PI * 2),
        }
      })
    }

    init()

    // Re-init when the canvas is resized (hero height changes on mobile, etc.)
    const ro = new ResizeObserver(init)
    ro.observe(canvas)

    // Mouse tracking on the hero section (canvas is pointer-events: none)
    const hero = canvas.closest('.hero') as HTMLElement | null
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      s.mouse.x = e.clientX - rect.left
      s.mouse.y = e.clientY - rect.top
    }
    const onLeave = () => { s.mouse.x = -9999; s.mouse.y = -9999 }

    hero?.addEventListener('mousemove', onMove)
    hero?.addEventListener('mouseleave', onLeave)

    const t0 = performance.now()

    const loop = (now: number) => {
      const t  = (now - t0) / 1000   // seconds elapsed
      const w  = canvas.width
      const h  = canvas.height
      const mx = s.mouse.x
      const my = s.mouse.y

      ctx.clearRect(0, 0, w, h)

      for (const p of s.particles) {
        // ── Drift target (sine wave idle float) ──────────────────────────
        const tx = p.ox + p.ax * Math.sin(2 * Math.PI * p.fx * t + p.px)
        const ty = p.oy + p.ay * Math.sin(2 * Math.PI * p.fy * t + p.py)

        // ── Spring toward drift target ────────────────────────────────────
        p.vx += (tx - p.x) * SPRING_K
        p.vy += (ty - p.y) * SPRING_K

        // ── Cursor repulsion ──────────────────────────────────────────────
        const dx = p.x - mx
        const dy = p.y - my
        const d2 = dx * dx + dy * dy
        if (d2 < REPEL_RADIUS * REPEL_RADIUS && d2 > 0) {
          const dist = Math.sqrt(d2)
          const mag  = ((1 - dist / REPEL_RADIUS) * REPEL_FORCE) / dist
          p.vx += dx * mag * 0.35
          p.vy += dy * mag * 0.35
        }

        // ── Friction + integrate ──────────────────────────────────────────
        p.vx *= FRICTION
        p.vy *= FRICTION
        p.x  += p.vx
        p.y  += p.vy

        // ── Clamp to hero bounds ──────────────────────────────────────────
        p.x = Math.max(p.r, Math.min(w - p.r, p.x))
        p.y = Math.max(p.r, Math.min(h - p.r, p.y))

        // ── Draw ──────────────────────────────────────────────────────────
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()
      }

      s.raf = requestAnimationFrame(loop)
    }

    s.raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(s.raf)
      ro.disconnect()
      hero?.removeEventListener('mousemove', onMove)
      hero?.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />
}
