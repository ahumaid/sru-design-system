<template>
<section class="gallery-section" id="introduction" aria-labelledby="introduction-title">
            <div class="gallery-section-heading">
              <p class="eyebrow">{{ $t('phrases.guide-01') }}</p>
              <h2 id="introduction-title">{{ $t('labels.introduction-title') }}</h2>
              <p class="text-secondary">{{ $t('copy.introductionDescription') }}</p>
            </div>
            <div class="row g-3">
              <div class="col-md-4"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.bootstrap-included') }}</h3><p class="mb-0">{{ $t('copy.bootstrapIncludedDescription') }}</p></div></div></div>
              <div class="col-md-4"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.ltr-and-rtl') }}</h3><p class="mb-0">{{ $t('copy.directionStylesheetDescription') }}</p></div></div></div>
              <div class="col-md-4"><div class="card h-100"><div class="card-body"><h3 class="h6">{{ $t('phrases.interactive-components') }}</h3><p class="mb-0">{{ $t('copy.optionalJavascriptDescription') }}</p></div></div></div>
            </div>
          </section>
</template>
