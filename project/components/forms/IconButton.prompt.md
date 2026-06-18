Icon-only button for toolbars, card actions, and nav. Always pass `label` for accessibility.

```jsx
<IconButton label="Search" variant="ghost"><i data-lucide="search"></i></IconButton>
<IconButton label="Add" variant="soft" round={false}><i data-lucide="plus"></i></IconButton>
```

Variants `primary | secondary | soft | ghost`. Sizes `sm (32) | md (40) | lg (48)`. `round` defaults true.
