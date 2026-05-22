import Link from 'next/link'
import Image from 'next/image'
import SiteShell from '@/components/SiteShell'
import { PROJECTS } from '@/data'

export const metadata = {
  title: 'Work — Skaiste Savitri',
  description: 'Selected projects — frontend development and UI design work.',
}

export default function WorkPage() {
  return (
    <SiteShell>
      <main className="work-page">
        <div className="page-header">
          <div className="container">
            <p className="page-eyebrow">Selected work</p>
            <h1 className="page-title">
              Projects I&apos;m<br />
              <em>proud of.</em>
            </h1>
          </div>
        </div>

        <section className="work-body">
          <div className="container">
            <div className="projects-grid">
              {PROJECTS.map(project => (
                <article
                  key={project.id}
                  className={`project-card project-card-${project.id}${project.wide ? ' wide' : ''}`}
                >
                  <a
                    href={project.comingSoon ? undefined : project.href}
                    className="pc-media"
                    style={project.image ? undefined : { background: project.gradient }}
                    target={project.comingSoon ? undefined : '_blank'}
                    rel={project.comingSoon ? undefined : 'noopener noreferrer'}
                    aria-label={project.comingSoon ? undefined : `View ${project.title}`}
                    tabIndex={project.comingSoon ? -1 : undefined}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                        className="pc-img"
                      />
                    )}
                    <span className="pc-tag">{project.tag}</span>
                  </a>
                  <div className="pc-body">
                    <div className="pc-header">
                      <h2 className="pc-title">{project.title}</h2>
                      {project.comingSoon ? (
                        <span className="pc-soon">Soon</span>
                      ) : (
                        <a
                          href={project.href}
                          className="pc-arrow"
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title}`}
                        >
                          ↗
                        </a>
                      )}
                    </div>
                    <p className="pc-desc">{project.description}</p>
                    <div className="pc-tech">
                      {project.tech.map(t => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div style={{ marginTop: 64, display: 'flex', gap: 12 }}>
              <Link href="/contact" className="ghost-link purple">Start a project →</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
