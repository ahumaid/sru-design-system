<template>
<section class="gallery-section" id="popovers" aria-labelledby="popovers-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.21-interaction') }}</p><h2 id="popovers-title">{{ $t('labels.popovers-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-3"><button type="button" class="btn btn-outline-primary" data-bs-toggle="popover" :title="$t('phrases.more-information')" :data-bs-content="$t('phrases.use-a-popover-for-short-contextual-help-that-needs-a-title')">{{ $t('phrases.click-for-popover') }}</button><button type="button" class="btn btn-outline-secondary" data-bs-toggle="popover" data-bs-trigger="focus" :title="$t('phrases.dismissible-popover')" :data-bs-content="$t('phrases.click-or-move-focus-away-to-dismiss-this-popover')">{{ $t('phrases.focus-to-dismiss') }}</button></div>
          </section>
</template>
