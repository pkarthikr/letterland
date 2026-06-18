function Curriculum() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const weeks = [
    { id: 'w1', title: 'Week 1 · Listening for sounds', content: 'Tune little ears to the sounds around them through games, rhymes, and silly songs — the foundation of phonics.' },
    { id: 'w2', title: 'Week 2 · First letter sounds', content: 'Meet s, a, t, p, i, n through play. Trace, find, and act out each sound with no pressure.' },
    { id: 'w3', title: 'Week 3 · Blending sounds', content: 'Put sounds together to read first tiny words like “sat” and “pin”. Celebrate every win.' },
    { id: 'w4', title: 'Week 4 · More letters & blends', content: 'Expand the toolkit and start spotting words in the wild — on signs, boxes, and books.' },
    { id: 'w5', title: 'Week 5 · First sentences', content: 'Read short, joyful sentences together and build confidence with repetition and praise.' },
    { id: 'w6', title: 'Week 6 · Reading for fun', content: 'Bring it all together with a simple decodable story and a keepsake reading certificate.' },
  ];
  return (
    <section style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container" style={{ maxWidth: 'var(--container-md)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-7)' }}>
          <Badge tone="sage">The curriculum</Badge>
          <h2 style={{ marginTop: 14, marginBottom: 6 }}>Six gentle weeks to first words.</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-md)', margin: 0 }}>Each week is five short activities — about ten minutes a day.</p>
        </div>
        <Accordion defaultOpen={['w1']} items={weeks} />
      </div>
    </section>
  );
}
window.Curriculum = Curriculum;
