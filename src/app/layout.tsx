import type { Metadata } from 'next'
import SmoothScroll from '@/components/SmoothScroll'
import './fonts.css'
import './globals.css'

const siteUrl = new URL('https://skaisavi.com')

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: 'Skaiste Savitri — Frontend Developer & Web Designer',
  description:
    'Frontend developer & web designer based in the UK crafting beautiful, functional digital experiences. Open to full-time, freelance & contract roles.',
  openGraph: {
    type: 'website',
    title: 'Skaiste Savitri — Frontend Developer & Web Designer',
    description: 'Frontend developer & web designer based in the UK.',
    url: 'https://skaisavi.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skaiste Savitri — Frontend Developer & Web Designer',
    description: 'Frontend developer & web designer based in the UK.',
  },
  alternates: { canonical: 'https://skaisavi.com' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
