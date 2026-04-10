import { motion } from 'framer-motion';

const privacyPoints = [
  { icon: 'cloud_off', label: 'No Cloud Storage' },
  { icon: 'lock', label: 'No Tracking' },
  { icon: 'wifi_off', label: 'No Internet Required' },
  { icon: 'person_off', label: 'No Bank Login' },
];

const ease = [0.22, 1, 0.36, 1];

export default function Privacy() {
  return (
    <section
      id="privacy"
      style={{
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0f0f0f 0%, #0a0a0a 100%)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }} className="privacy-container">
        {/* Text */}
        <div style={{ flex: 1 }} className="privacy-text">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '10px',
              padding: '8px 16px', background: 'rgba(218,243,141,0.08)',
              borderRadius: '9999px', marginBottom: '32px',
              border: '1px solid rgba(218,243,141,0.12)',
            }}
          >
            <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>
              security
            </span>
            <span style={{ color: '#daf38d', fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
              Privacy Manifest
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.7, ease }}
            style={{
              fontSize: 'clamp(1.75rem, 5vw, 3rem)',
              fontWeight: 800, marginBottom: '28px', lineHeight: 1.1, letterSpacing: '-0.03em',
            }}
          >
            Your data stays <span style={{ color: '#daf38d' }}>on your phone.</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.7, ease }}
            className="privacy-desc"
            style={{
              color: '#8a8a8a', fontSize: '15px', lineHeight: 1.75,
              marginBottom: '40px', maxWidth: '520px',
            }}
          >
            We don't need your bank login. We don't need your email. We don't
            even need the internet. AutoLedger is a local-first utility built
            for total financial sovereignty.
          </motion.p>

          {/* Privacy Points */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.24, duration: 0.7, ease }}
            className="privacy-points"
            style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '20px', maxWidth: '420px',
            }}
          >
            {privacyPoints.map((point) => (
              <div key={point.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'rgba(218,243,141,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '18px' }}>
                    {point.icon}
                  </span>
                </div>
                <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#ccc' }}>{point.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Shield */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.8, ease }}
          style={{ flexShrink: 0 }}
        >
          <div className="privacy-shield" style={{
            width: '240px', height: '240px', borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
          }}>
            {/* Rings */}
            <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(218,243,141,0.06)' }} />
            <div style={{ position: 'absolute', inset: '12px', borderRadius: '50%', border: '1px solid rgba(218,243,141,0.04)' }} />
            <div style={{ position: 'absolute', inset: '24px', borderRadius: '50%', background: 'rgba(218,243,141,0.03)' }} />

            <div style={{
              position: 'absolute', inset: '-20px', borderRadius: '50%',
              border: '1px dashed rgba(218,243,141,0.05)',
              animation: 'subtle-rotate 30s linear infinite',
            }} />

            <div style={{
              position: 'absolute', width: '160px', height: '160px',
              borderRadius: '50%', background: 'rgba(218,243,141,0.04)', filter: 'blur(40px)',
            }} />

            <span
              className="material-symbols-outlined"
              style={{
                color: '#daf38d', fontSize: '5rem', position: 'relative', zIndex: 10,
                fontVariationSettings: "'FILL' 1",
                animation: 'pulse-glow 4s ease-in-out infinite',
                filter: 'drop-shadow(0 0 30px rgba(218,243,141,0.2))',
              }}
            >
              shield_with_heart
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
