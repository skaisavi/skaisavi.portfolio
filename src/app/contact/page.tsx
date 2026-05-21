import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact — Skaiste Savitri',
  description: 'Get in touch for frontend development projects, freelance work, or collaborations.',
}

export default function ContactPage() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Nav />
      <main className="contact-page">
        <div className="contact-watermark" aria-hidden="true">HELLO</div>

        <div className="contact-body">
          <div className="container">
            <div className="contact-inner">
              <p className="page-eyebrow">Get in touch</p>
              <h1 className="contact-title">
                Let&apos;s build<br />
                <em>something great.</em>
              </h1>
              <p className="contact-desc">
                Open to full-time roles, freelance projects, and exciting collaborations.
                If you have an idea or a project in mind — I&apos;d love to hear about it.
              </p>

              <ContactForm />

              <div className="soc-row" style={{ marginTop: '52px' }}>
                <a
                  href="https://github.com/skaisavi"
                  className="soc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/skaiste-savitri"
                  className="soc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a
                  href="https://www.figma.com/@skaisavi"
                  className="soc"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Figma"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 9.98c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V9.98H8.148zm-3.502 12c0 2.476 2.014 4.49 4.49 4.49s4.49-2.014 4.49-4.49-2.014-4.49-4.49-4.49-4.49 2.014-4.49 4.49zm1.471 0c0-1.665 1.355-3.019 3.019-3.019s3.019 1.355 3.019 3.019-1.355 3.019-3.019 3.019-3.019-1.354-3.019-3.019z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
