# known issues / المشاكل المعروفة

## RTL stylesheet is a complete bundle / ملف RTL حزمة كاملة

ملف `sru-theme.rtl.css` حزمة كاملة، وليس ملف تجاوزات جزئية. حمّل ملف CSS واحداً
فقط: `sru-theme.css` لصفحات LTR أو `sru-theme.rtl.css` لصفحات RTL. لا تحمّل
الملفين معاً.

`sru-theme.rtl.css` is a complete theme bundle, not a partial override. Load one
stylesheet only: `sru-theme.css` for LTR pages or `sru-theme.rtl.css` for RTL
pages. Do not load both files.
