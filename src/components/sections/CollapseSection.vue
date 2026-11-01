<template>
<section class="gallery-section" id="collapse" aria-labelledby="collapse-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.11-interaction') }}</p><h2 id="collapse-title">{{ $t('labels.collapse-title') }}</h2></div>
            <div class="showcase-panel">
              <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-example" aria-expanded="false" aria-controls="collapse-example">{{ $t('phrases.show-details') }}</button>
              <div class="collapse mt-3" id="collapse-example"><div class="card card-body">{{ $t('phrases.collapsed-content-expands-in-place-and-works-with-keyboard-activation') }}</div></div>
            </div>
          </section>
</template>
