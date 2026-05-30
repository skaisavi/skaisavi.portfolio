'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import type { Project } from '@/data'

export default function FloeurCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <article
        className={`project-card project-card-${project.id}`}
        onClick={() => setOpen(true)}
        style={{ cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && setOpen(true)}
        aria-haspopup="dialog"
      >
        <div
          className="pc-media"
          style={project.image ? undefined : { background: project.gradient }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              className="pc-img"
              unoptimized={project.image.endsWith('.svg')}
            />
          )}
          <span className="pc-tag">{project.tag}</span>
          <span className="floeur-card-hint">
            {project.versions?.[0]?.badge ?? 'V1'} &amp; {project.versions?.[1]?.badge ?? 'V2'} — click to explore
          </span>
        </div>
        <div className="pc-body">
          <div className="pc-header">
            <h2 className="pc-title">{project.title}</h2>
            <span className="pc-arrow" aria-hidden="true">↗</span>
          </div>
          <p className="pc-desc">{project.description}</p>
          <div className="pc-tech">
            {project.tech.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </article>

      {open && (
        <div
          className="floeur-overlay"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} version selector`}
        >
          <div className="floeur-modal" onClick={e => e.stopPropagation()}>
            <button
              className="floeur-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ✕
            </button>
            <p className="floeur-eyebrow">{project.tag} · {project.versions?.length} versions</p>
            <h2 className="floeur-heading">{project.title}</h2>
            <p className="floeur-sub">Two versions of the same project — pick one to explore.</p>
            <div className="floeur-versions">
              {project.versions?.map((v, i) => (
                <a
                  key={v.title}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="floeur-vcard"
                >
                  <div
                    className="floeur-vcard-media"
                    style={v.image ? undefined : { background: v.gradient }}
                  >
                    {v.image && (
                      <Image
                        src={v.image}
                        alt={v.title}
                        fill
                        sizes="320px"
                        className="floeur-vcard-img"
                        unoptimized={v.image.endsWith('.svg')}
                      />
                    )}
                    <span className="floeur-vcard-badge">
                      {v.badge ?? (i === 0 ? 'V1' : 'V2')}
                    </span>
                  </div>
                  <div className="floeur-vcard-body">
                    <div>
                      <p className="floeur-vcard-title">{v.title}</p>
                      <p className="floeur-vcard-desc">{v.description}</p>
                    </div>
                    <span className="floeur-vcard-arrow">↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
