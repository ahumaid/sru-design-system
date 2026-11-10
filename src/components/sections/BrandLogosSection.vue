<script setup>
import HtmlSnippet from '../HtmlSnippet.vue';

const logoSnippet = 'https://design-system.sredu.sa/img/logo-color.png';
const faviconSnippet = 'https://design-system.sredu.sa/img/favicon.png';
const logoIconSnippet = 'https://design-system.sredu.sa/img/logo-icon.png';
const whiteLogoIconSnippet = 'https://design-system.sredu.sa/img/logo-icon-white.png';
const assetSnippets = {
  colorLarge: 'https://design-system.sredu.sa/img/logo-color.png',
  colorMedium: 'https://design-system.sredu.sa/img/logo-color-medium.png',
  colorSmall: 'https://design-system.sredu.sa/img/logo-color-small.png',
  whiteLarge: 'https://design-system.sredu.sa/img/logo-white.png',
  whiteMedium: 'https://design-system.sredu.sa/img/logo-white-medium.png',
  whiteSmall: 'https://design-system.sredu.sa/img/logo-white-small.png',
};
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
            <div class="vstack gap-3">
              <figure class="mb-0">
                <div class="bg-light border rounded p-4 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" src="/img/logo-color.png" width="827" height="136" :alt="$t('phrases.color-logo-alt')">
                </div>
                <figcaption><HtmlSnippet open :code="assetSnippets.colorLarge" :label="$t('phrases.large-color-logo-size')" /></figcaption>
              </figure>
              <figure class="mb-0">
                <div class="bg-light border rounded p-4 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" src="/img/logo-color-medium.png" width="512" height="84" :alt="$t('phrases.color-logo-alt')">
                </div>
                <figcaption><HtmlSnippet open :code="assetSnippets.colorMedium" :label="$t('phrases.medium-logo-size')" /></figcaption>
              </figure>
              <figure class="mb-0">
                <div class="bg-light border rounded p-4 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" src="/img/logo-color-small.png" width="256" height="42" :alt="$t('phrases.color-logo-alt')">
                </div>
                <figcaption><HtmlSnippet open :code="assetSnippets.colorSmall" :label="$t('phrases.small-logo-size')" /></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5">{{ $t('phrases.white-logo') }}</h3>
            <p>{{ $t('copy.whiteLogoUsage') }}</p>
            <div class="vstack gap-3">
              <figure class="mb-0">
                <div class="bg-dark rounded p-4 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" src="/img/logo-white.png" width="1553" height="285" :alt="$t('phrases.white-logo-alt')">
                </div>
                <figcaption><HtmlSnippet open :code="assetSnippets.whiteLarge" :label="$t('phrases.large-white-logo-size')" /></figcaption>
              </figure>
              <figure class="mb-0">
                <div class="bg-dark rounded p-4 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" src="/img/logo-white-medium.png" width="512" height="94" :alt="$t('phrases.white-logo-alt')">
                </div>
                <figcaption><HtmlSnippet open :code="assetSnippets.whiteMedium" :label="$t('phrases.medium-logo-size')" /></figcaption>
              </figure>
              <figure class="mb-0">
                <div class="bg-dark rounded p-4 d-flex align-items-center justify-content-center">
                  <img class="img-fluid" src="/img/logo-white-small.png" width="256" height="47" :alt="$t('phrases.white-logo-alt')">
                </div>
                <figcaption><HtmlSnippet open :code="assetSnippets.whiteSmall" :label="$t('phrases.small-logo-size')" /></figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card h-100">
          <div class="card-body">
            <h3 class="h5">{{ $t('phrases.square-logo-icon') }}</h3>
            <p>{{ $t('copy.squareLogoIconUsage') }}</p>
            <div class="row g-3">
              <div class="col-sm-6">
                <figure class="mb-0">
                  <div class="bg-body-secondary border rounded p-3 d-flex align-items-center justify-content-center">
                    <img class="img-fluid border rounded" src="/img/logo-icon.png" width="128" height="128" :alt="$t('phrases.square-logo-icon-alt')">
                  </div>
                  <figcaption><HtmlSnippet open :code="logoIconSnippet" :label="$t('phrases.square-logo-icon')" /></figcaption>
                </figure>
              </div>
              <div class="col-sm-6">
                <figure class="mb-0">
                  <div class="bg-dark rounded p-3 d-flex align-items-center justify-content-center">
                    <img class="img-fluid" src="/img/logo-icon-white.png" width="128" height="128" :alt="$t('phrases.white-square-logo-icon-alt')">
                  </div>
                  <figcaption><HtmlSnippet open :code="whiteLogoIconSnippet" :label="$t('phrases.white-square-logo-icon')" /></figcaption>
                </figure>
              </div>
            </div>
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
            <HtmlSnippet open :code="faviconSnippet" :label="$t('phrases.favicon')" />
          </div>
        </div>
      </div>
    </div>

    <div class="alert alert-secondary mt-4 mb-0" role="note">
      <p class="mb-2">{{ $t('copy.brandLogoEmbedNote') }}</p>
      <HtmlSnippet open :code="logoSnippet" :label="$t('app.snippet')" />
      <p class="mt-3 mb-2">{{ $t('copy.faviconEmbedNote') }}</p>
      <HtmlSnippet open :code="faviconSnippet" :label="$t('app.snippet')" />
      <HtmlSnippet open :code="logoIconSnippet" :label="$t('phrases.square-logo-icon')" />
      <HtmlSnippet open :code="whiteLogoIconSnippet" :label="$t('phrases.white-square-logo-icon')" />
    </div>
  </section>
</template>
