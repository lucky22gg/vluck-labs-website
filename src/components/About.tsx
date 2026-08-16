import { useEffect, useRef } from 'react'

const PRINCIPLES = [
  { n:'01', title:'Automation with context',    desc:'AI should understand the whole workflow, not just automate isolated clicks.', c:'#7C5CFC' },
  { n:'02', title:'Quality over novelty',       desc:'Useful outputs matter more than flashy demos.', c:'#36D1DC' },
  { n:'03', title:'Compounding intelligence',  desc:'Every workflow should get smarter as real performance data accumulates.', c:'#4A8EF8' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" style={{ background: '#0B0F15', padding: '100px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 64, alignItems: 'start' }} className="lg:grid-cols-2">

          <div>
            <div style={{ color:'#7C5CFC', fontSize:12, fontFamily:"'JetBrains Mono',monospace", letterSpacing:'0.12em', fontWeight:500, marginBottom:16 }}>ABOUT VLUCK LABS</div>
            <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'clamp(28px,4vw,48px)', fontWeight:700, letterSpacing:'-0.025em', color:'#E8EDF5', marginBottom:24, lineHeight:1.15 }}>
              AI-native products for ambitious workflows.
            </h2>
            <p style={{ fontSize:17, lineHeight:1.75, color:'#8A9BB0', marginBottom:16 }}>
              VLuck Labs is an early-stage technology startup focused on building practical
              AI systems that remove repetitive work and create compounding intelligence.
            </p>
            <p style={{ fontSize:17, lineHeight:1.75, color:'#8A9BB0' }}>
              Our first product is LuckForge AI, built for creators and media teams.
            </p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:16 }}>
            {PRINCIPLES.map(p => (
              <div key={p.n} style={{ display:'flex', gap:18, background:'#141B25', border:'1px solid rgba(255,255,255,0.07)', borderRadius:14, padding:24 }}>
                <div style={{ width:36, height:36, borderRadius:8, background:`${p.c}14`, border:`1px solid ${p.c}30`, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, color:p.c, fontSize:12, fontFamily:"'JetBrains Mono',monospace", fontWeight:600 }}>{p.n}</div>
                <div>
                  <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:17, fontWeight:600, color:'#E8EDF5', marginBottom:6 }}>{p.title}</h3>
                  <p style={{ fontSize:15, lineHeight:1.65, color:'#8A9BB0' }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
