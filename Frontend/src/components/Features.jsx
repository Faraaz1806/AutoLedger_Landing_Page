import { motion } from 'framer-motion';

const features = [
  {
    icon: 'category',
    title: 'Smart Categorization',
    desc: 'Automatically tags expenses based on merchant signatures and learned behavior patterns.',
    accent: '#daf38d',
  },
  {
    icon: 'alternate_email',
    title: 'UPI Nicknames',
    desc: 'Transforms messy VPA strings into clean, readable merchant names you recognize.',
    accent: '#ede855',
  },
  {
    icon: 'insights',
    title: 'Deep Analytics',
    desc: 'Interactive heatmaps and velocity charts to spot your spending leaks instantly.',
    accent: '#daf38d',
  },
  {
    icon: 'database',
    title: 'CSV Export',
    desc: 'Own your data. Export your complete history to Excel or Google Sheets anytime.',
    accent: '#ede855',
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
        >
          <span style={{
            display: 'block', color: '#daf38d', fontSize: '11px',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px',
          }}>
            Core Features
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, maxWidth: '500px', margin: '0 auto',
          }}>
            Everything you need, <span style={{ color: '#daf38d' }}>nothing you don't.</span>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '16px',
        }}>
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease }}
              style={{
                position: 'relative',
                background: '#131313',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.04)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transition: 'border-color 0.4s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'}
            >
              {/* Top accent line */}
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: '160px', height: '1px', opacity: 0.3,
                background: `linear-gradient(90deg, transparent, ${feat.accent}, transparent)`,
              }} />

              {/* Dotted matrix */}
              <div className="dotted-matrix" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.5 }} />

              {/* Icon */}
              <div style={{
                width: '48px', height: '48px', borderRadius: '12px',
                background: `${feat.accent}12`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '40px', position: 'relative', zIndex: 1,
              }}>
                <span
                  className="material-symbols-outlined"
                  style={{ color: feat.accent, fontSize: '24px', fontVariationSettings: "'FILL' 1" }}
                >
                  {feat.icon}
                </span>
              </div>

              {/* Title */}
              <h4 style={{
                fontSize: '1.0625rem', fontWeight: 700, marginBottom: '12px',
                position: 'relative', zIndex: 1, letterSpacing: '-0.01em',
              }}>
                {feat.title}
              </h4>

              {/* Description */}
              <p style={{
                color: '#8a8a8a', fontSize: '0.9375rem', lineHeight: 1.7,
                position: 'relative', zIndex: 1,
              }}>
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
