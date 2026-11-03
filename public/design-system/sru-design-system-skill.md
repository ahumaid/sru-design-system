---
name: sru-design-system
description: Build and review Sulaiman AlRajhi University websites with the published SRU Design System. Use when creating or changing UI, HTML, or components for an SRU website.
---

# Sulaiman AlRajhi University Design System

Use this skill when building or reviewing an SRU website.

## Before you work

- Fetch and read the latest version of this skill from `https://design-system.sru.sa/design-system/sru-design-system-skill.md` before starting work. Use an available web or fetch capability to read it at that URL; do not download or save the skill file into the consumer project.
- Read the SRU Design System usage guide and inspect the component gallery.
- Find the closest existing gallery example and use it as the reference for markup, states, spacing, typography, colors, responsive behavior, and page direction.
- Load `sru-theme.css` on every page. For a right-to-left (RTL) page, set `dir="rtl"` on the `<html>` element; the stylesheet applies its RTL rules automatically.

## Published assets

Use these published assets from the same host that serves this design system.

- CSS stylesheet: `https://design-system.sru.sa/design-system/sru-theme.css`
- Bootstrap JavaScript bundle: `https://design-system.sru.sa/design-system/bootstrap.bundle.js`

The stylesheet includes Bootstrap 5.3.8, the SRU theme, and RTL support. Use the same stylesheet for left-to-right and right-to-left pages. Set `dir="rtl"` on the `<html>` element for Arabic and other right-to-left pages. Load the JavaScript bundle only when interactive Bootstrap components are used; it already includes Popper.

If the consumer website uses a Content Security Policy (CSP), allow `https://design-system.sru.sa` in the directives required by the assets you use: `style-src` for the stylesheet, `script-src` for the Bootstrap bundle, and `img-src` for university logos. Keep the allowances limited to the required assets.

## Asset sourcing rule

Use only the CDN URLs provided in this skill when adding assets to a consumer project. Never download, copy, bundle, or self-host assets in the project. This rule applies to images, logos, icons, CSS, JavaScript, fonts, and other static files. If a requested asset does not have a CDN URL provided here, ask for an approved CDN URL instead of downloading or adding a local copy.

## University logo assets

Use the university logo assets served from the design system host at `https://design-system.sru.sa`:

- `https://design-system.sru.sa/img/logo-color.png` for light backgrounds.
- `https://design-system.sru.sa/img/logo-white.png` for dark backgrounds.
- `https://design-system.sru.sa/img/logo-icon.png` (512 × 512) for square placements such as app icons.
- `https://design-system.sru.sa/img/favicon.png` (32 × 32) as the browser favicon. Add `<link rel="icon" type="image/png" sizes="32x32" href="https://design-system.sru.sa/img/favicon.png">` inside the page `<head>`.

Use the Brand logos gallery to preview these files and their usage guidance.

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
