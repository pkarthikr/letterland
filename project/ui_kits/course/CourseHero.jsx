function CourseHero() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <section style={{ background: 'var(--surface-card)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="ll-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 70 }}>
        <img src="../../assets/logo-full.svg" alt="Letter Land" style={{ height: 36 }} />
        <a href="#enroll"><Button size="sm">Enroll now</Button></a>
      </div>
      <div className="ll-container ll-chero" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center', paddingTop: 'var(--space-9)', paddingBottom: 'var(--space-9)' }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
            <Badge tone="clay" variant="solid">6-week course</Badge>
            <Badge tone="sage">Ages 4–6</Badge>
          </div>
          <h1 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.25rem)', margin: '0 0 16px', lineHeight: 1.06 }}>
            Phonics, step by step.
          </h1>
          <p style={{ fontSize: 'var(--text-md)', color: 'var(--text-muted)', maxWidth: '44ch', margin: '0 0 24px' }}>
            A calm, guided path from first sounds to first words — ten joyful minutes a day, designed for real family life.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
            <a href="#enroll"><Button size="lg" trailingIcon={<i data-lucide="arrow-right" style={{ width: 18, height: 18 }}></i>}>Start the course</Button></a>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ display: 'flex' }}>
                {['Ana', 'Ben', 'Cara'].map((n, i) => (
                  <span key={n} style={{ marginLeft: i ? -10 : 0, border: '2px solid var(--surface-card)', borderRadius: '50%' }}><Avatar name={n} size="sm" /></span>
                ))}
              </div>
              <span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>2,400+ enrolled</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Card variant="elevated" padding="none" style={{ width: '100%', maxWidth: 420, overflow: 'hidden' }}>
            <div style={{ background: 'var(--clay-100)', padding: '32px 28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src="../../assets/illustration-tiles.svg" alt="" style={{ width: 220 }} />
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 34, color: 'var(--text-strong)' }}>$49</span>
                <span style={{ fontSize: 14, color: 'var(--text-subtle)', textDecoration: 'line-through' }}>$79</span>
                <span style={{ marginLeft: 'auto' }}><Badge tone="success">Launch price</Badge></span>
              </div>
              {['Lifetime access', '6 weeks of activities', 'Printable companion pack', '30-day money-back guarantee'].map((t) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', fontSize: 14.5, color: 'var(--text-body)' }}>
                  <i data-lucide="check" style={{ width: 18, height: 18, color: 'var(--success)' }}></i>{t}
                </div>
              ))}
              <a href="#enroll" style={{ display: 'block', marginTop: 16 }}><Button fullWidth size="lg">Enroll now</Button></a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
window.CourseHero = CourseHero;
