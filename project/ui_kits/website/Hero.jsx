function Hero() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <section id="top" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="ll-container ll-hero" style={{
        display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 48, alignItems: 'center',
        paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)',
      }}>
        <div>
          <Badge tone="sage" dot>Early literacy educator</Badge>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.75rem)', margin: '18px 0 0', lineHeight: 1.05 }}>
            Helping little ones <span style={{ color: 'var(--accent)' }}>fall in love</span> with letters.
          </h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: '46ch', marginTop: 18 }}>
            I'm Priya — I design playful, research-backed reading activities for ages 3–6, and help families build calm, joyful reading routines at home.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
            <a href="#resources"><Button size="lg" trailingIcon={<i data-lucide="arrow-right" style={{ width: 18, height: 18 }}></i>}>Explore resources</Button></a>
            <a href="#approach"><Button size="lg" variant="secondary">My approach</Button></a>
          </div>
          <div style={{ display: 'flex', gap: 28, marginTop: 36 }}>
            {[['12k+', 'families helped'], ['8 yrs', 'in classrooms'], ['4.9★', 'parent rating']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 24, color: 'var(--text-strong)' }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--text-subtle)' }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="../../assets/illustration-tiles.svg" alt="Alphabet blocks" style={{ width: '100%', maxWidth: 440 }} />
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
