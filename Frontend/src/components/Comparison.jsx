import { motion } from 'framer-motion';

const rows = [
  { feature: 'Privacy Priority', exptrack: true, others: false },
  { feature: 'Offline Mode', exptrack: true, others: false },
  { feature: 'No Subscriptions', exptrack: true, others: false },
  { feature: 'Auto-Tracking via SMS', exptrack: true, othersText: 'Manual Only' },
  { feature: 'No Internet Required', exptrack: true, others: false },
  { feature: 'Bank Login Required', exptrack: false, exptrackText: 'Never', others: true },
];

const ease = [0.22, 1, 0.36, 1];

export default function Comparison() {
  return (
    <section
      id="compare"
      style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{
            display: 'block', color: '#daf38d', fontSize: '11px',
            fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '12px',
          }}>
            Why AutoLedger?
          </span>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15,
          }}>
            AutoLedger vs <span style={{ color: '#8a8a8a' }}>Others</span>
          </h2>
        </motion.div>

        {/* Desktop Table */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="comparison-table-desktop"
          style={{
            overflow: 'hidden', borderRadius: '16px',
            border: '1px solid rgba(255,255,255,0.06)', background: '#111',
          }}
        >
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#161616' }}>
                <th style={{ padding: '20px 24px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, color: '#666' }}>
                  Feature
                </th>
                <th style={{ padding: '20px 24px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, color: '#daf38d', textAlign: 'center' }}>
                  AutoLedger
                </th>
                <th style={{ padding: '20px 24px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.18em', fontWeight: 700, color: '#555', textAlign: 'center' }}>
                  Modern Apps
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} style={{ borderTop: i > 0 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                  <td style={{ padding: '18px 24px', fontSize: '0.9375rem', fontWeight: 500 }}>{row.feature}</td>
                  <td style={{ padding: '18px 24px', textAlign: 'center' }}>
                    {row.exptrackText ? (
                      <span style={{ color: '#daf38d', fontSize: '14px', fontWeight: 700 }}>{row.exptrackText}</span>
                    ) : row.exptrack ? (
                      <span className="material-symbols-outlined" style={{ color: '#daf38d', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined" style={{ color: '#333' }}>cancel</span>
                    )}
                  </td>
                  <td style={{ padding: '18px 24px', textAlign: 'center' }}>
                    {row.othersText ? (
                      <span style={{ color: '#555', fontSize: '12px', fontStyle: 'italic', fontWeight: 500 }}>{row.othersText}</span>
                    ) : row.others ? (
                      <span className="material-symbols-outlined" style={{ color: 'rgba(255,115,81,0.6)', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    ) : (
                      <span className="material-symbols-outlined" style={{ color: '#333' }}>cancel</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile Cards */}
        <div className="comparison-cards-mobile">
          {rows.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{
                background: '#131313', borderRadius: '14px',
                padding: '20px 24px',
                border: '1px solid rgba(255,255,255,0.04)',
              }}
            >
              <div style={{ fontSize: '0.9375rem', fontWeight: 600, marginBottom: '14px' }}>{row.feature}</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {row.exptrackText ? (
                    <span style={{ color: '#daf38d', fontSize: '13px', fontWeight: 700 }}>{row.exptrackText}</span>
                  ) : row.exptrack ? (
                    <>
                      <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span style={{ color: '#daf38d', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>AutoLedger</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined" style={{ color: '#333', fontSize: '20px' }}>cancel</span>
                      <span style={{ color: '#555', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>AutoLedger</span>
                    </>
                  )}
                </div>
                <div style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.06)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {row.othersText ? (
                    <span style={{ color: '#555', fontSize: '12px', fontStyle: 'italic', fontWeight: 500 }}>{row.othersText}</span>
                  ) : row.others ? (
                    <>
                      <span className="material-symbols-outlined" style={{ color: 'rgba(255,115,81,0.6)', fontSize: '20px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span style={{ color: '#555', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Others</span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined" style={{ color: '#333', fontSize: '20px' }}>cancel</span>
                      <span style={{ color: '#555', fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Others</span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
