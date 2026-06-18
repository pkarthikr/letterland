function Approach() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const pillars = [
    ['heart-handshake', 'Play first', 'Learning sticks when it feels like play — games, songs, and stories, never drills.'],
    ['sprout', 'One small step', 'Tiny daily wins build real momentum. Ten calm minutes beats an hour of pressure.'],
    ['book-open', 'Evidence-based', 'Every activity is grounded in phonics research and years of classroom practice.'],
  ];
  return (
    <section id="approach" style={{ background: 'var(--surface-card)', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container">
        <div style={{ maxWidth: '52ch', marginBottom: 'var(--space-7)' }}>
          <Badge tone="clay">My approach</Badge>
          <h2 style={{ marginTop: 14 }}>Calm for parents, joyful for kids.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-md)', margin: 0 }}>
            A simple philosophy that fits into real family life — no flashcards-and-tears required.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: 20 }}>
          {pillars.map(([icon, title, body]) => (
            <Card key={title} variant="outlined" padding="lg">
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                width: 52, height: 52, borderRadius: 'var(--radius-lg)',
                background: 'var(--accent-soft)', color: 'var(--accent-on-soft)', marginBottom: 16,
              }}><i data-lucide={icon} style={{ width: 26, height: 26 }}></i></span>
              <h3 style={{ fontSize: 'var(--text-lg)', margin: '0 0 6px' }}>{title}</h3>
              <p style={{ margin: 0, fontSize: 14.5, color: 'var(--text-muted)', lineHeight: 1.6 }}>{body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Approach = Approach;
