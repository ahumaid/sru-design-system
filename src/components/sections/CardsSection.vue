<template>
<section class="gallery-section" id="cards" aria-labelledby="cards-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.08-content') }}</p><h2 class="h3 fw-bold mb-0" id="cards-title">{{ $t('labels.cards-title') }}</h2></div>
            <div class="row g-3">
              <div class="col-md-6 col-xl-4"><article class="card h-100"><div class="card-body"><span class="badge text-bg-primary mb-2">{{ $t('phrases.service') }}</span><h3 class="h5 card-title">{{ $t('phrases.application-request') }}</h3><p class="card-text text-secondary">{{ $t('copy.cardSummary') }}</p><RouterLink to="/components/buttons" class="btn btn-primary">{{ $t('phrases.view-request') }}</RouterLink></div></article></div>
              <div class="col-md-6 col-xl-4"><article class="card h-100"><div class="card-header">{{ $t('phrases.with-a-header') }}</div><div class="card-body"><h3 class="h5 card-title">{{ $t('phrases.department-profile') }}</h3><p class="card-text">{{ $t('copy.cardBorderTreatment') }}</p></div><div class="card-footer text-secondary small">{{ $t('phrases.updated-today') }}</div></article></div>
              <div class="col-md-6 col-xl-4"><article class="card text-bg-primary h-100"><div class="card-body"><h3 class="h5 card-title">{{ $t('phrases.featured-card') }}</h3><p class="card-text">{{ $t('copy.cardContextualPalette') }}</p><button class="btn btn-light">{{ $t('phrases.explore') }}</button></div></article></div>
            </div>
          </section>
</template>
