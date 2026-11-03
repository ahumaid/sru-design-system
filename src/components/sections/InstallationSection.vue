<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HtmlSnippet from '../HtmlSnippet.vue';

const { t } = useI18n({ useScope: 'global' });
const origin = typeof window !== 'undefined' ? window.location.origin : '';

const snippets = computed(() => ({
  stylesheet: `<link rel="stylesheet" href="${origin}/design-system/sru-theme.css">`,
  darkTheme: '<html lang="ar" dir="rtl" data-bs-theme="dark">',
  switchToDarkTheme: "document.documentElement.dataset.bsTheme = 'dark';",
  javascript: `<script defer src="${origin}/design-system/bootstrap.bundle.js"><\/script>`,
  lucideCdn: '<script src="https://unpkg.com/lucide@latest"><\/script>',
  lucide: `<button class="btn btn-primary" type="button">
  <i data-lucide="search" aria-hidden="true"></i>
  ${t('phrases.search')}
</button>
<script>lucide.createIcons();<\/script>`,
}));
</script>

<template>
  <section class="gallery-section" aria-labelledby="installation-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-03') }}</p>
      <h2 class="h3 fw-bold mb-0" id="installation-title">{{ $t('labels.installation-title') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('copy.installationDescription') }}</p>
    </div>

    <div class="card">
      <div class="card-body d-grid gap-3">
        <div>
          <h3 class="h6">{{ $t('phrases.stylesheet') }}</h3>
          <HtmlSnippet :code="snippets.stylesheet" :label="$t('app.snippet')" />
        </div>
        <div>
          <h3 class="h6">{{ $t('labels.dark-theme-title') }}</h3>
          <p>{{ $t('copy.darkThemeUsage') }}</p>
          <div class="row g-3 align-items-stretch">
            <div class="col-lg-6">
              <div class="h-100 border rounded-3 bg-body p-3 p-md-4" data-bs-theme="dark">
                <div class="d-flex flex-wrap justify-content-between align-items-start gap-3 mb-3">
                  <div>
                    <h4 class="h5 mb-1">{{ $t('phrases.dark-theme-preview-title') }}</h4>
                    <p class="text-secondary mb-0">{{ $t('copy.darkThemePreviewDescription') }}</p>
                  </div>
                  <span class="badge text-bg-primary">data-bs-theme="dark"</span>
                </div>
                <label class="form-label" for="dark-theme-email">{{ $t('phrases.university-email') }}</label>
                <input id="dark-theme-email" class="form-control mb-3" type="email" :placeholder="$t('phrases.name-example-com')">
                <button class="btn btn-primary" type="button">{{ $t('phrases.view-request') }}</button>
              </div>
            </div>
            <div class="col-lg-6">
              <HtmlSnippet :code="snippets.darkTheme" :label="$t('app.snippet')" />
            </div>
          </div>
          <p class="small text-secondary mt-3 mb-0">{{ $t('copy.darkThemeRuntimeUsage') }}</p>
          <HtmlSnippet :code="snippets.switchToDarkTheme" :label="$t('app.snippet')" />
        </div>
        <div>
          <h3 class="h6">{{ $t('phrases.optional-javascript') }}</h3>
          <p>{{ $t('copy.bootstrapJavascriptUsage') }}</p>
          <HtmlSnippet :code="snippets.javascript" :label="$t('app.snippet')" />
        </div>
        <div>
          <h3 class="h6">{{ $t('phrases.lucide-icons') }}</h3>
          <p>{{ $t('phrases.load-lucide-when-the-page-uses-icons-then-call') }} <code>lucide.createIcons()</code> {{ $t('phrases.after-the-elements-with') }} <code>data-lucide</code> {{ $t('phrases.are-in-the-page') }}</p>
          <h4 class="h6 mt-3">{{ $t('phrases.lucide-cdn') }}</h4>
          <p>{{ $t('copy.lucideCdnUsage') }}</p>
          <HtmlSnippet :code="snippets.lucideCdn" :label="$t('app.snippet')" />
          <p class="mt-3">{{ $t('copy.lucideMarkupUsage') }}</p>
          <HtmlSnippet :code="snippets.lucide" :label="$t('app.snippet')" />
        </div>
        <i18n-t keypath="copy.directionNote" tag="p" class="installation-note mb-0"><template #file><code>sru-theme.css</code></template></i18n-t>
        <i18n-t keypath="app.cspNote" tag="p" class="small text-secondary mb-0" id="icon-csp-note"><template #domain><code>unpkg.com</code></template><template #directive><code>script-src</code></template></i18n-t>
      </div>
    </div>
  </section>
</template>
