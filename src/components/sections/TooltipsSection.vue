<template>
<section class="gallery-section" id="tooltips" aria-labelledby="tooltips-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.27-help') }}</p><h2 id="tooltips-title">{{ $t('labels.tooltips-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-3"><button type="button" class="btn btn-outline-primary" data-bs-toggle="tooltip" data-bs-placement="top" :title="$t('phrases.helpful-context-for-this-action')">{{ $t('phrases.hover-or-focus-me') }}</button><button type="button" class="btn btn-outline-secondary" data-bs-toggle="tooltip" data-bs-placement="right" :title="$t('phrases.tooltips-also-work-on-keyboard-focus')">{{ $t('phrases.tooltip-on-the-right') }}</button></div>
          </section>
</template>
