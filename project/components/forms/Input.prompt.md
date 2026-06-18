Labeled text field with helper/error states and optional leading/trailing icons.

```jsx
<Input label="Parent email" type="email" placeholder="you@example.com"
  helper="We'll only send progress updates." />
<Input label="Child's name" error="Please add a name" />
```

`error` overrides `helper` and turns the border red. Pass icon nodes via `leadingIcon` / `trailingIcon`. Controlled via `value`+`onChange` or uncontrolled via `defaultValue`.
