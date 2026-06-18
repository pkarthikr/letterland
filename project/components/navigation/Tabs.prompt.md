Switch between sections. Provide `tabs` with `id`, `label`, and optional `content`.

```jsx
<Tabs variant="pill" tabs={[
  { id: 'about', label: 'About', content: <p>…</p> },
  { id: 'work', label: 'Work', content: <p>…</p> },
]} />
```

Variants: `underline` (default) and `pill` (segmented). Omit `content` to use it as pure navigation with `onChange`.
