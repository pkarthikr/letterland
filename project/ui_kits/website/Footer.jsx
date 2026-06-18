function Footer() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const submit = (e) => { e.preventDefault(); if (email.trim()) setSent(true); };
  return (
    <footer id="contact">
      <section style={{ paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
        <div className="ll-container">
          <Card variant="soft" padding="lg" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 40, alignItems: 'center' }} className="ll-cta">
            <div>
              <h2 style={{ margin: '0 0 8px' }}>Get a free activity every week.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-md)', margin: 0, maxWidth: '40ch' }}>
                One small, joyful reading idea in your inbox each Sunday. No spam, ever.
              </p>
            </div>
            <div>
              {sent ? (
                <Alert tone="success" title="You're in!">Check your inbox to confirm your subscription.</Alert>
              ) : (
                <form onSubmit={submit} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ flex: 1 }}>
                    <Input placeholder="you@example.com" type="email" value={email} onChange={(e) => setEmail(e.target.value)} leadingIcon={<i data-lucide="mail" style={{ width: 18, height: 18 }}></i>} />
                  </div>
                  <Button type="submit" size="lg" style={{ flex: 'none' }}>Subscribe</Button>
                </form>
              )}
            </div>
          </Card>
        </div>
      </section>
      <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 'var(--space-6)', paddingBottom: 'var(--space-6)' }}>
        <div className="ll-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
          <img src="../../assets/logo-full.svg" alt="Letter Land" style={{ height: 34 }} />
          <div style={{ display: 'flex', gap: 16, color: 'var(--text-subtle)' }}>
            {['instagram', 'youtube', 'mail'].map((i) => (
              <a key={i} href="#" style={{ color: 'var(--text-subtle)', display: 'flex' }}><i data-lucide={i} style={{ width: 20, height: 20 }}></i></a>
            ))}
          </div>
          <span style={{ fontSize: 13, color: 'var(--text-subtle)' }}>© 2026 Letter Land · Made with care</span>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
