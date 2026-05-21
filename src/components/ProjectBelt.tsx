'use client'

import Image from 'next/image'
import { PROJECTS } from '@/data'

const BELT = [...PROJECTS, ...PROJECTS]

export default function ProjectBelt() {
  return (
    <div className="belt-wrap" aria-label="Project showcase">
      <div className="belt-fade belt-fade-l" aria-hidden="true" />
      <div className="belt-fade belt-fade-r" aria-hidden="true" />
      <div className="belt-track">
        <div className="belt-inner">
          {BELT.map((project, i) => (
            <div
              key={`${project.id}-${i}`}
              className="belt-card"
            >
              <div
                className="belt-card-media"
                style={project.image ? undefined : { background: project.gradient }}
              >
                {project.image && (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="320px"
                    className="belt-card-img"
                  />
                )}
                <span className="belt-card-tag">{project.tag}</span>
              </div>
              <div className="belt-card-body">
                <div className="belt-card-hd">
                  <h3 className="belt-card-title">{project.title}</h3>
                  {project.comingSoon ? (
                    <span className="belt-card-soon">Soon</span>
                  ) : (
                    <a
                      href={project.href}
                      className="belt-card-arrow"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title}`}
                    >
                      ↗
                    </a>
                  )}
                </div>
                <p className="belt-card-desc">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
