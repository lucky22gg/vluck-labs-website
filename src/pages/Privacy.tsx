import { Link } from 'react-router'
import { useEffect } from 'react'

const SECTION_STYLE = {
  marginBottom: 40,
} as const

const H2_STYLE = {
  fontFamily: "'Outfit',sans-serif",
  fontSize: 22,
  fontWeight: 600,
  color: '#E8EDF5',
  marginBottom: 12,
  letterSpacing: '-0.01em',
} as const

const P_STYLE = {
  fontSize: 16,
  lineHeight: 1.75,
  color: '#8A9BB0',
  marginBottom: 12,
} as const

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Privacy Policy — VLuck Labs'
    return () => { document.title = 'VLuck Labs — LuckForge AI | AI Content Operating System' }
  }, [])

  return (
    <main style={{ paddingTop: 96, paddingBottom: 100 }}>
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 28px' }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: 48 }}>
          <Link to="/" style={{ color: '#5A6A80', fontSize: 14, textDecoration: 'none', fontFamily: "'JetBrains Mono',monospace", transition: 'color .2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#8A9BB0')}
            onMouseLeave={e => (e.currentTarget.style.color = '#5A6A80')}>
            ← vlucklabs.xyz
          </Link>
        </div>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ color: '#7C5CFC', fontSize: 12, fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.12em', fontWeight: 500, marginBottom: 16 }}>LEGAL</div>
          <h1 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, letterSpacing: '-0.025em', color: '#E8EDF5', marginBottom: 16, lineHeight: 1.15 }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A6A80', fontFamily: "'JetBrains Mono',monospace" }}>
            Last updated: August 2026
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48 }}>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Overview</h2>
            <p style={P_STYLE}>
              VLuck Labs is an early-stage technology startup. This website (vlucklabs.xyz) is currently an informational website only. LuckForge AI is a product currently in development and is not yet publicly available.
            </p>
            <p style={P_STYLE}>
              This Privacy Policy describes how we handle information in connection with this website.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Information We Do Not Collect</h2>
            <p style={P_STYLE}>
              This website does not currently include:
            </p>
            <ul style={{ ...P_STYLE, paddingLeft: 20, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}>User registration or accounts</li>
              <li style={{ marginBottom: 8 }}>Analytics or behavioral tracking scripts</li>
              <li style={{ marginBottom: 8 }}>Third-party advertising or marketing pixels</li>
              <li style={{ marginBottom: 8 }}>Cookies beyond those technically necessary for the website to function</li>
              <li style={{ marginBottom: 8 }}>Payment or financial information</li>
            </ul>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Contact Information</h2>
            <p style={P_STYLE}>
              If you contact us by email at <a href="mailto:founder@vlucklabs.xyz" style={{ color: '#7C5CFC', textDecoration: 'none' }}>founder@vlucklabs.xyz</a>, we receive the information you include in that email. We use this information only to respond to your message.
            </p>
            <p style={P_STYLE}>
              We do not sell, share, or distribute your contact information to third parties.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Hosting and Infrastructure</h2>
            <p style={P_STYLE}>
              This website is hosted by third-party infrastructure providers. These providers may collect standard server log information (such as IP addresses and browser types) as part of normal internet operations. Please refer to the privacy policies of those providers for details.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Changes to This Policy</h2>
            <p style={P_STYLE}>
              As VLuck Labs develops its products and services, this Privacy Policy may be updated. Material changes will be reflected by updating the date at the top of this page.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Contact</h2>
            <p style={P_STYLE}>
              For privacy-related questions, contact us at:{' '}
              <a href="mailto:founder@vlucklabs.xyz" style={{ color: '#7C5CFC', textDecoration: 'none' }}>founder@vlucklabs.xyz</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
