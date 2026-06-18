import React from 'react';

/**
 * Letter Land — Badge
 * Small status / category pill.
 */
export function Badge({
  children,
  tone = 'neutral',   // neutral | clay | sage | success | warning | danger | info
  variant = 'soft',   // soft | solid | outline
  size = 'md',        // sm | md
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { soft: 'var(--ink-100)', solid: 'var(--ink-600)', text: 'var(--text-muted)', solidText: 'var(--white)', dot: 'var(--ink-500)' },
    clay: { soft: 'var(--clay-100)', solid: 'var(--clay-500)', text: 'var(--clay-700)', solidText: 'var(--white)', dot: 'var(--clay-500)' },
    sage: { soft: 'var(--sage-100)', solid: 'var(--sage-500)', text: 'var(--sage-700)', solidText: 'var(--white)', dot: 'var(--sage-600)' },
    success: { soft: 'var(--success-soft)', solid: 'var(--success)', text: 'var(--success-text)', solidText: 'var(--white)', dot: 'var(--success)' },
    warning: { soft: 'var(--warning-soft)', solid: 'var(--warning)', text: 'var(--warning-text)', solidText: 'var(--white)', dot: 'var(--warning)' },
    danger: { soft: 'var(--danger-soft)', solid: 'var(--danger)', text: 'var(--danger-text)', solidText: 'var(--white)', dot: 'var(--danger)' },
    info: { soft: 'var(--info-soft)', solid: 'var(--info)', text: 'var(--info-text)', solidText: 'var(--white)', dot: 'var(--info)' },
  };
  const t = tones[tone] || tones.neutral;
  const sm = size === 'sm';

  let bg = 'transparent', color = t.text, border = 'transparent';
  if (variant === 'soft') { bg = t.soft; color = t.text; }
  else if (variant === 'solid') { bg = t.solid; color = t.solidText; }
  else if (variant === 'outline') { bg = 'transparent'; color = t.text; border = 'currentColor'; }

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: dot ? 6 : 0,
      fontFamily: 'var(--font-display)', fontWeight: 700,
      fontSize: sm ? 11 : 12.5, lineHeight: 1, letterSpacing: '0.01em',
      padding: sm ? '4px 9px' : '5px 12px',
      color, background: bg,
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-pill)',
      ...style,
    }} {...rest}>
      {dot && <span style={{ width: 7, height: 7, borderRadius: '50%', background: t.dot }} />}
      {children}
    </span>
  );
}
