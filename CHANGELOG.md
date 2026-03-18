# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-03-18

### Changed
- 📚 **Documentation** - Added comprehensive README and CHANGELOG
- 🎨 **Branding** - Updated all references from ADI to Gadagi
- 📝 **Examples** - Added detailed usage examples and API documentation
- 🔧 **Development** - Enhanced development setup and contributing guidelines

### Fixed
- 📖 **README** - Added missing installation and usage instructions
- 🏗️ **Architecture** - Clarified component structure and dependencies

## [1.0.1] - 2026-03-18

### Added
- 🎨 **Design System Foundation**
  - Initial release of @gadagi/design-system
  - Core design tokens (colors, typography, spacing)
  - WCAG compliant color palette with light and dark themes

- 🧩 **React Components**
  - `Button` component with multiple variants (primary, secondary, danger, success)
  - `Input` component with validation states and accessibility features
  - `Badge` component for notifications and indicators

- 🌓 **Theme System**
  - `ThemeProvider` for global theme management
  - Built-in light and dark theme support
  - Custom theme configuration capabilities
  - `useTheme` hook for theme switching

- 🎯 **TypeScript Support**
  - Full type definitions for all components
  - Strict type checking and IntelliSense support
  - Exported interfaces for extensibility

- ♿ **Accessibility**
  - WCAG 2.1 AA compliant color contrast ratios
  - Semantic HTML structure
  - Keyboard navigation support
  - Screen reader compatibility

- 📦 **Package Configuration**
  - Tree-shakable exports
  - ES modules and CommonJS support
  - Optimized bundle size
  - Peer dependencies for React integration

### Design Tokens

#### Colors
- **Primary**: Purple palette (#4a3fb5, #4235a3, #3a2c91)
- **Success**: Green palette (#2fb855, #26a247, #1e8e3a)
- **Warning**: Amber palette (#e6a110, #d97706, #b45309)
- **Danger**: Red palette (#dc4c4c, #c83232, #b91c1c)
- **Info**: Blue palette (#2d7fd8, #2563eb, #1d4ed8)
- **Neutral**: Gray scale (#ebedef, #4b5463, #0f172a)

#### Dark Theme Colors
- **Primary**: Lighter purple (#7c71e6, #8b82eb, #9a93f0)
- **Success**: Bright green (#4ade80, #34d399, #10b981)
- **Warning**: Bright amber (#fbbf24, #f59e0b, #d97706)
- **Danger**: Bright red (#f87171, #ef4444, #dc2626)
- **Info**: Bright blue (#60a5fa, #3b82f6, #2563eb)

#### Typography
- Font sizes: xs (12px), sm (14px), md (16px), lg (18px), xl (20px)
- Font weights: normal (400), medium (500), semibold (600), bold (700)

#### Spacing
- Scale: 1 (4px), 2 (8px), 3 (12px), 4 (16px), 6 (24px), 8 (32px)

### Component API

#### Button
- Variants: primary, secondary, danger, success
- Sizes: sm, md, lg
- Props: variant, size, disabled, onClick, children

#### Input
- Features: label, error states, hints, fullWidth support
- Props: placeholder, label, error, hint, fullWidth, id

#### Badge
- Use cases: notifications, counters, status indicators
- Props: count, variant, children

### Technical Details

- **React Version**: 19.0.0+
- **TypeScript Version**: 5.0.0+
- **Bundle Size**: ~9.7KB unpacked
- **Tree Shakable**: Yes
- **SSR Compatible**: Yes

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## [Unreleased]

### Planned
- [ ] Form component with validation
- [ ] Modal/Dialog component
- [ ] Table component
- [ ] Loading states
- [ ] Icon system
- [ ] Grid layout components
- [ ] Card component
- [ ] Dropdown/Select component
- [ ] Toast notifications
- [ ] Progress indicators
- [ ] Avatar component

---

## Migration Guide

### From 0.x to 1.0.0

This is the initial release, so no migration is needed. Future versions will follow semantic versioning and provide migration guides for breaking changes.

---

## Support

- 📖 [Documentation](./README.md)
- 🐛 [Issue Tracker](https://github.com/gadagi/design-system/issues)
- 💬 [Discussions](https://github.com/gadagi/design-system/discussions)

---

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.

---

*Note: This changelog follows the [Keep a Changelog](https://keepachangelog.com/) format.*
