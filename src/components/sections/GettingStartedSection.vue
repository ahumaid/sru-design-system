<template>
<section class="gallery-section" id="getting-started" aria-labelledby="getting-started-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
              <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-02') }}</p>
              <h2 class="h3 fw-bold mb-0" id="getting-started-title">{{ $t('labels.getting-started-title') }}</h2>
              <p class="text-secondary mt-2 mb-0">{{ $t('copy.gettingStartedDescription') }}</p>
            </div>
            <div class="card"><div class="card-body">
              <ol class="mb-0">
                <li class="mb-2">{{ $t('copy.chooseDirectionStylesheet') }}</li>
                <li class="mb-2">{{ $t('copy.buildBootstrapLayouts') }}</li>
                <li class="mb-2">{{ $t('copy.loadInteractiveJavascript') }}</li>
                <i18n-t keypath="guide.iconInstruction" tag="li" class="mb-2">
                  <template #url><code>https://unpkg.com/lucide@latest</code></template>
                  <template #createIcons><code>lucide.createIcons()</code></template>
                </i18n-t>
                <li>{{ $t('copy.useGalleryExamples') }}</li>
              </ol>
            </div></div>
          </section>
</template>
