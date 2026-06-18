import React, { useState } from 'react';

/**
 * Letter Land — Tabs
 * Controlled or uncontrolled tab switcher. Renders content for active tab.
 */
export function Tabs({
  tabs = [],         // [{ id, label, content }]
  value,
  defaultValue,
  variant = 'underline', // underline | pill
  onChange,
  style = {},
  ...rest
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;

  const select = (id) => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };

  const activeTab = tabs.find((t) => t.id === active);
  const pill = variant === 'pill';

  return (
    <div style={style} {...rest}>
      <div role="tablist" style={{
        display: 'inline-flex', gap: pill ? 4 : 4,
        background: pill ? 'var(--surface-sunken)' : 'transparent',
        padding: pill ? 4 : 0,
        borderRadius: pill ? 'var(--radius-pill)' : 0,
        borderBottom: pill ? 'none' : '1.5px solid var(--border-subtle)',
      }}>
        {tabs.map((t) => {
          const on = t.id === active;
          return (
            <button key={t.id} role="tab" aria-selected={on} onClick={() => select(t.id)}
              style={{
                border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14.5,
                padding: pill ? '8px 18px' : '10px 14px',
                borderRadius: pill ? 'var(--radius-pill)' : 0,
                color: on ? (pill ? 'var(--text-strong)' : 'var(--accent-on-soft)') : 'var(--text-muted)',
                background: pill ? (on ? 'var(--surface-card)' : 'transparent') : 'transparent',
                boxShadow: pill && on ? 'var(--shadow-xs)' : 'none',
                borderBottom: pill ? 'none' : `2.5px solid ${on ? 'var(--accent)' : 'transparent'}`,
                marginBottom: pill ? 0 : '-1.5px',
                transition: 'color var(--duration-fast) var(--ease-out), background var(--duration-fast) var(--ease-out)',
              }}>
              {t.label}
            </button>
          );
        })}
      </div>
      {activeTab && activeTab.content !== undefined && (
        <div role="tabpanel" style={{ paddingTop: 'var(--space-5)' }}>{activeTab.content}</div>
      )}
    </div>
  );
}
