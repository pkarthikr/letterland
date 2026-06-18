function Nav() {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const links = ['Approach', 'Resources', 'About', 'Contact'];
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 20,
      background: 'rgba(250,246,241,0.82)', backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-subtle)',
    }}>
      <div className="ll-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        <a href="#top" style={{ display: 'flex' }}><img src="../../assets/logo-full.svg" alt="Letter Land" style={{ height: 38 }} /></a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="ll-desktop-nav">
          {links.map((l) => (
            <a key={l} href={'#' + l.toLowerCase()} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
              color: 'var(--text-body)', padding: '8px 14px', borderRadius: 'var(--radius-pill)',
            }}>{l}</a>
          ))}
          <a href="#contact" style={{ marginLeft: 8 }}>
            <Button size="sm">Work with me</Button>
          </a>
        </nav>
        <button className="ll-mobile-toggle" onClick={() => setOpen(!open)} aria-label="Menu" style={{
          display: 'none', border: 'none', background: 'transparent', cursor: 'pointer', color: 'var(--text-strong)',
        }}><i data-lucide={open ? 'x' : 'menu'} style={{ width: 26, height: 26 }}></i></button>
      </div>
      {open && (
        <div className="ll-container" style={{ paddingBottom: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {links.map((l) => (
            <a key={l} href={'#' + l.toLowerCase()} onClick={() => setOpen(false)} style={{
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--text-body)', padding: '10px 4px',
            }}>{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}
window.Nav = Nav;
