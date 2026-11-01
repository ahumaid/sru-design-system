<template>
<section class="gallery-section" aria-labelledby="helpers-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.28-layout') }}</p><h2 class="h3 fw-bold mb-0" id="helpers-title">{{ $t('labels.helpers-title') }}</h2><p class="text-secondary mt-2 mb-0">{{ $t('copy.helperDescription') }}</p></div>
            <div class="row g-4">
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">{{ $t('phrases.responsive-ratio') }}</h3><p class="text-secondary">{{ $t('copy.helperRatioDescription') }}</p><div class="ratio ratio-16x9 ratio-demo rounded overflow-hidden"><div class="d-flex align-items-center justify-content-center bg-primary text-white">{{ $t('phrases.16-9-content') }}</div></div></div></div>
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">{{ $t('phrases.stacks-and-text-utilities') }}</h3><p class="text-secondary">{{ $t('copy.helperStackDescription') }}</p><div class="vstack gap-2"><div class="p-2 border rounded">{{ $t('phrases.vertical-stack-item-one') }}</div><div class="p-2 border rounded">{{ $t('phrases.vertical-stack-item-two') }}</div></div><hr><div class="hstack gap-3"><div class="p-2 border rounded">{{ $t('phrases.left-item') }}</div><div class="vr"></div><div class="p-2 border rounded">{{ $t('phrases.right-item') }}</div></div><p class="text-truncate w-75 mt-3 mb-0">{{ $t('copy.textTruncation') }}</p></div></div>
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">{{ $t('phrases.visually-hidden-and-focus-ring') }}</h3><p class="text-secondary">{{ $t('copy.helperAccessibilityDescription') }}</p><button type="button" class="btn btn-primary" @click="actionActivated = true">{{ $t('phrases.visible-action') }} <span class="visually-hidden">{{ $t('phrases.for-assistive-technology') }}</span></button><p v-if="actionActivated" class="small text-success mt-3 mb-0" role="status">{{ $t('copy.helperActionFeedback') }}</p><p class="small text-secondary mt-3 mb-0">{{ $t('phrases.tab-through-the-page-to-see-the-shared-focus-ring') }}</p></div></div>
              <div class="col-md-6"><div class="showcase-panel"><h3 class="h5">{{ $t('phrases.image-and-figure') }}</h3><p class="text-secondary">{{ $t('copy.helperFigureDescription') }}</p><figure class="mb-0"><div class="ratio ratio-16x9 rounded overflow-hidden" role="img" :aria-label="$t('phrases.image-placeholder-example')"><span class="placeholder col-12 h-100"></span></div><figcaption class="figure-caption mt-2">{{ $t('phrases.figure-caption-placeholder-example') }}</figcaption></figure></div></div>
            </div>
          </section>
</template>

<script setup>
import { ref } from 'vue';

const actionActivated = ref(false);
</script>
