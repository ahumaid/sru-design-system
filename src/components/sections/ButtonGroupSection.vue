<template>
<section class="gallery-section" id="button-group" aria-labelledby="button-group-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.07-actions') }}</p><h2 id="button-group-title">{{ $t('labels.button-group-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-4">
              <div class="btn-group" role="group" :aria-label="$t('phrases.view-options')"><button type="button" class="btn btn-outline-primary active" aria-pressed="true">{{ $t('phrases.list') }}</button><button type="button" class="btn btn-outline-primary">{{ $t('phrases.grid') }}</button><button type="button" class="btn btn-outline-primary">{{ $t('phrases.map') }}</button></div>
              <div class="btn-group" role="group" :aria-label="$t('phrases.text-formatting')"><button type="button" class="btn btn-primary fw-bold">B</button><button type="button" class="btn btn-primary fst-italic">I</button><button type="button" class="btn btn-primary text-decoration-underline">U</button></div>
            </div>
          </section>
</template>
