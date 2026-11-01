<script setup>
import { useI18n } from 'vue-i18n';

defineProps({
  isDark: { type: Boolean, required: true },
});

const { locale } = useI18n({ useScope: 'global' });
defineEmits(['toggle-language', 'toggle-theme']);
</script>

<template>
  <nav class="navbar app-navigation navbar-expand-lg navbar-dark bg-primary flex-shrink-0 shadow-sm">
    <div class="container-fluid px-lg-4">
      <RouterLink class="navbar-brand" to="/">
        <img src="/img/logo-white.png" :alt="$t('app.brand')" width="163" height="30">
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#top-nav" aria-controls="top-nav" aria-expanded="false" :aria-label="$t('app.navToggle')">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="top-nav">
        <div class="navbar-nav me-auto">
          <RouterLink class="nav-link" exact-active-class="active" to="/">{{ $t('app.gallery') }}</RouterLink>
          <a class="nav-link" href="/design-system/INSTALL.md">{{ $t('app.usageGuide') }}</a>
        </div>
        <div class="d-flex flex-wrap gap-2 py-2 py-lg-0">
          <button class="btn btn-sm btn-outline-light" type="button" :aria-pressed="locale === 'ar'" @click="$emit('toggle-language')">{{ $t('app.english') }}</button>
          <button class="btn btn-sm btn-light" type="button" :aria-pressed="isDark" @click="$emit('toggle-theme')">{{ $t(isDark ? 'app.themeLight' : 'app.themeDark') }}</button>
        </div>
      </div>
    </div>
  </nav>
</template>
