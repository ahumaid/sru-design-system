<template>
<section class="gallery-section" id="getting-started" aria-labelledby="getting-started-title">
            <div class="gallery-section-heading">
              <p class="eyebrow">{{ $t('phrases.guide-02') }}</p>
              <h2 id="getting-started-title">{{ $t('labels.getting-started-title') }}</h2>
              <p class="text-secondary">{{ $t('copy.gettingStartedDescription') }}</p>
            </div>
            <div class="card"><div class="card-body">
              <ol class="mb-0">
                <li class="mb-2">{{ $t('copy.chooseDirectionStylesheet') }}</li>
                <li class="mb-2">{{ $t('copy.buildBootstrapLayouts') }}</li>
                <li class="mb-2">{{ $t('copy.loadInteractiveJavascript') }}</li>
                <i18n-t keypath="guide.iconInstruction" tag="li" class="mb-2">
                  <template #url><code>https://unpkg.com/lucide@latest</code></template>
                  <template #createIcons><code>lucide.createIcons()</code></template>
                </i18n-t>
                <li>{{ $t('copy.useGalleryExamples') }}</li>
              </ol>
              <div class="alert alert-warning mt-4 mb-0 ai-review-hint" role="note">{{ $t('copy.aiReviewWarning') }}</div>
              <details class="ai-prompt mt-4">
                <summary class="fw-semibold">{{ $t('phrases.ai-coding-prompt-copy-and-paste') }}</summary>
                <p class="mt-3">{{ $t('phrases.give-this-prompt-to-an-ai-coding-agent-before-it-works-on-your-site') }}</p>
                <pre class="guide-code" dir="ltr"><code id="ai-prompt-copy">{{ $t('guide.aiPrompt') }}</code></pre>
              </details>
            </div></div>
          </section>
</template>
