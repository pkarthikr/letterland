import React from 'react';

/**
 * Letter Land — Switch
 * On/off toggle with optional label.
 */
export function Switch({
  label,
  checked,
  defaultChecked,
  disabled = false,
  size = 'md',     // sm | md
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || `ll-sw-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const dims = size === 'sm'
    ? { w: 38, h: 22, knob: 16, pad: 3 }
    : { w: 46, h: 27, knob: 21, pad: 3 };

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={fieldId} style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1,
      ...style,
    }}>
      <input id={fieldId} type="checkbox" checked={on} defaultChecked={defaultChecked}
        disabled={disabled} onChange={toggle}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        position: 'relative', flex: 'none',
        width: dims.w, height: dims.h, borderRadius: 'var(--radius-pill)',
        background: on ? 'var(--accent)' : 'var(--ink-300)',
        transition: 'background var(--duration-normal) var(--ease-out)',
      }}>
        <span style={{
          position: 'absolute', top: dims.pad,
          left: on ? dims.w - dims.knob - dims.pad : dims.pad,
          width: dims.knob, height: dims.knob,
          borderRadius: 'var(--radius-full)', background: 'var(--white)',
          boxShadow: 'var(--shadow-sm)',
          transition: 'left var(--duration-normal) var(--ease-soft)',
        }} />
      </span>
      {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>{label}</span>}
    </label>
  );
}
