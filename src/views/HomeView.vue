<script setup>
import GalleryHero from '../components/GalleryHero.vue';
import { gallerySections } from '../data/gallery-sections.js';
</script>

<template>
  <GalleryHero />
  <div class="vstack gap-4">
    <div
      v-for="section in gallerySections"
      :key="section.id"
      class="gallery-section-frame card shadow-sm border-0 rounded-3 p-3 p-md-4"
    >
      <component :is="section.component" />
    </div>
  </div>
</template>
