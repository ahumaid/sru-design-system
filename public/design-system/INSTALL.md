# Use the Sulaiman AlRajhi University design system

## Add it to a website

Include the hosted stylesheet in the page `<head>`. It already contains
Bootstrap 5.3.8 and the Sulaiman AlRajhi University theme, so do not add
another Bootstrap CSS file.

```html
<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.css">
```

For an Arabic or otherwise right-to-left page, use the RTL stylesheet instead:

```html
<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.rtl.css">
```

Load the hosted JavaScript bundle before the closing `</body>` tag when the
website uses interactive Bootstrap components:

```html
<script defer src="https://<design-system-domain>/design-system/bootstrap.bundle.js"></script>
```

The bundle includes Popper and does not require jQuery. Load it only once. It
provides behavior for dropdowns, modals, collapse, carousels, offcanvas,
tooltips, popovers, toasts, and other Bootstrap interactive components.

## Font and security policy

The theme loads Cairo from Google Fonts. If the website has a Content Security
Policy, allow `https://fonts.googleapis.com` in `style-src` and
`https://fonts.gstatic.com` in `font-src`.
