import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import { EXPERIENCE } from '@/data'

export const metadata = {
  title: 'Experience — Skaiste Savitri',
  description: 'My work history, responsibilities, and achievements in frontend development.',
}

export default function ExperiencePage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main className="experience-page">
        <div className="page-header">
          <div className="container">
            <p className="page-eyebrow">Career</p>
            <h1 className="page-title">
              Where I&apos;ve<br />
              <em>been.</em>
            </h1>
          </div>
        </div>

        <section className="experience-body">
          <div className="container">
            <div className="exp-list">
              {EXPERIENCE.map((item, i) => (
                <div className="exp-card" key={i}>
                  <div className="exp-hdr">
                    <div>
                      <h2 className="exp-role">{item.role}</h2>
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
      <Footer />
    </>
  )
}
