<script setup>
import { computed } from 'vue';
import sruDesignSystemSkill from '../../data/sru-design-system-skill.md?raw';
import HtmlSnippet from '../HtmlSnippet.vue';

const browserOrigin = window.location.origin;
const browserHostSkill = computed(() => sruDesignSystemSkill.replaceAll('https://<design-system-domain>', browserOrigin));
</script>

<template>
  <section class="gallery-section" id="ai-skill" aria-labelledby="ai-skill-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.guide-02') }}</p>
      <h2 class="h3 fw-bold mb-0" id="ai-skill-title">{{ $t('labels.ai-skill-title') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('copy.aiSkillDescription') }}</p>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="alert alert-warning mb-4 ai-review-hint" role="note">{{ $t('copy.aiReviewWarning') }}</div>
        <p class="mb-2">{{ $t('copy.aiSkillExplanation') }}</p>
        <p class="mb-3">{{ $t('copy.aiSkillUsage') }}</p>
        <HtmlSnippet :code="browserHostSkill" :label="$t('phrases.ai-skill-snippet')" />
      </div>
    </div>
  </section>
</template>
