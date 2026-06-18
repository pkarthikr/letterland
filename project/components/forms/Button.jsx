import React, { useState } from 'react';

/**
 * Letter Land — Button
 * Primary interactive control. Rounded, warm, confident.
 */
export function Button({
  children,
  variant = 'primary',   // primary | secondary | soft | ghost | danger
  size = 'md',           // sm | md | lg
  pill = true,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sizes = {
    sm: { padding: '8px 14px', fontSize: '13px', gap: '6px', icon: 15 },
    md: { padding: '11px 20px', fontSize: '15px', gap: '8px', icon: 18 },
    lg: { padding: '15px 28px', fontSize: '17px', gap: '10px', icon: 20 },
  };
  const s = sizes[size] || sizes.md;

  const palettes = {
    primary: {
      bg: 'var(--accent)', bgHover: 'var(--accent-hover)', bgActive: 'var(--accent-active)',
      color: 'var(--text-on-accent)', border: 'transparent',
      shadow: 'var(--shadow-sm)', shadowHover: 'var(--shadow-md)',
    },
    secondary: {
      bg: 'var(--surface-card)', bgHover: 'var(--ink-50)', bgActive: 'var(--ink-100)',
      color: 'var(--text-strong)', border: 'var(--border-default)',
      shadow: 'var(--shadow-xs)', shadowHover: 'var(--shadow-sm)',
    },
    soft: {
      bg: 'var(--accent-soft)', bgHover: 'var(--accent-soft-hover)', bgActive: 'var(--clay-300)',
      color: 'var(--accent-on-soft)', border: 'transparent',
      shadow: 'none', shadowHover: 'none',
    },
    ghost: {
      bg: 'transparent', bgHover: 'var(--accent-soft)', bgActive: 'var(--accent-soft-hover)',
      color: 'var(--accent-on-soft)', border: 'transparent',
      shadow: 'none', shadowHover: 'none',
    },
    danger: {
      bg: 'var(--danger)', bgHover: 'var(--red-700)', bgActive: 'var(--red-700)',
      color: 'var(--white)', border: 'transparent',
      shadow: 'var(--shadow-sm)', shadowHover: 'var(--shadow-md)',
    },
  };
  const p = palettes[variant] || palettes.primary;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        gap: s.gap,
        padding: s.padding,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: s.fontSize,
        lineHeight: 1,
        letterSpacing: '-0.01em',
        color: p.color,
        background: disabled ? 'var(--ink-200)' : (active ? p.bgActive : hover ? p.bgHover : p.bg),
        border: `1.5px solid ${disabled ? 'transparent' : p.border}`,
        borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-md)',
        boxShadow: disabled ? 'none' : (hover ? p.shadowHover : p.shadow),
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.65 : 1,
        transform: active && !disabled ? 'translateY(1px) scale(0.99)' : 'none',
        transition: 'background var(--duration-fast) var(--ease-out), box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}
