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

* Keyboard arrow navigation for accessibility.
* Dynamic page insertion via inline + buttons.
* Drag-and-drop reordering with @dnd-kit/sortable.
* Focus and accessibility management with Radix UI.
* Design token-based styling for consistency.
* Custom icon support for flexibility.
* Tooltips and aria-label for screen reader compatibility.

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

- Visual testing with chromatic
  - Check the render, UI and also a11y

---

## Tech Stack

* React + TypeScript: Core framework with type-safe development.
* Vite: Fast build tool and development server.
* Vitest: Lightweight and fast unit testing framework.
* Linaria: Zero-runtime CSS-in-JS for performant styling.
* Tailwind CSS: Utility-first CSS framework for rapid UI development.
* Radix UI: Accessible, unstyled UI components for custom interfaces.
* Floating UI: Toolkit for dynamic, accessible positioning of floating elements.
* @dnd-kit/sortable: Flexible drag-and-drop library for sortable lists.
* Storybook: Component library for UI development and documentation.
* Chromatic: Visual testing and review tool for Storybook.

---

##  Design Tokens

The colors, z-index, and shadows are centralized via CSS custom properties and TypeScript exports (e.g. `colorSurfaceStandard`, `shadowFocus`).


---

## Roadmap

* [ ] Publish to NPM
* [ ] Add full theming support (light/dark modes).
* [ ] Integrate end-to-end testing with Playwright.
* [ ] Add support for internationalization (i18n).

---

## Author

Built with ❤️ by [@talissoncosta](https://github.com/talissoncosta)

---

## 📄 License

MIT
