<script setup>
import { gallerySections } from '../data/gallery-sections.js';

const guideLinks = gallerySections.filter((section) => section.group === 'guide');
const componentLinks = gallerySections.filter((section) => section.group === 'components');
</script>

<template>
  <nav class="gallery-nav app-navigation pt-3" :aria-label="$t('app.navigationLabel')">
    <h2 class="h6 fw-bold text-primary border-bottom border-2 border-primary pb-2 mb-2">{{ $t('app.guide') }}</h2>
    <div class="list-group list-group-flush">
      <RouterLink v-for="link in guideLinks" :key="link.id" :to="`/#${link.id}`" custom v-slot="{ href, navigate }">
        <a :href="href" class="list-group-item list-group-item-action" @click="navigate">{{ $t(link.labelKey) }}</a>
      </RouterLink>
    </div>
    <h2 class="h6 fw-bold text-primary border-bottom border-2 border-primary pb-2 mt-4 mb-2">{{ $t('app.components') }}</h2>
    <div class="list-group list-group-flush">
      <RouterLink v-for="link in componentLinks" :key="link.id" :to="`/#${link.id}`" custom v-slot="{ href, navigate }">
        <a :href="href" class="list-group-item list-group-item-action" @click="navigate">{{ $t(link.labelKey) }}</a>
      </RouterLink>
    </div>
  </nav>
</template>
