import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'SMS Received',
    desc: 'Incoming transaction alerts are intercepted by our local engine the moment they arrive.',
    icon: 'sms',
  },
  {
    num: '02',
    title: 'Local Parsing',
    desc: 'Our offline AI extracts amount, merchant, and bank info — all within milliseconds.',
    icon: 'memory',
  },
  {
    num: '03',
    title: 'Auto-Logging',
    desc: 'Your dashboard updates instantly. No cloud, no internet, no manual entry ever.',
    icon: 'verified_user',
  },
];

const ease = [0.22, 1, 0.36, 1];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '96px 24px',
        background: '#0f0f0f',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ marginBottom: '64px', maxWidth: '500px' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'block', color: '#daf38d', fontSize: '11px',
              fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px',
            }}
          >
            The Protocol
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15,
            }}
          >
            How automated <span style={{ color: '#daf38d' }}>logging</span> works.
          </motion.h2>
        </div>

        {/* Steps Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease }}
              style={{
                position: 'relative',
                padding: '32px',
                background: '#141414',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.04)',
                overflow: 'hidden',
                transition: 'border-color 0.4s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(218,243,141,0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)'}
            >
              {/* Left accent */}
              <div style={{
                position: 'absolute', left: 0, top: '24px', bottom: '24px',
                width: '2px', background: 'rgba(218,243,141,0.08)', borderRadius: '2px',
              }} />

              {/* Step Number */}
              <div style={{
                color: 'rgba(218,243,141,0.1)', fontSize: '3.5rem',
                fontWeight: 900, marginBottom: '12px', lineHeight: 1, userSelect: 'none',
              }}>
                {step.num}
              </div>

              {/* Title */}
              <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '12px', letterSpacing: '-0.01em' }}>
                {step.title}
              </h4>

              {/* Description */}
              <p style={{ color: '#8a8a8a', fontSize: '0.9375rem', lineHeight: 1.7, paddingRight: '24px' }}>
                {step.desc}
              </p>

              {/* Icon */}
              <span
                className="material-symbols-outlined"
                style={{
                  position: 'absolute', top: '32px', right: '32px',
                  color: 'rgba(218,243,141,0.1)', fontSize: '28px',
                }}
              >
                {step.icon}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
