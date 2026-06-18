import React from 'react';

/**
 * Letter Land — Radio
 * Single radio control; group several with the same `name`.
 */
export function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const fieldId = id || `ll-rd-${Math.random().toString(36).slice(2, 8)}`;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;

  const pick = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(true);
    onChange && onChange(e);
  };

  return (
    <label htmlFor={fieldId} style={{
      display: 'flex', alignItems: description ? 'flex-start' : 'center', gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1,
      ...style,
    }}>
      <input id={fieldId} type="radio" name={name} value={value} checked={on}
        defaultChecked={defaultChecked} disabled={disabled} onChange={pick}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} {...rest} />
      <span aria-hidden="true" style={{
        flex: 'none', width: 22, height: 22, marginTop: description ? 1 : 0,
        borderRadius: 'var(--radius-full)',
        border: `1.5px solid ${on ? 'var(--accent)' : 'var(--border-strong)'}`,
        background: 'var(--surface-card)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'border-color var(--duration-fast) var(--ease-out)',
      }}>
        <span style={{
          width: 11, height: 11, borderRadius: 'var(--radius-full)',
          background: 'var(--accent)',
          transform: on ? 'scale(1)' : 'scale(0)',
          transition: 'transform var(--duration-normal) var(--ease-soft)',
        }} />
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
