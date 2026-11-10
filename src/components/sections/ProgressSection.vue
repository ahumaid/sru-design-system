<template>
  <section class="gallery-section" aria-labelledby="progress-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.22-status') }}</p>
      <h2 class="h3 fw-bold mb-0" id="progress-title">{{ $t('labels.progress-title') }}</h2>
    </div>

    <div class="showcase-panel d-grid gap-3">
      <div class="progress" role="progressbar" :aria-label="$t('phrases.basic-progress')" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar" style="width: 25%">25%</div>
      </div>

      <div class="progress" role="progressbar" :aria-label="$t('phrases.success-progress')" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-success" style="width: 60%">60%</div>
      </div>

      <div class="progress" role="progressbar" :aria-label="$t('phrases.warning-progress')" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-warning text-dark" style="width: 40%">40%</div>
      </div>

      <div class="progress" role="progressbar" :aria-label="$t('phrases.danger-progress')" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar bg-danger" style="width: 85%">85%</div>
      </div>

      <div class="progress" role="progressbar" :aria-label="$t('phrases.striped-progress')" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-striped" style="width: 50%">50%</div>
      </div>

      <div class="progress" role="progressbar" :aria-label="$t('phrases.animated-progress')" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
        <div class="progress-bar progress-bar-animated" style="width: 75%">75%</div>
      </div>

      <div class="progress-stacked">
        <div class="progress" role="progressbar" :aria-label="$t('phrases.completed')" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style="width: 30%">
          <div class="progress-bar">{{ $t('phrases.completed') }}</div>
        </div>
        <div class="progress" role="progressbar" :aria-label="$t('phrases.in-progress')" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%">
          <div class="progress-bar bg-info">{{ $t('phrases.in-progress') }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
