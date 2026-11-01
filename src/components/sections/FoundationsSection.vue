<template>
<section class="gallery-section" id="foundations" aria-labelledby="foundations-title">
            <div class="gallery-section-heading">
              <p class="eyebrow">{{ $t('phrases.01-foundations') }}</p>
              <h2 id="foundations-title">{{ $t('labels.foundations-title') }}</h2>
              <p class="text-secondary">{{ $t('copy.foundationDescription') }}</p>
            </div>
            <div class="row g-3 mb-4">
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-primary text-white">{{ $t('phrases.primary') }} <code>primary</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-secondary text-white">{{ $t('phrases.secondary') }} <code>secondary</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-success text-white">{{ $t('phrases.success') }} <code>success</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-info text-white">{{ $t('phrases.information') }} <code>info</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-warning text-dark">{{ $t('phrases.warning') }} <code>warning</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-danger text-white">{{ $t('phrases.danger') }} <code>danger</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-light text-dark border">{{ $t('phrases.light') }} <code>light</code></div></div>
              <div class="col-6 col-md-4 col-xl-3"><div class="color-tile bg-dark text-white">{{ $t('phrases.dark') }} <code>dark</code></div></div>
            </div>
            <div class="row g-4">
              <div class="col-xl-6">
                <div class="showcase-panel h-100">
                  <h3 class="h5">{{ $t('phrases.typography-scale') }}</h3>
                  <h1>{{ $t('phrases.heading-1') }}</h1><h2>{{ $t('phrases.heading-2') }}</h2><h3>{{ $t('phrases.heading-3') }}</h3>
                  <p class="lead">{{ $t('copy.typographyLead') }}</p>
                  <p>{{ $t('phrases.body-text-for-longer-content') }} <RouterLink to="/components/buttons">{{ $t('phrases.links-follow-the-university-palette') }}</RouterLink>{{ $t('phrases.and') }} <strong>{{ $t('phrases.important-text') }}</strong> {{ $t('phrases.keeps-accessible-contrast') }}</p>
                  <p class="text-secondary mb-0">{{ $t('phrases.secondary-text') }} <small>{{ $t('phrases.small-supporting-text') }}</small></p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="showcase-panel h-100">
                  <h3 class="h5">{{ $t('phrases.arabic-sample') }}</h3>
                  <p lang="ar" dir="rtl" class="fs-4">جامعة سليمان الراجحي — التحول الرقمي</p>
                  <p lang="ar" dir="rtl" class="mb-0">تتبع النصوص العربية اتجاه القراءة من اليمين إلى اليسار، مع بقاء ترتيب المكونات متناسقاً.</p>
                </div>
              </div>
            </div>
          </section>
</template>
