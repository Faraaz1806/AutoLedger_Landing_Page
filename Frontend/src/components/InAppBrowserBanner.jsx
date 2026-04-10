import { useState, useEffect } from 'react';

/**
 * Detects in-app browsers (LinkedIn, Instagram, Facebook, Twitter, etc.)
 * and shows a floating banner guiding the user to open in their default browser.
 * In-app browsers block APK downloads.
 */
export default function InAppBrowserBanner() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [showSteps, setShowSteps] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || '';
    const inApp =
      /LinkedIn/i.test(ua) ||
      /FBAN|FBAV/i.test(ua) ||       // Facebook
      /Instagram/i.test(ua) ||
      /Twitter/i.test(ua) ||
      /Snapchat/i.test(ua) ||
      /Pinterest/i.test(ua) ||
      /Line\//i.test(ua) ||
      /wv\)/i.test(ua);              // Generic Android WebView

    setIsInAppBrowser(inApp);
  }, []);

  if (!isInAppBrowser || dismissed) return null;

  return (
    <>
      {/* Overlay when steps are shown */}
      {showSteps && (
        <div
          onClick={() => setShowSteps(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9998,
            background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Steps modal */}
      {showSteps && (
        <div style={{
          position: 'fixed', bottom: '90px', left: '16px', right: '16px',
          zIndex: 10000, background: '#1e1e1e',
          borderRadius: '20px', padding: '24px',
          border: '1px solid rgba(218,243,141,0.12)',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.5)',
          animation: 'slideUp 0.3s ease-out',
        }}>
          <div style={{ fontSize: '15px', fontWeight: 800, color: '#f0f0f0', marginBottom: '20px' }}>
            How to open in Chrome
          </div>

          {[
            { step: '1', icon: 'more_vert', text: 'Tap the ⋮ (three dots) at the top-right corner' },
            { step: '2', icon: 'open_in_browser', text: 'Select "Open in browser" or "Open in Chrome"' },
            { step: '3', icon: 'download', text: 'Then tap "Download for Android" again' },
          ].map((item) => (
            <div key={item.step} style={{
              display: 'flex', alignItems: 'center', gap: '14px',
              marginBottom: '16px',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '10px',
                background: 'rgba(218,243,141,0.1)', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '13px', fontWeight: 800, color: '#daf38d',
              }}>
                {item.step}
              </div>
              <span style={{ fontSize: '13px', color: '#ccc', lineHeight: 1.4 }}>
                {item.text}
              </span>
            </div>
          ))}

          <button
            onClick={() => setShowSteps(false)}
            style={{
              width: '100%', marginTop: '4px',
              background: 'rgba(255,255,255,0.06)', color: '#888',
              border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px',
              padding: '12px', fontSize: '13px', fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Got it
          </button>
        </div>
      )}

      {/* Bottom banner */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          background: '#1a1a1a',
          borderTop: '1px solid rgba(218,243,141,0.15)',
          padding: '14px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          boxShadow: '0 -4px 30px rgba(0,0,0,0.6)',
          animation: 'slideUp 0.4s ease-out',
        }}
      >
        <style>{`
          @keyframes slideUp {
            from { transform: translateY(100%); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
        `}</style>

        {/* Icon */}
        <div style={{
          width: '38px', height: '38px', borderRadius: '10px',
          background: 'rgba(218,243,141,0.1)', flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span className="material-symbols-outlined" style={{ color: '#daf38d', fontSize: '20px' }}>
            open_in_browser
          </span>
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '13px', fontWeight: 700, color: '#f0f0f0', marginBottom: '2px' }}>
            Open in Chrome to download
          </div>
          <div style={{ fontSize: '11px', color: '#888' }}>
            This browser can't install apps
          </div>
        </div>

        {/* Show me how button */}
        <button
          onClick={() => setShowSteps(true)}
          style={{
            background: '#daf38d', color: '#1a2800',
            border: 'none', borderRadius: '10px',
            padding: '10px 14px', fontSize: '12px',
            fontWeight: 700, cursor: 'pointer',
            whiteSpace: 'nowrap', flexShrink: 0,
          }}
        >
          Show me
        </button>

        {/* Dismiss */}
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px', flexShrink: 0,
          }}
        >
          <span className="material-symbols-outlined" style={{ color: '#555', fontSize: '18px' }}>
            close
          </span>
        </button>
      </div>
    </>
  );
}
