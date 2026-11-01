<template>
<section class="gallery-section" id="carousel" aria-labelledby="carousel-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.09-content') }}</p><h2 class="h3 fw-bold mb-0" id="carousel-title">{{ $t('labels.carousel-title') }}</h2></div>
            <div class="showcase-panel p-0">
              <div class="d-flex align-items-center justify-content-between gap-3 px-4 pt-4"><p class="small text-secondary mb-0">{{ $t('copy.carouselControls') }}</p><span class="badge text-bg-primary">{{ $t('phrases.slide-count') }}</span></div>
              <div class="carousel-indicators position-static justify-content-center gap-2 mb-3 pt-3"><button type="button" data-bs-target="#demo-carousel" data-bs-slide-to="0" class="active bg-primary rounded-circle w-auto h-auto p-2" aria-current="true" :aria-label="$t('phrases.slide-1')"></button><button type="button" data-bs-target="#demo-carousel" data-bs-slide-to="1" class="bg-primary rounded-circle w-auto h-auto p-2" :aria-label="$t('phrases.slide-2')"></button><button type="button" data-bs-target="#demo-carousel" data-bs-slide-to="2" class="bg-primary rounded-circle w-auto h-auto p-2" :aria-label="$t('phrases.slide-3')"></button></div>
              <div id="demo-carousel" class="carousel slide" data-bs-ride="false">
                <div class="carousel-inner rounded-3">
                  <div class="carousel-item active"><div class="bg-primary text-white p-5"><div><p class="small text-white fw-bold text-uppercase mb-2">{{ $t('phrases.digital-services') }}</p><h3>{{ $t('phrases.designed-for-people') }}</h3><p class="mb-0">{{ $t('copy.carouselAccessibleCaption') }}</p></div></div></div>
                  <div class="carousel-item"><div class="bg-info text-white p-5"><div><p class="small text-white fw-bold text-uppercase mb-2">{{ $t('phrases.university-identity') }}</p><h3>{{ $t('phrases.one-clear-system') }}</h3><p class="mb-0">{{ $t('copy.carouselSharedComponents') }}</p></div></div></div>
                  <div class="carousel-item"><div class="bg-dark text-white p-5"><div><p class="small text-white fw-bold text-uppercase mb-2">{{ $t('phrases.bootstrap-components') }}</p><h3>{{ $t('phrases.built-to-adapt') }}</h3><p class="mb-0">{{ $t('copy.carouselControls') }}</p></div></div></div>
                </div>
                <button class="carousel-control-prev top-50 bottom-auto h-auto w-auto px-3 translate-middle-y opacity-100" type="button" data-bs-target="#demo-carousel" data-bs-slide="prev"><span class="p-2"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">{{ $t('phrases.previous') }}</span></span></button>
                <button class="carousel-control-next top-50 bottom-auto h-auto w-auto px-3 translate-middle-y opacity-100" type="button" data-bs-target="#demo-carousel" data-bs-slide="next"><span class="p-2"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">{{ $t('phrases.next') }}</span></span></button>
              </div>
            </div>
          </section>
</template>
