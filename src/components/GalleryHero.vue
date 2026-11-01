<template>
  <header class="gallery-hero p-4 p-lg-5 rounded-3 mb-5" aria-labelledby="page-title">
    <div class="row align-items-center g-4">
      <div class="col-xl-8">
        <p class="eyebrow mb-2">{{ $t('phrases.sulaiman-alrajhi-university-bootstrap-5-3-8') }}</p>
        <h1 class="display-5 fw-bold" id="page-title">{{ $t('labels.page-title') }}</h1>
        <p class="lead mb-0">{{ $t('copy.heroDescription') }}</p>
      </div>
      <div class="col-xl-4">
        <div class="card shadow-sm">
          <div class="card-body">
            <h2 class="h6 text-uppercase text-secondary">{{ $t('phrases.use-this-system') }}</h2>
            <p class="small mb-2">{{ $t('copy.systemUsage') }}</p>
            <code class="d-block text-break small">/design-system/sru-theme.css</code>
            <code class="d-block text-break small mt-1">/design-system/bootstrap.bundle.js</code>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
