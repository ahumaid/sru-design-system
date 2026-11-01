<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
import TopNavbar from './components/TopNavbar.vue';
import GallerySidebar from './components/GallerySidebar.vue';
import GlobalOverlays from './components/GlobalOverlays.vue';

const route = useRoute();
const { locale, t } = useI18n({ useScope: 'global' });
const isRtl = computed(() => locale.value === 'ar');
const isDark = ref(false);
let initializeGalleryPage = null;

const syncDocumentSettings = () => {
  const root = document.documentElement;
  root.lang = locale.value;
  root.dir = isRtl.value ? 'rtl' : 'ltr';
  root.dataset.bsTheme = isDark.value ? 'dark' : 'light';
  document.title = t('app.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', t('app.description'));
};

const toggleLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar';
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

watch(() => route.path, initializeCurrentPage);
watch(locale, initializeCurrentPage, { flush: 'post' });

onMounted(async () => {
  const galleryEnhancements = await import('./utils/gallery-enhancements.js');
  initializeGalleryPage = galleryEnhancements.initializeGalleryPage;
  initializeCurrentPage();
});
</script>

<template>
  <a href="#main-content" class="visually-hidden-focusable btn btn-primary position-absolute top-0 start-0 m-2 z-3">{{ $t('app.skipToContent') }}</a>
  <div class="d-flex flex-column vh-100 overflow-hidden">
    <TopNavbar
      :is-dark="isDark"
      @toggle-language="toggleLanguage"
      @toggle-theme="toggleTheme"
    />

    <div class="container-fluid flex-fill overflow-hidden px-3 px-lg-4" id="top">
      <div class="row h-100 overflow-hidden g-4 pb-4 pb-lg-5">
        <aside class="col-lg-3 col-xl-2 h-100 px-0 overflow-auto" :aria-label="$t('app.sidebarLabel')">
          <GallerySidebar />
        </aside>

        <main id="main-content" tabindex="-1" class="col-lg-9 col-xl-10 h-100 pt-3 overflow-auto">
          <RouterView v-slot="{ Component }">
            <component :is="Component" />
          </RouterView>
          <footer class="border-top pt-4 pb-5 mt-5 text-secondary small">
            <p class="mb-1">{{ $t('app.footer') }}</p>
          </footer>
        </main>
      </div>
    </div>
  </div>

  <GlobalOverlays />
</template>
