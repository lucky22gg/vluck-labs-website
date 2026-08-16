import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer style={{ background: '#07090D', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '48px 28px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'grid', gap: 40, marginBottom: 40 }} className="sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:14 }}>
              <div style={{ width:28, height:28, borderRadius:6, background:'linear-gradient(135deg,#7C5CFC,#4A8EF8)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:700, fontSize:13, color:'#fff' }}>V</span>
              </div>
              <span style={{ fontFamily:"'Outfit',sans-serif", fontWeight:600, fontSize:16, color:'#E8EDF5' }}>VLuck Labs</span>
            </div>
            <p style={{ color:'#8A9BB0', fontSize:14, lineHeight:1.65, maxWidth:300 }}>
              AI-native creator infrastructure.<br/>Building LuckForge AI.
            </p>
          </div>

          {/* Product links */}
          <div>
            <div style={{ color:'#4A5C72', fontSize:12, fontFamily:"'JetBrains Mono',monospace", letterSpacing:'0.08em', marginBottom:16 }}>PRODUCT</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              {[{l:'Product',href:'/#product'},{l:'Roadmap',href:'/#roadmap'}].map(lk => (
                <a key={lk.l} href={lk.href}
                  style={{ color:'#8A9BB0', textDecoration:'none', fontSize:14, transition:'color .2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color='#E8EDF5')}
                  onMouseLeave={e => (e.currentTarget.style.color='#8A9BB0')}>
                  {lk.l}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <div style={{ color:'#4A5C72', fontSize:12, fontFamily:"'JetBrains Mono',monospace", letterSpacing:'0.08em', marginBottom:16 }}>LEGAL</div>
            <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
              <Link to="/privacy"
                style={{ color:'#8A9BB0', textDecoration:'none', fontSize:14, transition:'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='#E8EDF5')}
                onMouseLeave={e => (e.currentTarget.style.color='#8A9BB0')}>
                Privacy
              </Link>
              <Link to="/terms"
                style={{ color:'#8A9BB0', textDecoration:'none', fontSize:14, transition:'color .2s' }}
                onMouseEnter={e => (e.currentTarget.style.color='#E8EDF5')}
                onMouseLeave={e => (e.currentTarget.style.color='#8A9BB0')}>
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop:'1px solid rgba(255,255,255,0.06)', paddingTop:24, display:'flex', flexWrap:'wrap', gap:12, justifyContent:'space-between', alignItems:'center' }}>
          <span style={{ color:'#4A5C72', fontSize:13 }}>&copy; 2026 VLuck Labs. All rights reserved.</span>
          <a href="https://vlucklabs.xyz" target="_blank" rel="noopener noreferrer"
            style={{ color:'#4A5C72', fontSize:13, textDecoration:'none', fontFamily:"'JetBrains Mono',monospace", transition:'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color='#8A9BB0')}
            onMouseLeave={e => (e.currentTarget.style.color='#4A5C72')}>
            vlucklabs.xyz
          </a>
        </div>
      </div>
    </footer>
  )
}
