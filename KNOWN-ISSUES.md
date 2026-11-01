# known issues / المشاكل المعروفة

## One stylesheet supports both directions / ملف واحد يدعم الاتجاهين

يحتوي `sru-theme.css` على القالب ودعم RTL. استخدم الملف نفسه لكل الصفحات،
واضبط `dir="rtl"` على عنصر `<html>` للصفحات ذات الاتجاه من اليمين إلى اليسار.

`sru-theme.css` includes the theme and RTL support. Use the same file for every
page, and set `dir="rtl"` on the `<html>` element for right-to-left pages.
