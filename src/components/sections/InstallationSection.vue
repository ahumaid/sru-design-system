<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import HtmlSnippet from '../HtmlSnippet.vue';

const { t } = useI18n({ useScope: 'global' });
const origin = typeof window !== 'undefined' ? window.location.origin : '';

const snippets = computed(() => ({
  stylesheet: `<link rel="stylesheet" href="${origin}/design-system/sru-theme.css">`,
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
  <section class="gallery-section" id="installation" aria-labelledby="installation-title">
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
