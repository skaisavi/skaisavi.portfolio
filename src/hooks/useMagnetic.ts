import { useRef } from 'react'
import type { MouseEvent } from 'react'

export function useMagnetic<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null)

  function onMouseMove(e: MouseEvent<T>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.30
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.30
    el.style.transition = 'transform 0.15s ease'
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  function onMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)'
    el.style.transform = 'translate(0, 0)'
    setTimeout(() => { if (ref.current) ref.current.style.transition = '' }, 500)
  }

  return { ref, onMouseMove, onMouseLeave }
}
