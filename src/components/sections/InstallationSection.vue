<template>
<section class="gallery-section" id="installation" aria-labelledby="installation-title">
            <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
              <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-03') }}</p>
              <h2 class="h3 fw-bold mb-0" id="installation-title">{{ $t('labels.installation-title') }}</h2>
              <p class="text-secondary mt-2 mb-0">{{ $t('copy.installationDescription') }}</p>
            </div>
            <div class="card"><div class="card-body">
              <h3 class="h6">{{ $t('phrases.ltr-stylesheet') }}</h3>
              <pre class="guide-code"><code>&lt;link rel="stylesheet" href="https://&lt;design-system-domain&gt;/design-system/sru-theme.css"&gt;</code></pre>
              <h3 class="h6 mt-4">{{ $t('phrases.rtl-stylesheet') }}</h3>
              <pre class="guide-code"><code>&lt;link rel="stylesheet" href="https://&lt;design-system-domain&gt;/design-system/sru-theme.rtl.css"&gt;</code></pre>
              <h3 class="h6 mt-4">{{ $t('phrases.optional-javascript') }}</h3>
              <pre class="guide-code"><code>&lt;script defer src="https://&lt;design-system-domain&gt;/design-system/bootstrap.bundle.js"&gt;&lt;/script&gt;</code></pre>
              <h3 class="h6 mt-4">{{ $t('phrases.lucide-icons') }}</h3>
              <p>{{ $t('phrases.load-lucide-when-the-page-uses-icons-then-call') }} <code>lucide.createIcons()</code> {{ $t('phrases.after-the-elements-with') }} <code>data-lucide</code> {{ $t('phrases.are-in-the-page') }}</p>
              <pre class="guide-code"><code>&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/script&gt;
&lt;button class="btn btn-primary" type="button"&gt;
  &lt;i data-lucide="search" aria-hidden="true"&gt;&lt;/i&gt;
  Search
&lt;/button&gt;
&lt;script&gt;lucide.createIcons();&lt;/script&gt;</code></pre>
              <i18n-t keypath="copy.rtlStylesheetNote" tag="p" class="installation-note mb-0"><template #file><code>sru-theme.rtl.css</code></template></i18n-t>
              <i18n-t keypath="app.cspNote" tag="p" class="small text-secondary mt-3 mb-0" id="icon-csp-note"><template #domain><code>unpkg.com</code></template><template #directive><code>script-src</code></template></i18n-t>
            </div></div>
          </section>
</template>
