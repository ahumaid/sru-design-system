<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const icons = globalThis.lucide?.icons ?? {};
const names = Object.keys(icons).sort((first, second) => first.localeCompare(second));
const sampleNames = [
  'Activity', 'ArrowDown', 'Bell', 'Check', 'CircleHelp', 'House', 'Search', 'Settings',
].filter((name) => icons[name]);
const expanded = ref(false);
const search = ref('');
const gridVersion = ref(0);
const iconGrid = ref(null);

const toKebabCase = (name) => name
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
  .replace(/([a-z\d])([A-Z])/g, '$1-$2')
  .toLowerCase();

const visibleNames = computed(() => {
  if (!expanded.value) return sampleNames;
  const query = search.value.trim().toLowerCase();
  if (!query) return names;
  return names.filter((name) => name.toLowerCase().includes(query) || toKebabCase(name).includes(query));
});

const renderIcons = async () => {
  gridVersion.value += 1;
  await nextTick();
  if (iconGrid.value && globalThis.lucide && visibleNames.value.length > 0) {
    globalThis.lucide.createIcons({ icons, root: iconGrid.value });
  }
};

watch([expanded, search], renderIcons);
onMounted(renderIcons);

const toggleCatalog = () => {
  expanded.value = !expanded.value;
  search.value = '';
};
</script>

<template>
  <section class="gallery-section" id="icons" aria-labelledby="icons-title">
    <div class="gallery-section-heading">
      <p class="eyebrow">{{ $t('phrases.29-icons') }}</p>
      <h2 id="icons-title">{{ $t('phrases.lucide-icons') }}</h2>
      <p class="text-secondary"> {{ $t('phrases.browse-the-full-lucide-collection-and-search-by-icon-name-use-the-shown-name-in-a') }} <code>data-lucide</code> {{ $t('phrases.attribute-then-call') }} <code>lucide.createIcons()</code> {{ $t('phrases.to-render-it') }} </p>
    </div>
    <div class="showcase-panel icon-gallery-panel">
      <div class="icon-gallery-toolbar">
        <label v-if="expanded" class="visually-hidden" for="icon-search">{{ $t('icons.searchLabel') }}</label>
        <input
          v-if="expanded"
          id="icon-search"
          v-model="search"
          class="form-control"
          type="search"
          :placeholder="$t('icons.searchPlaceholder')"
          autocomplete="off"
        >
        <p class="small text-secondary mb-0" aria-live="polite">
          <span v-if="expanded">{{ visibleNames.length.toLocaleString(locale) }} / {{ names.length.toLocaleString(locale) }}</span>
          <span v-else>{{ sampleNames.length.toLocaleString(locale) }}</span>
          <span>{{ $t('icons.shown') }}</span>
        </p>
      </div>
      <div
        :key="gridVersion"
        ref="iconGrid"
        id="lucide-icon-grid"
        class="icon-grid"
        :aria-label="$t('icons.preview')"
      >
        <div v-for="name in visibleNames" :key="name" class="icon-card">
          <i :data-lucide="toKebabCase(name)" aria-hidden="true"></i>
          <code class="icon-card-name" dir="ltr">{{ toKebabCase(name) }}</code>
        </div>
      </div>
      <p v-if="visibleNames.length === 0" class="small text-secondary mt-3 mb-0" role="status" aria-live="polite">
        {{ $t('icons.noResults') }}
      </p>
      <button class="btn btn-outline-primary mt-3" type="button" aria-controls="lucide-icon-grid" :aria-expanded="expanded" @click="toggleCatalog">
        {{ expanded ? $t('icons.sample') : $t('icons.all', { count: names.length.toLocaleString(locale) }) }}
      </button>
      <p v-if="names.length === 0" class="small text-danger mt-3 mb-0" role="status">
        {{ $t('icons.loadError') }}
      </p>
    </div>
  </section>
</template>
