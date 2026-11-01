<template>
  <section class="vstack gap-4 py-3" aria-labelledby="foundations-title">
    <header class="bg-body-tertiary border-start border-primary border-4 rounded-3 p-4 p-md-5">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.01-foundations') }}</p>
      <h2 class="h3 fw-bold mb-0" id="foundations-title">{{ $t('labels.foundations-title') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('copy.foundationDescription') }}</p>
    </header>

    <div class="row row-cols-2 row-cols-md-4 g-3">
      <div class="col">
        <div class="card h-100 text-bg-primary border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.primary') }}</h3>
            <code class="badge bg-white text-dark align-self-start">primary</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-secondary border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.secondary') }}</h3>
            <code class="badge bg-white text-dark align-self-start">secondary</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-success border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.success') }}</h3>
            <code class="badge bg-white text-dark align-self-start">success</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-info border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.information') }}</h3>
            <code class="badge bg-white text-dark align-self-start">info</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-warning border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.warning') }}</h3>
            <code class="badge bg-white text-dark align-self-start">warning</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-danger border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.danger') }}</h3>
            <code class="badge bg-white text-dark align-self-start">danger</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-light">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.light') }}</h3>
            <code class="badge bg-white text-dark align-self-start">light</code>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 text-bg-dark border-0">
          <div class="card-body d-flex flex-column justify-content-between gap-4 p-3 p-md-4">
            <h3 class="h5 mb-0">{{ $t('phrases.dark') }}</h3>
            <code class="badge bg-white text-dark align-self-start">dark</code>
          </div>
        </div>
      </div>
    </div>

    <div class="row g-4">
      <div class="col-xl-6">
        <article class="card h-100">
          <div class="card-header bg-body-tertiary px-4 py-3">
            <h3 class="h5 mb-0">{{ $t('phrases.typography-scale') }}</h3>
          </div>
          <div class="card-body p-4">
            <div class="d-grid gap-2 mb-4">
              <p class="h1 fw-bold mb-0">{{ $t('phrases.heading-1') }}</p>
              <p class="h2 fw-bold mb-0">{{ $t('phrases.heading-2') }}</p>
              <p class="h3 fw-bold mb-0">{{ $t('phrases.heading-3') }}</p>
            </div>
            <p class="lead">{{ $t('copy.typographyLead') }}</p>
            <p>{{ $t('phrases.body-text-for-longer-content') }} <a href="/#buttons">{{ $t('phrases.links-follow-the-university-palette') }}</a>{{ $t('phrases.and') }} <strong>{{ $t('phrases.important-text') }}</strong> {{ $t('phrases.keeps-accessible-contrast') }}</p>
            <p class="text-secondary mb-0">{{ $t('phrases.secondary-text') }} <small>{{ $t('phrases.small-supporting-text') }}</small></p>
          </div>
        </article>
      </div>

      <div class="col-xl-6">
        <article class="card h-100">
          <div class="card-header bg-body-tertiary px-4 py-3">
            <h3 class="h5 mb-0">{{ $t('phrases.arabic-sample') }}</h3>
          </div>
          <div class="card-body p-4">
            <p lang="ar" dir="rtl" class="fs-4 border-bottom pb-3 mb-3">جامعة سليمان الراجحي — التحول الرقمي</p>
            <p lang="ar" dir="rtl" class="mb-0">تتبع النصوص العربية اتجاه القراءة من اليمين إلى اليسار، مع بقاء ترتيب المكونات متناسقاً.</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
