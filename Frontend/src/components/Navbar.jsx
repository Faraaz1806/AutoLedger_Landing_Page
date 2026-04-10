import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Compare', href: '#compare' },
  ];

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, width: '100%', zIndex: 50,
    height: '72px',
    transition: 'background 0.4s, box-shadow 0.4s',
    background: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'transparent',
    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
    WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'none',
    boxShadow: isScrolled ? '0 1px 0 rgba(255,255,255,0.04)' : 'none',
  };

  return (
    <>
      <motion.nav
        id="main-nav"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={navStyle}
      >
        <div style={{
          maxWidth: '1200px', margin: '0 auto', width: '100%',
          height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingLeft: '24px', paddingRight: '24px',
        }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <img src="/autoledger_logo.svg" alt="AutoLedger" style={{ width: '32px', height: '32px', borderRadius: '8px' }} />
            <span style={{ fontSize: '16px', fontWeight: 800, color: '#f0f0f0', letterSpacing: '-0.03em' }}>
              AutoLedger
            </span>
          </a>

          {/* Desktop Nav — hidden below 768px */}
          <div className="nav-desktop-links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link-item"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {/* Download — hidden below 640px */}
            <a
              href="https://github.com/Faraaz1806/AutoLedger_Landing_Page/releases/latest/download/AutoLedger.apk"
              download="AutoLedger.apk"
              id="nav-download-btn"
              className="nav-download-btn"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
              Download
            </a>

            {/* Mobile Hamburger — hidden above 768px */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="nav-hamburger"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '20px' }}>
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 40,
              background: 'rgba(10,10,10,0.97)',
              backdropFilter: 'blur(20px)',
              display: 'flex', flexDirection: 'column',
              paddingTop: '72px',
            }}
          >
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px 24px 40px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                    style={{
                      fontSize: '28px', fontWeight: 700, color: 'white',
                      padding: '20px 8px', borderRadius: '12px',
                      textDecoration: 'none', display: 'flex',
                      alignItems: 'center', justifyContent: 'space-between',
                    }}
                  >
                    {link.label}
                    <span className="material-symbols-outlined" style={{ color: 'rgba(218,243,141,0.3)', fontSize: '20px' }}>arrow_forward</span>
                  </motion.a>
                ))}
              </div>

              <motion.a
                href="https://github.com/Faraaz1806/AutoLedger_Landing_Page/releases/latest/download/AutoLedger.apk"
                download="AutoLedger.apk"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{
                  background: '#daf38d', color: '#1a2800',
                  fontWeight: 700, fontSize: '15px',
                  padding: '16px 24px', borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                  textDecoration: 'none',
                }}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
                Download for Android
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
