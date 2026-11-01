<template>
<section class="gallery-section" id="collapse" aria-labelledby="collapse-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.11-interaction') }}</p><h2 class="h3 fw-bold mb-0" id="collapse-title">{{ $t('labels.collapse-title') }}</h2></div>
            <div class="showcase-panel">
              <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-example" aria-expanded="false" aria-controls="collapse-example">{{ $t('phrases.show-details') }}</button>
              <div class="collapse mt-3" id="collapse-example"><div class="card card-body">{{ $t('phrases.collapsed-content-expands-in-place-and-works-with-keyboard-activation') }}</div></div>
            </div>
          </section>
</template>
