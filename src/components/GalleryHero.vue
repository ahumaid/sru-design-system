<script setup>
import { onMounted, watch, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const renderIcons = async () => {
  await nextTick();
  if (globalThis.lucide) {
    globalThis.lucide.createIcons();
  }
};

onMounted(renderIcons);
watch(locale, renderIcons);
</script>

<template>
  <header class="bg-primary text-white rounded-3 p-4 p-xxl-5 mb-5 shadow-sm" aria-labelledby="page-title">
    <div class="row align-items-center g-4 g-xxl-5">
      <div class="col-xl-7">
        <p class="small text-white-50 fw-bold text-uppercase mb-2">{{ $t('phrases.sulaiman-alrajhi-university-bootstrap-5-3-8') }}</p>
        <h1 class="h2 fw-bold text-white mb-3" id="page-title">{{ $t('labels.page-title') }}</h1>
        <p class="text-white text-opacity-75 mb-4">{{ $t('copy.heroDescription') }}</p>

        <div class="d-flex flex-wrap align-items-center gap-3 mb-4">
          <a href="#getting-started" class="btn btn-light text-primary fw-bold d-inline-flex align-items-center gap-2 shadow-sm">
            <span>{{ $t('labels.getting-started-title') }}</span>
            <i data-lucide="arrow-down" aria-hidden="true"></i>
          </a>
          <a href="#installation" class="btn btn-outline-light fw-bold d-inline-flex align-items-center gap-2">
            <span>{{ $t('labels.installation-title') }}</span>
            <i data-lucide="code" aria-hidden="true"></i>
          </a>
          <a href="#ai-skill" class="btn btn-outline-light fw-bold d-inline-flex align-items-center gap-2">
            <span>{{ $t('labels.ai-skill-title') }}</span>
            <i data-lucide="bot" aria-hidden="true"></i>
          </a>
        </div>

        <div class="d-flex flex-wrap gap-2 pt-3 border-top border-white border-opacity-25">
          <span class="badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 px-3 py-2 fw-medium d-inline-flex align-items-center gap-2">
            <i data-lucide="file-code" class="text-light" aria-hidden="true"></i>
            <code class="text-white">sru-theme.css</code>
          </span>
          <span class="badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 px-3 py-2 fw-medium d-inline-flex align-items-center gap-2">
            <i data-lucide="languages" class="text-light" aria-hidden="true"></i>
            {{ $t('phrases.ltr-and-rtl') }}
          </span>
          <span class="badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 px-3 py-2 fw-medium d-inline-flex align-items-center gap-2">
            <i data-lucide="moon" class="text-light" aria-hidden="true"></i>
            {{ $t('hero.darkAndLight') }}
          </span>
          <span class="badge bg-white bg-opacity-10 text-white border border-white border-opacity-25 px-3 py-2 fw-medium d-inline-flex align-items-center gap-2">
            <i data-lucide="shield-check" class="text-light" aria-hidden="true"></i>
            WCAG 2.1 AA
          </span>
        </div>
      </div>

      <div class="col-xl-5">
        <div class="card bg-white bg-opacity-10 border border-white border-opacity-25 text-white rounded-3 shadow-sm">
          <div class="card-header bg-transparent border-bottom border-white border-opacity-25 d-flex align-items-center justify-content-between py-3 px-4">
            <span class="badge bg-light text-primary fw-bold">{{ $t('hero.toolkitBadge') }}</span>
            <span class="small text-white-50 fw-semibold">{{ $t('hero.supportiveTag') }}</span>
          </div>
          <div class="card-body p-4 d-flex flex-column gap-3">
            <div class="p-3 bg-white bg-opacity-10 rounded-3 border-start border-light border-3 d-flex align-items-start gap-3">
              <span class="text-light d-inline-flex align-items-center justify-content-center flex-shrink-0 pt-1">
                <i data-lucide="layers" aria-hidden="true"></i>
              </span>
              <div>
                <div class="fw-bold small text-white">{{ $t('hero.unifiedBrand') }}</div>
                <div class="text-white-50 small mt-1">{{ $t('hero.unifiedBrandDesc') }}</div>
              </div>
            </div>
            <div class="p-3 bg-white bg-opacity-10 rounded-3 border-start border-light border-3 d-flex align-items-start gap-3">
              <span class="text-light d-inline-flex align-items-center justify-content-center flex-shrink-0 pt-1">
                <i data-lucide="check" aria-hidden="true"></i>
              </span>
              <div>
                <div class="fw-bold small text-white">{{ $t('hero.accessibilityReady') }}</div>
                <div class="text-white-50 small mt-1">{{ $t('hero.accessibilityReadyDesc') }}</div>
              </div>
            </div>
            <div class="p-3 bg-white bg-opacity-10 rounded-3 border-start border-light border-3 d-flex align-items-start gap-3">
              <span class="text-light d-inline-flex align-items-center justify-content-center flex-shrink-0 pt-1">
                <i data-lucide="cpu" aria-hidden="true"></i>
              </span>
              <div>
                <div class="fw-bold small text-white">{{ $t('hero.aiIntegration') }}</div>
                <div class="text-white-50 small mt-1">{{ $t('hero.aiIntegrationDesc') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
