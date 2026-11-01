<template>
<section class="gallery-section" id="breadcrumb" aria-labelledby="breadcrumb-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.05-navigation') }}</p><h2 id="breadcrumb-title">{{ $t('labels.breadcrumb-title') }}</h2></div>
            <div class="showcase-panel">
              <nav :aria-label="$t('phrases.breadcrumb')">
                <ol class="breadcrumb mb-0"><li class="breadcrumb-item"><RouterLink to="/">{{ $t('phrases.home') }}</RouterLink></li><li class="breadcrumb-item"><RouterLink to="/foundations">{{ $t('phrases.design-system') }}</RouterLink></li><li class="breadcrumb-item active" aria-current="page">{{ $t('phrases.components') }}</li></ol>
              </nav>
            </div>
          </section>
</template>
