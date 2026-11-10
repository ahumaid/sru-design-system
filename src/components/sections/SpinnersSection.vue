<script setup>
const spinnerColors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
</script>

<template>
  <section class="gallery-section" aria-labelledby="spinners-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.24-status') }}</p>
      <h2 class="h3 fw-bold mb-0" id="spinners-title">{{ $t('labels.spinners-title') }}</h2>
    </div>

    <div class="row g-3">
      <div class="col-md-6 col-xl-4">
        <article class="card border-0 shadow-none bg-body-tertiary h-100">
          <div class="card-body">
            <h3 class="h5 card-title">{{ $t('phrases.orbit-spinner') }}</h3>
            <div class="row row-cols-3 g-2">
              <div v-for="color in spinnerColors" :key="color" class="col">
                <div class="d-flex align-items-center justify-content-center p-2 h-100" role="status">
                  <span class="sru-loader sru-loader-orbit" :class="`text-${color}`" aria-hidden="true"></span>
                  <span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-md-6 col-xl-4">
        <article class="card border-0 shadow-none bg-body-tertiary h-100">
          <div class="card-body">
            <h3 class="h5 card-title">{{ $t('phrases.pulsing-dots') }}</h3>
            <div class="row row-cols-3 g-2">
              <div v-for="color in spinnerColors" :key="color" class="col">
                <div class="d-flex align-items-center justify-content-center p-2 h-100" role="status">
                  <span class="sru-loader sru-loader-dots" :class="`text-${color}`" aria-hidden="true">
                    <span></span><span></span><span></span>
                  </span>
                  <span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="col-md-6 col-xl-4">
        <article class="card border-0 shadow-none bg-body-tertiary h-100">
          <div class="card-body">
            <h3 class="h5 card-title">{{ $t('phrases.ripple-spinner') }}</h3>
            <div class="row row-cols-3 g-2">
              <div v-for="color in spinnerColors" :key="color" class="col">
                <div class="d-flex align-items-center justify-content-center p-2 h-100" role="status">
                  <span class="sru-loader sru-loader-ripple" :class="`text-${color}`" aria-hidden="true"></span>
                  <span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
