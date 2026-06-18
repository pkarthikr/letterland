import React, { useState } from 'react';

/**
 * Letter Land — Accordion
 * Collapsible list of items. `multiple` allows several open at once.
 */
export function Accordion({
  items = [],        // [{ id, title, content }]
  multiple = false,
  defaultOpen = [],  // array of ids
  style = {},
  ...rest
}) {
  const [open, setOpen] = useState(new Set(defaultOpen));

  const toggle = (id) => {
    setOpen((prev) => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: 10, ...style,
    }} {...rest}>
      {items.map((it) => {
        const isOpen = open.has(it.id);
        return (
          <div key={it.id} style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <button onClick={() => toggle(it.id)} aria-expanded={isOpen}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: 12,
                background: 'transparent', border: 'none', cursor: 'pointer',
                padding: '16px 18px', textAlign: 'left',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                color: 'var(--text-strong)',
              }}>
              <span style={{ flex: 1 }}>{it.title}</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)"
                strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"
                style={{ flex: 'none', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform var(--duration-normal) var(--ease-out)' }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div style={{
              display: 'grid',
              gridTemplateRows: isOpen ? '1fr' : '0fr',
              transition: 'grid-template-rows var(--duration-normal) var(--ease-out)',
            }}>
              <div style={{ overflow: 'hidden' }}>
                <div style={{
                  padding: '0 18px 18px', fontFamily: 'var(--font-body)',
                  fontSize: 14.5, lineHeight: 1.6, color: 'var(--text-body)',
                }}>{it.content}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
