import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export default function CTA() {
  return (
    <section id="cta" style={{ padding: '80px 24px 96px' }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease }}
        style={{
          maxWidth: '860px', margin: '0 auto',
          position: 'relative', overflow: 'hidden', borderRadius: '24px',
        }}
      >
        {/* Background */}
        <div style={{ position: 'absolute', inset: 0, background: '#111' }} />
        <div className="dotted-matrix" style={{ position: 'absolute', inset: 0, opacity: 0.4, pointerEvents: 'none' }} />

        {/* Glows */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '240px', height: '240px',
          background: 'rgba(218,243,141,0.08)', borderRadius: '50%',
          filter: 'blur(100px)', pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '180px', height: '180px',
          background: 'rgba(218,243,141,0.05)', borderRadius: '50%',
          filter: 'blur(80px)', pointerEvents: 'none',
        }} />

        {/* Border */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: '24px',
          border: '1px solid rgba(255,255,255,0.06)', pointerEvents: 'none',
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 10, padding: '56px 32px', textAlign: 'center' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '6px 14px', background: 'rgba(218,243,141,0.08)',
              borderRadius: '9999px', marginBottom: '32px',
              border: '1px solid rgba(218,243,141,0.12)',
            }}
          >
            <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '14px', fontVariationSettings: "'FILL' 1" }}>
              rocket_launch
            </span>
            <span style={{ color: '#daf38d', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Get Started
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18, duration: 0.7, ease }}
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 2.75rem)',
              fontWeight: 800, marginBottom: '16px',
              lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '560px', margin: '0 auto 16px',
            }}
          >
            Take control of your <span className="text-lime-gradient">finances</span> today.
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.26, duration: 0.7 }}
            style={{
              color: '#8a8a8a', fontSize: '15px', marginBottom: '40px',
              maxWidth: '420px', margin: '0 auto 40px', lineHeight: 1.6,
            }}
          >
            Join thousands who've automated their expense tracking.
            Download AutoLedger — it's free, forever.
          </motion.p>

          {/* Button */}
          <motion.a
            href="https://github.com/Faraaz1806/AutoLedger_Landing_Page/releases/latest/download/AutoLedger.apk"
            download="AutoLedger.apk"
            id="cta-download-btn"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.34, duration: 0.7, ease }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
              background: '#daf38d', color: '#1a2800',
              height: '56px', padding: '0 40px', borderRadius: '9999px',
              fontWeight: 700, fontSize: '15px', textDecoration: 'none',
              boxShadow: '0 0 50px rgba(218,243,141,0.2)', letterSpacing: '0.02em',
            }}
          >
            Download AutoLedger
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_forward</span>
          </motion.a>

          {/* Footer text */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45 }}
            style={{
              marginTop: '28px', color: '#555', fontSize: '10px',
              textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700,
            }}
          >
            Free forever · No ads · No BS
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
