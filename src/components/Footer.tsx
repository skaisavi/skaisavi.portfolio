'use client'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© 2026 Skaiste Savitri — designed &amp; built with care</p>
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
