<template>
<section class="gallery-section" aria-labelledby="close-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.10-actions') }}</p><h2 class="h3 fw-bold mb-0" id="close-title">{{ $t('labels.close-title') }}</h2></div>
            <div class="showcase-panel d-flex align-items-center gap-3"><span>{{ $t('phrases.dismissible-content') }}</span><button type="button" class="btn-close" :aria-label="$t('phrases.close')"></button><button type="button" class="btn-close" disabled :aria-label="$t('phrases.disabled-close-button')"></button></div>
          </section>
</template>
