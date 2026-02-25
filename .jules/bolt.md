## 2025-05-15 - [React List Optimization]
**Learning:** In React lists, using `React.memo` on list items is only effective if callbacks passed to them are also referentially stable. Replacing inline arrow functions (e.g., `() => handler(id)`) with direct function references and passing the ID/index as a separate prop allows for O(1) re-renders on item updates instead of O(n).
**Action:** Always check for inline arrow functions in `.map()` calls when memoizing list components. Refactor child components to accept the ID and the stable handler separately.
