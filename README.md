# Fillout UI

A modern, accessible, and customizable UI component library developed as a take-home assessment for a Front-End Engineer role at Fillout. The goal is to demonstrate high-quality component architecture, strong UX fundamentals, accessibility, and maintainability.

---

## Features

- Fully typed with TypeScript
- Accessibility-first design with ARIA support and keyboard navigation
- Keyboard navigation with arrow keys and focus management
- Dynamic page insertion via inline "+" buttons
- Drag-and-drop reordering (powered by `@dnd-kit/core`)
- Animated feedback after reorder
- Context menu via keyboard shortcuts
- Theming via design tokens (color, spacing, shadows, etc.)
- Visual testing with Chromatic
- Storybook with MDX documentation and interaction tests
- Built with React 19 and Vite
- Linaria for zero-runtime, styled-components-like developer experience

---

## Live Demos

- **Component Showcase (Deployed Project):**  
  [https://fillout-ui-showcase.pages.dev](https://fillout-ui-showcase.pages.dev)

- **Fillout UI Site (Storybook):**  
  [https://fillout-ui.pages.dev](https://fillout-ui.pages.dev)

---

## TODO

This checklist helps ensure the PageNavigator component meets the expected requirements:

### Component Features
- [x] Display pages as buttons in a horizontal layout
- [x] Highlight the active page
- [x] Add inline "+" button to insert a page between others
- [x] Show context menu (dropdown) on each page
- [x] Enable drag-and-drop to reorder pages
- [x] Animate space during drag to indicate placement
- [x] Replace icon with drag handle during long press
- [x] Auto-scroll horizontally when dragging near edges
- [x] Show tooltips for truncated/overflowed page labels
- [x] Keyboard navigation (arrow keys + Enter)
- [x] Accessibility: aria-current, aria-label, focus state, tooltips

### Design & Visuals
- [x] Use design tokens for spacing, color, and shadows
- [x] Apply active, hover, and drag visual styles
- [x] Animate highlight on drag end
- [x] Prevent UI from breaking when dragging vertically

### Testing & QA
- [x] Add interaction tests via Storybook `play` functions
- [x] Run accessibility checks on Storybook stories
- [x] Ensure component is responsive and handles overflow
- [x] Fix contrast issues for WCAG 2.1 AA compliance

### Storybook & Docs
- [x] Write full MDX documentation for all the components
- [x] Add usage examples with various edge cases
- [x] Deploy Storybook and the showcase project

---

## Developer Notes

See [`DEV_REPORT.md`](./DEV_REPORT.md) for a detailed breakdown of design decisions, implementation notes, and known trade-offs.

---

## Getting Started

```bash
git clone https://github.com/talissoncosta/fillout-ui.git
cd fillout-ui
yarn install
yarn dev
```

To start the Storybook documentation:

```bash
yarn storybook
```

---

## Storybook

Visit the live component documentation at:  
[https://talissoncosta.github.io/fillout-ui](https://talissoncosta.github.io/fillout-ui)

Includes interactive examples, keyboard testing, and accessibility annotations.

---

## Component Highlights

### `PageNavigator`

A drag-and-droppable navigation bar for forms and multi-step flows.

#### Key Features

- Keyboard navigation
- Inline page insertion
- Drag-and-drop reordering
- Animated highlight after reorder
- Context menu support
- Accessibility via `aria-current`, focus control, and tooltips
- Custom reference support for flexible positioning

Use cases:
- Form builders with dynamic step flows
- Slide/page-based editors
- Interactive page templates

---

### `DropdownMenu`

Composed using Floating UI for flexible positioning and interaction management.

#### Structure

- `<DropdownMenu>` — context provider
- `<DropdownMenuTrigger>` — click target
- `<DropdownMenuContent>` — floating panel
- `<DropdownMenuItem>` — interactive actions
- `<DropdownMenuSeparator>` — divider

Tip: Custom reference support allows positioning content based on a different element than the trigger.

---

### `Tooltip`

Lightweight and accessible hover/focus tooltips with Radix and design tokens.

```tsx
<Tooltip content="Add new page">
  <IconButton><PlusIcon /></IconButton>
</Tooltip>
```

---

## Tech Stack

- React 19 with suspense and strict mode
- Vite for fast builds
- TypeScript for safety and IntelliSense
- Linaria for zero-runtime styles
- Floating UI for popover positioning
- @dnd-kit for drag-and-drop behavior
- Storybook for component development and docs
- Chromatic for visual regression testing

---

## Testing & Reliability

- Visual testing with Chromatic
- Manual accessibility testing with keyboard and screen readers
- Storybook interaction tests using `@storybook/test-runner` and `vitest`

---

## Design Tokens

Design tokens are available as both TypeScript exports and CSS variables:

- Color tokens: `colorSurfaceStandard`, `colorTextSecondary`, etc.
- Shadow tokens: `shadowFocus`, `shadowStandard`
- Radius, spacing, and z-index scales

---

## Design Considerations

This project was developed as an assessment with a focus on developer experience, UX, and accessibility. Key notes:

- Inline "+" buttons are not yet fully accessible (missing semantic roles)
- Drag handles could be more visually obvious
- Nested button issue in dropdown trigger introduces minor accessibility compromise
- Floating UI was chosen to enable flexible trigger + content positioning

---

## Roadmap

- [ ] Add Playwright E2E tests
- [ ] Publish on NPM
- [ ] Theme switching support
- [ ] Improve drag handle visibility
- [ ] Improve screen reader support for dynamic insertions

---

## Author

Made with 💙 by [@talissoncosta](https://github.com/talissoncosta)

---

## License

MIT — Free to use, modify, and distribute.
