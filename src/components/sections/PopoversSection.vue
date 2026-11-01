<template>
<section class="gallery-section" id="popovers" aria-labelledby="popovers-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.21-interaction') }}</p><h2 class="h3 fw-bold mb-0" id="popovers-title">{{ $t('labels.popovers-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-3"><button type="button" class="btn btn-outline-primary" data-bs-toggle="popover" :title="$t('phrases.more-information')" :data-bs-content="$t('phrases.use-a-popover-for-short-contextual-help-that-needs-a-title')">{{ $t('phrases.click-for-popover') }}</button><button type="button" class="btn btn-outline-secondary" data-bs-toggle="popover" data-bs-trigger="focus" :title="$t('phrases.dismissible-popover')" :data-bs-content="$t('phrases.click-or-move-focus-away-to-dismiss-this-popover')">{{ $t('phrases.focus-to-dismiss') }}</button></div>
          </section>
</template>
