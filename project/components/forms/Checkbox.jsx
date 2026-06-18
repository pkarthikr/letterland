import React from 'react';

/**
 * Letter Land — Checkbox
 * Controlled or uncontrolled checkbox with label.
 */
export function Checkbox({
  label,
  checked,
  defaultChecked,
  disabled = false,
  description,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || `ll-cb-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const toggle = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={fieldId} style={{
      display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1,
      ...style,
    }}>
      <input id={fieldId} type="checkbox" checked={on} defaultChecked={defaultChecked}
        disabled={disabled} onChange={toggle}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        flex: 'none', width: 22, height: 22, marginTop: description ? 1 : 0,
        borderRadius: 'var(--radius-sm)',
        border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
        background: on ? 'var(--accent)' : 'var(--surface-card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out)',
      }}>
        {on && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
            stroke="var(--white)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </span>
      {(label || description) && (
        <span>
          {label && <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 500, color: 'var(--text-strong)' }}>{label}</span>}
          {description && <span style={{ display: 'block', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-subtle)', marginTop: 2 }}>{description}</span>}
        </span>
      )}
    </label>
  );
}
