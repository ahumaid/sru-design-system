<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n({ useScope: 'global' });

const icons = globalThis.lucide?.icons ?? {};
const names = Object.keys(icons).sort((first, second) => first.localeCompare(second));
const sampleNames = names.slice(0, 100);
const expanded = ref(false);
const search = ref('');
const gridVersion = ref(0);
const iconGrid = ref(null);

const toKebabCase = (name) => name
  .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
  .replace(/([a-z\d])([A-Z])/g, '$1-$2')
  .toLowerCase();

const visibleNames = computed(() => {
  const query = search.value.trim().toLowerCase();
  if (!query && !expanded.value) return sampleNames;
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
  <section class="gallery-section" aria-labelledby="icons-title">
    <div class="gallery-section-heading bg-body-tertiary border-start border-primary border-4 rounded-3 p-3 p-md-4 mb-4">
      <p class="small text-primary fw-bold text-uppercase mb-2">{{ $t('phrases.29-icons') }}</p>
      <h2 class="h3 fw-bold mb-0" id="icons-title">{{ $t('phrases.lucide-icons') }}</h2>
      <p class="text-secondary mt-2 mb-0">{{ $t('phrases.browse-the-full-lucide-collection-and-search-by-icon-name-use-the-shown-name-in-a') }} <code>data-lucide</code> {{ $t('phrases.attribute-then-call') }} <code>lucide.createIcons()</code> {{ $t('phrases.to-render-it') }}</p>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="d-flex flex-wrap align-items-center gap-3 mb-3">
          <div class="flex-grow-1">
            <label class="visually-hidden" for="icon-search">{{ $t('icons.searchLabel') }}</label>
            <input
              id="icon-search"
              v-model="search"
              class="form-control"
              type="search"
              :placeholder="$t('icons.searchPlaceholder')"
              autocomplete="off"
            >
          </div>
          <p class="small text-secondary ms-auto mb-0" aria-live="polite">
            <span v-if="expanded || search.trim()">{{ visibleNames.length.toLocaleString(locale) }} / {{ names.length.toLocaleString(locale) }}</span>
            <span v-else>{{ sampleNames.length.toLocaleString(locale) }}</span>
            <span class="ms-1">{{ $t('icons.shown') }}</span>
          </p>
        </div>

        <div
          :key="gridVersion"
          ref="iconGrid"
          id="lucide-icon-grid"
          class="d-flex flex-wrap gap-2"
          role="list"
          :aria-label="$t('icons.preview')"
        >
          <div v-for="name in visibleNames" :key="name" class="card icon-preview-item shadow-none text-center" role="listitem">
            <div class="card-body d-flex flex-column align-items-center justify-content-center gap-2 p-3">
              <span class="d-inline-flex align-items-center justify-content-center">
                <i :data-lucide="toKebabCase(name)" aria-hidden="true"></i>
              </span>
              <code class="icon-preview-name text-body text-break" dir="ltr">{{ toKebabCase(name) }}</code>
            </div>
          </div>
        </div>
        <p v-if="visibleNames.length === 0" class="alert alert-light border mt-3 mb-0" role="status" aria-live="polite">
          {{ $t('icons.noResults') }}
        </p>
        <button class="btn btn-outline-primary mt-3" type="button" aria-controls="lucide-icon-grid" :aria-expanded="expanded" @click="toggleCatalog">
          {{ expanded ? $t('icons.sample') : $t('icons.all', { count: names.length.toLocaleString(locale) }) }}
        </button>
        <p v-if="names.length === 0" class="alert alert-danger mt-3 mb-0" role="status">
          {{ $t('icons.loadError') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.icon-preview-item {
  width: 8rem;
  max-width: 100%;
}

.icon-preview-name {
  font-size: 0.75rem;
}
</style>
