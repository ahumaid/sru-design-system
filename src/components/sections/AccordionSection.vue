<template>
<section class="gallery-section" id="accordion" aria-labelledby="accordion-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.02-content') }}</p><h2 class="h3 fw-bold mb-0" id="accordion-title">{{ $t('labels.accordion-title') }}</h2></div>
            <div class="showcase-panel mb-4">
              <h3 class="h5 mb-3">{{ $t('copy.accordionStandardExample') }}</h3>
              <div class="accordion" id="demo-accordion">
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-one" aria-expanded="true" aria-controls="accordion-one">{{ $t('phrases.first-section') }}</button></h3>
                  <div id="accordion-one" class="accordion-collapse collapse show" data-bs-parent="#demo-accordion"><div class="accordion-body">{{ $t('copy.accordionDescription') }}</div></div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-two" aria-expanded="false" aria-controls="accordion-two">{{ $t('phrases.second-section') }}</button></h3>
                  <div id="accordion-two" class="accordion-collapse collapse" data-bs-parent="#demo-accordion"><div class="accordion-body">{{ $t('copy.accordionAccessibility') }}</div></div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-three" aria-expanded="false" aria-controls="accordion-three">{{ $t('phrases.third-section') }}</button></h3>
                  <div id="accordion-three" class="accordion-collapse collapse" data-bs-parent="#demo-accordion"><div class="accordion-body">{{ $t('copy.accordionServices') }}</div></div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-four" aria-expanded="false" aria-controls="accordion-four">{{ $t('phrases.fourth-section') }}</button></h3>
                  <div id="accordion-four" class="accordion-collapse collapse" data-bs-parent="#demo-accordion"><div class="accordion-body">{{ $t('copy.accordionNextSteps') }}</div></div>
                </div>
              </div>
            </div>
            <div class="showcase-panel mb-4">
              <h3 class="h5 mb-3">{{ $t('copy.accordionFlushExample') }}</h3>
              <div class="accordion accordion-flush" id="flush-accordion">
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-one" aria-expanded="true" aria-controls="flush-one">{{ $t('copy.accordionFlushFirst') }}</button></h3>
                  <div id="flush-one" class="accordion-collapse collapse show" data-bs-parent="#flush-accordion"><div class="accordion-body">{{ $t('copy.accordionFlushFirstDescription') }}</div></div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-two" aria-expanded="false" aria-controls="flush-two">{{ $t('copy.accordionFlushSecond') }}</button></h3>
                  <div id="flush-two" class="accordion-collapse collapse" data-bs-parent="#flush-accordion"><div class="accordion-body">{{ $t('copy.accordionFlushSecondDescription') }}</div></div>
                </div>
              </div>
            </div>
            <div class="showcase-panel">
              <h3 class="h5 mb-3">{{ $t('copy.accordionIndependentExample') }}</h3>
              <div class="accordion" id="independent-accordion">
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#independent-one" aria-expanded="true" aria-controls="independent-one">{{ $t('copy.accordionIndependentFirst') }}</button></h3>
                  <div id="independent-one" class="accordion-collapse collapse show"><div class="accordion-body">{{ $t('copy.accordionIndependentFirstDescription') }}</div></div>
                </div>
                <div class="accordion-item">
                  <h3 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#independent-two" aria-expanded="false" aria-controls="independent-two">{{ $t('copy.accordionIndependentSecond') }}</button></h3>
                  <div id="independent-two" class="accordion-collapse collapse"><div class="accordion-body">{{ $t('copy.accordionIndependentSecondDescription') }}</div></div>
                </div>
              </div>
            </div>
            <div class="showcase-panel mt-4">
              <h3 class="h5 mb-3">{{ $t('copy.accordionColorExample') }}</h3>
              <div class="accordion" id="color-accordion">
                <div class="accordion-item border-primary">
                  <h3 class="accordion-header"><button class="accordion-button bg-primary-subtle text-primary-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#color-primary" aria-expanded="true" aria-controls="color-primary">{{ $t('copy.accordionColorPrimary') }}</button></h3>
                  <div id="color-primary" class="accordion-collapse collapse show" data-bs-parent="#color-accordion"><div class="accordion-body bg-primary-subtle text-primary-emphasis">{{ $t('copy.accordionColorPrimaryDescription') }}</div></div>
                </div>
                <div class="accordion-item border-success">
                  <h3 class="accordion-header"><button class="accordion-button collapsed bg-success-subtle text-success-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#color-success" aria-expanded="false" aria-controls="color-success">{{ $t('copy.accordionColorSuccess') }}</button></h3>
                  <div id="color-success" class="accordion-collapse collapse" data-bs-parent="#color-accordion"><div class="accordion-body bg-success-subtle text-success-emphasis">{{ $t('copy.accordionColorSuccessDescription') }}</div></div>
                </div>
                <div class="accordion-item border-warning">
                  <h3 class="accordion-header"><button class="accordion-button collapsed bg-warning-subtle text-warning-emphasis" type="button" data-bs-toggle="collapse" data-bs-target="#color-warning" aria-expanded="false" aria-controls="color-warning">{{ $t('copy.accordionColorWarning') }}</button></h3>
                  <div id="color-warning" class="accordion-collapse collapse" data-bs-parent="#color-accordion"><div class="accordion-body bg-warning-subtle text-warning-emphasis">{{ $t('copy.accordionColorWarningDescription') }}</div></div>
                </div>
              </div>
            </div>
          </section>
</template>
