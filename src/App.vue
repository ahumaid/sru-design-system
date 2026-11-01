<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import TopNavbar from './components/TopNavbar.vue';
import GallerySidebar from './components/GallerySidebar.vue';
import GlobalOverlays from './components/GlobalOverlays.vue';

const route = useRoute();
const isArabic = ref(true);
const isRtl = ref(true);
const isDark = ref(false);
let initializeGalleryPage = null;
let applyLanguage = null;

const syncDocumentSettings = () => {
  const root = document.documentElement;
  root.lang = isArabic.value ? 'ar' : 'en';
  root.dir = isRtl.value ? 'rtl' : 'ltr';
  root.dataset.bsTheme = isDark.value ? 'dark' : 'light';
  const themeStylesheet = document.querySelector('#theme-css');
  if (themeStylesheet) {
    themeStylesheet.href = isRtl.value
      ? '/design-system/sru-theme.rtl.css'
      : '/design-system/sru-theme.css';
  }
};

const toggleLanguage = () => {
  isArabic.value = !isArabic.value;
  isRtl.value = isArabic.value;
  applyLanguage?.(isArabic.value);
  syncDocumentSettings();
};

const toggleDirection = () => {
  isRtl.value = !isRtl.value;
  syncDocumentSettings();
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  syncDocumentSettings();
};

const initializeCurrentPage = async () => {
  await nextTick();
  initializeGalleryPage?.(isArabic.value);
};

watch(() => route.fullPath, initializeCurrentPage);

onMounted(async () => {
  const galleryEnhancements = await import('./utils/gallery-enhancements.js');
  initializeGalleryPage = galleryEnhancements.initializeGalleryPage;
  applyLanguage = galleryEnhancements.setLanguage;
  initializeCurrentPage();
  syncDocumentSettings();
});
</script>

<template>
  <TopNavbar
    :is-arabic="isArabic"
    :is-rtl="isRtl"
    :is-dark="isDark"
    @toggle-language="toggleLanguage"
    @toggle-direction="toggleDirection"
    @toggle-theme="toggleTheme"
  />

  <div class="container-fluid px-3 px-lg-4" id="top">
    <div class="row g-4 py-4 py-lg-5">
      <aside class="col-lg-3 col-xl-2 px-0">
        <GallerySidebar :is-arabic="isArabic" />
      </aside>

      <main class="col-lg-9 col-xl-10">
        <RouterView v-slot="{ Component, route: activeRoute }">
          <component v-if="['icons', 'alerts'].includes(activeRoute.name)" :is="Component" :is-arabic="isArabic" :key="activeRoute.fullPath" />
          <component v-else :is="Component" :key="activeRoute.fullPath" />
        </RouterView>
        <footer class="border-top pt-4 pb-5 mt-5 text-secondary small">
          <p class="mb-1">Sulaiman AlRajhi University Design System · Bootstrap 5.3.8</p>
        </footer>
      </main>
    </div>
  </div>

  <GlobalOverlays />
</template>
