<template>
<section class="gallery-section" id="modal" aria-labelledby="modal-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.15-interaction') }}</p><h2 id="modal-title">{{ $t('labels.modal-title') }}</h2></div>
            <div class="showcase-panel"><p>{{ $t('copy.modalDescription') }}</p><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#demo-modal">{{ $t('phrases.open-modal') }}</button></div>
            <div class="modal fade" id="demo-modal" tabindex="-1" aria-labelledby="demo-modal-title" aria-hidden="true"><div class="modal-dialog modal-dialog-centered"><div class="modal-content"><div class="modal-header"><h3 class="modal-title fs-5" id="demo-modal-title">{{ $t('phrases.confirm-changes') }}</h3><button type="button" class="btn-close" data-bs-dismiss="modal" :aria-label="$t('phrases.close')"></button></div><div class="modal-body">{{ $t('copy.modalConfirmation') }}</div><div class="modal-footer"><button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">{{ $t('phrases.cancel') }}</button><button type="button" class="btn btn-primary" data-bs-dismiss="modal">{{ $t('phrases.continue') }}</button></div></div></div></div>
          </section>
</template>
