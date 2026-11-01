<template>
<section class="gallery-section" id="spinners" aria-labelledby="spinners-title">
            <div class="gallery-section-heading"><p class="eyebrow">{{ $t('phrases.24-status') }}</p><h2 id="spinners-title">{{ $t('labels.spinners-title') }}</h2></div>
            <div class="showcase-panel d-flex flex-wrap align-items-center gap-4"><div class="spinner-border text-primary" role="status"><span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span></div><div class="spinner-border spinner-border-sm text-success" role="status"><span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span></div><div class="spinner-grow text-info" role="status"><span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span></div><div class="spinner-grow spinner-grow-sm text-warning" role="status"><span class="visually-hidden">{{ $t('phrases.loading-ellipsis') }}</span></div><button class="btn btn-primary" type="button" disabled><span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>{{ $t('phrases.loading-ellipsis') }}</button></div>
          </section>
</template>
