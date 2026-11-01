<template>
<section class="gallery-section" id="close-button" aria-labelledby="close-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.10-actions') }}</p><h2 id="close-title">{{ $t('labels.close-title') }}</h2></div>
            <div class="showcase-panel d-flex align-items-center gap-3"><span>{{ $t('phrases.dismissible-content') }}</span><button type="button" class="btn-close" :aria-label="$t('phrases.close')"></button><button type="button" class="btn-close" disabled :aria-label="$t('phrases.disabled-close-button')"></button></div>
          </section>
</template>
