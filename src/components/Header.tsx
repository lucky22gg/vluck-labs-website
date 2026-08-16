import { useState, useEffect } from 'react'
import { Link } from 'react-router'

const NAV = [
  { label: 'Product', href: '/#product' },
  { label: 'System',  href: '/#system' },
  { label: 'Roadmap', href: '/#roadmap' },
  { label: 'About',   href: '/#about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
      backgroundColor: scrolled ? 'rgba(7,9,13,0.96)' : 'rgba(7,9,13,0.55)',
      backdropFilter: 'blur(14px)',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : '1px solid transparent',
      transition: 'background-color 0.3s, border-color 0.3s',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>

        {/* Logo — always navigates to home */}
        <Link to="/" aria-label="VLuck Labs home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 7, background: 'linear-gradient(135deg,#7C5CFC,#4A8EF8)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 700, fontSize: 14, color: '#fff' }}>V</span>
          </div>
          <span style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 600, fontSize: 17, color: '#E8EDF5', letterSpacing: '-0.01em' }}>VLuck Labs</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex" style={{ gap: 34 }}>
          {NAV.map(n => (
            <a key={n.label} href={n.href}
              style={{ color: '#8A9BB0', fontSize: 14, fontWeight: 500, textDecoration: 'none', transition: 'color .2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E8EDF5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8A9BB0')}>
              {n.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex" style={{ gap: 8, alignItems: 'center' }}>
          <a href="mailto:founder@vlucklabs.xyz"
            style={{ color: '#8A9BB0', fontSize: 14, fontWeight: 500, textDecoration: 'none', padding: '8px 16px', borderRadius: 8, transition: 'color .2s, background .2s' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#E8EDF5'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
            onMouseLeave={e => { e.currentTarget.style.color = '#8A9BB0'; e.currentTarget.style.background = 'transparent' }}>
            Contact
          </a>
          <a href="mailto:founder@vlucklabs.xyz"
            style={{ background: 'linear-gradient(135deg,#7C5CFC,#4A8EF8)', color: '#fff', fontSize: 14, fontWeight: 600, textDecoration: 'none', padding: '9px 20px', borderRadius: 9, transition: 'opacity .2s' }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.84')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}>
            Early access
          </a>
        </div>

        {/* Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, color: '#E8EDF5', minWidth: 44, minHeight: 44, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {menuOpen
            ? <svg width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden><path d="M4 4l14 14M18 4L4 18" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/></svg>
            : <svg width={22} height={22} viewBox="0 0 22 22" fill="none" aria-hidden><path d="M3 7h16M3 11h16M3 15h16" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round"/></svg>
          }
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div id="mobile-nav" style={{ backgroundColor: 'rgba(7,9,13,0.98)', borderBottom: '1px solid rgba(255,255,255,0.08)', padding: '12px 28px 24px' }}>
          <nav aria-label="Mobile navigation">
            {NAV.map(n => (
              <a key={n.label} href={n.href} onClick={close}
                style={{ display: 'block', color: '#8A9BB0', fontSize: 17, fontWeight: 500, textDecoration: 'none', padding: '13px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                {n.label}
              </a>
            ))}
            <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="mailto:founder@vlucklabs.xyz" onClick={close}
                style={{ display: 'block', color: '#E8EDF5', fontSize: 16, fontWeight: 500, textDecoration: 'none', padding: '13px 16px', border: '1px solid rgba(255,255,255,0.14)', borderRadius: 10, textAlign: 'center' }}>
                Contact
              </a>
              <a href="mailto:founder@vlucklabs.xyz" onClick={close}
                style={{ display: 'block', background: 'linear-gradient(135deg,#7C5CFC,#4A8EF8)', color: '#fff', fontSize: 16, fontWeight: 600, textDecoration: 'none', padding: '13px 16px', borderRadius: 10, textAlign: 'center' }}>
                Early access
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
