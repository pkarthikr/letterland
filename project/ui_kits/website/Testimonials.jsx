function Testimonials() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const quotes = [
    { name: 'Anita R.', role: 'Parent of a 4-year-old', text: "My daughter asks for 'letter time' now. The activities are calm and actually fun — no more bedtime battles over reading." },
    { name: 'Marcus T.', role: 'Dad of twins', text: "Finally something that fits our chaotic evenings. Ten minutes, real progress, zero printing stress." },
    { name: 'Leena S.', role: 'Kindergarten teacher', text: "I recommend Letter Land to every family in my class. It's grounded in real phonics, not gimmicks." },
  ];
  return (
    <section id="about" style={{ background: 'var(--ink-900)', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container">
        <div style={{ textAlign: 'center', maxWidth: '50ch', margin: '0 auto var(--space-7)' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: 30, color: 'var(--clay-300)' }}>loved by families</span>
          <h2 style={{ color: 'var(--ink-50)', marginTop: 4 }}>Kind words from real homes.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {quotes.map((q) => (
            <div key={q.name} style={{ background: 'var(--ink-800)', borderRadius: 'var(--radius-lg)', padding: 24 }}>
              <div style={{ display: 'flex', gap: 3, marginBottom: 12, color: 'var(--clay-300)' }}>
                {[0, 1, 2, 3, 4].map((i) => <i key={i} data-lucide="star" style={{ width: 16, height: 16, fill: 'var(--clay-300)' }}></i>)}
              </div>
              <p style={{ color: 'var(--ink-100)', fontSize: 15, lineHeight: 1.6, margin: '0 0 18px' }}>"{q.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Avatar name={q.name} tone="clay" />
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--ink-50)', fontSize: 14.5 }}>{q.name}</div>
                  <div style={{ fontSize: 12.5, color: 'var(--ink-300)' }}>{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
