<template>
<section class="gallery-section" id="breadcrumb" aria-labelledby="breadcrumb-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.05-navigation') }}</p><h2 class="h3 fw-bold mb-0" id="breadcrumb-title">{{ $t('labels.breadcrumb-title') }}</h2></div>
            <div class="showcase-panel">
              <nav :aria-label="$t('phrases.breadcrumb')">
                <ol class="breadcrumb mb-0"><li class="breadcrumb-item"><RouterLink to="/">{{ $t('phrases.home') }}</RouterLink></li><li class="breadcrumb-item"><RouterLink to="/foundations">{{ $t('phrases.design-system') }}</RouterLink></li><li class="breadcrumb-item active" aria-current="page">{{ $t('phrases.components') }}</li></ol>
              </nav>
            </div>
          </section>
</template>
