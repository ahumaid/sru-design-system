<script setup>
import { computed, nextTick, onMounted, ref, watch } from 'vue';

defineProps({
  isArabic: { type: Boolean, default: true },
});

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
      <p class="eyebrow">29 · Icons</p>
      <h2 id="icons-title">Lucide icons</h2>
      <p class="text-secondary">
        Browse the full Lucide collection and search by icon name. Use the shown name in a
        <code>data-lucide</code> attribute, then call <code>lucide.createIcons()</code> to render it.
      </p>
    </div>
    <div class="showcase-panel icon-gallery-panel">
      <div class="icon-gallery-toolbar">
        <label v-if="expanded" class="visually-hidden" for="icon-search">{{ isArabic ? 'البحث في أيقونات Lucide' : 'Search Lucide icons' }}</label>
        <input
          v-if="expanded"
          id="icon-search"
          v-model="search"
          class="form-control"
          type="search"
          :placeholder="isArabic ? 'ابحث باسم الأيقونة' : 'Search by icon name'"
          autocomplete="off"
        >
        <p class="small text-secondary mb-0" aria-live="polite">
          <span v-if="expanded">{{ visibleNames.length.toLocaleString(isArabic ? 'ar' : 'en') }} / {{ names.length.toLocaleString(isArabic ? 'ar' : 'en') }}</span>
          <span v-else>{{ sampleNames.length.toLocaleString(isArabic ? 'ar' : 'en') }}</span>
          <span>{{ isArabic ? 'أيقونة معروضة' : 'icons shown' }}</span>
        </p>
      </div>
      <div
        :key="gridVersion"
        ref="iconGrid"
        id="lucide-icon-grid"
        class="icon-grid"
        :aria-label="isArabic ? 'معاينة أيقونات Lucide' : 'Lucide icon preview'"
      >
        <div v-for="name in visibleNames" :key="name" class="icon-card">
          <i :data-lucide="toKebabCase(name)" aria-hidden="true"></i>
          <code class="icon-card-name" dir="ltr">{{ toKebabCase(name) }}</code>
        </div>
      </div>
      <p v-if="visibleNames.length === 0" class="small text-secondary mt-3 mb-0" role="status" aria-live="polite">
        {{ isArabic ? 'لا توجد أيقونات تطابق البحث.' : 'No icons match your search.' }}
      </p>
      <button class="btn btn-outline-primary mt-3" type="button" aria-controls="lucide-icon-grid" :aria-expanded="expanded" @click="toggleCatalog">
        {{ isArabic ? (expanded ? 'عرض عينة الأيقونات' : `عرض كل الأيقونات (${names.length.toLocaleString('ar')})`) : (expanded ? 'Show sample icons' : `Show all icons (${names.length.toLocaleString('en')})`) }}
      </button>
      <p v-if="names.length === 0" class="small text-danger mt-3 mb-0" role="status">
        {{ isArabic ? 'تعذر تحميل أيقونات Lucide. تحقق من الاتصال ثم أعد تحميل الصفحة.' : 'Lucide icons could not be loaded. Check the connection and reload the page.' }}
      </p>
    </div>
  </section>
</template>
