import Link from 'next/link'
import SiteShell from '@/components/SiteShell'
import Reveal from '@/components/Reveal'
import SplitText from '@/components/SplitText'
import { EXPERIENCE } from '@/data'

export const metadata = {
  title: 'Experience — Skaiste Savitri',
  description: 'My work history, responsibilities, and achievements in frontend development.',
}

export default function ExperiencePage() {
  return (
    <SiteShell>
      <main className="experience-page">
        <div className="page-header">
          <div className="container">
            <p className="page-eyebrow">Career</p>
            <SplitText text="Where I've" as="h1" className="page-title" delay={0.05} />
            <SplitText text="been." as="div" className="page-title page-title-italic" delay={0.28} />
          </div>
        </div>

        <section className="experience-body">
          <div className="container">
            <div className="exp-list">
              {EXPERIENCE.map((item, i) => (
                <div className="exp-card" key={i}>
                  <div className="exp-hdr">
                    <div>
                      <Reveal delay={i * 0.08}>
                        <h2 className="exp-role">{item.role}</h2>
                      </Reveal>
                      <p className="exp-co">{item.company}</p>
                    </div>
                    <div className="exp-right">
                      <span className="exp-date">{item.period}</span>
                      <span className={`exp-badge ${item.badge}`}>{item.badgeLabel}</span>
                    </div>
                  </div>
                  <p className="exp-desc">{item.description}</p>
                  <ul className="exp-bullets">
                    {item.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                  <div className="exp-tags">
                    {item.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 64, display: 'flex', gap: 12 }}>
              <a href="/cv.pdf" download className="ghost-link purple">Download CV ↓</a>
              <Link href="/contact" className="ghost-link">Get in touch →</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
