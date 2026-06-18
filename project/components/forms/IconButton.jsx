import React, { useState } from 'react';

/**
 * Letter Land — IconButton
 * Square/round button holding a single icon node. Pass an icon as children.
 */
export function IconButton({
  children,
  label,                 // accessible label (required for a11y)
  variant = 'ghost',     // ghost | soft | secondary | primary
  size = 'md',           // sm | md | lg
  round = true,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const sizes = { sm: 32, md: 40, lg: 48 };
  const dim = sizes[size] || sizes.md;

  const palettes = {
    primary: { bg: 'var(--accent)', bgHover: 'var(--accent-hover)', color: 'var(--text-on-accent)', border: 'transparent' },
    secondary: { bg: 'var(--surface-card)', bgHover: 'var(--ink-50)', color: 'var(--text-strong)', border: 'var(--border-default)' },
    soft: { bg: 'var(--accent-soft)', bgHover: 'var(--accent-soft-hover)', color: 'var(--accent-on-soft)', border: 'transparent' },
    ghost: { bg: 'transparent', bgHover: 'var(--surface-sunken)', color: 'var(--text-muted)', border: 'transparent' },
  };
  const p = palettes[variant] || palettes.ghost;

  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dim,
        height: dim,
        color: p.color,
        background: hover && !disabled ? p.bgHover : p.bg,
        border: `1.5px solid ${p.border}`,
        borderRadius: round ? 'var(--radius-full)' : 'var(--radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
