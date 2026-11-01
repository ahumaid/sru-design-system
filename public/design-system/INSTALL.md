# استخدام نظام تصميم جامعة سليمان الراجحي

## إضافة النظام إلى موقع

لا تحتاج إلى تنزيل ملفات نظام التصميم أو مكتبة Lucide. انسخ التعليمات المستضافة
أدناه والصقها في موقعك.

You do not need to download the design system files or the Lucide library. Copy
and paste the hosted snippets below into your site.

أضف الملف الأساسي المستضاف داخل عنصر `<head>`. يتضمن Bootstrap 5.3.8 وسمة جامعة سليمان الراجحي، لذلك لا تضف ملف Bootstrap CSS آخر.

Add the hosted base stylesheet inside `<head>`. It includes Bootstrap 5.3.8 and
the Sulaiman AlRajhi University theme, so do not add another Bootstrap CSS file.

```html
<link rel="stylesheet" href="/design-system/sru-theme.css">
```

للصفحات العربية أو الصفحات الأخرى من اليمين إلى اليسار، اضبط `dir="rtl"` على عنصر `<html>`. يتضمن ملف التنسيق نفسه دعم RTL.

```html
<html lang="ar" dir="rtl">
  <head>
    <link rel="stylesheet" href="/design-system/sru-theme.css">
  </head>
</html>
```

For Arabic or other right-to-left pages, set `dir="rtl"` on the `<html>` element. RTL support is built into the same stylesheet.

حزمة JavaScript الخاصة بـ Bootstrap اختيارية. حمّلها مرة واحدة قبل إغلاق `</body>` عند استخدام المكونات التفاعلية مثل القوائم المنسدلة والنوافذ والطي والشرائح واللوحات الجانبية والتلميحات والنوافذ المنبثقة والإشعارات. تتضمن Popper ولا تحتاج إلى jQuery.

The Bootstrap JavaScript bundle is optional. Load it once before `</body>` when you use interactive components such as dropdowns, modals, collapse, carousels, offcanvas, tooltips, popovers, or toasts. It includes Popper and does not require jQuery.

```html
<script defer src="/design-system/bootstrap.bundle.js"></script>
```

## استخدام أيقونات Lucide

أضف مكتبة Lucide عند استخدام الأيقونات، ثم استدعِ `lucide.createIcons()` بعد عناصر الأيقونات. تستبدل المكتبة العناصر التي تحتوي على `data-lucide` برسوم SVG.

أضف نص CDN التالي مرة واحدة عند استخدام أيقونات Lucide:

```html
<script src="https://unpkg.com/lucide@latest"></script>
```

أضف ترميز الأيقونة في الموضع المطلوب، ثم استدعِ `lucide.createIcons()` بعد إضافة
العناصر إلى الصفحة:

```html
<button class="btn btn-primary" type="button">
  <i data-lucide="search" aria-hidden="true"></i>
  بحث
</button>

<script>
  lucide.createIcons();
</script>
```

استخدم قيمة `data-lucide` المطابقة لاسم الأيقونة في المعرض. أخفِ الأيقونات الزخرفية عن قارئات الشاشة باستخدام `aria-hidden="true"` عندما يشرح النص المحيط وظيفة العنصر. إذا كان الزر يحتوي على أيقونة فقط، فأضف إليه `aria-label` يصف الإجراء. ترث الأيقونات لون النص ويكون مقاسها الافتراضي `24 × 24` بكسل.

تستخدم الوصلة `@latest` أحدث إصدار منشور. إذا كانت الصفحة تستخدم سياسة أمان المحتوى (CSP)، اسمح بالمجال `https://unpkg.com` في توجيه `script-src`.

## الخط وسياسة الأمان

تحمّل السمة خط Cairo من Google Fonts. إذا كان الموقع يستخدم سياسة أمان المحتوى (CSP)، اسمح بـ `https://fonts.googleapis.com` في `style-src` وبـ `https://fonts.gstatic.com` في `font-src`.
