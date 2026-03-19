# Gadagi Design System

![Deploy Storybook](https://github.com/gavimg/adi-design-system/actions/workflows/storybook.yml/badge.svg)

## GitHub Pages (Storybook)

### Local
```bash
npm install
npm run storybook
```

### Build for GitHub Pages
```bash
npm run build-storybook
```

This outputs static files into `storybook-static/`.  
Enable GitHub Pages for this repo and set:

- **Source**: GitHub Actions

Once the workflow completes, your Storybook will be available at:
```text
https://gavimg.github.io/adi-design-system/
```

## Using Styles in Apps

Import the full utility bundle:
```ts
import '@gadagi/design-system/styles';
```

Or import only what you need:
```ts
import '@gadagi/design-system/variables';
import '@gadagi/design-system/utilities';
import '@gadagi/design-system/typography';
```

## Utility Examples

- `g-bg-primary`, `g-bg-success-light`
- `g-mt-4`, `g-px-6`, `g-gap-3`
- `g-flex`, `g-grid`, `g-text-center`
- `g-shadow`, `g-hover-lift`, `g-press`
