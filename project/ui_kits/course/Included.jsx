function Included() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const feats = [
    ['play', 'Bite-size daily activities', 'Five playful tasks a week, each about ten minutes.'],
    ['printer', 'Printable companion pack', 'Letter cards, trackers, and a reading certificate.'],
    ['smartphone', 'Works on any screen', 'No app to install — open it on phone, tablet, or laptop.'],
    ['heart', 'Parent pep-talks', 'Short notes that tell you exactly what to say and when.'],
    ['infinity', 'Lifetime access', 'Revisit any week, at any pace, for younger siblings too.'],
    ['shield-check', '30-day guarantee', "If it's not for your family, get a full refund."],
  ];
  return (
    <section style={{ background: 'var(--surface-card)', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container">
        <div style={{ maxWidth: '50ch', marginBottom: 'var(--space-7)' }}>
          <Badge tone="clay">What's included</Badge>
          <h2 style={{ marginTop: 14, marginBottom: 0 }}>Everything you need, nothing you don't.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 18 }}>
          {feats.map(([icon, title, body]) => (
            <div key={title} style={{ display: 'flex', gap: 14 }}>
              <span style={{ flex: 'none', width: 46, height: 46, borderRadius: 'var(--radius-md)', background: 'var(--sage-100)', color: 'var(--sage-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i data-lucide={icon} style={{ width: 22, height: 22 }}></i>
              </span>
              <div>
                <h3 style={{ fontSize: 'var(--text-md)', margin: '2px 0 4px' }}>{title}</h3>
                <p style={{ margin: 0, fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Included = Included;
