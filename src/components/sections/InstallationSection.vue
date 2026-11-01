<script setup>
import HtmlSnippet from '../HtmlSnippet.vue';

const snippets = {
  ltrStylesheet: '<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.css">',
  rtlStylesheet: '<link rel="stylesheet" href="https://<design-system-domain>/design-system/sru-theme.rtl.css">',
  javascript: '<script defer src="https://<design-system-domain>/design-system/bootstrap.bundle.js"><\/script>',
  lucide: `<script src="https://unpkg.com/lucide@latest"><\/script>
<button class="btn btn-primary" type="button">
  <i data-lucide="search" aria-hidden="true"></i>
  Search
</button>
<script>lucide.createIcons();<\/script>`,
};
</script>

<template>
  <section class="gallery-section" id="installation" aria-labelledby="installation-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-03') }}</p>
      <h2 class="h3 fw-bold mb-0" id="installation-title">{{ $t('labels.installation-title') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('copy.installationDescription') }}</p>
    </div>

    <div class="card">
      <div class="card-body d-grid gap-3">
        <div>
          <h3 class="h6">{{ $t('phrases.ltr-stylesheet') }}</h3>
          <HtmlSnippet :code="snippets.ltrStylesheet" :label="$t('app.snippet')" />
        </div>
        <div>
          <h3 class="h6">{{ $t('phrases.rtl-stylesheet') }}</h3>
          <HtmlSnippet :code="snippets.rtlStylesheet" :label="$t('app.snippet')" />
        </div>
        <div>
          <h3 class="h6">{{ $t('phrases.optional-javascript') }}</h3>
          <HtmlSnippet :code="snippets.javascript" :label="$t('app.snippet')" />
        </div>
        <div>
          <h3 class="h6">{{ $t('phrases.lucide-icons') }}</h3>
          <p>{{ $t('phrases.load-lucide-when-the-page-uses-icons-then-call') }} <code>lucide.createIcons()</code> {{ $t('phrases.after-the-elements-with') }} <code>data-lucide</code> {{ $t('phrases.are-in-the-page') }}</p>
          <HtmlSnippet :code="snippets.lucide" :label="$t('app.snippet')" />
        </div>
        <i18n-t keypath="copy.rtlStylesheetNote" tag="p" class="installation-note mb-0"><template #file><code>sru-theme.rtl.css</code></template></i18n-t>
        <i18n-t keypath="app.cspNote" tag="p" class="small text-secondary mb-0" id="icon-csp-note"><template #domain><code>unpkg.com</code></template><template #directive><code>script-src</code></template></i18n-t>
      </div>
    </div>
  </section>
</template>
