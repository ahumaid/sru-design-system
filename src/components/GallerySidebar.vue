<script setup>
import { gallerySections } from '../data/gallery-sections.js';

const guideLinks = gallerySections.filter((section) => section.group === 'guide');
const componentLinks = gallerySections.filter((section) => section.group === 'components');
</script>

<template>
  <nav id="gallery-sidebar-nav" class="gallery-nav app-navigation pt-5 pb-5" :aria-label="$t('app.navigationLabel')">
    <h2 class="h6 fw-bold text-primary border-bottom border-2 border-primary pb-2 mb-2">{{ $t('app.guide') }}</h2>
    <div class="list-group list-group-flush">
      <a v-for="link in guideLinks" :key="link.id" class="list-group-item list-group-item-action" :href="`/#${link.id}`">{{ $t(link.labelKey) }}</a>
    </div>
    <h2 class="h6 fw-bold text-primary border-bottom border-2 border-primary pb-2 mt-4 mb-2">{{ $t('app.components') }}</h2>
    <div class="list-group list-group-flush">
      <a v-for="link in componentLinks" :key="link.id" class="list-group-item list-group-item-action" :href="`/#${link.id}`">{{ $t(link.labelKey) }}</a>
    </div>
  </nav>
</template>
