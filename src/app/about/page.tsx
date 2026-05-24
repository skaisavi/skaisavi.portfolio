import Link from 'next/link'
import SiteShell from '@/components/SiteShell'
import Reveal from '@/components/Reveal'
import SplitText from '@/components/SplitText'
import Counter from '@/components/Counter'

export const metadata = {
  title: 'About — Skaiste Savitri',
  description: 'Frontend developer & web designer based in the UK. My story, design interests, and frontend journey.',
}

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="about-page">
        <div className="page-header">
          <div className="container">
            <p className="page-eyebrow">About me</p>
            <SplitText text="Hello," as="h1" className="page-title" delay={0.05} />
            <SplitText text="I'm Skaiste." as="div" className="page-title page-title-italic" delay={0.2} />
          </div>
        </div>

        <section className="about-body-section">
          <div className="container">
            <Reveal>
              <p className="about-lead">
                I build things that feel <em>beautiful</em> — in code and in Figma.
              </p>
            </Reveal>
            <div className="about-text-grid">
              <div className="about-text-col">
                <p>
                  I&apos;m a frontend developer and web designer based in the UK, specialising in modern web apps that are both beautiful and functional. I care deeply about the details — from pixel-perfect layouts to silky-smooth interactions.
                </p>
                <p>
                  I came into this field because I genuinely love the intersection of design and technology. There&apos;s nothing quite like taking a vision — a feeling, a colour palette, a mood — and translating it into something real that people can interact with.
                </p>
                <p>
                  I believe great software is invisible. It simply works the way users expect, delights them when they don&apos;t, and never gets in the way.
                </p>
              </div>
              <div className="about-text-col">
                <p>
                  Currently open to exciting full-time roles, freelance projects, and collaborations. I work across the full design-to-code pipeline: Figma concepts, polished UI, and clean production code.
                </p>
                <p>
                  When I&apos;m not coding, I&apos;m usually obsessing over typography, exploring editorial design, or finding new ways to make interfaces feel more human and considered.
                </p>
                <Link href="/contact" className="ghost-link" style={{ marginTop: 8 }}>
                  Say hello →
                </Link>
              </div>
            </div>

            {/* Stats counters */}
            <div className="about-stats-row">
              {[
                { to: 10, suffix: '+', label: 'Projects built' },
                { to: 2,  suffix: '+', label: 'Years experience' },
                { to: 8,  suffix: '+', label: 'Live deployments' },
                { to: 12, suffix: '+', label: 'Technologies' },
              ].map(({ to, suffix, label }) => (
                <div className="about-stat" key={label}>
                  <p className="about-stat-num">
                    <Counter to={to} suffix={suffix} duration={1.6} />
                  </p>
                  <p className="about-stat-label">{label}</p>
                </div>
              ))}
            </div>

            <div className="about-cards-row" style={{ marginTop: 56 }}>
              {[
                { label: 'Location', text: 'UK-based, open to remote & hybrid' },
                { label: 'Availability', text: 'Full-time, freelance & contract' },
                { label: 'Experience', text: '2+ years frontend & UI design' },
              ].map(({ label, text }) => (
                <div className="about-mini-card" key={label}>
                  <p className="about-mini-card-label">{label}</p>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-interests">
          <div className="container">
            <span className="sec-tag light">What I love</span>
            <Reveal delay={0.05}>
              <h2 className="sec-h light" style={{ marginBottom: 8 }}>
                Design interests &amp; <em>obsessions</em>.
              </h2>
            </Reveal>
            <p style={{ color: 'rgba(255,255,255,.40)', fontSize: '1rem', lineHeight: 1.75, maxWidth: 560, marginBottom: 0 }}>
              The things that make me excited to open my laptop every morning.
            </p>
            <div className="interest-tags">
              {[
                'Glassmorphism & depth UI', 'Micro-interactions', 'Editorial typography',
                'Motion design', 'Dark luxury aesthetics', 'Design systems',
                'Accessibility & inclusion', 'Creative coding', 'Interactive 3D',
                'Cinematic web experiences', 'Component architecture', 'UI/UX strategy',
              ].map(tag => (
                <span key={tag} className="interest-tag">{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  )
}
