<template>
<section class="gallery-section" id="getting-started" aria-labelledby="getting-started-title">
            <div class="gallery-section-heading">
              <p class="eyebrow">Guide · 02</p>
              <h2 id="getting-started-title">Getting started</h2>
              <p class="text-secondary">For developers and AI coding assistants building a Sulaiman AlRajhi University website, follow the same integration steps:</p>
            </div>
            <div class="card"><div class="card-body">
              <ol class="mb-0">
                <li class="mb-2">Choose the stylesheet that matches the page direction and language.</li>
                <li class="mb-2">Build layouts with Bootstrap 5.3.8 components and utilities; the university theme provides the shared colors and typography.</li>
                <li class="mb-2">Load the JavaScript bundle only when using interactive components such as modals, dropdowns, or tooltips.</li>
                <li class="mb-2">When using Lucide icons, load <code>https://unpkg.com/lucide@latest</code> and call <code>lucide.createIcons()</code> after the icon elements are in the page.</li>
                <li>Use the examples in this gallery as patterns, and check keyboard access and RTL layout when relevant.</li>
              </ol>
              <div class="alert alert-warning mt-4 mb-0 ai-review-hint" role="note">AI agents make mistakes. You are responsible for comparing their output with the referenced gallery example and confirming it follows the design system before accepting it.</div>
              <details class="ai-prompt mt-4">
                <summary class="fw-semibold">AI coding prompt · copy and paste</summary>
                <p class="mt-3">Give this prompt to an AI coding agent before it works on your site:</p>
                <pre class="guide-code" dir="ltr"><code id="ai-prompt-copy">أنت تنشئ موقعاً باستخدام نظام تصميم جامعة سليمان الراجحي (SRU).

قبل إنشاء أي مكوّن أو تصميم HTML أو تعديله، اقرأ هذا الدليل وراجع معرض مكونات جامعة سليمان الراجحي. ابحث عن أقرب مثال موجود واستخدمه مرجعاً للترميز والحالات والمسافات والخطوط والألوان والسلوك المتجاوب واتجاه الكتابة من اليسار إلى اليمين (LTR) أو من اليمين إلى اليسار (RTL).

اتبع هذه القواعد:
- استخدم ملف تنسيق الجامعة المنشور ومكونات وأدوات Bootstrap 5.3.8. يتضمن ملف التنسيق Bootstrap؛ لا تضف ملف CSS آخر لـ Bootstrap.
- لا تضف تنسيقات مخصصة أو أنماطاً مضمنة أو تجاوزات CSS أو تجاوزات للسمة أو الرموز أو قواعد !important أو تنسيقات بديلة لتغيير مظهر النظام أو مكوناته، إلا إذا طلب المستخدم ذلك صراحة. لا تعتبر طلب إنشاء مكوّن أو تنفيذه إذناً بهذه التعديلات.
- إذا تعذر إنشاء النتيجة المطلوبة باستخدام النظام الحالي، فوضّح القيد واطلب من المستخدم موافقته قبل إضافة تنسيقات مخصصة أو تجاوزات.
- اجعل HTML دلالياً ومتاحاً وقابلاً للاستخدام بلوحة المفاتيح ومتجاوباً ومتوافقاً مع اتجاه الصفحة.
- حمّل حزمة JavaScript الخاصة بـ Bootstrap عند الحاجة إلى المكونات التفاعلية فقط؛ فهي تتضمن Popper بالفعل.
- عند استخدام أيقونات Lucide، حمّل https://unpkg.com/lucide@latest واستدعِ lucide.createIcons() بعد إضافة عناصر الأيقونات إلى الصفحة.
- استخدم أسماء الأيقونات كما تظهر في المعرض. اجعل الأيقونة الزخرفية مخفية عن قارئات الشاشة، وأضف اسماً واضحاً للأزرار التي تحتوي على أيقونة فقط.

قبل الإنهاء، قارن النتيجة بمثال المعرض الذي استخدمته وتأكد من عدم إدخال تنسيقات أو تجاوزات لم يطلبها المستخدم.</code></pre>
              </details>
            </div></div>
          </section>
</template>
