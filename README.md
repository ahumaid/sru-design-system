# نظام تصميم جامعة سليمان الراجحي (SRU)

المصدر المعتمد لقالب Bootstrap الخاص بالجامعة ومعرض مكوّناته للمطوّرين. بعد
ربط المستودع بـ Cloudflare Pages، تُنشر التغييرات من الفرع الإنتاجي وتظل روابط
ملفات القالب ثابتة دون أرقام إصدارات.

## التطوير المحلي

يتطلب التشغيل المحلي Node.js وnpm. ثبّت الاعتماديات ثم شغّل خادم التطوير:

```sh
npm ci
npm run dev
```

افتح `http://localhost:5173`. يعرض الموقع مكوّنات Bootstrap، ويستخدم العربية
لغةً افتراضية، ويوفر معاينات بالعربية والإنجليزية واتجاهي LTR وRTL ومظهري
الإضاءة والظلام، إضافةً إلى أمثلة تفاعلية.

لإنشاء ملفات الإنتاج ومعاينتها محلياً:

```sh
npm run build
npm run preview
```

## الملفات المنشورة

المسارات الثابتة التي يقدّمها Cloudflare Pages:

- `/design-system/sru-theme.css` — Bootstrap 5.3.8 مع قالب الجامعة باتجاه LTR.
- `/design-system/sru-theme.rtl.css` — القالب نفسه بعد تحويله إلى RTL.
- `/design-system/bootstrap.bundle.js` — حزمة JavaScript الخاصة بـ Bootstrap مع Popper.

استخدم النطاق الإنتاجي للمواقع الأخرى. يتوفر دليل الاستخدام الكامل للنسخ
واللصق على الموقع المنشور في `/design-system/INSTALL.md`:

```html
<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.css">
<script defer src="https://<design-system-domain>/design-system/bootstrap.bundle.js"></script>
```

استخدم `sru-theme.rtl.css` للصفحات العربية ذات الاتجاه RTL. تلزم حزمة
JavaScript للمكوّنات التفاعلية مثل القوائم المنسدلة والنوافذ والطيّ والشرائح
واللوحات الجانبية والتلميحات والنوافذ المنبثقة والتنبيهات. تتضمن الحزمة Popper
ولا تحتاج إلى jQuery. إذا كان الموقع يحمّل JavaScript الخاص بـ Bootstrap
مسبقاً، فلا تحمّل حزمة ثانية.

تتضمن ملفات CSS أنماط Bootstrap كاملةً وقالب الجامعة؛ لذلك لا تضف ملف CSS
ثانياً لـ Bootstrap. يُحمّل القالب خط Cairo من Google Fonts. عند استخدام سياسة
أمن محتوى مقيّدة، اسمح بـ `fonts.googleapis.com` ضمن `style-src` وبـ
`fonts.gstatic.com` ضمن `font-src`.

## النشر على Cloudflare Pages

لإعداد النشر التلقائي، اربط مستودع GitHub
[`ahumaid/sru-design-system`](https://github.com/ahumaid/sru-design-system)
بمشروع Cloudflare Pages. حدّد `main` فرعاً للإنتاج، و`npm run build` أمرًا
للبناء، و`dist` مجلداً لملفات الإخراج. يثبّت Cloudflare الاعتماديات من
`package-lock.json` قبل تنفيذ البناء.

يمنح Cloudflare المشروع نطاقاً ينتهي بـ `pages.dev`. أضف النطاق المخصص الذي
تختاره الجامعة إلى إعدادات مشروع Pages إذا رغبت في استخدام نطاق تابع للجامعة،
ثم استبدل `<design-system-domain>` في أمثلة الاستخدام بالنطاق بعد تفعيله.

تنفّذ عمليات البناء المرتبطة بـ Git الأمر `npm run build` في بيئة البناء لدى
Cloudflare. يتطلب البناء والمعاينة محلياً تثبيت Node.js وnpm.

يضبط `public/_headers` التخزين المؤقت لمسارات ملفات التصميم الثابتة مع إعادة
التحقق. يمكن للمتصفحات وCloudflare إعادة استخدام الملف ما دام دون تغيير، وجلب
النسخة الجديدة بعد النشر عند تحديثه من دون تغيير رابطه. تجنب قواعد التخزين
المؤقت التي تتجاوز هذه الترويسات.

## تحديث القالب

عدّل `src/styles/sru-theme.scss`. توجد أنماط تخطيط المعرض بصورة منفصلة في
`src/styles/gallery.scss`. يعيد الأمر `npm run build` إنشاء ملفات التصميم
المنشورة وبناء موقع المعرض.
