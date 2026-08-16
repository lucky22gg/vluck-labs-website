import { useEffect, useRef } from 'react'

const PHASES = [
  { n:'PHASE 01', badge:'NOW', title:'MVP Foundation',       desc:'Upload, AI clipping, viral scoring, captions, face tracking, export and creator dashboard.', current:true,  c:'#7C5CFC' },
  { n:'PHASE 02', badge:'',   title:'Creative Automation',  desc:'Story reconstruction, dynamic framing, contextual B-roll, hooks and thumbnail workflows.',   current:false, c:'#36D1DC' },
  { n:'PHASE 03', badge:'',   title:'Distribution Layer',   desc:'SEO assets, scheduling, multi-platform publishing and integrated analytics.',                current:false, c:'#4A8EF8' },
  { n:'PHASE 04', badge:'',   title:'Learning System',      desc:'Continuous creator-specific optimization driven by content performance signals.',            current:false, c:'#A78BFA' },
]

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.05 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="roadmap" style={{ background: '#07090D', padding: '100px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ color: '#7C5CFC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.12em', fontWeight: 500, marginBottom: 16 }}>PRODUCT ROADMAP</div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#E8EDF5', marginBottom: 16, lineHeight: 1.15 }}>
            From MVP to content intelligence platform.
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#8A9BB0', maxWidth: 600 }}>
            We are building in deliberate stages, starting with the core creator workflow
            and expanding toward distribution and performance-driven learning.
          </p>
        </div>

        <div style={{ display: 'grid', gap: 16 }} className="sm:grid-cols-2 lg:grid-cols-4">
          {PHASES.map(p => (
            <div key={p.n} className="card-hover" style={{
              background: p.current ? '#1A2333' : '#141B25',
              border: `1px solid ${p.current ? `${p.c}40` : 'rgba(255,255,255,0.08)'}`,
              borderRadius: 16, padding: 28,
              position: 'relative', overflow: 'hidden',
            }}>
              {p.current && <div style={{ position:'absolute', top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${p.c},transparent)` }}/>}
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:20 }}>
                <span style={{ color:p.c, fontSize:12, fontFamily:"'JetBrains Mono',monospace", fontWeight:600, letterSpacing:'0.07em' }}>{p.n}</span>
                {p.badge && (
                  <div style={{ background:`${p.c}18`, border:`1px solid ${p.c}40`, borderRadius:100, padding:'2px 9px', color:p.c, fontSize:12, fontWeight:600, fontFamily:"'JetBrains Mono',monospace" }}>{p.badge}</div>
                )}
              </div>
              <h3 style={{ fontFamily:"'Outfit',sans-serif", fontSize:19, fontWeight:600, color: p.current ? '#E8EDF5' : '#C4CFDD', marginBottom:10, letterSpacing:'-0.01em' }}>{p.title}</h3>
              <p style={{ fontSize:15, lineHeight:1.72, color:'#8A9BB0' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <p style={{ marginTop:28, color:'#4A5C72', fontSize:13, fontFamily:"'JetBrains Mono',monospace" }}>
          No release dates implied. Stages reflect intended development direction.
        </p>
      </div>
    </section>
  )
}
