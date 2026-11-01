<template>
<section class="gallery-section" id="dropdowns" aria-labelledby="dropdowns-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.12-interaction') }}</p><h2 class="h3 fw-bold mb-0" id="dropdowns-title">{{ $t('labels.dropdowns-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap gap-3">
              <div class="dropdown"><button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{{ $t('phrases.actions') }}</button><ul class="dropdown-menu"><li><h3 class="dropdown-header">{{ $t('phrases.request') }}</h3></li><li><a class="dropdown-item" href="/#cards">{{ $t('phrases.open-details') }}</a></li><li><a class="dropdown-item" href="/#forms">{{ $t('phrases.edit-information') }}</a></li><li><hr class="dropdown-divider"></li><li><button class="dropdown-item text-danger" type="button">{{ $t('phrases.cancel-request') }}</button></li></ul></div>
              <div class="btn-group"><button type="button" class="btn btn-outline-primary">{{ $t('phrases.split-action') }}</button><button type="button" class="btn btn-outline-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"><span class="visually-hidden">{{ $t('phrases.toggle-dropdown') }}</span></button><ul class="dropdown-menu"><li><a class="dropdown-item" href="/#buttons">{{ $t('phrases.alternative-action') }}</a></li></ul></div>
            </div>
          </section>
</template>
