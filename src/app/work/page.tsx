import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import { PROJECTS } from '@/data'

export const metadata = {
  title: 'Work — Skaiste Savitri',
  description: 'Selected projects — frontend development and UI design work.',
}

export default function WorkPage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
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
                <div
                  key={project.id}
                  className={`project-card${project.wide ? ' wide' : ''}`}
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
                      />
                    )}
                    <span className="pc-tag">{project.tag}</span>
                  </div>
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
                </div>
              ))}
            </div>

            <div style={{ marginTop: 64, display: 'flex', gap: 12 }}>
              <Link href="/contact" className="ghost-link purple">Start a project →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
