<template>
<section class="gallery-section" id="alerts" aria-labelledby="alerts-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.03-feedback') }}</p><h2 class="h3 fw-bold mb-0" id="alerts-title">{{ $t('labels.alerts-title') }}</h2></div>
            <div class="showcase-panel d-grid gap-3">
              <div class="alert alert-primary mb-0" role="alert">
                {{ $t('alerts.primaryLead') }}
                <a href="/#buttons" class="alert-link">{{ $t('alerts.actionLink') }}</a>.
              </div>
              <div class="alert alert-success mb-0" role="alert">{{ $t('alerts.saved') }}</div>
              <div class="alert alert-warning alert-dismissible fade show mb-0" role="alert">
                <strong>{{ $t('alerts.review') }}</strong> {{ $t('alerts.reviewDetails') }}
                <button type="button" class="btn-close" data-bs-dismiss="alert" :aria-label="$t('alerts.close')"></button>
              </div>
              <div class="alert alert-danger mb-0" role="alert">{{ $t('alerts.failed') }}</div>
            </div>
          </section>
</template>
