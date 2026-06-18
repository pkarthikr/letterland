import React from 'react';

/**
 * Letter Land — Alert
 * Inline message banner for info, success, warning, danger.
 */
export function Alert({
  children,
  title,
  tone = 'info',   // info | success | warning | danger | sage
  icon,            // optional custom icon node
  onClose,
  style = {},
  ...rest
}) {
  const tones = {
    info: { bg: 'var(--info-soft)', accent: 'var(--info)', text: 'var(--info-text)' },
    success: { bg: 'var(--success-soft)', accent: 'var(--success)', text: 'var(--success-text)' },
    warning: { bg: 'var(--warning-soft)', accent: 'var(--warning)', text: 'var(--warning-text)' },
    danger: { bg: 'var(--danger-soft)', accent: 'var(--danger)', text: 'var(--danger-text)' },
    sage: { bg: 'var(--sage-100)', accent: 'var(--sage-600)', text: 'var(--sage-700)' },
  };
  const t = tones[tone] || tones.info;

  const defaultIcons = {
    info: 'M12 16v-4M12 8h.01',
    success: 'M20 6 9 17l-5-5',
    warning: 'M12 9v4M12 17h.01',
    danger: 'M18 6 6 18M6 6l12 12',
    sage: 'M12 16v-4M12 8h.01',
  };

  return (
    <div role="alert" style={{
      display: 'flex', gap: 12, alignItems: 'flex-start',
      background: t.bg, borderRadius: 'var(--radius-lg)',
      padding: '14px 16px',
      ...style,
    }} {...rest}>
      <span style={{
        flex: 'none', width: 22, height: 22, marginTop: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: t.accent,
      }}>
        {icon || (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            {tone !== 'success' && tone !== 'danger' && <circle cx="12" cy="12" r="9" />}
            <path d={defaultIcons[tone] || defaultIcons.info} />
          </svg>
        )}
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: t.text, marginBottom: children ? 3 : 0 }}>{title}</div>}
        {children && <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.5, color: 'var(--text-body)' }}>{children}</div>}
      </div>
      {onClose && (
        <button onClick={onClose} aria-label="Dismiss" style={{
          flex: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
          color: t.text, opacity: 0.6, padding: 2, display: 'flex',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
      )}
    </div>
  );
}
