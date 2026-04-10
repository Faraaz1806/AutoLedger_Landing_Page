import { useState, useEffect } from 'react';

/**
 * Detects in-app browsers (LinkedIn, Instagram, Facebook, Twitter, etc.)
 * and shows a floating banner prompting the user to open in Chrome/default browser.
 * In-app browsers block APK downloads, so this is essential.
 */
export default function InAppBrowserBanner() {
  const [isInAppBrowser, setIsInAppBrowser] = useState(false);
  const [dismissed, setDismissed] = useState(false);

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

  const currentUrl = window.location.href;

  const handleOpenInBrowser = () => {
    // Try Android intent to open in Chrome
    const intentUrl = `intent://${currentUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end`;
    window.location.href = intentUrl;

    // Fallback: if intent doesn't work after 500ms, try generic browser open
    setTimeout(() => {
      window.open(currentUrl, '_system');
    }, 500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#1a1a1a',
        borderTop: '1px solid rgba(218,243,141,0.15)',
        padding: '16px 20px',
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
        width: '40px', height: '40px', borderRadius: '10px',
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
          In-app browsers can't install APK files
        </div>
      </div>

      {/* Open button */}
      <button
        onClick={handleOpenInBrowser}
        style={{
          background: '#daf38d', color: '#1a2800',
          border: 'none', borderRadius: '10px',
          padding: '10px 16px', fontSize: '12px',
          fontWeight: 700, cursor: 'pointer',
          whiteSpace: 'nowrap', flexShrink: 0,
        }}
      >
        Open
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
  );
}
