# SRU Design System

The source of truth for the company's Bootstrap theme and a live component
gallery for developers. Once connected to Cloudflare Pages, changes published
from the production branch update the stable, unversioned theme asset URLs.

## Local development

Requires Docker with the Compose plugin. Node.js and npm run inside the
container; the host only needs Docker.

```sh
docker compose up --build gallery
```

Open `http://localhost:5180`. The preview includes Bootstrap components,
Arabic as the default language, English and Arabic language previews, LTR/RTL
and light/dark switches, and interactive examples. Compose installs
dependencies from `package-lock.json` in a container volume.

To create and run the production image locally:

```sh
docker compose --profile production up --build production
```

Open `http://localhost:8099`. The Nginx container serves the same `dist`
output used by Cloudflare Pages, including the stable theme assets and their
revalidation and cross-origin response headers.

To build the Cloudflare Pages output without installing npm on the host:

```sh
docker compose run --build --rm gallery sh -c "npm ci && npm run build"
```

## Published assets

The stable paths served by Cloudflare Pages and the production Docker image are:

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

For automatic deployments, connect the GitHub repository
[`ahumaid/sru-design-system`](https://github.com/ahumaid/sru-design-system) to a
Cloudflare Pages project. Set the production branch to `main`, the build command
to `npm run build`, and the build output directory to `dist`. Cloudflare should
install dependencies from `package-lock.json` before running the build.

Cloudflare assigns the project a `pages.dev` hostname. Add the company's chosen
custom domain in the Pages project if websites should use a company-owned
hostname instead. Replace `<design-system-domain>` in the usage examples above
with that hostname after it is active.

Git-connected Pages builds run the repository's `npm run build` command on
Cloudflare's build environment. Local build and preview commands above use
Docker so the host does not need npm.

`public/_headers` configures the stable design-system asset paths to be cached
with revalidation. Browsers and Cloudflare can reuse an unchanged asset, and
fetch changed content after a deployment without changing the URL. Avoid cache
rules that override these response headers.

## Updating the theme

Edit `src/styles/sru-theme.scss`. The preview layout lives separately in
`src/styles/gallery.scss`. The Docker build regenerates the published assets
and gallery together.
