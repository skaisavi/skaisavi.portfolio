export interface Project {
  id: string
  title: string
  tag: string
  gradient: string
  image?: string
  href?: string
  comingSoon?: boolean
  wide?: boolean
  description: string
  tech: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  period: string
  badge: 'cur' | 'edu'
  badgeLabel: string
  description: string
  bullets: string[]
  tags: string[]
}

export interface SkillCategory {
  label: string
  items: string[]
  accent?: boolean
  wide?: boolean
}

export const TYPEWRITER_PHRASES = [
  'beautiful interfaces.',
  'seamless experiences.',
  'modern web apps.',
  'things people love.',
]

export const NAV_LINKS = [
  { href: '/about',      label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/work',       label: 'Work' },
  { href: '/skills',     label: 'Skills' },
  { href: '/contact',    label: 'Contact' },
]

export const PROJECTS: Project[] = [
  {
    id: 'autodrive',
    title: 'AutoDrive',
    tag: 'Marketplace',
    gradient: 'linear-gradient(135deg,#0d1117,#1a1f3c,#0f2167)',
    image: '/projects/autodrive.png',
    href: 'https://autodrive-delta.vercel.app',
    wide: true,
    description:
      'Full UK car marketplace — real-time search, HPI checks, price history, part-exchange calculator. Designed and shipped solo from concept to live product.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
  },
  {
    id: 'nuffield-health-gym',
    title: 'Nuffield Health Gym',
    tag: 'Wellness',
    gradient: 'linear-gradient(135deg,#062a22,#0f6b4f,#7ddf9b)',
    image: '/projects/nuffield-health-gym.svg',
    href: 'https://nuffield-health-gym.vercel.app/',
    description:
      'Responsive gym and health landing page with polished service sections, strong brand-led visuals, and a clean conversion-focused flow for memberships and wellbeing.',
    tech: ['React', 'Responsive UI', 'CSS3'],
  },
  {
    id: 'musevault',
    title: 'MuseVault',
    tag: 'Case Study',
    gradient: 'linear-gradient(135deg,#130f24,#44215f,#d45aa8)',
    href: 'https://www.figma.com/design/v7MqA8mG9hY66GsrZ9ACLr/MuseVault-%E2%80%94-Portfolio-Case-Study?node-id=0-1&t=ZAF53OzsOeHGHtac-1',
    wide: true,
    description:
      'Portfolio case study for a creative digital vault concept — product thinking, visual direction, interface design, and presentation crafted in Figma.',
    tech: ['Figma', 'UI Design', 'Case Study'],
  },
  {
    id: 'motion-atelier',
    title: 'Motion Atelier',
    tag: 'Motion UI',
    gradient: 'linear-gradient(135deg,#17110c,#4b3728,#d6b48c)',
    href: 'https://github.com/skaisavi/motion-atelier',
    description:
      'Luxury editorial frontend experiment exploring cinematic motion, refined typography, abstract interface studies, and scroll-led storytelling.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 'prime-steak',
    title: 'Prime Steak & Grill',
    tag: 'Restaurant',
    gradient: 'linear-gradient(135deg,#1a0800,#3d1200,#7c2d00)',
    image: '/projects/prime-steak.png',
    href: 'https://prime-react-green.vercel.app',
    description:
      'Slick restaurant website — visual menu, atmosphere showcase, smooth experience. Fast React SPA with zero flicker.',
    tech: ['React', 'CSS3', 'JavaScript'],
  },
  {
    id: 'debeselis',
    title: 'Debeselis',
    tag: 'Banking App',
    gradient: 'linear-gradient(135deg,#0a1628,#1a3a6b,#7ba7e8)',
    image: '/projects/debeselis.png',
    href: 'https://debeselis-app.vercel.app/login',
    description:
      'Cloud banking — animated login, OTP flow, balance dashboard with transaction history. Framer Motion throughout for buttery-smooth micro-interactions.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    tag: 'UI Design',
    gradient: 'linear-gradient(135deg,#0d1b2a,#1b2e4b,#1e3a6e)',
    image: '/projects/saas-dashboard.png',
    href: 'https://remix-read-74222076.figma.site/',
    wide: true,
    description:
      'Clean, minimal SaaS dashboard in Figma — analytics overview, sidebar nav, data cards, and chart components. Full design system included.',
    tech: ['Figma', 'UI Design', 'Data Viz'],
  },
  {
    id: 'lumiere',
    title: 'Lumière',
    tag: 'Branding',
    gradient: 'linear-gradient(135deg,#1a0e2e,#3b1f6b,#7c4dbe)',
    image: '/projects/lumiere.png',
    href: 'https://twirl-clever-74917925.figma.site/',
    description:
      'Refined UI design centred on atmosphere and light — warm gradients, considered typography, and an editorial brand identity.',
    tech: ['Figma', 'UI Design', 'Branding'],
  },
  {
    id: 'figma-next',
    title: 'Figma Project',
    tag: 'Coming Soon',
    gradient: 'linear-gradient(135deg,#0f1a12,#1a3020,#2d5a3d)',
    comingSoon: true,
    description: 'New Figma design dropping soon — stay tuned for something fresh.',
    tech: ['Figma', 'UI Design'],
  },
  {
    id: 'dev-next',
    title: 'Dev Project',
    tag: 'Coming Soon',
    gradient: 'linear-gradient(135deg,#1a0f1a,#3a1a3a,#6b2d6b)',
    comingSoon: true,
    description: 'Building something new in React — details dropping very soon.',
    tech: ['React', 'TypeScript'],
  },
  {
    id: 'motion-next',
    title: 'Motion Project',
    tag: 'Coming Soon',
    gradient: 'linear-gradient(135deg,#0d1117,#1c1a2e,#2a1f4e)',
    comingSoon: true,
    description: 'An animation-heavy UI experiment — Framer Motion meets editorial layout.',
    tech: ['Framer Motion', 'React'],
  },
  {
    id: 'brand-next',
    title: 'Brand Identity',
    tag: 'Coming Soon',
    gradient: 'linear-gradient(135deg,#1a1008,#2e1f0a,#4a3010)',
    comingSoon: true,
    description: 'Full brand identity system — logo, type, colour, and component library.',
    tech: ['Figma', 'Design Systems'],
  },
  {
    id: 'fullstack-next',
    title: 'Full-Stack App',
    tag: 'Coming Soon',
    gradient: 'linear-gradient(135deg,#051018,#0a2030,#0f3550)',
    comingSoon: true,
    description: 'A full-stack web application with auth, database, and real-time features.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
  },
]

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Frontend Developer',
    company: 'Codewave Limited · Full-time',
    period: '2024 — Present',
    badge: 'cur',
    badgeLabel: 'Current',
    description:
      'Building and maintaining client-facing websites across a range of industries — from hospitality to professional services. Responsible for the full frontend lifecycle: scoping, design, build, and delivery.',
    bullets: [
      'Led UI redesigns focused on smoother interactions and visual polish, turning existing sites into modern, responsive experiences clients were genuinely proud of.',
      'Collaborated directly with clients to translate vague briefs into clear, beautiful interfaces.',
      'Improved performance and accessibility across multiple live products.',
    ],
    tags: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Figma'],
  },
  {
    role: 'BTEC Level 3 Extended Diploma in IT',
    company: 'West Herts College · Watford · DDM',
    period: '2022 — 2024',
    badge: 'edu',
    badgeLabel: 'Education',
    description:
      'Graduated with Distinction, Distinction, Merit — the highest achievable grade combination. The course combined software design, web development, networking, and databases, with a strong emphasis on real-world project-based learning.',
    bullets: [
      'Shipped multiple end-to-end web projects as coursework, including a full-stack application.',
      'Developed a strong foundation in software design principles and database fundamentals.',
      'Received distinctions in every major project submission.',
    ],
    tags: ['Web Dev', 'Software Design', 'Databases', 'Networking'],
  },
]

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: 'Frontend Code',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue', 'TypeScript', 'Next.js'],
  },
  {
    label: 'Styling & Animation',
    items: ['Tailwind CSS', 'SCSS', 'Framer Motion', 'CSS Animations', 'Responsive Design'],
  },
  {
    label: 'Design & Tools',
    items: ['Figma', 'UI Design', 'Prototyping', 'Design Systems', 'Git', 'VS Code', 'Vite'],
  },
  {
    label: 'Backend & Data',
    items: ['Node.js', 'Express', 'REST APIs', 'PostgreSQL'],
  },
  {
    label: 'Principles',
    items: ['Accessibility', 'Web Performance', 'SEO', 'Mobile-first', 'UI/UX'],
  },
  {
    label: 'Right now ✶',
    wide: true,
    accent: true,
    items: [
      'Next.js & React Server Components',
      'Advanced TypeScript',
      'Three.js / WebGL',
      'Design systems at scale',
    ],
  },
]

export const HOME_SKILL_PILLS = [
  'React', 'TypeScript', 'Next.js', 'Tailwind', 'Figma',
  'Node.js', 'Framer Motion', 'CSS Animations',
]

export const MARQUEE_ITEMS = [
  'React', 'TypeScript', 'Next.js', 'Tailwind',
  'Figma', 'Node.js', 'Creative Developer', 'UI Design',
]
