import { useEffect, useRef, type ReactNode } from 'react'

// ── Shared card shell ─────────────────────────────────────────────

function Card({
  tag, tagColor, title, desc, children,
}: {
  tag: string; tagColor: string; title: string; desc: string; children: ReactNode
}) {
  return (
    <div
      className="card-hover"
      style={{
        background: '#141B25',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: 18,
        padding: 28,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        height: '100%',
      }}
    >
      {/* Tag */}
      <div style={{
        alignSelf: 'flex-start',
        color: tagColor, fontSize: 12, fontFamily: "'JetBrains Mono',monospace",
        fontWeight: 600, letterSpacing: '0.12em',
        background: `${tagColor}12`, border: `1px solid ${tagColor}30`,
        borderRadius: 4, padding: '3px 9px',
      }}>
        {tag}
      </div>

      {/* Text */}
      <div>
        <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 20, fontWeight: 600, color: '#E8EDF5', marginBottom: 9, letterSpacing: '-0.01em', lineHeight: 1.3 }}>
          {title}
        </h3>
        <p style={{ fontSize: 15, lineHeight: 1.72, color: '#8A9BB0' }}>{desc}</p>
      </div>

      {/* Visual — always below text, always separated */}
      <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 18, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        {children}
      </div>
    </div>
  )
}

// ── Visuals ───────────────────────────────────────────────────────

function SemanticMap() {
  const nodes = [
    { label: 'Hook',     cx: 52,  cy: 32,  r: 26, c: '#7C5CFC' },
    { label: 'Story',    cx: 162, cy: 58,  r: 22, c: '#36D1DC' },
    { label: 'Speaker',  cx: 272, cy: 30,  r: 19, c: '#4A8EF8' },
    { label: 'Data',     cx: 318, cy: 80,  r: 16, c: '#4A8EF8' },
    { label: 'Emotion',  cx: 108, cy: 104, r: 19, c: '#A78BFA' },
    { label: 'CTA',      cx: 212, cy: 110, r: 16, c: '#F59E0B' },
    { label: 'Context',  cx: 32,  cy: 98,  r: 16, c: '#36D1DC' },
  ]
  const edges = [[0,1],[0,4],[0,6],[1,2],[1,4],[1,5],[2,3],[3,5],[4,6]]
  return (
    <svg viewBox="0 0 360 136" width="100%" height={136} style={{ overflow: 'visible', display: 'block' }}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a].cx} y1={nodes[a].cy} x2={nodes[b].cx} y2={nodes[b].cy} stroke="rgba(255,255,255,0.08)" strokeWidth={1.2}/>
      ))}
      {nodes.map(n => (
        <g key={n.label}>
          <circle cx={n.cx} cy={n.cy} r={n.r} fill={`${n.c}14`} stroke={`${n.c}45`} strokeWidth={1.2}/>
          <text x={n.cx} y={n.cy} textAnchor="middle" dominantBaseline="central" fill={n.c} fontSize={12} fontFamily="'JetBrains Mono',monospace" fontWeight="600">{n.label}</text>
        </g>
      ))}
    </svg>
  )
}

function ScoreMeter() {
  const bars = [
    { label: 'Hook strength', v: 92, c: '#7C5CFC' },
    { label: 'Clarity',       v: 88, c: '#36D1DC' },
    { label: 'Tension',       v: 75, c: '#4A8EF8' },
    { label: 'Retention',     v: 83, c: '#A78BFA' },
  ]
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 18 }}>
        <span style={{ fontFamily: "'Outfit',sans-serif", fontSize: 64, fontWeight: 700, color: '#E8EDF5', lineHeight: 1 }}>92</span>
        <span style={{ color: '#4A5C72', fontSize: 15 }}>/ 100</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {bars.map(b => (
          <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ color: '#8A9BB0', fontSize: 12, width: 88, flexShrink: 0 }}>{b.label}</span>
            <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: `${b.v}%`, height: '100%', background: b.c, borderRadius: 2 }}/>
            </div>
            <span style={{ color: b.c, fontSize: 12, fontFamily: "'JetBrains Mono',monospace", width: 26, textAlign: 'right' }}>{b.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function FrameDiagram() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 96, height: 54, border: '2px solid rgba(124,92,252,0.45)', borderRadius: 6, background: 'rgba(124,92,252,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
          <div style={{ width: 22, height: 40, background: 'rgba(124,92,252,0.50)', borderRadius: 2 }}/>
        </div>
        <span style={{ color: '#7C5CFC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>16:9</span>
      </div>
      <svg width={32} height={14} viewBox="0 0 32 14" fill="none" style={{ flexShrink: 0 }}>
        <path d="M2 7h25M20 2l9 5-9 5" stroke="#36D1DC" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 46, height: 82, border: '2px solid rgba(54,209,220,0.45)', borderRadius: 6, background: 'rgba(54,209,220,0.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
          <div style={{ width: 28, height: 60, background: 'rgba(54,209,220,0.50)', borderRadius: 2 }}/>
        </div>
        <span style={{ color: '#36D1DC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 600 }}>9:16</span>
      </div>
    </div>
  )
}

function CaptionLines() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {[
        { text: 'One idea can become', hi: false },
        { text: 'an entire content system', hi: true },
        { text: 'when AI understands context.', hi: false },
      ].map((l, i) => (
        <div key={i} style={{
          padding: '9px 13px', borderRadius: 7,
          background: l.hi ? 'rgba(124,92,252,0.13)' : 'rgba(255,255,255,0.03)',
          border: `1px solid ${l.hi ? 'rgba(124,92,252,0.28)' : 'rgba(255,255,255,0.06)'}`,
        }}>
          <span style={{ color: l.hi ? '#E8EDF5' : '#8A9BB0', fontSize: 14, fontWeight: l.hi ? 600 : 400, lineHeight: 1.4 }}>{l.text}</span>
          {l.hi && <span style={{ display: 'inline-block', marginLeft: 6, width: 2, height: 14, background: '#7C5CFC', verticalAlign: 'middle' }}/>}
        </div>
      ))}
    </div>
  )
}

function AssetGrid() {
  const items = [
    { type: 'Thumbnail',   count: '6 concepts',  c: '#7C5CFC', icon: '▪' },
    { type: 'Title',        count: '12 variants', c: '#36D1DC', icon: 'T' },
    { type: 'Description', count: '6 drafts',    c: '#4A8EF8', icon: '≡' },
    { type: 'B-Roll',      count: '8 ideas',     c: '#A78BFA', icon: '▶' },
    { type: 'Metadata',    count: '24 tags',     c: '#F59E0B', icon: '#' },
  ]
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
      {items.map(a => (
        <div key={a.type} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 11px', borderRadius: 8, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ width: 28, height: 22, borderRadius: 3, background: `${a.c}18`, border: `1px solid ${a.c}35`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: a.c, fontSize: 12, flexShrink: 0 }}>{a.icon}</div>
          <span style={{ color: '#8A9BB0', fontSize: 13, flex: 1 }}>{a.type}</span>
          <span style={{ color: a.c, fontSize: 12, fontFamily: "'JetBrains Mono',monospace" }}>{a.count}</span>
        </div>
      ))}
    </div>
  )
}

function LearningLoop() {
  const steps = [
    { label: 'Publish', c: '#7C5CFC' },
    { label: 'Measure', c: '#36D1DC' },
    { label: 'Learn',   c: '#4A8EF8' },
    { label: 'Improve', c: '#A78BFA' },
  ]
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ padding: '8px 16px', borderRadius: 100, background: `${s.c}13`, border: `1px solid ${s.c}35`, color: s.c, fontSize: 14, fontWeight: 500, whiteSpace: 'nowrap' }}>{s.label}</div>
            {i < steps.length - 1 && (
              <svg width={14} height={12} viewBox="0 0 14 12" fill="none">
                <path d="M2 6h9M7 2l5 4-5 4" stroke="rgba(255,255,255,0.2)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        ))}
      </div>
      <p style={{ color: '#4A5C72', fontSize: 13, textAlign: 'center', lineHeight: 1.5 }}>
        Performance signals from published assets inform future creative decisions.
      </p>
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────────

export default function ProductSection() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.04 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="product" style={{ background: '#07090D', padding: '100px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ color: '#7C5CFC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.12em', fontWeight: 500, marginBottom: 16 }}>FLAGSHIP PRODUCT</div>
          <h2 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#E8EDF5', marginBottom: 16, lineHeight: 1.1 }}>LuckForge AI</h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: '#8A9BB0', maxWidth: 560 }}>
            An AI Content Operating System for turning one long-form recording into a complete, reusable content ecosystem.
          </p>
        </div>

        {/* Bento — hardcoded cards with explicit class names, no dynamic classes */}
        <div className="bento">

          {/* UNDERSTAND — wide on desktop (2/3) */}
          <div className="bento-wide bento-wide-lg">
            <Card tag="UNDERSTAND" tagColor="#7C5CFC" title="Deep Video Intelligence"
              desc="Map speech, scenes, speakers, topics, pacing and narrative structure before creating anything.">
              <SemanticMap />
            </Card>
          </div>

          {/* DISCOVER — narrow (1/3) */}
          <div>
            <Card tag="DISCOVER" tagColor="#36D1DC" title="Viral Moment Scoring"
              desc="Rank candidate moments using hooks, clarity, context, tension and retention-oriented signals.">
              <ScoreMeter />
            </Card>
          </div>

          {/* REFRAME — narrow (1/3) */}
          <div>
            <Card tag="REFRAME" tagColor="#4A8EF8" title="Dynamic Camera"
              desc="Adapt framing for vertical and square formats while preserving subject focus.">
              <FrameDiagram />
            </Card>
          </div>

          {/* CAPTION — wide (2/3) */}
          <div className="bento-wide-lg">
            <Card tag="CAPTION" tagColor="#A78BFA" title="Context-aware Captions"
              desc="Create readable captions, emphasis and hook variants designed around the actual content.">
              <CaptionLines />
            </Card>
          </div>

          {/* CREATE — narrow (1/3) */}
          <div>
            <Card tag="CREATE" tagColor="#F59E0B" title="Creative Assets"
              desc="Generate thumbnail concepts, supporting B-roll ideas, titles, descriptions and metadata.">
              <AssetGrid />
            </Card>
          </div>

          {/* LEARN — wide (2/3) */}
          <div className="bento-wide-lg">
            <Card tag="LEARN" tagColor="#22C55E" title="Creator Learning Loop"
              desc="Performance signals can inform future clip selection, hooks and packaging for each creator over time.">
              <LearningLoop />
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}
