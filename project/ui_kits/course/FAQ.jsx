function FAQ() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const qs = [
    { id: 'q1', title: 'What ages is this course for?', content: 'It is designed for ages 4–6, but works beautifully for any child who is starting to show interest in letters and sounds.' },
    { id: 'q2', title: 'How much time does it take?', content: 'About ten minutes a day, five days a week. The activities are short by design — little and often beats long and tiring.' },
    { id: 'q3', title: 'Do I need to print anything?', content: 'No. Everything works on screen. The printable pack is an optional bonus if your child enjoys hands-on activities.' },
    { id: 'q4', title: 'What if it is not right for us?', content: 'You have 30 days to try it. If it is not a fit for your family, email me and I will refund you in full — no hard feelings.' },
  ];
  return (
    <section style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container" style={{ maxWidth: 'var(--container-md)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <Badge tone="sage">Questions</Badge>
          <h2 style={{ marginTop: 14, marginBottom: 0 }}>Good things to know.</h2>
        </div>
        <Accordion items={qs} />
        <div style={{ textAlign: 'center', marginTop: 'var(--space-7)', color: 'var(--text-muted)' }}>
          <img src="../../assets/logo-mark.svg" alt="" style={{ height: 40, marginBottom: 12 }} />
          <p style={{ margin: 0, fontSize: 13.5 }}>© 2026 Letter Land · Made with care for little readers</p>
        </div>
      </div>
    </section>
  );
}
window.FAQ = FAQ;
