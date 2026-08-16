import { Link } from 'react-router'
import { useEffect } from 'react'

const SECTION_STYLE = { marginBottom: 40 } as const

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

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Terms of Use — VLuck Labs'
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
            Terms of Use
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: '#5A6A80', fontFamily: "'JetBrains Mono',monospace" }}>
            Last updated: August 2026
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 48 }}>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>About This Website</h2>
            <p style={P_STYLE}>
              This website (vlucklabs.xyz) is operated by VLuck Labs, an early-stage technology startup. The website is informational only and describes products currently under development.
            </p>
            <p style={P_STYLE}>
              LuckForge AI is a product concept in active development. It is not currently commercially available. Nothing on this website constitutes an offer to sell or a commitment to deliver any product or service.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Use of This Website</h2>
            <p style={P_STYLE}>
              You may use this website for lawful informational purposes. You agree not to:
            </p>
            <ul style={{ ...P_STYLE, paddingLeft: 20, marginBottom: 0 }}>
              <li style={{ marginBottom: 8 }}>Use this website in any way that violates applicable laws or regulations</li>
              <li style={{ marginBottom: 8 }}>Attempt to gain unauthorized access to any systems associated with this website</li>
              <li style={{ marginBottom: 8 }}>Reproduce or misrepresent our content as your own</li>
            </ul>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Intellectual Property</h2>
            <p style={P_STYLE}>
              The content on this website — including text, design, product names, and branding — is owned by VLuck Labs and may not be reproduced without written permission.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>No Warranties</h2>
            <p style={P_STYLE}>
              This website and its content are provided "as is" without warranty of any kind. VLuck Labs makes no representations or warranties regarding the accuracy, completeness, or suitability of any information on this website.
            </p>
            <p style={P_STYLE}>
              Product descriptions, roadmaps, and capability descriptions represent intended development directions and do not constitute guarantees of functionality, delivery, or performance.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Limitation of Liability</h2>
            <p style={P_STYLE}>
              To the fullest extent permitted by applicable law, VLuck Labs shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Changes to These Terms</h2>
            <p style={P_STYLE}>
              We may update these Terms of Use as the business and product evolve. Continued use of the website following any changes constitutes acceptance of the updated terms.
            </p>
          </div>

          <div style={SECTION_STYLE}>
            <h2 style={H2_STYLE}>Contact</h2>
            <p style={P_STYLE}>
              For questions about these Terms, contact us at:{' '}
              <a href="mailto:founder@vlucklabs.xyz" style={{ color: '#7C5CFC', textDecoration: 'none' }}>founder@vlucklabs.xyz</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
