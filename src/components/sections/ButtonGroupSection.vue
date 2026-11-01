<template>
<section class="gallery-section" aria-labelledby="button-group-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.07-actions') }}</p><h2 class="h3 fw-bold mb-0" id="button-group-title">{{ $t('labels.button-group-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-4">
              <div class="btn-group" role="group" :aria-label="$t('phrases.view-options')"><button type="button" class="btn btn-outline-primary active" aria-pressed="true">{{ $t('phrases.list') }}</button><button type="button" class="btn btn-outline-primary">{{ $t('phrases.grid') }}</button><button type="button" class="btn btn-outline-primary">{{ $t('phrases.map') }}</button></div>
              <div class="btn-group" role="group" :aria-label="$t('phrases.text-formatting')"><button type="button" class="btn btn-primary fw-bold" :aria-label="$t('phrases.bold')">B</button><button type="button" class="btn btn-primary fst-italic" :aria-label="$t('phrases.italic')">I</button><button type="button" class="btn btn-primary text-decoration-underline" :aria-label="$t('phrases.underline')">U</button></div>
            </div>
          </section>
</template>
