<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import TopNavbar from './components/TopNavbar.vue';
import GallerySidebar from './components/GallerySidebar.vue';
import GlobalOverlays from './components/GlobalOverlays.vue';

const route = useRoute();
const { locale, t } = useI18n({ useScope: 'global' });
const isRtl = ref(true);
const isDark = ref(false);
let initializeGalleryPage = null;

const syncDocumentSettings = () => {
  const root = document.documentElement;
  root.lang = locale.value;
  root.dir = isRtl.value ? 'rtl' : 'ltr';
  root.dataset.bsTheme = isDark.value ? 'dark' : 'light';
  const themeStylesheet = document.querySelector('#theme-css');
  if (themeStylesheet) {
    themeStylesheet.href = isRtl.value
      ? '/design-system/sru-theme.rtl.css'
      : '/design-system/sru-theme.css';
  }
  document.title = t('app.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('app.description'));
};

const toggleLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
  isRtl.value = locale.value === 'ar';
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
  initializeGalleryPage?.(locale.value);
  syncDocumentSettings();
};

watch(() => route.fullPath, initializeCurrentPage);
watch(locale, initializeCurrentPage, { flush: 'post' });

onMounted(async () => {
  const galleryEnhancements = await import('./utils/gallery-enhancements.js');
  initializeGalleryPage = galleryEnhancements.initializeGalleryPage;
  initializeCurrentPage();
});
</script>

<template>
  <TopNavbar
    :is-rtl="isRtl"
    :is-dark="isDark"
    @toggle-language="toggleLanguage"
    @toggle-direction="toggleDirection"
    @toggle-theme="toggleTheme"
  />

  <div class="container-fluid px-3 px-lg-4" id="top">
    <div class="row g-4 pb-4 pb-lg-5">
      <aside class="col-lg-3 col-xl-2 px-0">
        <GallerySidebar />
      </aside>

      <main class="col-lg-9 col-xl-10 pt-3">
        <RouterView v-slot="{ Component, route: activeRoute }">
          <component :is="Component" :key="activeRoute.fullPath" />
        </RouterView>
        <footer class="border-top pt-4 pb-5 mt-5 text-secondary small">
          <p class="mb-1">{{ $t('app.footer') }}</p>
        </footer>
      </main>
    </div>
  </div>

  <GlobalOverlays />
</template>
