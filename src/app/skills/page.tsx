import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import SkillCloud from '@/components/SkillCloud'

export const metadata = {
  title: 'Skills — Skaiste Savitri',
  description: 'Frontend technologies, design tools, and principles I work with.',
}

export default function SkillsPage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
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
            <p className="skills-intro">
              Specialising in modern frontend development with a deep love for interaction design,
              smooth animations, and pixel-perfect detail.
            </p>

            <SkillCloud />

            <div style={{ marginTop: 64, display: 'flex', gap: 12 }}>
              <a href="/cv.pdf" download className="ghost-link purple">Download CV ↓</a>
              <Link href="/contact" className="ghost-link">Work together →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
