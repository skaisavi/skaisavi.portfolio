'use client'

import { useMagnetic } from '@/hooks/useMagnetic'

export default function ContactButtons() {
  const emailMag  = useMagnetic<HTMLAnchorElement>()
  const cvMag     = useMagnetic<HTMLAnchorElement>()

  return (
    <div className="contact-cta">
      <span className="magnetic-wrapper">
        <a
          ref={emailMag.ref}
          href="mailto:skaiste.savitri@gmail.com"
          className="btn-dark"
          onMouseMove={emailMag.onMouseMove}
          onMouseLeave={emailMag.onMouseLeave}
        >
          Say hello ↗
        </a>
      </span>
      <span className="magnetic-wrapper">
        <a
          ref={cvMag.ref}
          href="/cv.pdf"
          download
          className="btn-ghost-dark"
          onMouseMove={cvMag.onMouseMove}
          onMouseLeave={cvMag.onMouseLeave}
        >
          Download CV ↓
        </a>
      </span>
    </div>
  )
}
