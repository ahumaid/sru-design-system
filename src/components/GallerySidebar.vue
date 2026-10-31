<script setup>
defineProps({
  isArabic: { type: Boolean, default: true },
});

const guideLinks = [
  { name: 'introduction', label: 'Introduction', labelAr: 'مقدمة', to: '/' },
  { name: 'getting-started', label: 'Getting started', labelAr: 'البدء', to: '/guide/getting-started' },
  { name: 'installation', label: 'Installation', labelAr: 'التثبيت', to: '/guide/installation' },
];

const componentLinks = [
  { name: 'foundations', label: 'Foundations', labelAr: 'الأساسيات', to: '/foundations' },
  { name: 'icons', label: 'Lucide icons', labelAr: 'أيقونات Lucide', to: '/components/icons' },
  { name: 'accordion', label: 'Accordion', labelAr: 'الأكورديون', to: '/components/accordion' },
  { name: 'alerts', label: 'Alerts', labelAr: 'التنبيهات', to: '/components/alerts' },
  { name: 'badge', label: 'Badge', labelAr: 'الشارات', to: '/components/badge' },
  { name: 'breadcrumb', label: 'Breadcrumb', labelAr: 'مسار التنقل', to: '/components/breadcrumb' },
  { name: 'buttons', label: 'Buttons', labelAr: 'الأزرار', to: '/components/buttons' },
  { name: 'button-group', label: 'Button group', labelAr: 'مجموعة الأزرار', to: '/components/button-group' },
  { name: 'cards', label: 'Cards', labelAr: 'البطاقات', to: '/components/cards' },
  { name: 'carousel', label: 'Carousel', labelAr: 'الشريط المتحرك', to: '/components/carousel' },
  { name: 'close-button', label: 'Close button', labelAr: 'زر الإغلاق', to: '/components/close-button' },
  { name: 'collapse', label: 'Collapse', labelAr: 'الطي', to: '/components/collapse' },
  { name: 'dropdowns', label: 'Dropdowns', labelAr: 'القوائم المنسدلة', to: '/components/dropdowns' },
  { name: 'forms', label: 'Forms', labelAr: 'النماذج', to: '/components/forms' },
  { name: 'list-group', label: 'List group', labelAr: 'قائمة العناصر', to: '/components/list-group' },
  { name: 'modal', label: 'Modal', labelAr: 'النافذة المنبثقة', to: '/components/modal' },
  { name: 'navbar', label: 'Navbar', labelAr: 'شريط التنقل', to: '/components/navbar' },
  { name: 'navs', label: 'Navs and tabs', labelAr: 'التنقل وعلامات التبويب', to: '/components/navs' },
  { name: 'offcanvas', label: 'Offcanvas', labelAr: 'اللوحة الجانبية', to: '/components/offcanvas' },
  { name: 'pagination', label: 'Pagination', labelAr: 'ترقيم الصفحات', to: '/components/pagination' },
  { name: 'placeholders', label: 'Placeholders', labelAr: 'العناصر النائبة', to: '/components/placeholders' },
  { name: 'popovers', label: 'Popovers', labelAr: 'النوافذ التوضيحية', to: '/components/popovers' },
  { name: 'progress', label: 'Progress', labelAr: 'التقدم', to: '/components/progress' },
  { name: 'scrollspy', label: 'Scrollspy', labelAr: 'مراقبة التمرير', to: '/components/scrollspy' },
  { name: 'spinners', label: 'Spinners', labelAr: 'مؤشرات التحميل', to: '/components/spinners' },
  { name: 'tables', label: 'Tables', labelAr: 'الجداول', to: '/components/tables' },
  { name: 'toasts', label: 'Toasts', labelAr: 'الإشعارات', to: '/components/toasts' },
  { name: 'tooltips', label: 'Tooltips', labelAr: 'التلميحات', to: '/components/tooltips' },
  { name: 'helpers', label: 'Helpers and utilities', labelAr: 'المساعدات والأدوات', to: '/components/helpers' },
];
</script>

<template>
  <nav class="gallery-nav app-navigation sticky-lg-top" :aria-label="isArabic ? 'مكونات نظام التصميم' : 'Design system components'">
    <p class="small text-secondary fw-bold text-uppercase mb-2">{{ isArabic ? 'الدليل' : 'Guide' }}</p>
    <div class="list-group list-group-flush mb-4">
      <RouterLink v-for="link in guideLinks" :key="link.name" exact-active-class="active" class="list-group-item list-group-item-action" :to="link.to">{{ isArabic ? link.labelAr : link.label }}</RouterLink>
    </div>
    <p class="small text-secondary fw-bold text-uppercase mb-2">{{ isArabic ? 'المكونات' : 'Components' }}</p>
    <div class="list-group list-group-flush">
      <RouterLink v-for="link in componentLinks" :key="link.name" exact-active-class="active" class="list-group-item list-group-item-action" :to="link.to">{{ isArabic ? link.labelAr : link.label }}</RouterLink>
    </div>
  </nav>
</template>
