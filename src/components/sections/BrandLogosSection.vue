<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HtmlSnippet from '../HtmlSnippet.vue';

const { t } = useI18n({ useScope: 'global' });
const logoSnippet = computed(() => `<img src="/img/logo-color.png" alt="${t('phrases.university-logo-alt-text')}">`);
const faviconSnippet = '<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon.png">';
</script>

<template>
  <section class="gallery-section" aria-labelledby="brand-logos-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.university-identity') }}</p>
      <h2 class="h3 fw-bold mb-0" id="brand-logos-title">{{ $t('labels.brand-logos-title') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('copy.brandLogoDescription') }}</p>
    </div>

    <div class="row g-4">
      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5">{{ $t('phrases.color-logo') }}</h3>
            <p>{{ $t('copy.colorLogoUsage') }}</p>
            <div class="bg-light border rounded p-4 mb-3 d-flex align-items-center justify-content-center">
              <img class="img-fluid" src="/img/logo-color.png" :alt="$t('phrases.color-logo-alt')">
            </div>
            <code>/img/logo-color.png</code>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5">{{ $t('phrases.white-logo') }}</h3>
            <p>{{ $t('copy.whiteLogoUsage') }}</p>
            <div class="bg-dark rounded p-4 mb-3 d-flex align-items-center justify-content-center">
              <img class="img-fluid" src="/img/logo-white.png" :alt="$t('phrases.white-logo-alt')">
            </div>
            <code>/img/logo-white.png</code>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5">{{ $t('phrases.square-logo-icon') }}</h3>
            <p>{{ $t('copy.squareLogoIconUsage') }}</p>
            <div class="bg-body-secondary border rounded p-5 mb-3 d-flex align-items-center justify-content-center">
              <img class="img-fluid border rounded" src="/img/logo-icon.png" width="128" height="128" :alt="$t('phrases.square-logo-icon-alt')">
            </div>
            <code>/img/logo-icon.png</code>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5">{{ $t('phrases.favicon') }}</h3>
            <p>{{ $t('copy.faviconUsage') }}</p>
            <div class="bg-light border rounded p-4 mb-3 d-flex align-items-center justify-content-center">
              <img class="img-fluid" src="/img/favicon.png" width="32" height="32" :alt="$t('phrases.favicon-alt')">
            </div>
            <code>/img/favicon.png</code>
          </div>
        </div>
      </div>
    </div>

    <div class="alert alert-secondary mt-4 mb-0" role="note">
      <p class="mb-2">{{ $t('copy.brandLogoEmbedNote') }}</p>
      <HtmlSnippet :code="logoSnippet" :label="$t('app.snippet')" />
      <p class="mt-3 mb-2">{{ $t('copy.faviconEmbedNote') }}</p>
      <HtmlSnippet :code="faviconSnippet" :label="$t('app.snippet')" />
    </div>
  </section>
</template>
