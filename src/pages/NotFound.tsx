import { Link } from 'react-router'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | VLuck Labs'
    return () => { document.title = 'VLuck Labs — LuckForge AI | AI Content Operating System' }
  }, [])

  return (
    <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '96px 28px' }}>
      <div style={{ textAlign: 'center', maxWidth: 520 }}>

        <div style={{ color: '#7C5CFC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.12em', fontWeight: 500, marginBottom: 24 }}>
          404
        </div>

        <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(32px,5vw,56px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#E8EDF5', marginBottom: 20, lineHeight: 1.1 }}>
          Page not found.
        </h1>

        <p style={{ fontSize: 17, lineHeight: 1.75, color: '#8A9BB0', marginBottom: 40 }}>
          The page you are looking for does not exist or has been moved.
        </p>

        <Link to="/"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'linear-gradient(135deg,#7C5CFC,#4A8EF8)', color: '#fff', textDecoration: 'none', fontSize: 15, fontWeight: 600, padding: '13px 28px', borderRadius: 10, boxShadow: '0 8px 28px rgba(124,92,252,0.30)', transition: 'opacity .2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
          ← Back to VLuck Labs
        </Link>
      </div>
    </main>
  )
}
