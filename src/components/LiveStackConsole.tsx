'use client'
import { motion } from 'framer-motion'

const LINES = [
  { key: 'currently_building', value: 'portfolio_v2',                   accent: 'cyan'  },
  { key: 'stack',              value: 'Next.js + TypeScript',            accent: null    },
  { key: 'focus',              value: 'UI systems, animation, a11y',    accent: null    },
  { key: 'design',             value: 'Figma + Tailwind',               accent: null    },
  { key: 'deploy',             value: 'Vercel',                         accent: null    },
  { key: 'status',             value: 'always improving',               accent: 'green' },
]

export default function LiveStackConsole() {
  return (
    <motion.div
      className="lsc"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="lsc-head">
        <div className="lsc-traffic">
          <span className="lsc-dot lsc-dot-r" />
          <span className="lsc-dot lsc-dot-y" />
          <span className="lsc-dot lsc-dot-g" />
        </div>
        <span className="lsc-title">stack.config</span>
        <span className="lsc-live">
          <span className="lsc-live-pulse" />
          live
        </span>
      </div>

      <div className="lsc-body">
        {LINES.map((line, i) => (
          <motion.div
            key={line.key}
            className="lsc-line"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 + i * 0.11, duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="lsc-key">{line.key}</span>
            <span className="lsc-sep">:</span>
            <span className={`lsc-val${line.accent ? ` lsc-val-${line.accent}` : ''}`}>
              {line.value}
            </span>
          </motion.div>
        ))}
        <motion.div
          className="lsc-cursor-row"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 + LINES.length * 0.11 + 0.18 }}
        >
          <span className="lsc-prompt">›</span>
          <span className="lsc-cursor" />
        </motion.div>
      </div>
    </motion.div>
  )
}
