import Link from 'next/link'
import Loader from '@/components/Loader'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProjectBelt from '@/components/ProjectBelt'
import Footer from '@/components/Footer'
import { HOME_SKILL_PILLS } from '@/data'

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Loader />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />

        {/* About preview */}
        <section className="home-about">
          <div className="container">
            <p className="home-about-lead">
              Building experiences that feel <em>effortless</em> — in code and in Figma.
            </p>
            <p className="home-about-body">
              I&apos;m a frontend developer &amp; web designer based in the UK who genuinely loves what she does.
              I work across the full design-to-code pipeline — Figma concepts, polished UI, and clean production code.
            </p>
            <Link href="/about" className="ghost-link">Read more about me →</Link>
          </div>
        </section>

        {/* Featured work belt */}
        <section className="home-work">
          <div className="container">
            <span className="sec-tag light">Selected work</span>
            <h2 className="sec-h light" style={{ marginBottom: 48 }}>
              Projects I&apos;m <em>proud of</em>.
            </h2>
          </div>
          <ProjectBelt />
          <div className="container">
            <div className="home-work-cta" style={{ marginTop: 48 }}>
              <Link href="/work" className="ghost-link purple">View all projects →</Link>
            </div>
          </div>
        </section>

        {/* Skills preview */}
        <section className="home-skills">
          <div className="container">
            <span className="sec-tag light">Expertise</span>
            <h2 className="sec-h light" style={{ marginBottom: 16 }}>
              Tools of <em>my craft</em>.
            </h2>
            <p className="home-skills-intro">
              Specialising in modern frontend development with a deep love for interaction design, smooth animations, and pixel-perfect detail.
            </p>
            <div className="skill-pills">
              {HOME_SKILL_PILLS.map(pill => (
                <span key={pill} className="skill-pill">{pill}</span>
              ))}
            </div>
            <Link href="/skills" className="ghost-link">Explore full stack →</Link>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="home-cta">
          <div className="home-cta-watermark" aria-hidden="true">TALK</div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <p className="page-eyebrow">Let&apos;s work together</p>
            <h2 className="home-cta-h">
              Have a project<br />
              <em>in mind?</em>
            </h2>
            <div className="home-cta-row">
              <p className="home-cta-sub">
                Open to full-time roles, freelance projects,<br />
                and exciting collaborations.
              </p>
              <Link href="/contact" className="btn-dark home-cta-btn">Start a conversation →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
