import React from 'react';

/**
 * Letter Land — Avatar
 * Image or initials avatar with warm fallback colors.
 */
export function Avatar({
  src,
  name = '',
  size = 'md',     // sm | md | lg | xl
  shape = 'circle',// circle | rounded
  tone,            // optional override: clay | sage | ink
  style = {},
  ...rest
}) {
  const dims = { sm: 32, md: 40, lg: 52, xl: 72 };
  const fonts = { sm: 13, md: 15, lg: 19, xl: 26 };
  const dim = dims[size] || dims.md;

  const initials = name
    .split(' ').filter(Boolean).slice(0, 2)
    .map((w) => w[0].toUpperCase()).join('');

  const tones = {
    clay: { bg: 'var(--clay-200)', color: 'var(--clay-800)' },
    sage: { bg: 'var(--sage-200)', color: 'var(--sage-800)' },
    ink: { bg: 'var(--ink-200)', color: 'var(--ink-800)' },
  };
  const palette = [tones.clay, tones.sage, tones.ink];
  const picked = tone ? tones[tone] : palette[(name.charCodeAt(0) || 0) % palette.length];

  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: dim, height: dim, flex: 'none',
      borderRadius: shape === 'circle' ? 'var(--radius-full)' : 'var(--radius-md)',
      background: picked.bg, color: picked.color, overflow: 'hidden',
      fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: fonts[size] || fonts.md,
      boxShadow: 'inset 0 0 0 1.5px rgba(74,66,59,0.06)',
      ...style,
    }} {...rest}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '?')}
    </span>
  );
}
