import { useState, useEffect, useRef } from 'react'

// Pre-computed waveform heights — deterministic
const WV = Array.from({ length: 60 }, (_, i) =>
  Math.max(4, Math.min(28, Math.round(
    Math.abs(Math.sin(i * 0.31) * 10 + Math.sin(i * 0.88) * 7 + Math.sin(i * 2.1) * 3) + 7
  )))
)
const HEAD = 44

// ─── Desktop concept UI ───────────────────────────────────────────

function ConceptUI({ tiltX, tiltY }: { tiltX: number; tiltY: number }) {
  return (
    <div style={{
      transform: `perspective(1800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
      transition: 'transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)',
      willChange: 'transform',
    }}>
      <div style={{
        background: '#0C1219',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 40px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(124,92,252,0.10), inset 0 1px 0 rgba(255,255,255,0.05)',
        fontFamily: "'Inter',sans-serif",
      }}>

        {/* ── Window chrome ── */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 16px', background: '#141B25', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', gap: 5 }}>
              {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 9, height: 9, borderRadius: '50%', background: c }}/>)}
            </div>
            <span style={{ color: '#4A5C72', fontSize: 12, fontFamily: "'JetBrains Mono',monospace" }}>LuckForge AI — Content Intelligence</span>
          </div>
          <div style={{ background: 'rgba(124,92,252,0.14)', border: '1px solid rgba(124,92,252,0.36)', borderRadius: 4, padding: '2px 9px', color: '#A78BFA', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace" }}>
            CONCEPT UI
          </div>
        </div>

        {/* ── Three-panel body ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 180px' }}>

          {/* Left sidebar */}
          <div style={{ borderRight: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}>
            {/* Source video */}
            <div style={{ padding: '14px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ color: '#5A6A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 9 }}>SOURCE VIDEO</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 7, marginBottom: 8 }}>
                <div style={{ width: 22, height: 16, background: 'rgba(124,92,252,0.18)', border: '1px solid rgba(124,92,252,0.35)', borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width={8} height={8} viewBox="0 0 8 8"><polygon points="1.5,0.5 7.5,4 1.5,7.5" fill="#A78BFA"/></svg>
                </div>
                <span style={{ color: '#C4CFDD', fontSize: 12, fontWeight: 500, fontFamily: "'JetBrains Mono',monospace", overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Interview_07.mp4</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                {['01:24:18','4K','3 speakers'].map(t => (
                  <span key={t} style={{ color: '#6A7A90', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 3, padding: '1px 6px' }}>{t}</span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 6px rgba(34,197,94,0.55)' }}/>
                <span style={{ color: '#22C55E', fontSize: 12, fontWeight: 600 }}>Ready</span>
              </div>
            </div>

            {/* AI Engine */}
            <div style={{ padding: '14px', flex: 1 }}>
              <div style={{ color: '#5A6A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 9 }}>AI ENGINE</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ color: '#6A7A90', fontSize: 12 }}>Analyzing</span>
                <span style={{ color: '#A78BFA', fontSize: 12, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}>78%</span>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden', marginBottom: 10 }}>
                <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg,#7C5CFC,#36D1DC)', borderRadius: 2 }}/>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                {[['Speaker map',true],['Scene graph',true],['Hook score',true],['Topic clusters',false]].map(([label, done]) => (
                  <div key={label as string} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, background: done ? '#36D1DC' : '#3D4F63' }}/>
                    <span style={{ fontSize: 12, color: done ? '#8A9BB0' : '#4A5C72' }}>{label as string}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center — content map */}
          <div style={{ padding: '14px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ color: '#5A6A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 10 }}>CONTENT MAP</div>

            {/* Video preview bar */}
            <div style={{ height: 50, background: 'linear-gradient(135deg,#1A2333,#10161F)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 7, marginBottom: 10, display: 'flex', alignItems: 'center', padding: '0 12px', gap: 10, overflow: 'hidden' }}>
              <div style={{ width: 36, height: 36, flexShrink: 0, background: 'rgba(124,92,252,0.10)', border: '1px solid rgba(124,92,252,0.22)', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width={12} height={12} viewBox="0 0 12 12"><polygon points="2,1.5 10.5,6 2,10.5" fill="#7C5CFC" opacity={0.8}/></svg>
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ color: '#8A9BB0', fontSize: 12, marginBottom: 4, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Founder Interview — Opening segment</div>
                <div style={{ display: 'flex', gap: 3 }}>
                  {[0,1,2,3,4,5].map(i => (
                    <div key={i} style={{ height: 4, flex: 1, background: i === 2 ? 'rgba(124,92,252,0.5)' : 'rgba(255,255,255,0.08)', borderRadius: 1 }}/>
                  ))}
                </div>
              </div>
              <span style={{ color: '#6A7A80', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", flexShrink: 0 }}>01:24:18</span>
            </div>

            {/* Waveform */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 1.5, height: 36, marginBottom: 6 }}>
              {WV.map((h, i) => (
                <div key={i} style={{
                  flex: 1, minWidth: 0, height: h, borderRadius: 1,
                  background: i === HEAD ? '#E8EDF5' : i < HEAD ? (i > HEAD - 6 ? '#7C5CFC' : '#36D1DC') : 'rgba(255,255,255,0.07)',
                  opacity: i === HEAD ? 1 : i < HEAD ? 0.78 : 0.32,
                  boxShadow: i === HEAD ? '0 0 8px rgba(232,237,245,0.35)' : 'none',
                }}/>
              ))}
            </div>

            {/* Timeline */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
              <span style={{ color: '#6A7A80', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", flexShrink: 0 }}>00:00</span>
              <div style={{ flex: 1, height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 2, position: 'relative' }}>
                <div style={{ width: `${(HEAD / WV.length) * 100}%`, height: '100%', background: 'linear-gradient(90deg,#7C5CFC,#36D1DC)', borderRadius: 2 }}/>
                <div style={{ position: 'absolute', left: `${(HEAD / WV.length) * 100}%`, top: '50%', transform: 'translate(-50%,-50%)', width: 9, height: 9, borderRadius: '50%', background: '#E8EDF5', border: '2px solid #7C5CFC', boxShadow: '0 0 8px rgba(124,92,252,0.65)' }}/>
              </div>
              <span style={{ color: '#6A7A80', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", flexShrink: 0 }}>01:24:18</span>
            </div>

            {/* Caption */}
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6, padding: '9px 11px', color: '#8A9BB0', fontSize: 12, fontStyle: 'italic', lineHeight: 1.5 }}>
              "One idea can become an entire content system."
            </div>
          </div>

          {/* Right — AI events + score */}
          <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div>
              <div style={{ color: '#5A6A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 9 }}>AI EVENTS</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[
                  { label: 'High-value moment', sub: 'Hook signal',    score: '92',  c: '#7C5CFC' },
                  { label: 'Speaker change',     sub: 'Transition',    score: '03',  c: '#36D1DC' },
                  { label: 'Caption emphasis',   sub: 'Key phrase',    score: 'CC',  c: '#4A8EF8' },
                  { label: 'Reframe target',     sub: 'Subject lock',  score: '9:16',c: '#F59E0B' },
                ].map((ev, i) => (
                  <div key={i} style={{ padding: '7px 8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 6 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                      <div style={{ minWidth: 0, flex: 1 }}>
                        <div style={{ color: '#C4CFDD', fontSize: 12, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.label}</div>
                        <div style={{ color: '#5A6A80', fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ev.sub}</div>
                      </div>
                      <div style={{ background: `${ev.c}18`, border: `1px solid ${ev.c}45`, borderRadius: 3, padding: '1px 5px', color: ev.c, fontSize: 12, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace", flexShrink: 0 }}>
                        {ev.score}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Viral score */}
            <div style={{ background: 'rgba(124,92,252,0.09)', border: '1px solid rgba(124,92,252,0.22)', borderRadius: 8, padding: '12px', marginTop: 'auto' }}>
              <div style={{ color: '#6A7A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 6 }}>VIRAL SCORE</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ color: '#E8EDF5', fontSize: 28, fontWeight: 700, fontFamily: "'Outfit',sans-serif", lineHeight: 1 }}>92</span>
                <span style={{ color: '#5A6A80', fontSize: 13 }}>/ 100</span>
              </div>
              <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, marginTop: 7, overflow: 'hidden' }}>
                <div style={{ width: '92%', height: '100%', background: 'linear-gradient(90deg,#7C5CFC,#A78BFA)', borderRadius: 2 }}/>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
            { label: 'SHORTS',     value: '12', sub: 'ranked moments' },
            { label: 'CAPTIONS',  value: '18', sub: 'platform variants' },
            { label: 'THUMBNAILS',value: '6',  sub: 'creative concepts' },
            { label: 'SEO ASSETS',value: '24', sub: 'titles + metadata' },
          ].map((s, i) => (
            <div key={s.label} style={{ padding: '10px 8px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
              <div style={{ color: '#6A7A80', fontSize: 12, letterSpacing: '0.07em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 2 }}>{s.label}</div>
              <div style={{ color: '#E8EDF5', fontSize: 20, fontWeight: 700, fontFamily: "'Outfit',sans-serif", lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: '#5A6A80', fontSize: 12, marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Concept note ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '7px 14px', background: 'rgba(124,92,252,0.04)', textAlign: 'center' }}>
          <span style={{ color: '#5A6A80', fontSize: 12, fontFamily: "'JetBrains Mono',monospace" }}>
            Illustrative product interface · Product currently in development
          </span>
        </div>
      </div>
    </div>
  )
}

// ─── Mobile concept UI ────────────────────────────────────────────

function ConceptUIMobile() {
  return (
    <div style={{ background: '#0C1219', border: '1px solid rgba(255,255,255,0.10)', borderRadius: 14, overflow: 'hidden', fontFamily: "'Inter',sans-serif" }}>
      {/* Chrome */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 14px', background: '#141B25', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ display: 'flex', gap: 5 }}>
            {['#FF5F57','#FEBC2E','#28C840'].map(c => <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }}/>)}
          </div>
          <span style={{ color: '#5A6A80', fontSize: 13, fontFamily: "'JetBrains Mono',monospace" }}>LuckForge AI</span>
        </div>
        <div style={{ background: 'rgba(124,92,252,0.14)', border: '1px solid rgba(124,92,252,0.35)', borderRadius: 4, padding: '2px 8px', color: '#A78BFA', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace" }}>CONCEPT UI</div>
      </div>

      {/* 2-column info */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ padding: '14px', borderRight: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ color: '#6A7A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 8 }}>SOURCE VIDEO</div>
          <div style={{ color: '#C4CFDD', fontSize: 12, fontWeight: 500, fontFamily: "'JetBrains Mono',monospace", marginBottom: 5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Interview_07.mp4</div>
          <div style={{ display: 'flex', gap: 6, color: '#6A7A90', fontSize: 12, marginBottom: 6 }}>
            <span>01:24:18</span><span style={{ color: '#4A5C72' }}>·</span><span>4K</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E' }}/>
            <span style={{ color: '#22C55E', fontSize: 13, fontWeight: 500 }}>Ready</span>
          </div>
        </div>
        <div style={{ padding: '14px' }}>
          <div style={{ color: '#6A7A80', fontSize: 12, letterSpacing: '0.08em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 8 }}>AI ENGINE</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
            <span style={{ color: '#6A7A90', fontSize: 13 }}>Analyzing</span>
            <span style={{ color: '#A78BFA', fontSize: 13, fontWeight: 700, fontFamily: "'JetBrains Mono',monospace" }}>78%</span>
          </div>
          <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden', marginBottom: 9 }}>
            <div style={{ width: '78%', height: '100%', background: 'linear-gradient(90deg,#7C5CFC,#36D1DC)' }}/>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 }}>
            {['Speaker map','Scene graph','Hook score','Topics'].map((s, i) => (
              <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0, background: i < 3 ? '#36D1DC' : '#3D4F63' }}/>
                <span style={{ fontSize: 12, color: i < 3 ? '#8A9BB0' : '#4A5C72' }}>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Output stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
        {[{l:'SHORTS',v:'12'},{l:'CAPTIONS',v:'18'},{l:'THUMBS',v:'6'},{l:'SEO',v:'24'}].map((s,i) => (
          <div key={s.l} style={{ padding: '12px 6px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
            <div style={{ color: '#6A7A80', fontSize: 12, letterSpacing: '0.07em', fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, marginBottom: 2 }}>{s.l}</div>
            <div style={{ color: '#E8EDF5', fontSize: 22, fontWeight: 700, fontFamily: "'Outfit',sans-serif", lineHeight: 1 }}>{s.v}</div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '8px 14px', background: 'rgba(124,92,252,0.04)', textAlign: 'center' }}>
        <span style={{ color: '#6A7A80', fontSize: 12, fontFamily: "'JetBrains Mono',monospace" }}>
          Illustrative product interface · Product currently in development
        </span>
      </div>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────

export default function Hero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v))
    const move = (e: MouseEvent) => {
      const el = heroRef.current
      if (!el) return
      const r = el.getBoundingClientRect()
      const nx = (e.clientX - (r.left + r.width  / 2)) / r.width
      const ny = (e.clientY - (r.top  + r.height / 2)) / r.height
      setTilt({
        x: clamp(ny * -0.7, -0.7, 0.7),
        y: clamp(nx *  0.5, -0.5, 0.5),
      })
    }
    const leave = () => setTilt({ x: 0, y: 0 })
    document.addEventListener('mousemove', move, { passive: true })
    document.addEventListener('mouseleave', leave)
    return () => { document.removeEventListener('mousemove', move); document.removeEventListener('mouseleave', leave) }
  }, [])

  return (
    <section ref={heroRef} style={{ minHeight: '100vh', paddingTop: 96, paddingBottom: 88, position: 'relative', overflow: 'hidden' }} className="grid-bg">
      <div aria-hidden style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(ellipse 60% 50% at 15% 30%, rgba(124,92,252,0.08) 0%, transparent 100%)' }}/>
      <div aria-hidden style={{ position:'absolute', inset:0, pointerEvents:'none', background:'radial-gradient(ellipse 40% 40% at 85% 20%, rgba(54,209,220,0.05) 0%, transparent 100%)' }}/>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px' }}>
        <div className="hero-grid">

          {/* ── Left ── */}
          <div>
            <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(124,92,252,0.09)', border:'1px solid rgba(124,92,252,0.24)', borderRadius:100, padding:'6px 14px', marginBottom:32 }}>
              <div style={{ width:6, height:6, borderRadius:'50%', background:'#7C5CFC', boxShadow:'0 0 8px rgba(124,92,252,0.8)' }}/>
              <span style={{ color:'#A78BFA', fontSize:13, fontWeight:500 }}>Building the AI Content Operating System</span>
            </div>

            <h1 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'clamp(40px,5vw,70px)', fontWeight:700, lineHeight:1.07, letterSpacing:'-0.03em', color:'#E8EDF5', marginBottom:24 }}>
              One Video.<br/>
              <span style={{ background:'linear-gradient(135deg,#B39DFB 0%,#60A5FA 55%,#36D1DC 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                Unlimited Content.
              </span>
            </h1>

            <p style={{ fontSize:17, lineHeight:1.75, color:'#8A9BB0', maxWidth:510, marginBottom:40 }}>
              VLuck Labs is building LuckForge AI — an AI-native content operating system
              designed to understand long-form video, identify high-value moments, create
              platform-ready assets, and build a smarter creator workflow over time.
            </p>

            <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:52 }}>
              <a href="#product"
                style={{ background:'linear-gradient(135deg,#7C5CFC,#4A8EF8)', color:'#fff', textDecoration:'none', fontSize:15, fontWeight:600, padding:'13px 28px', borderRadius:10, boxShadow:'0 8px 28px rgba(124,92,252,0.30)', transition:'opacity .2s, transform .2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity='0.85'; e.currentTarget.style.transform='translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity='1';    e.currentTarget.style.transform='translateY(0)' }}>
                Explore LuckForge AI
              </a>
              <a href="mailto:founder@vlucklabs.xyz"
                style={{ color:'#E8EDF5', textDecoration:'none', fontSize:15, fontWeight:500, padding:'13px 28px', borderRadius:10, border:'1px solid rgba(255,255,255,0.14)', transition:'border-color .2s, transform .2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.28)'; e.currentTarget.style.transform='translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.14)'; e.currentTarget.style.transform='translateY(0)' }}>
                Talk to the founder
              </a>
            </div>

            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16 }}>
              {[
                { n:'01', t:'AI-native',     d:'Built around intelligent automation' },
                { n:'02', t:'Creator-first', d:'Designed around real media workflows' },
                { n:'03', t:'Early-stage',   d:'Product development in progress' },
              ].map(p => (
                <div key={p.n} style={{ paddingTop:16, borderTop:'1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ color:'#4A5C72', fontSize:12, fontFamily:"'JetBrains Mono',monospace", marginBottom:4 }}>{p.n}</div>
                  <div style={{ color:'#E8EDF5', fontSize:14, fontWeight:600, fontFamily:"'Outfit',sans-serif", marginBottom:3 }}>{p.t}</div>
                  <div style={{ color:'#8A9BB0', fontSize:13, lineHeight:1.55 }}>{p.d}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Concept UI ── */}
          <div>
            <div className="hidden lg:block">
              <ConceptUI tiltX={tilt.x} tiltY={tilt.y} />
            </div>
            <div className="lg:hidden">
              <ConceptUIMobile />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
