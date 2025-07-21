import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Documentation/Development Report: Fillout UI Assessment" />

# Development Report: Fillout UI Assessment

This document summarizes the decisions, challenges, and technical choices made during the development of the `PageNavigator` component and supporting UI pieces for the Fillout take-home assessment.

---

## Project Goals

The main goal was to build a robust and accessible Page Navigator UI component with modern interactivity. The project focuses on delivering:

- Solid UX
- Keyboard and mouse interactions
- Visual feedback for drag-and-drop
- Extensibility through custom components and props

---

## What I Tried to Showcase

- Modular, reusable component architecture
- Strong attention to accessibility (a11y)
- Integration with design tokens for visual consistency
- A visually polished and responsive experience
- Proper documentation and visual regression testing using Storybook and Chromatic
- The ability to handle edge cases and provide keyboard navigation and drag-and-drop

---

## Tooling Decisions

### Linaria over Tailwind

While Tailwind was initially considered, I opted for Linaria because:

- It improved my developer experience
- Avoided slow reloading and bloated classes during component iteration
- Allowed me to keep styles co-located with components in a type-safe way

### React 19

The project was built using React 19, and although I ran into a few typing-related issues, I was able to overcome them successfully.

### Chromatic for Visual Testing

Used Chromatic to:

- Run visual regression tests
- Catch UI regressions early
- Ensure component consistency across updates

---

## Design Tokens & Accessibility Tweaks

- The project uses centralized design tokens for colors, spacing, and elevation.
- I manually updated the button text color to `#5a637a` to meet WCAG contrast requirements. This fix ensures sufficient contrast between text and background, improving accessibility for all users.

---

## Design Gaps & Accessibility Observations

While I followed the design closely, I identified the following accessibility and design limitations:

- The inline `+` buttons are not accessible via keyboard or screen readers.
- There’s no drag handle to visually indicate that the page buttons are draggable.
- The dropdown menu button (three dots) is not a real `<button>`, due to restrictions on nesting buttons within buttons. This affects keyboard accessibility.

---

## Custom Engineering Decisions

### DropdownMenu Behavior

- I originally built the `DropdownMenu` with Radix UI, but it didn’t support setting a custom reference element different from the trigger.
- I switched to Floating UI, which enabled:
    - Separating positioning (`triggerRef`) and interaction
    - Achieving the correct behavior inside the PageNavigator (menu opens on (⌘ + Enter), but is positioned based on the icon button)

---

## Summary

This assessment was not only a coding challenge, but a chance to show:

- My engineering maturity
- Eye for UX/UI details
- Commitment to quality and maintainability
- Willingness to question tools when they slow development
- Focus on scalability by building reliable, composable components that help the product grow with consistency and quality

---

## GitHub

The full source code can be found here:  
[https://github.com/talissoncosta/fillout-ui](https://github.com/talissoncosta/fillout-ui)

---

Thanks for reviewing. Looking forward to chatting further.
