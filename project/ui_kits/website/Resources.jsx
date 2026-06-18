function Resources() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const [filter, setFilter] = React.useState('all');
  const items = [
    { tone: 'clay', cat: 'printable', age: 'Ages 3–4', icon: 'shapes', title: 'Alphabet adventure cards', desc: '26 playful letter cards with sounds, actions, and tracing.', tag: 'Free' },
    { tone: 'sage', cat: 'course', age: 'Ages 4–6', icon: 'graduation-cap', title: 'Phonics, step by step', desc: 'A 6-week guided path from first sounds to first words.', tag: 'Course' },
    { tone: 'clay', cat: 'printable', age: 'Ages 5–6', icon: 'pencil-ruler', title: 'Sight word workbook', desc: '40 pages of low-pressure practice for early readers.', tag: '$9' },
    { tone: 'sage', cat: 'guide', age: 'All ages', icon: 'home', title: 'The 10-minute reading routine', desc: 'A parent guide to building a calm daily habit.', tag: 'Free' },
  ];
  const filters = [['all', 'All'], ['course', 'Courses'], ['printable', 'Printables'], ['guide', 'Guides']];
  const shown = filter === 'all' ? items : items.filter((i) => i.cat === filter);
  return (
    <section id="resources" style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 'var(--space-6)' }}>
          <div style={{ maxWidth: '46ch' }}>
            <Badge tone="sage">Resources</Badge>
            <h2 style={{ marginTop: 14, marginBottom: 6 }}>Tools you can use tonight.</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-md)', margin: 0 }}>Printables, courses, and guides — made for busy families.</p>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {filters.map(([id, label]) => (
              <button key={id} onClick={() => setFilter(id)} style={{
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13.5, cursor: 'pointer',
                padding: '8px 16px', borderRadius: 'var(--radius-pill)',
                border: '1.5px solid ' + (filter === id ? 'transparent' : 'var(--border-default)'),
                background: filter === id ? 'var(--accent)' : 'transparent',
                color: filter === id ? 'var(--text-on-accent)' : 'var(--text-muted)',
              }}>{label}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(248px, 1fr))', gap: 20 }}>
          {shown.map((it) => (
            <Card key={it.title} variant="elevated" interactive padding="none" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 120, background: it.tone === 'clay' ? 'var(--clay-100)' : 'var(--sage-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <i data-lucide={it.icon} style={{ width: 44, height: 44, color: it.tone === 'clay' ? 'var(--clay-600)' : 'var(--sage-600)' }}></i>
                <span style={{ position: 'absolute', top: 12, right: 12 }}><Badge tone={it.tag === 'Free' ? 'success' : it.tone}>{it.tag}</Badge></span>
              </div>
              <div style={{ padding: 18, display: 'flex', flexDirection: 'column', flex: 1 }}>
                <span style={{ fontSize: 12, color: 'var(--text-subtle)', fontWeight: 600 }}>{it.age}</span>
                <h3 style={{ fontSize: 'var(--text-lg)', margin: '4px 0 6px' }}>{it.title}</h3>
                <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, flex: 1 }}>{it.desc}</p>
                <a href="#" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--text-link)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  View resource <i data-lucide="arrow-right" style={{ width: 16, height: 16 }}></i>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Resources = Resources;
