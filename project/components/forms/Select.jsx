import React, { useState } from 'react';

/**
 * Letter Land — Select
 * Styled native select with label, helper, and error.
 */
export function Select({
  label,
  options = [],          // [{value, label}] or ["a","b"]
  value,
  defaultValue,
  placeholder,
  helper,
  error,
  disabled = false,
  fullWidth = true,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || `ll-sel-${Math.random().toString(36).slice(2, 8)}`;
  const norm = options.map((o) => (typeof o === 'string' ? { value: o, label: o } : o));
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--accent)' : 'var(--border-default)';

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          display: 'block', marginBottom: 6,
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13, color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            width: '100%', appearance: 'none', WebkitAppearance: 'none',
            fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-body)',
            background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-md)',
            padding: '11px 40px 11px 14px',
            outline: 'none',
            boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
            transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {norm.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)"
          strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
          style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
      {(helper || error) && (
        <p style={{
          margin: '6px 2px 0', fontSize: 12.5, fontFamily: 'var(--font-body)',
          color: error ? 'var(--danger-text)' : 'var(--text-subtle)',
        }}>{error || helper}</p>
      )}
    </div>
  );
}
