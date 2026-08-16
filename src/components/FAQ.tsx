import { useState, useEffect, useRef } from 'react'

const FAQS = [
  {
    q: 'What is VLuck Labs?',
    a: 'VLuck Labs is an early-stage technology startup building AI-native software products.',
  },
  {
    q: 'What is LuckForge AI?',
    a: 'LuckForge AI is our flagship product concept: an AI Content Operating System designed to transform long-form video into clips, captions, creative assets, publishing metadata and future performance-driven recommendations.',
  },
  {
    q: 'Is LuckForge AI publicly available?',
    a: 'Not yet. The product is currently in development and early-access preparation.',
  },
  {
    q: 'Are you claiming existing customers or funding?',
    a: 'No. We only state what is currently true and do not claim customers, partnerships, funding or traction that has not been earned.',
  },
]

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        style={{ width:'100%', background:'none', border:'none', cursor:'pointer', padding:'21px 0', display:'flex', justifyContent:'space-between', alignItems:'center', gap:16, textAlign:'left' }}
      >
        <span style={{ fontFamily:"'Outfit',sans-serif", fontSize:17, fontWeight:600, color:'#E8EDF5', lineHeight:1.4 }}>{q}</span>
        <div style={{ width:24, height:24, borderRadius:'50%', flexShrink:0, background: open ? 'rgba(124,92,252,0.2)' : 'rgba(255,255,255,0.06)', border:`1px solid ${open ? 'rgba(124,92,252,0.4)' : 'rgba(255,255,255,0.10)'}`, display:'flex', alignItems:'center', justifyContent:'center', transform: open ? 'rotate(45deg)' : 'none', transition:'transform 0.2s, background 0.2s' }}>
          <svg width={10} height={10} viewBox="0 0 10 10" fill="none">
            <path d="M5 2v6M2 5h6" stroke={open ? '#A78BFA' : '#8A9BB0'} strokeWidth={1.5} strokeLinecap="round"/>
          </svg>
        </div>
      </button>
      {open && (
        <div style={{ paddingBottom: 20 }}>
          <p style={{ fontSize:15, lineHeight:1.75, color:'#8A9BB0' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: '#07090D', padding: '100px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display:'grid', gap:64 }} className="lg:grid-cols-2">
          <div>
            <div style={{ color:'#7C5CFC', fontSize:12, fontFamily:"'JetBrains Mono',monospace", letterSpacing:'0.12em', fontWeight:500, marginBottom:16 }}>FAQ</div>
            <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:700, letterSpacing:'-0.025em', color:'#E8EDF5', lineHeight:1.15 }}>
              Early-stage,<br/>clearly defined.
            </h2>
          </div>
          <div>
            {FAQS.map(f => <Item key={f.q} q={f.q} a={f.a}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}
