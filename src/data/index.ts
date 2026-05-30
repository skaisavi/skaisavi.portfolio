export interface ProjectVersion {
  title: string
  href: string
  image?: string
  gradient: string
  description: string
  badge?: string
}

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
  versions?: ProjectVersion[]
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
    image: '/projects/autodrive.webp',
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
    image: '/projects/musevault.svg',
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
    image: '/projects/motion-atelier.webp',
    href: 'https://motion-atelier.vercel.app/',
    wide: true,
    description:
      'Luxury editorial frontend experiment exploring cinematic motion, refined typography, abstract interface studies, and scroll-led storytelling.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 'aeris-tower',
    title: 'AERIS Tower',
    tag: 'Architecture',
    gradient: 'linear-gradient(135deg,#06090e,#0f1c2e,#1a3252)',
    wide: true,
    description:
      'Luxury office tower marketing site — interactive architectural showcase with parallax reveals, smooth scroll storytelling, and a leasing portal. Refined minimalism shipped from concept to live product.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion', 'Lenis'],
    versions: [
      {
        title: 'Live Site',
        badge: 'Live',
        href: 'https://aeris-tower.vercel.app/',
        gradient: 'linear-gradient(135deg,#06090e,#0f1c2e,#1a3252)',
        description: 'The full marketing site — parallax reveals, office selector, and leasing portal.',
      },
      {
        title: 'Figma Prototype',
        badge: 'Figma',
        href: 'https://www.figma.com/proto/hwVbfjp7ZrC1nHjZAf1ww7/AERIS-Tower?node-id=3-246&p=f&t=Faf8PeUPUzXWGfsc-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        gradient: 'linear-gradient(135deg,#07080d,#0e1626,#1d2d4a)',
        description: 'The original design prototype — wireframes, interactions, and visual direction behind the build.',
      },
    ],
  },
  {
    id: 'noirnest',
    title: 'NoirNest',
    tag: 'Interior Design',
    gradient: 'linear-gradient(135deg,#0d0906,#1f1009,#3e1e0c)',
    href: 'https://noirnest-orpin.vercel.app/',
    description:
      'Dark luxury interior design studio — atmosphere-led spaces crafted for modern living. Cinematic editorial aesthetic, moody warm palette, and a refined conversion flow.',
    tech: ['Next.js', 'React', 'CSS3'],
  },
  {
    id: 'prime-steak',
    title: 'Prime Steak & Grill',
    tag: 'Restaurant',
    gradient: 'linear-gradient(135deg,#1a0800,#3d1200,#7c2d00)',
    image: '/projects/prime-steak.webp',
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
    image: '/projects/debeselis.webp',
    href: 'https://debeselis-app.vercel.app/login',
    description:
      'Cloud banking — animated login, OTP flow, balance dashboard with transaction history. Framer Motion throughout for buttery-smooth micro-interactions.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Tailwind'],
  },
  {
    id: 'design-next',
    title: 'Design Project',
    tag: 'Coming Soon',
    gradient: 'linear-gradient(135deg,#0d1b2a,#1b2e4b,#1e3a6e)',
    comingSoon: true,
    description: 'A new UI design project — details dropping soon.',
    tech: ['Figma', 'UI Design'],
  },
  {
    id: 'floeur',
    title: 'FloEUR',
    tag: 'Branding',
    gradient: 'linear-gradient(135deg,#16100c,#5a3520,#e7b776)',
    image: '/projects/floeur.svg',
    description:
      'FloEUR branding and floral storefront concept — available in two iterations. Click to explore V1 and V2.',
    tech: ['Figma', 'Branding', 'Prototype'],
    versions: [
      {
        title: 'FloEUR V1',
        href: 'https://www.figma.com/proto/sSqu9ONpWdsPVsSMPDsyBe/FloEUR?node-id=11-1455&p=f&t=uPCzBQHJ194bRGHm-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        image: '/projects/floeur.svg',
        gradient: 'linear-gradient(135deg,#16100c,#5a3520,#e7b776)',
        description: 'The original branding and floral storefront concept.',
      },
      {
        title: 'FloEUR V2',
        href: 'https://www.figma.com/proto/MaQdHzpiCWLL4KXU9FD8RW/FloEUR-V2?node-id=46-2&p=f&t=MEdgGRybnCMJbqZM-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
        image: '/projects/floeur-v2.svg',
        gradient: 'linear-gradient(135deg,#102e24,#d9c7ad,#f6f1e8)',
        description: 'Refined prototype with a more polished floral shopping flow and softer brand details.',
      },
    ],
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
    id: 'nova',
    title: 'NOVA',
    tag: 'SaaS App',
    gradient: 'linear-gradient(135deg,#060f10,#0d2828,#0a4a4a)',
    image: '/projects/nova.svg',
    href: 'https://nova-savi.vercel.app/',
    description:
      'Premium full-stack project command centre — workspace pulse, task tracking, and client-ready dashboards built for freelancers and creative teams.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
  },
  {
    id: 'auramarket',
    title: 'AuraMarket',
    tag: 'E-Commerce',
    gradient: 'linear-gradient(135deg,#141a12,#2a3826,#3d5c38)',
    image: '/projects/auramarket.webp',
    href: 'https://auramarket-chi.vercel.app/',
    description:
      'Premium botanical wellness store — product catalogue, curated collections, and a campaign system designed for a quieter, more intentional way of shopping.',
    tech: ['React', 'TypeScript', 'CSS3'],
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
