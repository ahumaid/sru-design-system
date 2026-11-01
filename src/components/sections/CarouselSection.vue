<template>
<section class="gallery-section" id="carousel" aria-labelledby="carousel-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.09-content') }}</p><h2 class="h3 fw-bold mb-0" id="carousel-title">{{ $t('labels.carousel-title') }}</h2></div>
            <div id="demo-carousel" class="carousel slide showcase-panel p-0" data-bs-ride="false">
              <div class="carousel-indicators"><button type="button" data-bs-target="#demo-carousel" data-bs-slide-to="0" class="active" aria-current="true" :aria-label="$t('phrases.slide-1')"></button><button type="button" data-bs-target="#demo-carousel" data-bs-slide-to="1" :aria-label="$t('phrases.slide-2')"></button><button type="button" data-bs-target="#demo-carousel" data-bs-slide-to="2" :aria-label="$t('phrases.slide-3')"></button></div>
              <div class="carousel-inner rounded-3">
                <div class="carousel-item active"><div class="carousel-demo-slide slide-purple"><div><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.digital-services') }}</p><h3>{{ $t('phrases.designed-for-people') }}</h3><p class="mb-0">{{ $t('copy.carouselAccessibleCaption') }}</p></div></div></div>
                <div class="carousel-item"><div class="carousel-demo-slide slide-blue"><div><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.university-identity') }}</p><h3>{{ $t('phrases.one-clear-system') }}</h3><p class="mb-0">{{ $t('copy.carouselSharedComponents') }}</p></div></div></div>
                <div class="carousel-item"><div class="carousel-demo-slide slide-dark"><div><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.bootstrap-components') }}</p><h3>{{ $t('phrases.built-to-adapt') }}</h3><p class="mb-0">{{ $t('copy.carouselControls') }}</p></div></div></div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#demo-carousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">{{ $t('phrases.previous') }}</span></button>
              <button class="carousel-control-next" type="button" data-bs-target="#demo-carousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">{{ $t('phrases.next') }}</span></button>
            </div>
          </section>
</template>
