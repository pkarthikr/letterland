Surface container for grouping content — the workhorse layout primitive.

```jsx
<Card variant="elevated" padding="lg">
  <h3>Letter of the week</h3>
  <p>Trace, sound, and find things that start with “B”.</p>
</Card>
<Card variant="outlined" interactive onClick={open}>…</Card>
```

Variants: `elevated` (white + shadow), `outlined` (hairline border), `soft` (sage tint). `interactive` adds a hover lift.
