---
name: sru-design-system
description: Build and review Sulaiman AlRajhi University websites with the published SRU Design System. Use when creating or changing UI, HTML, or components for an SRU website.
---

# Sulaiman AlRajhi University Design System

Use this skill when building or reviewing an SRU website.

## Before you work

- Read the SRU Design System usage guide and inspect the component gallery.
- Find the closest existing gallery example and use it as the reference for markup, states, spacing, typography, colors, responsive behavior, and page direction.
- Confirm whether the page is left-to-right (LTR) or right-to-left (RTL), and use the matching published stylesheet.

## Published assets

Use these published assets from the same host that serves this design system.

- LTR CSS: `https://<design-system-domain>/design-system/sru-theme.css`
- RTL CSS: `https://<design-system-domain>/design-system/sru-theme.rtl.css`
- Bootstrap JavaScript bundle: `https://<design-system-domain>/design-system/bootstrap.bundle.js`

The CSS bundles already include Bootstrap 5.3.8 and the SRU theme. Use the RTL CSS bundle for Arabic and other right-to-left pages. Load the JavaScript bundle only when interactive Bootstrap components are used; it already includes Popper.

## Implementation rules

- Use the published university stylesheet and its Bootstrap 5.3.8 components and utilities. The stylesheet already includes Bootstrap; never add a second Bootstrap CSS file.
- Do not add custom styling, inline styles, CSS overrides, theme or token overrides, `!important` rules, or replacement styles unless the user explicitly asks for that styling or override. Do not infer permission from a request to build or implement a component.
- If the requested result cannot be built with the existing system, explain the limitation and ask the user before adding custom styles or overrides.
- Keep HTML semantic, accessible, keyboard usable, responsive, and compatible with the page direction.
- Load the Bootstrap JavaScript bundle only when interactive components need it; it already includes Popper.
- When using Lucide icons, load `https://unpkg.com/lucide@latest` and call `lucide.createIcons()` after adding the icon elements to the page.
- Use the icon names shown in the gallery. Hide decorative icons from screen readers, and give icon-only buttons a clear accessible name.

## Before you finish

- Compare the result with the gallery example you used.
- Check keyboard access, responsive behavior, and the correct LTR or RTL layout.
- Confirm that no unrequested styling or overrides were introduced.
