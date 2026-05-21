import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0b0c10',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px 100px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Purple glow — top right */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(168,85,247,0.28) 0%, transparent 65%)',
            display: 'flex',
          }}
        />
        {/* Teal glow — bottom left */}
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 65%)',
            display: 'flex',
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 52,
            display: 'flex',
          }}
        >
          Frontend Developer &amp; Web Designer
        </div>

        {/* Name */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: 44,
          }}
        >
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
            }}
          >
            Skaiste
          </span>
          <span
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: '#a855f7',
              letterSpacing: '-0.04em',
              lineHeight: 0.92,
            }}
          >
            Savitri.
          </span>
        </div>

        {/* Chips */}
        <div style={{ display: 'flex', gap: 12 }}>
          {['Based in UK', 'Open to remote', 'React · Next.js · Figma'].map((chip, i) => (
            <div
              key={i}
              style={{
                padding: '10px 22px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.13)',
                background: 'rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.55)',
                fontSize: 15,
                display: 'flex',
              }}
            >
              {chip}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  )
}
