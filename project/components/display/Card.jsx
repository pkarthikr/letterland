import React, { useState } from 'react';

/**
 * Letter Land — Card
 * Soft, rounded surface container. Optional hover lift for clickable cards.
 */
export function Card({
  children,
  variant = 'elevated',  // elevated | outlined | soft
  padding = 'md',        // none | sm | md | lg
  interactive = false,
  as = 'div',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const Tag = as;
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-5)', lg: 'var(--space-7)' };

  const variants = {
    elevated: { bg: 'var(--surface-card)', border: 'transparent', shadow: 'var(--shadow-sm)', shadowHover: 'var(--shadow-lg)' },
    outlined: { bg: 'var(--surface-card)', border: 'var(--border-subtle)', shadow: 'none', shadowHover: 'var(--shadow-md)' },
    soft: { bg: 'var(--surface-sage-soft)', border: 'transparent', shadow: 'none', shadowHover: 'var(--shadow-sm)' },
  };
  const v = variants[variant] || variants.elevated;

  return (
    <Tag
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: v.bg,
        border: `1px solid ${v.border}`,
        borderRadius: 'var(--radius-lg)',
        padding: pads[padding] ?? pads.md,
        boxShadow: interactive && hover ? v.shadowHover : v.shadow,
        transform: interactive && hover ? 'translateY(-3px)' : 'none',
        cursor: interactive ? 'pointer' : 'default',
        transition: 'box-shadow var(--duration-normal) var(--ease-out), transform var(--duration-normal) var(--ease-out)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
