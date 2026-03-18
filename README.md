# @gadagi/design-system - Design System

A comprehensive design system for the Gadagi platform, providing reusable React components, theme support, and design tokens.

## Features

- 🎨 **Design Tokens** - Consistent colors, typography, and spacing
- 🧩 **React Components** - Pre-built UI components (Button, Input, Badge)
- 🌓 **Theme Support** - Built-in light and dark themes
- 📱 **Responsive** - Mobile-first design approach
- ♿ **WCAG Compliant** - Accessible color contrast ratios
- 🎯 **TypeScript** - Full type safety
- 📦 **Tree Shakable** - Optimized bundle size

## Installation

```bash
npm install @gadagi/design-system
```

## Peer Dependencies

```bash
npm install react react-dom
```

## Quick Start

```tsx
import { ThemeProvider, Button, Input, Badge } from '@gadagi/design-system';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <div>
        <Button variant="primary">Click me</Button>
        <Input placeholder="Enter text" />
        <Badge count={5}>Notifications</Badge>
      </div>
    </ThemeProvider>
  );
}
```

## Theme System

### Light Theme

```tsx
import { ThemeProvider } from '@gadagi/design-system';

<ThemeProvider defaultTheme="light">
  <YourApp />
</ThemeProvider>
```

### Dark Theme

```tsx
<ThemeProvider defaultTheme="dark">
  <YourApp />
</ThemeProvider>
```

### Custom Theme

```tsx
import { ThemeProvider, colors } from '@gadagi/design-system';

const customTheme = {
  primary: colors.primary[500],
  background: '#ffffff',
  text: '#000000',
};

<ThemeProvider theme={customTheme}>
  <YourApp />
</ThemeProvider>
```

## Components

### Button

```tsx
import { Button } from '@gadagi/design-system';

<Button variant="primary" size="md" onClick={() => console.log('clicked')}>
  Primary Button
</Button>

<Button variant="danger" size="sm" disabled>
  Disabled Button
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' | 'success'
- `size`: 'sm' | 'md' | 'lg'
- `disabled?: boolean`
- `onClick?: () => void`

### Input

```tsx
import { Input } from '@gadagi/design-system';

<Input 
  placeholder="Enter your email"
  label="Email Address"
  error="Invalid email format"
  hint="We'll never share your email"
  fullWidth
/>
```

**Props:**
- `placeholder?: string`
- `label?: string`
- `error?: string`
- `hint?: string`
- `fullWidth?: boolean`
- `id?: string`

### Badge

```tsx
import { Badge } from '@gadagi/design-system';

<Badge count={5}>
  <span>Notifications</span>
</Badge>

<Badge count={99} variant="danger">
  <span>Alerts</span>
</Badge>
```

**Props:**
- `count: number`
- `variant?: 'primary' | 'danger' | 'success'`
- `children?: ReactNode`

## Design Tokens

### Colors

```tsx
import { colors, darkColors } from '@gadagi/design-system';

// Light theme colors
colors.primary[500]  // #4a3fb5
colors.success[500]  // #2fb855
colors.danger[500]   // #dc4c4c

// Dark theme colors
darkColors.primary[500]  // #7c71e6
darkColors.success[500]  // #4ade80
darkColors.danger[500]   // #f87171
```

### Typography

```tsx
import { typography } from '@gadagi/design-system';

typography.fontSize.sm   // 14px
typography.fontSize.md   // 16px
typography.fontSize.lg   // 18px
typography.fontWeight.medium  // 500
```

### Spacing

```tsx
import { spacing } from '@gadagi/design-system';

spacing[1]  // 4px
spacing[2]  // 8px
spacing[4]  // 16px
spacing[8]  // 32px
```

## Accessibility

All components are built with WCAG 2.1 AA compliance in mind:

- **Color Contrast**: All text and UI elements meet 4.5:1 contrast ratios
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Focus Management**: Clear focus indicators and logical tab order

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development: `npm run dev`
4. Make your changes
5. Run tests: `npm test`
6. Build: `npm run build`
7. Publish: `npm publish`

## License

MIT © Gadagi Team

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.
