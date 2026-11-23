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
- `/design-system/sru-tokens.css` — framework-independent CSS custom properties for widgets and other external integrations (خصائص CSS مخصصة مستقلة عن أطر العمل للوحدات المصغّرة والتكاملات الخارجية).
- `/design-system/bootstrap.bundle.js` — Bootstrap JavaScript bundle with Popper.

Use the production domain on other sites. For the full design system, use this
installation snippet:

استخدم نطاق الإنتاج في المواقع الأخرى. ولتحميل نظام التصميم الكامل، استخدم
المقطع التالي:

```html
<link rel="stylesheet" href="/design-system/sru-theme.css">
<script defer src="/design-system/bootstrap.bundle.js"></script>
```

External websites that only need SRU design tokens can load the standalone
stylesheet without Bootstrap, component styles, or JavaScript:

يمكن للمواقع الخارجية التي تحتاج إلى رموز تصميم SRU فقط تحميل ملف الأنماط
المستقل دون Bootstrap أو أنماط المكونات أو JavaScript:

```html
<link rel="stylesheet" href="https://design-system.sredu.sa/design-system/sru-tokens.css">
```

### Widget design tokens

The public token file defines only custom properties. It adds no global element
styles, resets, framework styles, utility classes, or component rules. The names
are framework-independent: `--sru-color-brand-primary` and
`--sru-color-on-brand-primary` for brand surfaces and foregrounds;
`--sru-color-brand-primary-emphasis` for emphasized brand text;
`--sru-color-white` and `--sru-color-dark`; `--sru-color-text` and
`--sru-color-text-muted`; `--sru-color-surface-page` and
`--sru-color-surface-raised`; `--sru-color-border` and
`--sru-color-danger`; and `--sru-on-dark-muted`, `--sru-on-dark-border`,
`--sru-on-dark-divider`, and `--sru-on-dark-hover` for content on dark
backgrounds.

يعرّف ملف الرموز العام الخصائص المخصصة فقط، ولا يضيف أنماطًا عامة للعناصر أو
إعادة ضبط أو أنماط أطر عمل أو فئات مساعدة أو قواعد للمكونات. أسماء الرموز
مستقلة عن أطر العمل: `--sru-color-brand-primary` و
`--sru-color-on-brand-primary` لخلفيات العلامة التجارية ومحتواها؛
`--sru-color-brand-primary-emphasis` للنص البارز؛ `--sru-color-white` و
`--sru-color-dark`؛ `--sru-color-text` و`--sru-color-text-muted`؛
`--sru-color-surface-page` و`--sru-color-surface-raised`؛
`--sru-color-border` و`--sru-color-danger`؛ و
`--sru-on-dark-muted` و`--sru-on-dark-border` و`--sru-on-dark-divider` و
`--sru-on-dark-hover` للمحتوى على الخلفيات الداكنة.

Light values apply by default through `:root`. Set `data-sru-theme="light"` or
`data-sru-theme="dark"` on the page or widget container to select a theme. For
example, put `data-sru-theme="dark"` on `<html>` for a page-wide dark theme, or
on the widget container to scope it to that widget. A runtime switch can update
the same attribute with `document.documentElement.dataset.sruTheme = 'dark'`.

تُطبّق قيم الوضع الفاتح افتراضيًا عبر `:root`. اختر الوضع بإضافة
`data-sru-theme="light"` أو `data-sru-theme="dark"` إلى الصفحة أو حاوية الوحدة
المصغّرة. أضف `data-sru-theme="dark"` إلى `<html>` لتطبيق الوضع الداكن على
الصفحة، أو إلى حاوية الوحدة لتطبيقه عليها فقط. ويمكن تبديل الوضع أثناء التشغيل
بتحديث الخاصية نفسها باستخدام `document.documentElement.dataset.sruTheme = 'dark'`.

Font properties are `--sru-font-family-arabic`, `--sru-font-family-latin`,
`--sru-font-weight-regular` (400), `--sru-font-weight-medium` (500),
`--sru-font-weight-semibold` (600), `--sru-font-weight-bold` (700), and
`--sru-font-weight-extrabold` (800). The Arabic and Latin WOFF2 subset URLs are
available as `--sru-font-arabic-woff2-url` and
`--sru-font-latin-woff2-url`. They are hosted by Google Fonts at `fonts.gstatic.com`,
which responds with `Access-Control-Allow-Origin: *`. The token file provides
font metadata and URLs; it does not define `@font-face` or load the fonts by itself.

خصائص الخط هي `--sru-font-family-arabic` و`--sru-font-family-latin`، وأوزان
`--sru-font-weight-regular` (400) و`--sru-font-weight-medium` (500) و
`--sru-font-weight-semibold` (600) و`--sru-font-weight-bold` (700) و
`--sru-font-weight-extrabold` (800). تتوفر روابط ملفات WOFF2 العربية واللاتينية
عبر `--sru-font-arabic-woff2-url` و`--sru-font-latin-woff2-url`. تستضيفها Google
Fonts على `fonts.gstatic.com`، ويُرجع الخادم الترويسة
`Access-Control-Allow-Origin: *`. يوفر الملف بيانات الخطوط وروابطها، لكنه لا
يعرّف `@font-face` ولا يحمّل الخطوط بمفرده.

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
