import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        padding: '140px 24px 80px',
        overflow: 'hidden',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Background glows */}
      <div style={{
        position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '600px', background: 'rgba(218,243,141,0.05)',
        borderRadius: '50%', filter: 'blur(150px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, width: '100%', height: '200px',
        background: 'linear-gradient(to top, #0a0a0a, transparent)',
        pointerEvents: 'none', zIndex: 5,
      }} />

      <div style={{
        maxWidth: '1200px', margin: '0 auto', width: '100%',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        textAlign: 'center', position: 'relative', zIndex: 10,
      }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '8px 16px', background: 'rgba(218,243,141,0.08)',
            borderRadius: '9999px', marginBottom: '32px',
            border: '1px solid rgba(218,243,141,0.12)',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#daf38d' }} className="animate-pulse" />
          <span style={{ color: '#daf38d', fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase' }}>
            100% Offline & Private
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          style={{
            fontSize: 'clamp(2rem, 7.5vw, 5rem)',
            lineHeight: 1.1,
            fontWeight: 800,
            letterSpacing: '-0.03em',
            marginBottom: '24px',
            maxWidth: '780px',
            padding: '0 16px',
            overflow: 'visible',
          }}
        >
          Zero Manual Entry.{' '}
          <br className="hidden sm:block" />
          <span className="text-lime-gradient" style={{ fontStyle: 'italic', paddingRight: '0.1em' }}>Full Clarity.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          style={{
            color: '#8a8a8a', fontSize: '15px', maxWidth: '460px',
            marginBottom: '40px', lineHeight: 1.75, fontWeight: 500, padding: '0 16px',
          }}
        >
          The only expense tracker that reads your bank SMS automatically.
          No sign-up. No internet. No compromises.
        </motion.p>

        {/* CTA Buttons — uses CSS class for responsive */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease }}
          className="hero-buttons"
        >
          <a href="/AutoLedger.apk" download="AutoLedger.apk" id="hero-download-btn" className="hero-btn-primary">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>download</span>
            Download for Android
          </a>
          <a href="#features" className="hero-btn-secondary">
            Learn More
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_downward</span>
          </a>
        </motion.div>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55, ease }}
          style={{ width: '100%', maxWidth: '860px', margin: '0 auto' }}
        >
          <div className="glass-panel" style={{
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '20px', padding: '6px',
            boxShadow: '0 0 80px -20px rgba(218,243,141,0.12)',
          }}>
            <div style={{
              background: '#0e0e0e', borderRadius: '16px', overflow: 'hidden', position: 'relative',
            }}>
              <div className="dotted-matrix" style={{
                aspectRatio: '16/10', position: 'relative',
                padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
              }}>
                {/* Top bar */}
                <div style={{ position: 'absolute', top: '20px', left: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src="/autoledger_logo.svg" alt="AutoLedger" style={{ width: '28px', height: '28px', borderRadius: '8px' }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: '#555', textTransform: 'uppercase' }}>AutoLedger</span>
                </div>

                {/* Chart */}
                <div style={{ position: 'absolute', top: '60px', left: 0, right: 0, padding: '0 24px' }}>
                  <svg viewBox="0 0 500 120" style={{ width: '100%', height: 'auto', opacity: 0.5 }} fill="none">
                    <defs>
                      <linearGradient id="cg" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#daf38d" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#daf38d" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 90 C30 85,60 80,90 70 C120 60,150 55,180 50 C210 45,240 48,270 42 C300 36,330 30,360 28 C390 26,420 24,450 22 L500 20 V120 H0Z" fill="url(#cg)" />
                    <path d="M0 90 C30 85,60 80,90 70 C120 60,150 55,180 50 C210 45,240 48,270 42 C300 36,330 30,360 28 C390 26,420 24,450 22 L500 20" stroke="#daf38d" strokeWidth="1.5" fill="none" />
                    <circle cx="500" cy="20" r="4" fill="#daf38d">
                      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                </div>

                {/* Amount */}
                <div style={{ position: 'relative', zIndex: 10 }}>
                  <div style={{ color: '#daf38d', fontWeight: 800, fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', marginBottom: '4px', letterSpacing: '-0.02em' }}>
                    ₹12,480.00
                  </div>
                  <div style={{ color: '#555', fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
                    Monthly Spend — Sept 2024
                  </div>
                </div>

                {/* Floating card */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: 'absolute', top: '20px', right: '16px',
                    background: 'rgba(28,28,28,0.9)', backdropFilter: 'blur(12px)',
                    borderRadius: '14px', padding: '12px 14px',
                    border: '1px solid rgba(255,255,255,0.06)',
                    maxWidth: '160px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '7px', background: 'rgba(218,243,141,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '14px', fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: 'white' }}>Zomato</span>
                  </div>
                  <div style={{ fontSize: '10px', color: '#666', fontWeight: 500 }}>– ₹349.00 · UPI</div>
                </motion.div>

                {/* Gradient overlay */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, #0e0e0e, transparent)',
                  opacity: 0.5, pointerEvents: 'none',
                }} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
