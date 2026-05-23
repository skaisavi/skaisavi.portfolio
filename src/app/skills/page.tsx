import Link from 'next/link'
import SiteShell from '@/components/SiteShell'
import SkillCloud from '@/components/SkillCloud'
import Reveal from '@/components/Reveal'

export const metadata = {
  title: 'Skills — Skaiste Savitri',
  description: 'Frontend technologies, design tools, and principles I work with.',
}

export default function SkillsPage() {
  return (
    <SiteShell>
      <main className="skills-page">
        <div className="page-header">
          <div className="container">
            <p className="page-eyebrow">Expertise</p>
            <h1 className="page-title">
              Tools of<br />
              <em>my craft.</em>
            </h1>
          </div>
        </div>

        <section className="skills-body">
          <div className="container">
            <Reveal>
              <p className="skills-intro">
                Specialising in modern frontend development with a deep love for interaction design,
                smooth animations, and pixel-perfect detail.
              </p>
            </Reveal>

            <SkillCloud />

            <div style={{ marginTop: 64, display: 'flex', gap: 12 }}>
              <a href="/cv.pdf" download className="ghost-link purple">Download CV ↓</a>
              <Link href="/contact" className="ghost-link">Work together →</Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
