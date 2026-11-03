<script setup>
import { ref, computed, nextTick, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import sruDesignSystemPrompt from '../../data/sru-design-system-prompt.md?raw';
import HtmlSnippet from '../HtmlSnippet.vue';

const { locale } = useI18n({ useScope: 'global' });
const browserOrigin = typeof window !== 'undefined' ? window.location.origin : '';
const browserHostPrompt = computed(() => sruDesignSystemPrompt.replaceAll('https://<design-system-domain>', browserOrigin));
const skillUrl = computed(() => `${browserOrigin}/design-system/sru-design-system-skill.md`);

const copied = ref(false);
let copyTimeout = null;

const renderIcons = async () => {
  await nextTick();
  if (globalThis.lucide) {
    globalThis.lucide.createIcons();
  }
};

const copySkill = async () => {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(browserHostPrompt.value);
    } else {
      const textarea = document.createElement('textarea');
      textarea.value = browserHostPrompt.value;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    copied.value = true;
    renderIcons();
    if (copyTimeout) clearTimeout(copyTimeout);
    copyTimeout = setTimeout(() => {
      copied.value = false;
      renderIcons();
    }, 2500);
  } catch (err) {
    console.error('Failed to copy prompt:', err);
  }
};

watch(locale, () => {
  renderIcons();
});

onMounted(() => {
  renderIcons();
});
</script>

<template>
  <section class="gallery-section" aria-labelledby="ai-skill-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-04') }}</p>
      <h2 class="h3 fw-bold mb-0" id="ai-skill-title">{{ $t('labels.ai-skill-title') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('copy.aiSkillDescription') }}</p>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="alert alert-warning mb-4 ai-review-hint" role="note">{{ $t('copy.aiReviewWarning') }}</div>
        <p class="mb-2">{{ $t('copy.aiSkillExplanation') }}</p>
        <p class="mb-3">{{ $t('copy.aiSkillUsage') }}</p>
        <div class="d-flex flex-wrap align-items-center gap-2 mb-3" role="toolbar" :aria-label="$t('labels.ai-skill-title')">
          <button
            type="button"
            class="btn d-inline-flex align-items-center gap-2"
            :class="copied ? 'btn-success' : 'btn-primary'"
            @click="copySkill"
            :aria-label="copied ? $t('app.copied') : $t('app.copySkill')"
          >
            <i :data-lucide="copied ? 'check' : 'copy'" aria-hidden="true"></i>
            <span>{{ copied ? $t('app.copied') : $t('app.copySkill') }}</span>
          </button>
          <a class="btn btn-outline-primary d-inline-flex align-items-center gap-2" :href="skillUrl" target="_blank" rel="noopener">
            <i data-lucide="external-link" aria-hidden="true"></i>
            <span>{{ $t('app.viewSkill') }}</span>
          </a>
        </div>
        <HtmlSnippet :code="browserHostPrompt" :label="$t('phrases.ai-skill-snippet')" />
      </div>
    </div>
  </section>
</template>
