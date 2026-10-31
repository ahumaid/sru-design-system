import './styles/gallery.scss';

const root = document.documentElement;
const themeStylesheet = document.querySelector('#theme-css');
const directionToggle = document.querySelector('#direction-toggle');
const themeToggle = document.querySelector('#theme-toggle');
const languageToggle = document.querySelector('#language-toggle');

const voidElements = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr',
]);
const blockElements = new Set([
    'address', 'article', 'aside', 'blockquote', 'body', 'caption', 'dd', 'details', 'dialog', 'div', 'dl', 'dt',
    'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'li',
    'main', 'nav', 'ol', 'optgroup', 'option', 'p', 'pre', 'section', 'select', 'summary', 'table', 'tbody',
    'td', 'tfoot', 'th', 'thead', 'tr', 'ul',
]);

const openingTag = (element) => {
    const serialized = element.outerHTML;
    let quote = '';
    for (let index = 1; index < serialized.length; index += 1) {
        const character = serialized[index];
        if (quote) {
            if (character === quote) quote = '';
        } else if (character === '"' || character === "'") {
            quote = character;
        } else if (character === '>') {
            return serialized.slice(0, index + 1);
        }
    }
    return `<${element.localName}>`;
};

const escapeText = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const formatNode = (node, depth = 0) => {
    if (node.nodeType === Node.TEXT_NODE) return escapeText(node.nodeValue);
    if (node.nodeType === Node.COMMENT_NODE) return `<!--${node.nodeValue}-->`;
    if (node.nodeType !== Node.ELEMENT_NODE) return '';

    const tagName = node.localName;
    const startTag = openingTag(node);
    if (voidElements.has(tagName)) return startTag;

    const children = Array.from(node.childNodes);
    const hasMeaningfulText = children.some((child) => (
        child.nodeType === Node.TEXT_NODE && child.nodeValue.trim().length > 0
    ));
    const formattedChildren = blockElements.has(tagName)
        && !hasMeaningfulText
        && children.some((child) => child.nodeType === Node.ELEMENT_NODE || child.nodeType === Node.COMMENT_NODE);

    if (!formattedChildren) return `${startTag}${node.innerHTML}</${tagName}>`;

    const indent = '  '.repeat(depth);
    const childIndent = '  '.repeat(depth + 1);
    const content = children
        .filter((child) => !(child.nodeType === Node.TEXT_NODE && !child.nodeValue.trim()))
        .map((child) => `${childIndent}${formatNode(child, depth + 1)}`)
        .join('\n');

    return `${startTag}\n${content}\n${indent}</${tagName}>`;
};

const formatHtml = (element) => Array.from(element.childNodes)
    .filter((child) => !(child.nodeType === Node.TEXT_NODE && !child.nodeValue.trim()))
    .map((child) => formatNode(child))
    .join('\n');

const appendSyntaxToken = (parent, className, value) => {
    const token = document.createElement('span');
    token.className = className;
    token.textContent = value;
    parent.append(token);
};

const appendTag = (code, source) => {
    const match = source.match(/^<(\/?)\s*([\w:-]+)([\s\S]*?)(\/?)>$/);
    if (!match) {
        code.append(document.createTextNode(source));
        return;
    }

    const [, closingSlash, tagName, attributes, selfClosingSlash] = match;
    appendSyntaxToken(code, 'syntax-punctuation', `<${closingSlash}`);
    appendSyntaxToken(code, 'syntax-tag', tagName);

    const attributePattern = /(\s*)([^\s=/>]+)(\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?/g;
    let cursor = 0;
    let attribute;
    while ((attribute = attributePattern.exec(attributes))) {
        if (attribute.index > cursor) {
            code.append(document.createTextNode(attributes.slice(cursor, attribute.index)));
        }
        code.append(document.createTextNode(attribute[1]));
        appendSyntaxToken(code, 'syntax-attribute', attribute[2]);
        if (attribute[3]) {
            const equalsIndex = attribute[3].indexOf('=');
            code.append(document.createTextNode(attribute[3].slice(0, equalsIndex + 1)));
            const value = attribute[3].slice(equalsIndex + 1);
            const leadingSpace = value.match(/^\s*/)[0];
            code.append(document.createTextNode(leadingSpace));
            appendSyntaxToken(code, 'syntax-value', value.slice(leadingSpace.length));
        }
        cursor = attributePattern.lastIndex;
    }
    if (cursor < attributes.length) {
        code.append(document.createTextNode(attributes.slice(cursor)));
    }

    appendSyntaxToken(code, 'syntax-punctuation', `${selfClosingSlash}>`);
};

const highlightHtml = (code, source) => {
    let cursor = 0;
    while (cursor < source.length) {
        const nextTag = source.indexOf('<', cursor);
        if (nextTag === -1) {
            code.append(document.createTextNode(source.slice(cursor)));
            break;
        }
        if (nextTag > cursor) {
            code.append(document.createTextNode(source.slice(cursor, nextTag)));
        }

        if (source.startsWith('<!--', nextTag)) {
            const commentEnd = source.indexOf('-->', nextTag + 4);
            const end = commentEnd === -1 ? source.length : commentEnd + 3;
            appendSyntaxToken(code, 'syntax-comment', source.slice(nextTag, end));
            cursor = end;
            continue;
        }

        let quote = '';
        let end = nextTag + 1;
        for (; end < source.length; end += 1) {
            const character = source[end];
            if (quote) {
                if (character === quote) quote = '';
            } else if (character === '"' || character === "'") {
                quote = character;
            } else if (character === '>') {
                end += 1;
                break;
            }
        }

        if (source[end - 1] !== '>') {
            code.append(document.createTextNode(source.slice(nextTag)));
            break;
        }
        appendTag(code, source.slice(nextTag, end));
        cursor = end;
    }
};

document.querySelectorAll('.showcase-panel').forEach((panel) => {
    const snippet = formatHtml(panel).trim();

    const reference = document.createElement('details');
    reference.className = 'class-reference';
    reference.dataset.classReference = 'true';
    const summary = document.createElement('summary');
    summary.textContent = 'HTML snippet';

    const editor = document.createElement('div');
    editor.className = 'html-editor';

    const toolbar = document.createElement('div');
    toolbar.className = 'html-editor-toolbar';
    toolbar.innerHTML = '<span class="html-editor-dots" aria-hidden="true"><i></i><i></i><i></i></span><span class="html-editor-filename">snippet.html</span><span class="html-editor-language">HTML</span>';

    const pre = document.createElement('pre');
    const code = document.createElement('code');
    highlightHtml(code, snippet);
    pre.append(code);
    editor.append(toolbar, pre);
    reference.append(summary, editor);
    panel.append(reference);
});

const englishTextNodes = new Map();
const sourceTextWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
let sourceTextNode;
while ((sourceTextNode = sourceTextWalker.nextNode())) {
    if (!sourceTextNode.parentElement?.closest('.class-reference')) {
        englishTextNodes.set(sourceTextNode, sourceTextNode.nodeValue);
    }
}

const arabicLabels = {
    'page-title': 'نظام تصميم واحد لكل موقع',
    'introduction-title': 'مقدمة',
    'getting-started-title': 'البدء باستخدام النظام',
    'installation-title': 'التثبيت في موقع إلكتروني',
    'foundations-title': 'الألوان والخطوط',
    'accordion-title': 'الأكورديون',
    'alerts-title': 'التنبيهات',
    'badge-title': 'الشارات',
    'breadcrumb-title': 'مسار التنقل',
    'buttons-title': 'الأزرار',
    'button-group-title': 'مجموعة الأزرار',
    'cards-title': 'البطاقات',
    'carousel-title': 'الشريط المتحرك',
    'close-title': 'زر الإغلاق',
    'collapse-title': 'الطي',
    'dropdowns-title': 'القوائم المنسدلة',
    'forms-title': 'النماذج',
    'list-title': 'قائمة العناصر',
    'modal-title': 'النافذة المنبثقة',
    'navbar-title': 'شريط التنقل',
    'navs-title': 'التنقل وعلامات التبويب',
    'offcanvas-title': 'اللوحة الجانبية',
    'pagination-title': 'ترقيم الصفحات',
    'placeholders-title': 'العناصر النائبة',
    'popovers-title': 'النوافذ التوضيحية',
    'progress-title': 'التقدم',
    'scrollspy-title': 'مراقبة التمرير',
    'spinners-title': 'مؤشرات التحميل',
    'tables-title': 'الجداول',
    'toasts-title': 'الإشعارات',
    'tooltips-title': 'التلميحات',
    'helpers-title': 'المساعدات والأدوات',
};

const arabicNavigation = {
    introduction: 'مقدمة', 'getting-started': 'البدء', installation: 'التثبيت',
    foundations: 'الأساسيات', accordion: 'الأكورديون', alerts: 'التنبيهات', badge: 'الشارات',
    breadcrumb: 'مسار التنقل', buttons: 'الأزرار', 'button-group': 'مجموعة الأزرار', cards: 'البطاقات',
    carousel: 'الشريط المتحرك', 'close-button': 'زر الإغلاق', collapse: 'الطي', dropdowns: 'القوائم المنسدلة',
    forms: 'النماذج', 'list-group': 'قائمة العناصر', modal: 'النافذة المنبثقة', navbar: 'شريط التنقل',
    navs: 'التنقل وعلامات التبويب', offcanvas: 'اللوحة الجانبية', pagination: 'ترقيم الصفحات',
    placeholders: 'العناصر النائبة', popovers: 'النوافذ التوضيحية', progress: 'التقدم', scrollspy: 'مراقبة التمرير',
    spinners: 'مؤشرات التحميل', tables: 'الجداول', toasts: 'الإشعارات', tooltips: 'التلميحات', helpers: 'المساعدات والأدوات',
};

const localizedCopy = [
    ['#introduction .gallery-section-heading .text-secondary', 'يجمع نظام تصميم SRU بين Bootstrap 5.3.8 وألوان الجامعة وخطوطها والأنماط المخصصة لاتجاه الصفحة. استخدم المكونات ورموز التصميم نفسها عبر مواقع SRU.'],
    ['#introduction .col-md-4:nth-child(1) p', 'يتضمن ملف التنسيق Bootstrap. أضف ملف تنسيق SRU فقط إلى صفحتك.'],
    ['#introduction .col-md-4:nth-child(2) p', 'اختر ملف التنسيق المناسب لاتجاه لغة الصفحة.'],
    ['#introduction .col-md-4:nth-child(3) p', 'حمّل حزمة JavaScript عند استخدام مكونات Bootstrap التفاعلية فقط.'],
    ['#getting-started .gallery-section-heading .text-secondary', 'للمطورين ومساعدات البرمجة بالذكاء الاصطناعي التي تبني مواقع SRU، اتبعوا خطوات الدمج نفسها:'],
    ['#getting-started li:nth-child(1)', 'اختر ملف التنسيق الذي يطابق اتجاه الصفحة ولغتها.'],
    ['#getting-started li:nth-child(2)', 'أنشئ التخطيطات باستخدام مكونات وأدوات Bootstrap 5.3.8؛ يوفر مظهر SRU الألوان والخطوط المشتركة.'],
    ['#getting-started li:nth-child(3)', 'حمّل حزمة JavaScript عند استخدام المكونات التفاعلية فقط، مثل النوافذ المنبثقة والقوائم المنسدلة والتلميحات.'],
    ['#getting-started li:nth-child(4)', 'استخدم أمثلة هذا المعرض كنماذج، وتحقق من دعم لوحة المفاتيح وتخطيط RTL عند الحاجة.'],
    ['#getting-started .ai-review-hint', 'وكلاء الذكاء الاصطناعي يخطئون. تقع على عاتقك مسؤولية مقارنة مخرجاتهم بمثال المعرض المرجعي والتأكد من التزامها بنظام التصميم قبل اعتمادها.'],
    ['#installation .gallery-section-heading .text-secondary', 'أضف ملف التنسيق المستضاف داخل ترويسة الصفحة. استخدم ملف RTL للصفحات العربية، وأضف حزمة JavaScript عند الحاجة إلى مكونات تفاعلية.'],
    ['#installation .installation-note', 'للصفحات العربية أو الصفحات الأخرى من اليمين إلى اليسار، استخدم sru-theme.rtl.css. يتضمن ملف التنسيق Bootstrap 5.3.8، لذلك لا تحمّل ملف Bootstrap CSS آخر.'],
    ['.gallery-hero .lead', 'تصفح المكونات والحالات والتفاعلات التي يمكن للمطورين استخدامها في مواقع الشركة. بدّل الاتجاه والمظهر لمعاينة النظام نفسه في الوضع من اليمين إلى اليسار والوضع الداكن.'],
    ['.gallery-hero .card .small', 'يتضمن ملف CSS Bootstrap ورموز تصميم SRU. أضف حزمة JavaScript للمكونات التفاعلية.'],
    ['#foundations .gallery-section-heading .text-secondary', 'تستخدم ألوان Bootstrap السياقية لوحة SRU. خط Cairo هو الخط المشترك للمحتوى اللاتيني والعربي.'],
    ['#foundations .showcase-panel .lead', 'فقرة تمهيدية قصيرة بمزيد من التركيز.'],
    ['#forms .gallery-section-heading .text-secondary', 'تشترك عناصر النماذج في أنماط التركيز والحدود والتحقق. تبقى التسميات ظاهرة ومرتبطة بحقوق الإدخال.'],
    ['#accordion-one .accordion-body', 'تجمع الأكورديونات المحتوى المرتبط في أقسام قابلة للتوسيع. يبدأ العنصر الأول مفتوحاً.'],
    ['#accordion-two .accordion-body', 'استخدم تسميات واضحة وحافظ على سلوك لوحة المفاتيح المدمج.'],
    ['#cards .card-text:nth-of-type(1)', 'سطح مرن لعرض الملخص والحالة والخطوة التالية.'],
    ['#cards .card-text:nth-of-type(2)', 'تستخدم ترويسة البطاقة وتذييلها نمط الحدود المشترك.'],
    ['#cards .card-text:nth-of-type(3)', 'تحافظ خلفيات البطاقات السياقية على لوحة الألوان نفسها.'],
    ['#demo-carousel .carousel-item:nth-child(1) .mb-0', 'شريحة متجاوبة مع وصف توضيحي سهل الوصول.'],
    ['#demo-carousel .carousel-item:nth-child(2) .mb-0', 'استخدم المكونات نفسها عبر مواقع الشركة.'],
    ['#demo-carousel .carousel-item:nth-child(3) .mb-0', 'استخدم عناصر التحكم للتنقل بين الشرائح.'],
    ['#modal .showcase-panel p', 'استخدم النافذة المنبثقة لمهمة مركزة تحتاج إلى استجابة واضحة.'],
    ['#demo-modal .modal-body', 'طلبك جاهز للإرسال. هل تريد المتابعة؟'],
    ['#offcanvas .showcase-panel p', 'تعمل اللوحات الجانبية للتنقل وعناصر التحكم الثانوية على الشاشات الصغيرة.'],
    ['#demo-offcanvas .offcanvas-body p', 'اجعل التنقل الثانوي سهل الوصول.'],
    ['#scrollspy .showcase-panel > p', 'مرر داخل اللوحة لمشاهدة تحديث عنصر التنقل النشط.'],
    ['#spy-one + p', 'يحدّث Scrollspy التنقل بناءً على موضع التمرير الحالي، وهو مفيد للمقالات الطويلة وصفحات الإعدادات.'],
    ['#spy-two + p', 'استخدم تسلسلاً واضحاً للعناوين حتى يكون لكل هدف تسمية مفهومة.'],
    ['#spy-three', 'القسم الثالث'],
    ['#spy-three + p', 'يتحرك العنصر النشط عند دخول هذا القسم إلى منطقة التمرير.'],
    ['#toasts .showcase-panel p', 'تعرض الإشعارات تحديثاً موجزاً وغير معيق للحالة.'],
    ['#helpers .gallery-section-heading .text-secondary', 'تحافظ الأدوات المساعدة الشائعة على تجاوب التخطيطات دون إضافة CSS خاص بكل حالة.'],
    ['#helpers .text-truncate', 'يوضح هذا السطر اقتطاع النص عندما لا تتسع الحاوية لتسمية طويلة.'],
];

const arabicUi = {
    Guide: 'الدليل',
    'Bootstrap included': 'يتضمن Bootstrap',
    'LTR and RTL': 'من اليسار إلى اليمين ومن اليمين إلى اليسار',
    'Interactive components': 'المكونات التفاعلية',
    'Getting started': 'البدء',
    'LTR stylesheet': 'ملف تنسيق من اليسار إلى اليمين',
    'RTL stylesheet': 'ملف تنسيق من اليمين إلى اليسار',
    'Optional JavaScript': 'JavaScript اختياري',
    'AI coding prompt · copy and paste': 'تعليمات للوكيل البرمجي · للنسخ',
    'Give this prompt to an AI coding agent before it works on your site:': 'أرسل هذه التعليمات إلى وكيل برمجي بالذكاء الاصطناعي قبل أن يعمل على موقعك:',
    Components: 'المكونات',
    'Component gallery': 'معرض المكونات',
    'Usage guide': 'دليل الاستخدام',
    'SRU Design System': 'نظام تصميم SRU',
    'SRU Design System · Bootstrap 5.3.8': 'نظام تصميم SRU · Bootstrap 5.3.8',
    'SRU Portal': 'بوابة SRU',
    'Use this system': 'استخدم هذا النظام',
    'A primary alert with an action link.': 'تنبيه أساسي مع رابط إجراء.',
    'Your changes were saved successfully.': 'تم حفظ تغييراتك بنجاح.',
    'Review needed. Check the details before continuing.': 'تحتاج إلى مراجعة. تحقق من التفاصيل قبل المتابعة.',
    'The request could not be completed. Try again.': 'تعذر إكمال الطلب. حاول مرة أخرى.',
    Service: 'خدمة',
    'Application request': 'طلب خدمة',
    'View request': 'عرض الطلب',
    'With a header': 'بترويسة',
    'Department profile': 'ملف القسم',
    'Updated today': 'تم التحديث اليوم',
    'Featured card': 'بطاقة مميزة',
    Explore: 'استكشاف',
    'Digital services': 'الخدمات الرقمية',
    'Designed for people': 'مصمم للناس',
    'University identity': 'هوية الجامعة',
    'One clear system': 'نظام واضح واحد',
    'Bootstrap components': 'مكونات Bootstrap',
    'Built to adapt': 'مصمم للتكيف',
    Actions: 'إجراءات',
    Request: 'طلب',
    'Open details': 'فتح التفاصيل',
    'Edit information': 'تعديل المعلومات',
    'Cancel request': 'إلغاء الطلب',
    Home: 'الرئيسية',
    Services: 'الخدمات',
    Contact: 'تواصل',
    Search: 'بحث',
    'Open side panel': 'فتح اللوحة الجانبية',
    'Quick links': 'روابط سريعة',
    Profile: 'الملف الشخصي',
    Notifications: 'الإشعارات',
    Reports: 'التقارير',
    Previous: 'السابق',
    Next: 'التالي',
    'Show toast': 'عرض الإشعار',
    'Hover or focus me': 'مرر المؤشر أو ركز هنا',
    'Tooltip on the right': 'تلميح على اليمين',
    Complete: 'مكتمل',
    'In review': 'قيد المراجعة',
    Received: 'مستلم',
    Today: 'اليوم',
    Yesterday: 'أمس',
    'View options': 'خيارات العرض',
    'Text formatting': 'تنسيق النص',
    'Controls and select': 'عناصر التحكم والاختيار',
    'Full name': 'الاسم الكامل',
    Description: 'الوصف',
    Department: 'القسم',
    'Select a department': 'اختر قسماً',
    Admissions: 'القبول والتسجيل',
    'Digital transformation': 'التحول الرقمي',
    'Student services': 'خدمات الطلاب',
    'Supporting text explains what the field is used for.': 'يوضح النص المساند استخدام هذا الحقل.',
    'Checks and radios': 'خيارات التحديد وأزرار الاختيار',
    'Send me status updates': 'أرسل لي تحديثات الحالة',
    'Include supporting documents': 'إرفاق المستندات الداعمة',
    'Preferred contact method': 'طريقة التواصل المفضلة',
    Email: 'البريد الإلكتروني',
    Phone: 'الهاتف',
    'Enable notifications': 'تفعيل الإشعارات',
    'Range and input group': 'النطاق ومجموعة الإدخال',
    Satisfaction: 'مستوى الرضا',
    Check: 'تحقق',
    Amount: 'المبلغ',
    'Floating labels': 'التسميات العائمة',
    'Choose one': 'اختر واحداً',
    Student: 'طالب',
    'Staff member': 'موظف',
    'Your role': 'دورك',
    'Form layout and validation': 'تخطيط النموذج والتحقق',
    Name: 'الاسم',
    'Looks good.': 'يبدو جيداً.',
    'Enter your name.': 'أدخل اسمك.',
    'University email': 'البريد الإلكتروني الجامعي',
    'Enter a valid email address.': 'أدخل عنوان بريد إلكتروني صحيحاً.',
    'I confirm this information is correct.': 'أؤكد صحة هذه المعلومات.',
    'Confirmation is required.': 'التأكيد مطلوب.',
    'Validate form': 'التحقق من النموذج',
    'Toggle navigation': 'تبديل التنقل',
    'Bootstrap components': 'مكونات Bootstrap',
    'One theme, every website.': 'سمة واحدة لكل موقع.',
    'Bootstrap 5.3.8 · SRU theme': 'سمة SRU المبنية على Bootstrap 5.3.8',
    '01 · Foundations': '٠١ · الأساسيات',
    '02 · Content': '٠٢ · المحتوى',
    '03 · Feedback': '٠٣ · التنبيهات',
    '04 · Labels': '٠٤ · التسميات',
    '05 · Navigation': '٠٥ · التنقل',
    '06 · Actions': '٠٦ · الإجراءات',
    '07 · Actions': '٠٧ · الإجراءات',
    '08 · Content': '٠٨ · المحتوى',
    '09 · Content': '٠٩ · المحتوى',
    '10 · Actions': '١٠ · الإجراءات',
    '11 · Interaction': '١١ · التفاعل',
    '12 · Interaction': '١٢ · التفاعل',
    '13 · Data entry': '١٣ · إدخال البيانات',
    '14 · Content': '١٤ · المحتوى',
    '15 · Interaction': '١٥ · التفاعل',
    '16 · Navigation': '١٦ · التنقل',
    '17 · Navigation': '١٧ · التنقل',
    '18 · Navigation': '١٨ · التنقل',
    '19 · Navigation': '١٩ · التنقل',
    '20 · Loading': '٢٠ · التحميل',
    '21 · Interaction': '٢١ · التفاعل',
    '22 · Status': '٢٢ · الحالة',
    '23 · Navigation': '٢٣ · التنقل',
    '24 · Status': '٢٤ · الحالة',
    '25 · Data': '٢٥ · البيانات',
    '26 · Feedback': '٢٦ · التنبيهات',
    '27 · Help': '٢٧ · المساعدة',
    '28 · Layout': '٢٨ · التخطيط',
    'Color and type': 'الألوان والخطوط',
    Primary: 'أساسي',
    Secondary: 'ثانوي',
    Success: 'نجاح',
    Info: 'معلومات',
    Information: 'معلومات',
    Warning: 'تحذير',
    Danger: 'خطر',
    Light: 'فاتح',
    Dark: 'داكن',
    'Typography scale': 'مقياس أحجام الخطوط',
    'Heading 1': 'العنوان ١',
    'Heading 2': 'العنوان ٢',
    'Heading 3': 'العنوان ٣',
    'Lead paragraph — a short introduction with more emphasis.': 'فقرة تمهيدية قصيرة بمزيد من التركيز.',
    'Body text for longer content.': 'نص أساسي للمحتوى الطويل.',
    'Links follow the SRU palette': 'تتبع الروابط لوحة ألوان SRU',
    ', and': '، كما أن',
    'important text': 'النصوص المهمة',
    'keeps accessible contrast.': 'تحافظ على تباين واضح وسهل الوصول.',
    'Secondary text ·': 'نص ثانوي ·',
    'Small supporting text': 'نص مساند صغير',
    'Arabic sample': 'نموذج باللغة العربية',
    Accordion: 'الأكورديون',
    Alerts: 'التنبيهات',
    Badge: 'الشارة',
    Breadcrumb: 'مسار التنقل',
    Buttons: 'الأزرار',
    'Button group': 'مجموعة الأزرار',
    Cards: 'البطاقات',
    Carousel: 'الشريط المتحرك',
    'Close button': 'زر الإغلاق',
    Collapse: 'الطي',
    Dropdowns: 'القوائم المنسدلة',
    Forms: 'النماذج',
    'List group': 'قائمة العناصر',
    Modal: 'النافذة المنبثقة',
    Navbar: 'شريط التنقل',
    'Navs and tabs': 'التنقل وعلامات التبويب',
    Offcanvas: 'اللوحة الجانبية',
    Pagination: 'ترقيم الصفحات',
    Placeholders: 'العناصر النائبة',
    Popovers: 'النوافذ التوضيحية',
    Progress: 'التقدم',
    Scrollspy: 'مراقبة التمرير',
    Spinners: 'مؤشرات التحميل',
    Tables: 'الجداول',
    Toasts: 'الإشعارات',
    Tooltips: 'التلميحات',
    'Helpers and utilities': 'المساعدات والأدوات',
    'First section': 'القسم الأول',
    'Second section': 'القسم الثاني',
    'A primary alert with an action link.': 'تنبيه أساسي مع رابط إجراء.',
    'action link': 'رابط إجراء',
    'Review needed.': 'تحتاج إلى مراجعة.',
    'Check the details before continuing.': 'تحقق من التفاصيل قبل المتابعة.',
    Published: 'منشور',
    'Needs review': 'بحاجة إلى مراجعة',
    'Design system': 'نظام التصميم',
    'Outline primary': 'أساسي بإطار',
    'Outline secondary': 'ثانوي بإطار',
    'Outline success': 'نجاح بإطار',
    'Outline danger': 'خطر بإطار',
    'Link button': 'زر رابط',
    Large: 'كبير',
    Default: 'افتراضي',
    Small: 'صغير',
    Disabled: 'معطل',
    Loading: 'جارٍ التحميل',
    'Loading…': 'جارٍ التحميل…',
    List: 'قائمة',
    Grid: 'شبكة',
    Map: 'خريطة',
    Service: 'خدمة',
    'A flexible surface for a summary, status, and next step.': 'مساحة مرنة لعرض الملخص والحالة والخطوة التالية.',
    'The card header and footer use the shared border treatment.': 'تستخدم ترويسة البطاقة وتذييلها نمط الحدود المشترك.',
    'Contextual card backgrounds keep the same theme palette.': 'تحافظ خلفيات البطاقات السياقية على لوحة ألوان السمة نفسها.',
    'Slide 1': 'الشريحة ١',
    'Slide 2': 'الشريحة ٢',
    'Slide 3': 'الشريحة ٣',
    'A responsive slide with an accessible caption.': 'شريحة متجاوبة مع وصف توضيحي سهل الوصول.',
    'Dismissible content': 'محتوى قابل للإغلاق',
    'Disabled close button': 'زر إغلاق معطل',
    'Show details': 'عرض التفاصيل',
    'Collapsed content expands in place and works with keyboard activation.': 'يتوسع المحتوى المطوي في موضعه ويمكن استخدامه بلوحة المفاتيح.',
    'Split action': 'إجراء مقسم',
    'Toggle dropdown': 'تبديل القائمة المنسدلة',
    'Alternative action': 'إجراء بديل',
    'Email address': 'عنوان البريد الإلكتروني',
    SAR: 'ريال سعودي',
    'Active item': 'عنصر نشط',
    Now: 'الآن',
    'With supporting text below.': 'مع نص مساند أدناه.',
    'A second actionable item': 'عنصر ثانٍ قابل للتنفيذ',
    'A third actionable item': 'عنصر ثالث قابل للتنفيذ',
    Inbox: 'صندوق الوارد',
    Requests: 'الطلبات',
    'Archived (disabled)': 'مؤرشف (معطل)',
    'Use a modal for a focused task that needs a clear response.': 'استخدم نافذة منبثقة لمهمة محددة تتطلب استجابة واضحة.',
    'Open modal': 'فتح النافذة المنبثقة',
    'Confirm changes': 'تأكيد التغييرات',
    Cancel: 'إلغاء',
    Continue: 'متابعة',
    'Toggle sample navbar': 'تبديل شريط التنقل النموذجي',
    Overview: 'نظرة عامة',
    Details: 'التفاصيل',
    History: 'السجل',
    'A tab panel displays one related view at a time.': 'تعرض لوحة علامات التبويب عرضاً واحداً ذا صلة في كل مرة.',
    'Keep tab labels short and descriptive.': 'اجعل تسميات علامات التبويب قصيرة وواضحة.',
    'Use tabs for peer content, not sequential steps.': 'استخدم علامات التبويب للمحتوى المتوازي، لا للخطوات المتتابعة.',
    'Active pill': 'علامة نشطة',
    'Another pill': 'علامة أخرى',
    'Offcanvas panels work for navigation and secondary controls on smaller screens.': 'تناسب اللوحات الجانبية التنقل وعناصر التحكم الثانوية على الشاشات الصغيرة.',
    'Example page navigation': 'مثال على التنقل بين الصفحات',
    'More information': 'مزيد من المعلومات',
    'Use a popover for short, contextual help that needs a title.': 'استخدم نافذة توضيحية للمساعدة السياقية القصيرة التي تحتاج إلى عنوان.',
    'Click for popover': 'انقر لعرض النافذة التوضيحية',
    'Dismissible popover': 'نافذة توضيحية قابلة للإغلاق',
    'Click or move focus away to dismiss this popover.': 'انقر خارج النافذة التوضيحية أو انقل التركيز لإغلاقها.',
    'Focus to dismiss': 'ركز لإغلاق النافذة',
    'Basic progress': 'التقدم الأساسي',
    'Success progress': 'التقدم الناجح',
    'Striped animated progress': 'تقدم متحرك مخطط',
    Completed: 'مكتمل',
    'In progress': 'قيد التنفيذ',
    'Scroll the panel to see the active navigation item update.': 'مرر داخل اللوحة لمشاهدة تحديث عنصر التنقل النشط.',
    Sections: 'الأقسام',
    One: 'الأول',
    Two: 'الثاني',
    Three: 'الثالث',
    'Section one': 'القسم الأول',
    'Scrollspy updates navigation based on the current scroll position. It is useful for long articles and settings pages.': 'تحدّث مراقبة التمرير عناصر التنقل وفق موضع التمرير الحالي، وهي مفيدة للمقالات الطويلة وصفحات الإعدادات.',
    'This content creates enough space to scroll.': 'يوفر هذا المحتوى مساحة كافية للتمرير.',
    'Section two': 'القسم الثاني',
    'Use a clear heading hierarchy so each target has a meaningful label.': 'استخدم تسلسلاً واضحاً للعناوين ليحمل كل هدف تسمية مفهومة.',
    'Continue through the panel to the next section.': 'تابع التمرير داخل اللوحة للوصول إلى القسم التالي.',
    'Section three': 'القسم الثالث',
    'The active item moves as this section enters the scroll area.': 'يتغير العنصر النشط عند دخول هذا القسم إلى منطقة التمرير.',
    'Recent requests': 'الطلبات الأخيرة',
    Reference: 'المرجع',
    Updated: 'تاريخ التحديث',
    Status: 'الحالة',
    Actions: 'الإجراءات',
    'Account access': 'الوصول إلى الحساب',
    'Student record': 'سجل الطالب',
    'New application': 'طلب جديد',
    View: 'عرض',
    'Oct 28': '٢٨ أكتوبر',
    'Toasts show brief, non-blocking status feedback.': 'تعرض الإشعارات تحديثاً موجزاً للحالة دون مقاطعة المستخدم.',
    'Helpful context for this action': 'معلومات مساعدة حول هذا الإجراء',
    'Hover or focus me': 'مرر المؤشر أو ركز هنا',
    'Tooltips also work on keyboard focus': 'تعمل التلميحات أيضاً عند التركيز بلوحة المفاتيح',
    'Tooltip on the right': 'تلميح على اليمين',
    'Common helpers keep layouts responsive without adding one-off CSS.': 'تحافظ الأدوات المساعدة الشائعة على تجاوب التخطيطات دون إضافة CSS مخصص لكل حالة.',
    'Responsive ratio': 'نسبة أبعاد متجاوبة',
    '16:9 content': 'محتوى بنسبة ١٦:٩',
    'Example stretched link': 'مثال على رابط ممتد',
    'Stacks and text utilities': 'التكديس وأدوات النص',
    'Vertical stack item one': 'العنصر الأول في التكديس الرأسي',
    'Vertical stack item two': 'العنصر الثاني في التكديس الرأسي',
    'Left item': 'العنصر الأيسر',
    'Right item': 'العنصر الأيمن',
    'This line demonstrates text truncation when a long label does not fit in its container.': 'يوضح هذا السطر اقتطاع النص عندما لا تتسع الحاوية لتسمية طويلة.',
    'Visually hidden and focus ring': 'الإخفاء المرئي ومؤشر التركيز',
    'Visible action': 'إجراء ظاهر',
    'for assistive technology': 'للتقنيات المساعدة',
    'Tab through the page to see the shared focus ring.': 'تنقل بين عناصر الصفحة بلوحة المفاتيح لمشاهدة مؤشر التركيز المشترك.',
    'Image and figure': 'الصورة والتعليق التوضيحي',
    'Figure caption · images scale to their container.': 'تعليق الصورة · تتكيف الصور مع حجم الحاوية.',
    'Just now': 'الآن',
    'Your preferences have been saved.': 'تم حفظ تفضيلاتك.',
    'Preview RTL': 'معاينة من اليمين إلى اليسار',
    'Preview LTR': 'معاينة من اليسار إلى اليمين',
    'Dark preview': 'معاينة المظهر الداكن',
    'Light preview': 'معاينة المظهر الفاتح',
};

const englishUi = Object.fromEntries(Object.entries(arabicUi).map(([english, arabic]) => [arabic, english]));
const arabicAttributes = {
    'Enter a name': 'أدخل اسماً',
    'Add a short description': 'أضف وصفاً قصيراً',
    'name@example.com': 'name@example.com',
    Amount: 'المبلغ',
    'Choose a role': 'اختر دوراً',
    'Toggle navigation': 'تبديل التنقل',
    'Bootstrap components': 'مكونات Bootstrap',
    'View options': 'خيارات العرض',
    'Text formatting': 'تنسيق النص',
    Close: 'إغلاق',
    'Disabled close button': 'زر إغلاق معطل',
    'Slide 1': 'الشريحة ١',
    'Slide 2': 'الشريحة ٢',
    'Slide 3': 'الشريحة ٣',
    Actions: 'الإجراءات',
    'Toggle sample navbar': 'تبديل شريط التنقل النموذجي',
    Search: 'بحث',
    Breadcrumb: 'مسار التنقل',
    'Example page navigation': 'مثال على التنقل بين الصفحات',
    'Basic progress': 'التقدم الأساسي',
    'Success progress': 'التقدم الناجح',
    'Striped animated progress': 'تقدم متحرك مخطط',
    Completed: 'مكتمل',
    'In progress': 'قيد التنفيذ',
    'More information': 'مزيد من المعلومات',
    'Use a popover for short, contextual help that needs a title.': 'استخدم نافذة توضيحية للمساعدة السياقية القصيرة التي تحتاج إلى عنوان.',
    'Dismissible popover': 'نافذة توضيحية قابلة للإغلاق',
    'Click or move focus away to dismiss this popover.': 'انقر خارج النافذة التوضيحية أو انقل التركيز لإغلاقها.',
    'Helpful context for this action': 'معلومات مساعدة حول هذا الإجراء',
    'Tooltips also work on keyboard focus': 'تعمل التلميحات أيضاً عند التركيز بلوحة المفاتيح',
    'Abstract purple and blue university brand illustration': 'رسم تجريدي لهوية الجامعة باللونين البنفسجي والأزرق',
};
const englishAttributes = Object.fromEntries(Object.entries(arabicAttributes).map(([english, arabic]) => [arabic, english]));

const englishCopy = new Map(localizedCopy.map(([selector]) => [
    selector,
    document.querySelector(selector)?.textContent,
]));

const englishNavigation = Object.fromEntries(Object.keys(arabicNavigation).map((id) => [
    id,
    document.querySelector(`.gallery-nav a[href="#${id}"]`)?.textContent,
]));

const englishLabels = Object.fromEntries(Object.keys(arabicLabels).map((id) => [
    id,
    document.querySelector(`#${id}`)?.textContent,
]));

const setLanguage = (isArabic) => {
    root.lang = isArabic ? 'ar' : 'en';
    root.dir = isArabic ? 'rtl' : 'ltr';
    languageToggle?.setAttribute('aria-pressed', String(isArabic));
    if (languageToggle) languageToggle.textContent = isArabic ? 'الإنجليزية' : 'العربية';
    document.querySelectorAll('.class-reference summary').forEach((summary) => {
        summary.textContent = isArabic ? 'شفرة HTML' : 'HTML snippet';
    });

    Object.entries(isArabic ? arabicLabels : englishLabels).forEach(([id, label]) => {
        const element = document.querySelector(`#${id}`);
        if (element && label) element.textContent = label;
    });
    Object.entries(isArabic ? arabicNavigation : englishNavigation).forEach(([id, label]) => {
        const element = document.querySelector(`.gallery-nav a[href="#${id}"]`);
        if (element && label) element.textContent = label;
    });
    localizedCopy.forEach(([selector, arabicText]) => {
        const element = document.querySelector(selector);
        const englishText = englishCopy.get(selector);
        if (element && englishText) element.textContent = isArabic ? arabicText : englishText;
    });
    const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = textWalker.nextNode())) {
        if (textNode.parentElement?.closest('.class-reference')) continue;
        if (!isArabic && englishTextNodes.has(textNode)) {
            textNode.nodeValue = englishTextNodes.get(textNode);
            continue;
        }
        const current = textNode.nodeValue;
        const trimmed = current.trim();
        const translated = isArabic ? arabicUi[trimmed] : englishUi[trimmed];
        if (!translated) continue;
        const start = current.length - current.trimStart().length;
        const end = current.trimEnd().length;
        textNode.nodeValue = `${current.slice(0, start)}${translated}${current.slice(end)}`;
    }
    document.querySelectorAll('body *').forEach((element) => {
        ['placeholder', 'aria-label', 'title', 'data-bs-content'].forEach((attribute) => {
            const value = element.getAttribute(attribute);
            if (!value) return;
            const translated = isArabic ? arabicAttributes[value] : englishAttributes[value];
            if (translated) element.setAttribute(attribute, translated);
        });
    });
    const primaryAlert = document.querySelector('#alerts .alert-primary');
    if (primaryAlert) {
        primaryAlert.innerHTML = isArabic
            ? 'تنبيه أساسي مع <a href="#buttons" class="alert-link">رابط إجراء</a>.'
            : 'A primary alert with an <a href="#buttons" class="alert-link">action link</a>.';
    }

    if (directionToggle) {
        directionToggle.setAttribute('aria-pressed', String(isArabic));
        directionToggle.textContent = isArabic ? 'معاينة من اليسار إلى اليمين' : 'Preview RTL';
    }
    if (themeToggle) {
        const isDark = root.dataset.bsTheme === 'dark';
        themeToggle.textContent = isArabic
            ? (isDark ? 'معاينة المظهر الفاتح' : 'معاينة المظهر الداكن')
            : (isDark ? 'Light preview' : 'Dark preview');
    }
    if (themeStylesheet) {
        themeStylesheet.href = isArabic
            ? '/design-system/sru-theme.rtl.css'
            : '/design-system/sru-theme.css';
    }
};

languageToggle?.addEventListener('click', () => {
    setLanguage(root.lang !== 'ar');
});

directionToggle?.addEventListener('click', () => {
    const isRtl = root.dir !== 'rtl';

    root.dir = isRtl ? 'rtl' : 'ltr';
    directionToggle.setAttribute('aria-pressed', String(isRtl));
    directionToggle.textContent = root.lang === 'ar'
        ? (isRtl ? 'معاينة من اليسار إلى اليمين' : 'معاينة من اليمين إلى اليسار')
        : (isRtl ? 'Preview LTR' : 'Preview RTL');

    if (themeStylesheet) {
        themeStylesheet.href = isRtl
            ? '/design-system/sru-theme.rtl.css'
            : '/design-system/sru-theme.css';
    }
});

themeToggle?.addEventListener('click', () => {
    const isDark = root.dataset.bsTheme !== 'dark';

    root.dataset.bsTheme = isDark ? 'dark' : 'light';
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.textContent = root.lang === 'ar'
        ? (isDark ? 'معاينة المظهر الفاتح' : 'معاينة المظهر الداكن')
        : (isDark ? 'Light preview' : 'Dark preview');
});

if (globalThis.bootstrap) {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
        bootstrap.Tooltip.getOrCreateInstance(element);
    });

    document.querySelectorAll('[data-bs-toggle="popover"]').forEach((element) => {
        bootstrap.Popover.getOrCreateInstance(element);
    });

    const toastElement = document.querySelector('#demo-toast');
    const toastButton = document.querySelector('#show-toast');

    toastButton?.addEventListener('click', () => {
        if (toastElement) {
            bootstrap.Toast.getOrCreateInstance(toastElement).show();
        }
    });

    const scrollspyElement = document.querySelector('#scrollspy-content');

    if (scrollspyElement) {
        bootstrap.ScrollSpy.getOrCreateInstance(scrollspyElement, {
            target: '#scrollspy-nav',
        }).refresh();
    }
}

setLanguage(true);

document.querySelector('#demo-range')?.addEventListener('input', (event) => {
    const value = document.querySelector('#range-value');

    if (value) {
        value.textContent = event.currentTarget.value;
    }
});

document.querySelector('#validation-form')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    form.classList.add('was-validated');

    if (form.checkValidity()) {
        form.querySelector('button[type="submit"]')?.blur();
    }
});
