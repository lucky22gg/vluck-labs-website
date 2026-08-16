const CAPS = [
  'VIDEO UNDERSTANDING',
  'CLIP INTELLIGENCE',
  'DYNAMIC FRAMING',
  'CAPTIONS',
  'THUMBNAILS',
  'SEO',
  'ANALYTICS',
]

export default function CapabilityStrip() {
  return (
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', borderBottom: '1px solid rgba(255,255,255,0.07)', background: '#0B0F15', overflowX: 'auto' }} className="no-scrollbar">
      <div style={{ display: 'flex', alignItems: 'center', minWidth: 'max-content', padding: '0 28px' }}>
        {CAPS.map((cap, i) => (
          <div key={cap} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ padding: '17px 26px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#36D1DC', flexShrink: 0 }}/>
              <span style={{ color: '#8A9BB0', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", fontWeight: 500, letterSpacing: '0.10em', whiteSpace: 'nowrap' }}>{cap}</span>
            </div>
            {i < CAPS.length - 1 && <div style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.08)', flexShrink: 0 }}/>}
          </div>
        ))}
      </div>
    </div>
  )
}
