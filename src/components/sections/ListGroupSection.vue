<template>
<section class="gallery-section" id="list-group" aria-labelledby="list-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4"><p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.14-content') }}</p><h2 class="h3 fw-bold mb-0" id="list-title">{{ $t('labels.list-title') }}</h2></div>
            <div class="row g-4">
              <div class="col-md-6"><div class="list-group"><a href="/#alerts" class="list-group-item list-group-item-action active" aria-current="true"><div class="d-flex w-100 justify-content-between"><strong>{{ $t('phrases.active-item') }}</strong><small>{{ $t('phrases.now') }}</small></div><span class="small">{{ $t('phrases.with-supporting-text-below') }}</span></a><a href="/#forms" class="list-group-item list-group-item-action">{{ $t('phrases.a-second-actionable-item') }}</a><a href="/#tables" class="list-group-item list-group-item-action">{{ $t('phrases.a-third-actionable-item') }}</a></div></div>
              <div class="col-md-6"><ul class="list-group"><li class="list-group-item d-flex justify-content-between align-items-center">{{ $t('phrases.inbox') }}<span class="badge text-bg-primary rounded-pill">12</span></li><li class="list-group-item d-flex justify-content-between align-items-center">{{ $t('phrases.requests') }}<span class="badge text-bg-success rounded-pill">3</span></li><li class="list-group-item disabled" aria-disabled="true">{{ $t('phrases.archived-disabled') }}</li></ul></div>
            </div>
          </section>
</template>
