# SRU Design System

The source of truth for the company's Bootstrap theme and a live component
gallery for developers. Cloudflare Pages serves the stable, unversioned theme
assets; changes published from the production branch update those same URLs.

## Local development

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

Open `http://localhost:5173`. The preview includes Bootstrap components,
interactive examples, and LTR/RTL and light/dark switches.

## Published assets

The production domain is configured in Cloudflare Pages. The stable paths are:

- `/design-system/sru-theme.css` — Bootstrap 5.3.8 with the SRU theme, LTR.
- `/design-system/sru-theme.rtl.css` — the same theme, transformed for RTL.
- `/design-system/bootstrap.bundle.js` — Bootstrap JavaScript bundle with Popper.

Use the production domain for other websites. The complete copy-and-paste guide
is available at `/design-system/INSTALL.md` on the published site:

```html
<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.css">
<script defer src="https://<design-system-domain>/design-system/bootstrap.bundle.js"></script>
```

For an Arabic/RTL page, use `sru-theme.rtl.css` instead. The JavaScript bundle
is needed only for interactive components such as dropdowns, modals, collapse,
carousels, offcanvas, tooltips, popovers, and toasts. It includes Popper and
does not require jQuery. If a site already loads Bootstrap JavaScript, do not
load a second bundle.

The CSS contains the complete Bootstrap stylesheet and the SRU theme. Do not
add a second Bootstrap CSS file. Cairo is loaded from Google Fonts by the theme;
sites with a restrictive Content Security Policy must allow
`fonts.googleapis.com` in `style-src` and `fonts.gstatic.com` in `font-src`.

## Cloudflare Pages

Create the Pages project once:

```sh
npm run pages:create
```

Configure a Git-connected Pages project with:

- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

Alternatively, publish from a machine authenticated with Wrangler:

```sh
npm run pages:deploy
```

`public/_headers` configures the stable design-system asset paths to be cached
with revalidation. Browsers and Cloudflare can reuse an unchanged asset, and
fetch changed content after a deployment without changing the URL. Avoid cache
rules that override these response headers.

## Updating the theme

Edit `src/styles/sru-theme.scss`. The preview layout lives separately in
`src/styles/gallery.scss`. `npm run build` regenerates the published assets and
the preview site together.
