import React, { useState } from 'react';

/**
 * Letter Land — Input
 * Text field with optional label, helper, error, and adornments.
 */
export function Input({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  helper,
  error,
  leadingIcon = null,
  trailingIcon = null,
  disabled = false,
  fullWidth = true,
  id,
  onChange,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || `ll-input-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error
    ? 'var(--danger)'
    : focus ? 'var(--accent)' : 'var(--border-default)';

  return (
    <div style={{ width: fullWidth ? '100%' : 'auto', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          display: 'block', marginBottom: 6,
          fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 13,
          color: 'var(--text-strong)',
        }}>{label}</label>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        background: disabled ? 'var(--surface-sunken)' : 'var(--surface-card)',
        border: `1.5px solid ${borderColor}`,
        borderRadius: 'var(--radius-md)',
        padding: '0 14px',
        boxShadow: focus && !error ? 'var(--shadow-focus)' : 'none',
        transition: 'border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-fast) var(--ease-out)',
      }}>
        {leadingIcon && <span style={{ color: 'var(--text-subtle)', display: 'flex' }}>{leadingIcon}</span>}
        <input
          id={fieldId}
          type={type}
          placeholder={placeholder}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1, minWidth: 0,
            border: 'none', outline: 'none', background: 'transparent',
            fontFamily: 'var(--font-body)', fontSize: 15,
            color: 'var(--text-body)',
            padding: '11px 0',
          }}
          {...rest}
        />
        {trailingIcon && <span style={{ color: 'var(--text-subtle)', display: 'flex' }}>{trailingIcon}</span>}
      </div>
      {(helper || error) && (
        <p style={{
          margin: '6px 2px 0', fontSize: 12.5,
          fontFamily: 'var(--font-body)',
          color: error ? 'var(--danger-text)' : 'var(--text-subtle)',
        }}>{error || helper}</p>
      )}
    </div>
  );
}
