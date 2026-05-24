import Link from 'next/link'
import SiteShell from '@/components/SiteShell'
import SkillCloud from '@/components/SkillCloud'
import Reveal from '@/components/Reveal'
import SplitText from '@/components/SplitText'

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
            <SplitText text="Tools of" as="h1" className="page-title" delay={0.05} />
            <SplitText text="my craft." as="div" className="page-title page-title-italic" delay={0.24} />
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
