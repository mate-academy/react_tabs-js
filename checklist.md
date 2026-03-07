1. Add `key` when rendering lists
2. WE suggest you never compare the object with another object with strict comparison. It could produce a lot of bugs. Compare object using their unique identifier (id, title)

BAD EXAMPLE:
```jsx
if (cat === selectedCat) {
```

GOOD EXAMPLE:
```tsx
if (cat.id === selectedCat.id) {
```
