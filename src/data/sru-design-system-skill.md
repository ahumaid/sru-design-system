---
name: sru-design-system
description: Build and review Sulaiman AlRajhi University websites with the published SRU Design System. Use when creating or changing UI, HTML, or components for an SRU website.
---

# Sulaiman AlRajhi University Design System

Use this skill when building or reviewing an SRU website.

## Before you work

- Read the SRU Design System usage guide and inspect the component gallery.
- Find the closest existing gallery example and use it as the reference for markup, states, spacing, typography, colors, responsive behavior, and page direction.
- Load `sru-theme.css` on every page. For a right-to-left (RTL) page, set `dir="rtl"` on the `<html>` element; the stylesheet applies its RTL rules automatically.

## Published assets

Use these published assets from the same host that serves this design system.

- CSS stylesheet: `https://<design-system-domain>/design-system/sru-theme.css`
- Bootstrap JavaScript bundle: `https://<design-system-domain>/design-system/bootstrap.bundle.js`

The stylesheet includes Bootstrap 5.3.8, the SRU theme, and RTL support. Use the same stylesheet for left-to-right and right-to-left pages. Set `dir="rtl"` on the `<html>` element for Arabic and other right-to-left pages. Load the JavaScript bundle only when interactive Bootstrap components are used; it already includes Popper.

## Implementation rules

- Use the published university stylesheet and its Bootstrap 5.3.8 components and utilities. The stylesheet already includes Bootstrap; never add a second Bootstrap CSS file.
- Do not add custom styling, inline styles, CSS overrides, theme or token overrides, `!important` rules, or replacement styles unless the user explicitly asks for that styling or override. Do not infer permission from a request to build or implement a component.
- If the requested result cannot be built with the existing system, explain the limitation and ask the user before adding custom styles or overrides.
- Always support accessibility (WCAG 2.1 AA compliant) across all pages, forms, and components. Use semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`) with descriptive `aria-label` attributes when multiple landmarks exist, and provide a skip-to-content link for keyboard users.
- Ensure all interactive elements (buttons, links, form controls, dropdowns, dialogs, tabs) are fully keyboard operable with visible focus states and proper ARIA attributes (`aria-expanded`, `aria-controls`, `aria-current`, `aria-live`, `aria-labelledby`, `aria-describedby`).
- Ensure every form input is explicitly linked to a descriptive `<label>` or provided an accessible name, and provide clear validation feedback.
- Load the Bootstrap JavaScript bundle only when interactive components need it; it already includes Popper.
- When using Lucide icons, load `https://unpkg.com/lucide@latest` and call `lucide.createIcons()` after adding the icon elements to the page.
- Use the icon names shown in the gallery. Hide decorative icons from screen readers (`aria-hidden="true"`), and give icon-only buttons a clear accessible name (`aria-label` or `.visually-hidden`).

## Before you finish

- Compare the result with the gallery example you used.
- Check accessibility compliance: verify keyboard navigation, focus visibility, screen reader labels, landmark structure, and color contrast.
- Check responsive behavior and the correct LTR or RTL layout.
- Confirm that no unrequested styling or overrides were introduced.
