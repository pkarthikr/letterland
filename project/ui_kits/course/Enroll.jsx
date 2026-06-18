function Enroll() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const [plan, setPlan] = React.useState('full');
  const [step, setStep] = React.useState('form');
  const [data, setData] = React.useState({ name: '', email: '' });
  const submit = (e) => { e.preventDefault(); if (data.name.trim() && data.email.trim()) setStep('done'); };

  return (
    <section id="enroll" style={{ background: 'var(--ink-900)', paddingTop: 'var(--space-10)', paddingBottom: 'var(--space-10)' }}>
      <div className="ll-container" style={{ maxWidth: 'var(--container-md)' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <span style={{ fontFamily: 'var(--font-accent)', fontSize: 30, color: 'var(--clay-300)' }}>let's begin</span>
          <h2 style={{ color: 'var(--ink-50)', margin: '2px 0 0' }}>Enroll your little reader.</h2>
        </div>
        <Card variant="elevated" padding="lg" style={{ maxWidth: 520, margin: '0 auto' }}>
          {step === 'done' ? (
            <div style={{ textAlign: 'center', padding: '12px 0' }}>
              <span style={{ display: 'inline-flex', width: 64, height: 64, borderRadius: '50%', background: 'var(--success-soft)', color: 'var(--success)', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <i data-lucide="party-popper" style={{ width: 32, height: 32 }}></i>
              </span>
              <h3 style={{ margin: '0 0 6px' }}>You're enrolled, {data.name.split(' ')[0]}!</h3>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Week 1 is waiting in your inbox at {data.email}.</p>
            </div>
          ) : (
            <form onSubmit={submit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
                {[['full', 'Full course', '$49 once'], ['monthly', 'Pay monthly', '3 × $19']].map(([id, t, p]) => (
                  <button type="button" key={id} onClick={() => setPlan(id)} style={{
                    textAlign: 'left', cursor: 'pointer', padding: '14px 16px', borderRadius: 'var(--radius-md)',
                    border: '1.5px solid ' + (plan === id ? 'var(--accent)' : 'var(--border-default)'),
                    background: plan === id ? 'var(--accent-soft)' : 'var(--surface-card)',
                  }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--text-strong)' }}>{t}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{p}</div>
                  </button>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <Input label="Your name" placeholder="Priya Karthik" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                <Input label="Email" type="email" placeholder="you@example.com" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                <Button type="submit" size="lg" fullWidth>Enroll for {plan === 'full' ? '$49' : '3 × $19'}</Button>
                <p style={{ textAlign: 'center', fontSize: 12.5, color: 'var(--text-subtle)', margin: 0 }}>30-day money-back guarantee · cancel anytime</p>
              </div>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}
window.Enroll = Enroll;
