<template>
<section class="gallery-section" aria-labelledby="introduction-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
              <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-01') }}</p>
              <h2 class="h3 fw-bold mb-0" id="introduction-title">{{ $t('labels.introduction-title') }}</h2>
              <p class="text-secondary mt-2 mb-0">{{ $t('copy.introductionDescription') }}</p>
            </div>
            <div class="row g-3">
              <div class="col-md-6 col-xl-3"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.bootstrap-included') }}</h3><p class="mb-0 small text-secondary">{{ $t('copy.bootstrapIncludedDescription') }}</p></div></div></div>
              <div class="col-md-6 col-xl-3"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.ltr-and-rtl') }}</h3><p class="mb-0 small text-secondary">{{ $t('copy.directionStylesheetDescription') }}</p></div></div></div>
              <div class="col-md-6 col-xl-3"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.interactive-components') }}</h3><p class="mb-0 small text-secondary">{{ $t('copy.optionalJavascriptDescription') }}</p></div></div></div>
              <div class="col-md-6 col-xl-3"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.accessibility-built-in') }}</h3><p class="mb-0 small text-secondary">{{ $t('copy.accessibilityDescription') }}</p></div></div></div>
            </div>
          </section>
</template>
