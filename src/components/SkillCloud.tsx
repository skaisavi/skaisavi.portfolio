'use client'

import { motion } from 'framer-motion'
import { SKILL_CATEGORIES } from '@/data'

// Flatten items from all non-accent categories, keeping category label for tooltips
const pills = SKILL_CATEGORIES
  .filter(cat => !cat.accent)
  .flatMap(cat => cat.items.map(item => ({ item, category: cat.label })))

// The "Right now" accent category rendered separately below
const nowCat = SKILL_CATEGORIES.find(cat => cat.accent)

export default function SkillCloud() {
  return (
    <>
      <div className="skill-cloud">
        {pills.map(({ item, category }, i) => {
          const duration = 4 + (i % 5)       // 4 – 8 s
          const delay    = (i * 0.18) % 3     // stagger, capped so early pills don't wait too long

          return (
            <motion.div
              key={item}
              className="cloud-pill"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
              }}
              whileHover={{
                scale: 1.12,
                boxShadow: '0 0 20px rgba(168,85,247,0.45)',
                transition: { duration: 0.2 },
              }}
            >
              <span className="cloud-pill-tooltip">{category}</span>
              {item}
            </motion.div>
          )
        })}
      </div>

      {nowCat && (
        <div className="skill-group wide accent" style={{ marginTop: 40 }}>
          <p className="skill-group-label">{nowCat.label}</p>
          <div className="skill-pills-dark">
            {nowCat.items.map(item => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
