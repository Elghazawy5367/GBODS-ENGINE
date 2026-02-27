# Contributing to GBODS Engine V5 PRO

Thank you for your interest in contributing!

## Development Setup

1. Fork and clone the repository
2. Open `src/index.html` in your browser — no build step needed
3. Edit files in `src/js/` and `src/css/`
4. Refresh browser to see changes

## Code Style

- **No frameworks** — vanilla JS only
- **No build tools** — keep it zero-dependency
- **CSS Custom Properties** — use tokens from `:root`, never hardcode colors
- **Functions** — keep functions under 50 lines where possible
- **Naming** — `camelCase` for JS, `kebab-case` for CSS classes
- **Comments** — use section headers with `═══` separators

## Pull Request Process

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes
3. Test in Chrome, Firefox, and Safari
4. Test mobile responsiveness
5. Ensure no console errors
6. Submit PR with clear description

## Areas for Contribution

- [ ] Additional analysis lenses
- [ ] New export formats (PDF, CSV, Notion)
- [ ] PWA/offline support
- [ ] Accessibility improvements
- [ ] Internationalization
- [ ] Additional AI model support
- [ ] Comparison mode for side-by-side analysis
- [ ] Visual theme customization

## Reporting Issues

Use the GitHub issue templates for:
- **Bug reports** — include browser, OS, steps to reproduce
- **Feature requests** — describe the use case and expected behavior
