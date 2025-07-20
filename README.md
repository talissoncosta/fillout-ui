# Fillout UI

A modern, accessible, and customizable UI component library designed to support robust product interfaces with powerful interactivity and design system alignment.

## ✨ Features

* ✅ Fully typed with TypeScript
* 🎯 Built with accessibility best practices
* 🧹 Modular component architecture
* 👡 Keyboard and pointer interactions supported
* 🎨 Theming via design tokens
* 📦 Drag and drop (powered by `@dnd-kit`)
* 🧪 Storybook with interaction and accessibility testing
* 🧰 Built-in support for Radix UI primitives and Floating UI positioning
* 🔍 Support for tooltips, dropdowns, and dynamic forms

---

## Getting Started

```bash
git clone https://github.com/your-username/fillout-ui.git
cd fillout-ui
yarn install
yarn start
```

This will start the local Storybook environment.

---

## 📚 Storybook

All components are documented using Storybook with interactive stories and MDX documentation.

```bash
yarn start
```

You can browse the components at: [http://localhost:6006](http://localhost:6006)

---

## Component Highlights

### `PageNavigator`

A horizontal step/page navigation component designed for form flows and builders.

#### Key Features

* Keyboard arrow navigation
* Dynamic page insertion (via inline `+` buttons)
* Drag-and-drop reordering
* Focus and accessibility management
* Design token-based styles
* Custom icon support
* Tooltips and `aria-label` for screen reader support

---

### `DropdownMenu`

A composable dropdown menu using Floating UI for positioning and focus management.

Structure:

* `<DropdownMenu>` — root context provider
* `<DropdownMenuTrigger>` — button or trigger element
* `<DropdownMenuContent>` — floating panel
* `<DropdownMenuItem>` — interactive items
* `<DropdownMenuSeparator>` — divider

---

### `Tooltip`

A lightweight wrapper around Radix UI Tooltip with custom styling support.

Usage:

```tsx
<Tooltip content="Add new item">
  <IconButton>
    <PlusIcon />
  </IconButton>
</Tooltip>
```

---

## Testing

Component interactions are tested using Storybook `play` functions with `@storybook/testing-library` and `jest-axe` for accessibility compliance.

To run tests:

```bash
yarn test
```

---

## Tech Stack

* React + TypeScript
* Storybook
* Linaria (zero-runtime CSS-in-JS)
* Floating UI + Radix Primitives
* @dnd-kit for drag-and-drop
* Jest + Testing Library

---

##  Design Tokens

The colors, z-index, and shadows are centralized via CSS custom properties and TypeScript exports (e.g. `colorSurfaceStandard`, `shadowFocus`).


---

## Roadmap

* [ ] Publish to NPM
* [ ] Add full theming support (light/dark)

---

## Author

Built with ❤️ by [@talissoncosta](https://github.com/talissoncosta)

---

## 📄 License

MIT
