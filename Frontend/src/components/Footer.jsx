export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      style={{
        width: '100%',
        padding: '48px 24px',
        borderTop: '1px solid rgba(255,255,255,0.04)',
        background: '#070707',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Top row */}
        <div className="footer-row">
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/autoledger_logo.svg" alt="AutoLedger" style={{ width: '28px', height: '28px', borderRadius: '7px' }} />
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#f0f0f0', letterSpacing: '-0.03em' }}>
              AutoLedger
            </span>
          </a>

          {/* Links */}
          <div style={{ display: 'flex', gap: '32px' }}>
            {['Terms & Conditions', 'Privacy Policy'].map((label) => (
              <a
                key={label}
                href="#"
                style={{
                  fontSize: '10px', letterSpacing: '0.18em', fontWeight: 700,
                  textTransform: 'uppercase', color: '#555', textDecoration: 'none',
                  transition: 'color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.color = '#daf38d'}
                onMouseLeave={(e) => e.target.style.color = '#555'}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.04)', margin: '32px 0' }} />

        {/* Bottom row */}
        <div className="footer-bottom">
          <p style={{ fontSize: '10px', letterSpacing: '0.18em', fontWeight: 500, textTransform: 'uppercase', color: '#444' }}>
            © {currentYear} AutoLedger. All rights reserved.
          </p>
          <p style={{ fontSize: '10px', letterSpacing: '0.18em', fontWeight: 500, textTransform: 'uppercase', color: '#444' }}>
            Made with <span style={{ color: '#daf38d' }}>♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
