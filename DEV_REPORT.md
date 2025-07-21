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
## Design Tokens & Styling

### Centralized Design Tokens

- The project uses centralized **design tokens** for colors, spacing, shadows, and radii to ensure consistency and ease of theming.
- These tokens allow global updates across components and reinforce a scalable design system architecture.

### Button States & Token-Driven Styling

The original design lacked a defined **active state** for buttons (e.g., no visual feedback when clicked).

To improve usability and maintain design coherence:

- I treated `active` as a **button variant** (just like `standard` and `ghost`).
- Created new **design tokens** for active background colors.
- Applied consistent styles across the page buttons and the inline “+” add button.

This diverged slightly from the Figma spec but improved interaction clarity and user experience.

---

## Accessibility Enhancements & Design Gaps

### Accessibility Tweaks

- Updated button text color to `#5a637a` to meet **WCAG 2.1 contrast ratio** requirements.
- This subtle fix ensures better readability and accessibility for all users.

### Design Limitations Identified

While the implementation adheres closely to the design, I observed several gaps that impacted accessibility and UX:

- The **inline “+” buttons** are not yet tabbable or screen-reader-friendly.
- **Drag handle** indicators are missing, so users may not realize the page buttons can be moved.
- The **three-dot dropdown trigger** is not a semantic `<button>`, due to nesting limitations, which introduces some accessibility compromises.

---

## UX Design Decisions

### Floating Placement for PageNavigator

The design did not specify where the `PageNavigator` should be positioned in the UI.

Inspired by apps like Figma, I chose a **floating horizontal toolbar** fixed to the bottom of the screen:

- It feels lightweight and modern
- Always visible without taking too much space
- Encourages multi-step editing workflows

### Visual Feedback for Drag Actions

To create a more intuitive experience while interacting with the page buttons:

- I added a **box shadow while dragging** to indicate elevation.
- After a successful drag-and-drop, a **pulse animation** highlights the newly placed button.

These touches improve usability by reinforcing changes in state and interaction feedback.

---

## Custom Engineering Decisions

### DropdownMenu with Custom Reference

- Radix UI was my initial choice due to its great accessibility and structure.
- However, Radix assumes that the **trigger and reference element are the same**, which conflicted with the requirement to have the icon trigger separate from the positioning anchor.
- I rewrote the component using **Floating UI**, which allowed:
  - A decoupled trigger and reference setup
  - Correct positioning and keyboard accessibility (triggered via Command + Enter)

This required more manual handling of accessibility features, but gave me the flexibility I needed to match the interaction spec.

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
