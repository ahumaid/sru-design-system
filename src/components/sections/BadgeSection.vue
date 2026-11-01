<template>
<section class="gallery-section" id="badge" aria-labelledby="badge-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.04-labels') }}</p><h2 id="badge-title">{{ $t('labels.badge-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap align-items-center gap-3">
              <span class="badge text-bg-primary">{{ $t('phrases.primary') }}</span><span class="badge text-bg-success">{{ $t('phrases.published') }}</span>
              <span class="badge rounded-pill text-bg-warning">{{ $t('phrases.needs-review') }}</span>
              <button class="btn btn-primary" type="button">{{ $t('phrases.notifications') }} <span class="badge text-bg-light ms-1">4</span></button>
            </div>
          </section>
</template>
