import { useEffect, useRef } from 'react'

const CARDS = [
  {
    n: '01',
    title: 'Too many tools',
    desc: 'Creators repeatedly move files, context and decisions between separate apps. Each handoff creates friction, delay and the risk of losing important creative decisions.',
  },
  {
    n: '02',
    title: 'Context gets lost',
    desc: "Most automation sees a clip, not the full story, audience, or creator intent. The result is generic outputs disconnected from what makes a creator's work resonate.",
  },
  {
    n: '03',
    title: 'Performance is disconnected',
    desc: 'Publishing data rarely feeds back into the creative process in a useful way. What works stays locked in analytics dashboards, separate from where content is made.',
  },
]

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: '#07090D', padding: '96px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 64, maxWidth: 680 }}>
          <div style={{ color: '#7C5CFC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.12em', fontWeight: 500, marginBottom: 16 }}>WHY VLUCK LABS EXISTS</div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(30px,4vw,50px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#E8EDF5', marginBottom: 20, lineHeight: 1.15 }}>
            The creator stack is fragmented.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.75, color: '#8A9BB0', maxWidth: 560 }}>
            A single long video can require editing, reframing, captions, thumbnails, metadata,
            publishing, scheduling and analytics across many disconnected tools. We are building
            one intelligent system around the entire content lifecycle.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 20 }} className="md:grid-cols-3">
          {CARDS.map(c => (
            <div key={c.n} className="card-hover" style={{ background: '#141B25', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 16, padding: 32 }}>
              <div style={{ color: '#4A5C72', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", marginBottom: 16 }}>{c.n}</div>
              <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 20, fontWeight: 600, color: '#E8EDF5', marginBottom: 12 }}>{c.title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.72, color: '#8A9BB0' }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
