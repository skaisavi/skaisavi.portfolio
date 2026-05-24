'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SKILLS = [
  { name: 'React',          category: 'frontend', color: '#61DAFB', desc: 'Component-driven UI' },
  { name: 'TypeScript',     category: 'frontend', color: '#3178C6', desc: 'Type-safe JavaScript' },
  { name: 'Next.js',        category: 'frontend', color: '#ffffff', desc: 'Full-stack React framework' },
  { name: 'Tailwind',       category: 'frontend', color: '#38BDF8', desc: 'Utility-first CSS' },
  { name: 'Framer Motion',  category: 'frontend', color: '#A855F7', desc: 'Production-ready animation' },
  { name: 'CSS Animations', category: 'frontend', color: '#EC4899', desc: 'Keyframes & transitions' },
  { name: 'Figma',          category: 'design',   color: '#F24E1E', desc: 'UI design & prototyping' },
  { name: 'UI Design',      category: 'design',   color: '#A259FF', desc: 'Layouts, systems & polish' },
  { name: 'Node.js',        category: 'backend',  color: '#68A063', desc: 'Server-side JavaScript' },
  { name: 'REST APIs',      category: 'backend',  color: '#14B8A6', desc: 'API design & integration' },
  { name: 'Git',            category: 'tools',    color: '#F05032', desc: 'Version control' },
  { name: 'Vercel',         category: 'tools',    color: '#ffffff', desc: 'Deploy & edge functions' },
]

const TABS = [
  { key: 'all',      label: 'All'      },
  { key: 'frontend', label: 'Frontend' },
  { key: 'design',   label: 'Design'   },
  { key: 'backend',  label: 'Backend'  },
  { key: 'tools',    label: 'Tools'    },
]

export default function SkillPillsInteractive() {
  const [active, setActive] = useState('all')
  const [hovered, setHovered] = useState<string | null>(null)

  const filtered = active === 'all' ? SKILLS : SKILLS.filter(s => s.category === active)

  return (
    <div className="skill-interactive">
      {/* Filter tabs */}
      <div className="skill-tabs" role="tablist">
        {TABS.map(tab => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={active === tab.key}
            className={`skill-tab${active === tab.key ? ' active' : ''}`}
            onClick={() => setActive(tab.key)}
          >
            {active === tab.key && (
              <motion.span className="skill-tab-indicator" layoutId="tab-indicator" />
            )}
            <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Pills */}
      <div className="skill-pills-grid">
        <AnimatePresence mode="sync">
          {filtered.map(skill => (
            <motion.span
              key={skill.name}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className={`skill-pill-interactive${hovered === skill.name ? ' hovered' : ''}`}
              style={{ '--pill-color': skill.color } as React.CSSProperties}
              onMouseEnter={() => setHovered(skill.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className="skill-pill-dot" />
              {skill.name}
              {hovered === skill.name && (
                <span className="skill-pill-desc">{skill.desc}</span>
              )}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
