# Suleiman Al Rajhi University (SRU) Design System

The official source for the university's Bootstrap theme and developer component
gallery. Once the repository is connected to Cloudflare Pages, changes deploy
from the production branch and theme file URLs stay stable without version numbers.

## Local development

Local development requires Docker, Docker Compose, and Just. Node.js and npm run
inside the container, so you do not need to install them on your machine. Start
the development server with:

```sh
just dev
```

The development preview runs at `http://localhost:15173`. Docker automatically
assigns an available port for the production preview started with `just preview`.

Open `http://localhost:15173`. The gallery showcases Bootstrap components, uses
Arabic by default, and includes Arabic and English previews in LTR and RTL, light
and dark themes, and interactive examples.

Vite hot reloads gallery previews when you save changes. After editing Sass that
produces the published design system files, run `just assets` and refresh the
browser:

```sh
just assets
```

To build the production files and preview them locally:

```sh
just build
```

To preview the production files locally, run this command. It builds the files
first:

```sh
just preview
```

If you change `package.json` or `package-lock.json`, update dependencies inside
the container with:

```sh
just deps
```

## Published files

The stable paths served by Cloudflare Pages are:

- `/design-system/sru-theme.css` — Bootstrap 5.3.8 and the university theme, with support for both directions.
- `/design-system/sru-tokens.css` — lightweight token-only stylesheet for external integrations such as the SRU SSO SDK (ملف أنماط خفيف للتكاملات الخارجية مثل حزمة SRU SSO، ويحتوي على رموز التصميم فقط).
- `/design-system/bootstrap.bundle.js` — Bootstrap JavaScript bundle with Popper.

Use the production domain on other sites. Copy-and-paste installation snippet:

```html
<link rel="stylesheet" href="/design-system/sru-theme.css">
<script defer src="/design-system/bootstrap.bundle.js"></script>
```

External integrations that only need SRU design tokens can load the standalone
stylesheet without Bootstrap or the full Design System:

يمكن للتكاملات الخارجية التي تحتاج إلى رموز تصميم SRU فقط تحميل ملف الأنماط
المستقل دون Bootstrap أو نظام التصميم الكامل:

```html
<link rel="stylesheet" href="https://design-system.sredu.sa/design-system/sru-tokens.css">
```

For Arabic pages with RTL direction, set `dir="rtl"` on the `<html>` element and
use the same stylesheet. The JavaScript bundle is required for interactive
components such as dropdowns, modals, collapse, carousels, offcanvas panels,
tooltips, popovers, and toasts. It includes Popper and does not require jQuery.
If your site already loads Bootstrap JavaScript, do not load a second bundle.

The stylesheet includes full Bootstrap styles and the university theme, so do
not add another Bootstrap stylesheet. The theme loads the Cairo font from Google
Fonts. For a restrictive Content Security Policy, allow `fonts.googleapis.com`
in `style-src` and `fonts.gstatic.com` in `font-src`.

## Dark theme

To apply the dark theme across a page, add `data-bs-theme="dark"` to the
`<html>` element and keep the appropriate language and direction attributes:

```html
<html lang="ar" dir="rtl" data-bs-theme="dark">
```

For a runtime theme switch, update the same attribute:

```js
document.documentElement.dataset.bsTheme = 'dark';
```

Set it to `'light'` to return to the light theme. The bundled Bootstrap
JavaScript is not required for this theme change.

## Deploying to Cloudflare Pages

For automatic deployments, connect the GitHub repository
[`ahumaid/sru-design-system`](https://github.com/ahumaid/sru-design-system) to a
Cloudflare Pages project. Set `main` as the production branch, `npm run build`
as the build command, and `dist` as the output directory. Cloudflare installs
dependencies from `package-lock.json` before building.

Cloudflare hosts the project at its current production domain. To use a
university domain, add the chosen custom domain in the Pages project settings.

`public/_headers` configures revalidation for cached design system files.
Browsers and Cloudflare can reuse an unchanged file and fetch the updated file
after a deployment without changing its URL. Avoid cache rules that override
these headers.

## Updating the theme

Use the available Bootstrap 5.3.8 components, utilities, and theme tokens; do
not add custom CSS. Run `npm run build` to regenerate the published design
system files and build the gallery site.
