# نظام تصميم جامعة سليمان الراجحي (SRU) / Suleiman Al Rajhi University Design System

المصدر المعتمد لقالب Bootstrap الخاص بالجامعة ومعرض مكوّناته للمطوّرين. بعد
ربط المستودع بـ Cloudflare Pages، تُنشر التغييرات من الفرع الإنتاجي وتظل روابط
ملفات القالب ثابتة دون أرقام إصدارات.

The official source for the university's Bootstrap theme and developer component
gallery. Once the repository is connected to Cloudflare Pages, changes deploy
from the production branch and theme file URLs stay stable without version numbers.

## التطوير المحلي / Local development

يتطلب التطوير المحلي Docker وDocker Compose وJust. تعمل أوامر Node.js وnpm داخل
الحاوية، ولا تحتاج إلى تثبيتهما على جهازك. شغّل خادم التطوير:

Local development requires Docker, Docker Compose, and Just. Node.js and npm run
inside the container, so you do not need to install them on your machine. Start
the development server with:

```sh
just dev
```

تعمل معاينة التطوير على `http://localhost:15173`. يختار Docker منفذاً متاحاً
تلقائياً لمعاينة الإنتاج التي تبدأ بالأمر `just preview`.

The development preview runs at `http://localhost:15173`. Docker automatically
assigns an available port for the production preview started with `just preview`.

افتح `http://localhost:15173`. يعرض الموقع مكوّنات Bootstrap، ويستخدم العربية
لغةً افتراضية، ويوفر معاينات بالعربية والإنجليزية واتجاهي LTR وRTL ومظهري
الإضاءة والظلام، إضافةً إلى أمثلة تفاعلية.

Open `http://localhost:15173`. The gallery showcases Bootstrap components, uses
Arabic by default, and includes Arabic and English previews in LTR and RTL, light
and dark themes, and interactive examples.

يعيد Vite تحميل معاينات المعرض عند حفظ التغييرات. بعد تعديل ملفات Sass الخاصة
بملفات التصميم المنشورة، شغّل `just assets` ثم حدّث المتصفح:

Vite hot reloads gallery previews when you save changes. After editing Sass
that produces the published design system files, run `just assets` and refresh
the browser:

```sh
just assets
```

لإنشاء ملفات الإنتاج ومعاينتها محلياً:

To build the production files and preview them locally:

```sh
just build
```

لعرض ملفات الإنتاج محلياً، شغّل الأمر التالي. يعيد الأمر بناء الملفات أولاً:

To preview the production files locally, run this command. It builds the files
first:

```sh
just preview
```

بعد تعديل `package.json` أو `package-lock.json`، حدّث الاعتماديات داخل الحاوية:

If you change `package.json` or `package-lock.json`, update dependencies inside
the container with:

```sh
just deps
```

## الملفات المنشورة / Published files

المسارات الثابتة التي يقدّمها Cloudflare Pages:

The stable paths served by Cloudflare Pages are:

- `/design-system/sru-theme.css` — Bootstrap 5.3.8 مع قالب الجامعة باتجاه LTR.
- `/design-system/sru-theme.rtl.css` — القالب نفسه بعد تحويله إلى RTL.
- `/design-system/bootstrap.bundle.js` — حزمة JavaScript الخاصة بـ Bootstrap مع Popper.

- `/design-system/sru-theme.css` — Bootstrap 5.3.8 with the university theme in LTR.
- `/design-system/sru-theme.rtl.css` — the same theme transformed to RTL.
- `/design-system/bootstrap.bundle.js` — Bootstrap JavaScript bundle with Popper.

استخدم النطاق الإنتاجي للمواقع الأخرى. يتوفر دليل الاستخدام الكامل للنسخ
واللصق على الموقع المنشور في `/design-system/INSTALL.md`:

Use the production domain on other sites. The published
`/design-system/INSTALL.md` contains the full copy-and-paste installation guide:

```html
<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.css">
<script defer src="https://<design-system-domain>/design-system/bootstrap.bundle.js"></script>
```

استخدم `sru-theme.rtl.css` للصفحات العربية ذات الاتجاه RTL. تلزم حزمة
JavaScript للمكوّنات التفاعلية مثل القوائم المنسدلة والنوافذ والطيّ والشرائح
واللوحات الجانبية والتلميحات والنوافذ المنبثقة والتنبيهات. تتضمن الحزمة Popper
ولا تحتاج إلى jQuery. إذا كان الموقع يحمّل JavaScript الخاص بـ Bootstrap
مسبقاً، فلا تحمّل حزمة ثانية.

Use `sru-theme.rtl.css` for Arabic pages with RTL direction. The JavaScript
bundle is required for interactive components such as dropdowns, modals,
collapse, carousels, offcanvas panels, tooltips, popovers, and toasts. It includes
Popper and does not require jQuery. If your site already loads Bootstrap
JavaScript, do not load a second bundle.

تتضمن ملفات CSS أنماط Bootstrap كاملةً وقالب الجامعة؛ لذلك لا تضف ملف CSS
ثانياً لـ Bootstrap. يُحمّل القالب خط Cairo من Google Fonts. عند استخدام سياسة
أمن محتوى مقيّدة، اسمح بـ `fonts.googleapis.com` ضمن `style-src` وبـ
`fonts.gstatic.com` ضمن `font-src`.

The CSS files include full Bootstrap styles and the university theme, so do not
add another Bootstrap stylesheet. The theme loads the Cairo font from Google
Fonts. For a restrictive Content Security Policy, allow `fonts.googleapis.com`
in `style-src` and `fonts.gstatic.com` in `font-src`.

## النشر على Cloudflare Pages / Deploying to Cloudflare Pages

لإعداد النشر التلقائي، اربط مستودع GitHub
[`ahumaid/sru-design-system`](https://github.com/ahumaid/sru-design-system)
بمشروع Cloudflare Pages. حدّد `main` فرعاً للإنتاج، و`npm run build` أمرًا
للبناء، و`dist` مجلداً لملفات الإخراج. يثبّت Cloudflare الاعتماديات من
`package-lock.json` قبل تنفيذ البناء.

For automatic deployments, connect the GitHub repository
[`ahumaid/sru-design-system`](https://github.com/ahumaid/sru-design-system) to a
Cloudflare Pages project. Set `main` as the production branch, `npm run build`
as the build command, and `dist` as the output directory. Cloudflare installs
dependencies from `package-lock.json` before building.

يمنح Cloudflare المشروع نطاقاً ينتهي بـ `pages.dev`. أضف النطاق المخصص الذي
تختاره الجامعة إلى إعدادات مشروع Pages إذا رغبت في استخدام نطاق تابع للجامعة،
ثم استبدل `<design-system-domain>` في أمثلة الاستخدام بالنطاق بعد تفعيله.

Cloudflare assigns the project a `pages.dev` domain. To use a university domain,
add the chosen custom domain in the Pages project settings, then replace
`<design-system-domain>` in the usage examples with the active domain.

يضبط `public/_headers` التخزين المؤقت لمسارات ملفات التصميم الثابتة مع إعادة
التحقق. يمكن للمتصفحات وCloudflare إعادة استخدام الملف ما دام دون تغيير، وجلب
النسخة الجديدة بعد النشر عند تحديثه من دون تغيير رابطه. تجنب قواعد التخزين
المؤقت التي تتجاوز هذه الترويسات.

`public/_headers` configures revalidation for cached design system files.
Browsers and Cloudflare can reuse an unchanged file and fetch the updated file
after a deployment without changing its URL. Avoid cache rules that override
these headers.

## تحديث القالب / Updating the theme

استخدم مكونات Bootstrap 5.3.8 وأدواته ورموز القالب المتاحة، ولا تضف تنسيقات
CSS مخصصة. يعيد الأمر `npm run build` إنشاء ملفات التصميم المنشورة وبناء موقع
المعرض.

Use the available Bootstrap 5.3.8 components, utilities, and theme tokens; do
not add custom CSS. Run `npm run build` to regenerate the published design
system files and build the gallery site.
