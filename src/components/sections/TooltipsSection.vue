<template>
<section class="gallery-section" id="tooltips" aria-labelledby="tooltips-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.27-help') }}</p><h2 class="h3 fw-bold mb-0" id="tooltips-title">{{ $t('labels.tooltips-title') }}</h2></div>
            <p class="text-secondary mb-3">{{ $t('copy.tooltipDescription') }}</p>
            <div class="showcase-panel d-flex flex-wrap gap-3"><button type="button" class="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('phrases.helpful-context-for-this-action')">{{ $t('phrases.hover-or-focus-me') }}</button><button type="button" class="btn btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" :title="$t('phrases.tooltips-also-work-on-keyboard-focus')">{{ $t('phrases.tooltip-on-the-right') }}</button></div>
            <p class="text-secondary mt-4 mb-2">{{ $t('copy.tooltipInitialization') }}</p>
            <HtmlSnippet :code="tooltipInitializationSnippet" :label="$t('app.snippet')" />
          </section>
</template>

<script setup>
import HtmlSnippet from '../HtmlSnippet.vue';

const tooltipInitializationSnippet = `document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((element) => {
  bootstrap.Tooltip.getOrCreateInstance(element);
});`;
</script>
