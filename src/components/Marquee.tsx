import { MARQUEE_ITEMS } from '@/data'

export default function Marquee() {
  const text = MARQUEE_ITEMS.join(' ✦ ') + ' ✦'
  return (
    <div className="mq-band" aria-hidden="true">
      <div className="mq-i">
        <span dangerouslySetInnerHTML={{ __html: text.replace(/✦/g, '<em>✦</em>') }} />
        <span dangerouslySetInnerHTML={{ __html: text.replace(/✦/g, '<em>✦</em>') }} />
        <span dangerouslySetInnerHTML={{ __html: text.replace(/✦/g, '<em>✦</em>') }} />
      </div>
    </div>
  )
}
