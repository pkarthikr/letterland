Primary call-to-action button — use for the main action in any view; pair one `primary` with `secondary`/`ghost` companions.

```jsx
<Button variant="primary" size="md" onClick={save}>Start learning</Button>
<Button variant="secondary" leadingIcon={<Icon name="arrow-left" />}>Back</Button>
<Button variant="soft" size="sm">Maybe later</Button>
```

Variants: `primary` (clay fill), `secondary` (outline), `soft` (clay tint), `ghost` (text only), `danger`. Sizes `sm | md | lg`. `pill` defaults true; set `pill={false}` for a 12px-radius rectangle. `fullWidth` stretches to container. Accepts `leadingIcon` / `trailingIcon` nodes.
