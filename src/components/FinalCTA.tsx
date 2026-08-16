import { useEffect, useRef } from 'react'

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('in') }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section style={{ background: '#0B0F15', padding: '100px 28px' }}>
      <div className="reveal" ref={ref} style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ color:'#7C5CFC', fontSize:12, fontFamily:"'JetBrains Mono',monospace", letterSpacing:'0.12em', fontWeight:500, marginBottom:24 }}>EARLY ACCESS</div>
        <h2 style={{ fontFamily:"'Outfit',sans-serif", fontSize:'clamp(28px,5vw,56px)', fontWeight:700, letterSpacing:'-0.025em', color:'#E8EDF5', marginBottom:20, lineHeight:1.1 }}>
          Build the next content workflow with us.
        </h2>
        <p style={{ fontSize:18, lineHeight:1.7, color:'#8A9BB0', maxWidth:500, marginLeft:'auto', marginRight:'auto', marginBottom:40 }}>
          Interested in LuckForge AI, partnerships, or early product access?
        </p>
        <a href="mailto:founder@vlucklabs.xyz"
          style={{ display:'inline-flex', alignItems:'center', gap:10, background:'linear-gradient(135deg,#7C5CFC,#4A8EF8)', color:'#fff', textDecoration:'none', fontSize:17, fontWeight:600, padding:'15px 36px', borderRadius:12, boxShadow:'0 12px 40px rgba(124,92,252,0.32)', transition:'opacity .2s, transform .2s' }}
          onMouseEnter={e => { e.currentTarget.style.opacity='0.86'; e.currentTarget.style.transform='translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.opacity='1';    e.currentTarget.style.transform='translateY(0)' }}>
          <svg width={18} height={14} viewBox="0 0 18 14" fill="none">
            <path d="M1 1h16v12H1V1z" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round"/>
            <path d="M1 1l8 6 8-6" stroke="currentColor" strokeWidth={1.4} strokeLinejoin="round"/>
          </svg>
          founder@vlucklabs.xyz
        </a>
      </div>
    </section>
  )
}
