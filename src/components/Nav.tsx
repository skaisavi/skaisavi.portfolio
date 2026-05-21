'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/data'
import { useMagnetic } from '@/hooks/useMagnetic'

function MagneticCV({ className, download, children, onClick }: {
  className: string
  download?: boolean
  children: React.ReactNode
  onClick?: () => void
}) {
  const { ref, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>()
  return (
    <span className="magnetic-wrapper">
      <a
        ref={ref}
        href="/cv.pdf"
        className={className}
        download={download}
        onClick={onClick}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {children}
      </a>
    </span>
  )
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`site-nav${scrolled ? ' light' : ''}`}>
        <div className="nav-pill">
          <Link className="nav-logo" href="/">Skaiste.</Link>
          <ul className="nav-links">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={pathname === href ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <MagneticCV className="nav-cv" download>Download CV</MagneticCV>
            <button
              className={`nav-menu-btn${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="mm-link" onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <MagneticCV className="mm-cv" download onClick={closeMenu}>Download CV</MagneticCV>
      </div>
    </>
  )
}
