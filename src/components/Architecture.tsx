import { useEffect, useRef } from 'react'

function Node({ label, sub, color, bg, border, wide = false }: {
  label: string; sub?: string; color: string; bg: string; border: string; wide?: boolean
}) {
  return (
    <div style={{ background: bg, border: `1px solid ${border}`, borderRadius: 10, padding: wide ? '14px 48px' : '10px 18px', textAlign: 'center', minWidth: wide ? 240 : 110 }}>
      <div style={{ color, fontSize: wide ? 13 : 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, letterSpacing: '0.07em', marginBottom: sub ? 3 : 0 }}>{label}</div>
      {sub && <div style={{ color: '#4A5C72', fontSize: 12 }}>{sub}</div>}
    </div>
  )
}

const Arrow = () => (
  <div style={{ display: 'flex', justifyContent: 'center', padding: '5px 0' }}>
    <svg width={14} height={20} viewBox="0 0 14 20" fill="none">
      <path d="M7 2v13M3 12l4 5 4-5" stroke="rgba(255,255,255,0.18)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </div>
)

function DesktopDiagram() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '48px 40px' }}>
      <Node label="ORCHESTRATOR" sub="Pipeline coordination" color="#E8EDF5" bg="rgba(124,92,252,0.14)" border="rgba(124,92,252,0.42)" wide/>
      <Arrow/>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Node label="UNDERSTAND" sub="Semantic indexing" color="#A78BFA" bg="rgba(124,92,252,0.09)" border="rgba(124,92,252,0.28)"/>
        <div style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.08)' }}/>
        <Node label="CLIPS"      sub="Clip detection"   color="#A78BFA" bg="rgba(124,92,252,0.09)" border="rgba(124,92,252,0.28)"/>
        <div style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.08)' }}/>
        <Node label="STORY"      sub="Reconstruction"   color="#A78BFA" bg="rgba(124,92,252,0.09)" border="rgba(124,92,252,0.28)"/>
      </div>
      <Arrow/>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[['CAPTIONS','Context-aware'],['CAMERA','Dynamic framing'],['B-ROLL','Scene support'],['THUMBNAIL','Creative assets']].map(([l,s],i,a) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Node label={l} sub={s} color="#67E8F9" bg="rgba(54,209,220,0.09)" border="rgba(54,209,220,0.28)"/>
            {i < a.length - 1 && <div style={{ width: 10, height: 1, background: 'rgba(255,255,255,0.08)' }}/>}
          </div>
        ))}
      </div>
      <Arrow/>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        {[['SEO','Metadata'],['PUBLISH','Multi-platform'],['ANALYTICS','Performance']].map(([l,s],i,a) => (
          <div key={l} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Node label={l} sub={s} color="#93C5FD" bg="rgba(74,142,248,0.09)" border="rgba(74,142,248,0.28)"/>
            {i < a.length - 1 && <div style={{ width: 12, height: 1, background: 'rgba(255,255,255,0.08)' }}/>}
          </div>
        ))}
      </div>
      <Arrow/>
      <div style={{ background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.26)', borderRadius: 12, padding: '16px 60px', textAlign: 'center' }}>
        <div style={{ color: '#86EFAC', fontSize: 13, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, letterSpacing: '0.07em', marginBottom: 4 }}>CREATOR LEARNING LAYER</div>
        <div style={{ color: '#4A5C72', fontSize: 12 }}>Performance-informed personalization over time</div>
      </div>
    </div>
  )
}

function MobileDiagram() {
  const rows = [
    { label: 'ORCHESTRATOR',                            c:'#E8EDF5', bg:'rgba(124,92,252,0.14)', b:'rgba(124,92,252,0.40)', d:'Pipeline coordination' },
    { label: 'UNDERSTAND · CLIPS · STORY',              c:'#A78BFA', bg:'rgba(124,92,252,0.09)', b:'rgba(124,92,252,0.28)', d:'Content comprehension' },
    { label: 'CAPTIONS · CAMERA · B-ROLL · THUMBNAIL',  c:'#67E8F9', bg:'rgba(54,209,220,0.09)',  b:'rgba(54,209,220,0.28)',  d:'Creative production' },
    { label: 'SEO · PUBLISH · ANALYTICS',               c:'#93C5FD', bg:'rgba(74,142,248,0.09)',  b:'rgba(74,142,248,0.28)',  d:'Distribution' },
    { label: 'CREATOR LEARNING LAYER',                  c:'#86EFAC', bg:'rgba(34,197,94,0.08)',   b:'rgba(34,197,94,0.26)',   d:'Performance-informed personalization' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', padding: '28px 20px' }}>
      {rows.map((r, i) => (
        <div key={r.label}>
          <div style={{ background: r.bg, border: `1px solid ${r.b}`, borderRadius: 10, padding: '14px 16px' }}>
            <div style={{ color: r.c, fontSize: 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600, letterSpacing: '0.06em', marginBottom: 3 }}>{r.label}</div>
            <div style={{ color: '#4A5C72', fontSize: 12 }}>{r.d}</div>
          </div>
          {i < rows.length - 1 && <Arrow/>}
        </div>
      ))}
    </div>
  )
}

export default function Architecture() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.04 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="system" style={{ background: '#0B0F15', padding: '100px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', marginBottom: 64, textAlign: 'center' }}>
          <div style={{ color: '#36D1DC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.12em', fontWeight: 500, marginBottom: 16 }}>PLATFORM ARCHITECTURE</div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,48px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#E8EDF5', marginBottom: 20, lineHeight: 1.15 }}>
            Built as a system,{' '}
            <span style={{ color: '#8A9BB0' }}>not a feature.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#8A9BB0' }}>
            LuckForge AI is being designed as a multi-stage content pipeline where specialized
            AI components collaborate around one source of truth.
          </p>
        </div>

        <div style={{ background: '#141B25', border: '1px solid rgba(255,255,255,0.07)', borderRadius: 20, overflow: 'hidden' }}>
          <div className="hidden lg:block"><DesktopDiagram/></div>
          <div className="lg:hidden"><MobileDiagram/></div>
        </div>

        <div style={{ marginTop: 40, display: 'grid', gap: 12 }} className="sm:grid-cols-2 lg:grid-cols-3">
          {[
            'Video understanding & semantic indexing',
            'Clip detection & story reconstruction',
            'Captions, camera, B-roll & thumbnails',
            'SEO, publishing & analytics workflows',
            'Per-creator learning over time',
          ].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: '#8A9BB0', fontSize: 14, lineHeight: 1.5 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#36D1DC', flexShrink: 0, marginTop: 6 }}/>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
