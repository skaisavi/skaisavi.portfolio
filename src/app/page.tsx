import Link from 'next/link'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import ProjectBelt from '@/components/ProjectBelt'
import SiteShell from '@/components/SiteShell'
import ScrollAtmosphere from '@/components/ScrollAtmosphere'
import SectionNav from '@/components/SectionNav'
import ScrollStorySection from '@/components/ScrollStorySection'
import SkillPillsInteractive from '@/components/SkillPillsInteractive'
import LiveStackConsole from '@/components/LiveStackConsole'
import DesignToCodeSection from '@/components/DesignToCodeSection'

export default function Home() {
  return (
    <SiteShell loader>
      <ScrollAtmosphere />
      <SectionNav />
      <main>
        <Hero />
        <Marquee />

        {/* About */}
        <DesignToCodeSection />

        {/* Work */}
        <ScrollStorySection id="home-work" chapter="02" label="Work" className="home-work" tone="right">
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
        </ScrollStorySection>

        {/* Skills */}
        <ScrollStorySection
          id="home-skills" chapter="03" label="Skills" className="home-skills" tone="left"
          floatingSlot={<div className="home-skills-console"><LiveStackConsole /></div>}
        >
          <div className="container">
            <span className="sec-tag light">Expertise</span>
            <h2 className="sec-h light" style={{ marginBottom: 16 }}>
              Tools of <em>my craft</em>.
            </h2>
            <p className="home-skills-intro">
              Specialising in modern frontend development with a deep love for interaction design, smooth animations, and pixel-perfect detail.
            </p>
            <SkillPillsInteractive />
            <Link href="/skills" className="ghost-link">Explore frontend →</Link>
          </div>
        </ScrollStorySection>

        {/* CTA */}
        <ScrollStorySection id="home-cta" chapter="04" label="Contact" className="home-cta" tone="rise">
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
        </ScrollStorySection>
      </main>
    </SiteShell>
  )
}
