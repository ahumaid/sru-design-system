<script setup>
defineProps({
  isArabic: { type: Boolean, required: true },
  isRtl: { type: Boolean, required: true },
  isDark: { type: Boolean, required: true },
});

defineEmits(['toggle-language', 'toggle-direction', 'toggle-theme']);
</script>

<template>
  <nav class="navbar app-navigation navbar-expand-lg navbar-dark bg-primary sticky-top shadow-sm">
    <div class="container-fluid px-lg-4">
      <RouterLink class="navbar-brand fw-bold" to="/">{{ isArabic ? 'جامعة سليمان الراجحي' : 'Sulaiman AlRajhi University' }}</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#top-nav" aria-controls="top-nav" aria-expanded="false" :aria-label="isArabic ? 'تبديل التنقل' : 'Toggle navigation'">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="top-nav">
        <div class="navbar-nav me-auto">
          <RouterLink class="nav-link" exact-active-class="active" to="/">{{ isArabic ? 'معرض المكونات' : 'Component gallery' }}</RouterLink>
          <a class="nav-link" href="/design-system/INSTALL.md">{{ isArabic ? 'دليل الاستخدام' : 'Usage guide' }}</a>
        </div>
        <div class="d-flex flex-wrap gap-2 py-2 py-lg-0">
          <button class="btn btn-sm btn-outline-light" type="button" :aria-pressed="isArabic" @click="$emit('toggle-language')">{{ isArabic ? 'الإنجليزية' : 'العربية' }}</button>
          <button class="btn btn-sm btn-outline-light" type="button" :aria-pressed="isRtl" @click="$emit('toggle-direction')">{{ isArabic ? (isRtl ? 'معاينة من اليسار إلى اليمين' : 'معاينة من اليمين إلى اليسار') : (isRtl ? 'Preview LTR' : 'Preview RTL') }}</button>
          <button class="btn btn-sm btn-light" type="button" :aria-pressed="isDark" @click="$emit('toggle-theme')">{{ isArabic ? (isDark ? 'معاينة المظهر الفاتح' : 'معاينة المظهر الداكن') : (isDark ? 'Light preview' : 'Dark preview') }}</button>
        </div>
      </div>
    </div>
  </nav>
</template>
