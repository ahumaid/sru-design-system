<script setup>
const guideLinks = [
  { name: 'introduction', key: 'guide.introduction', to: '/' },
  { name: 'getting-started', key: 'guide.gettingStarted', to: '/guide/getting-started' },
  { name: 'installation', key: 'guide.installation', to: '/guide/installation' },
];

const componentLinks = [
  { name: 'foundations', key: 'foundations', to: '/foundations' },
  { name: 'icons', key: 'icons', to: '/components/icons' },
  { name: 'accordion', key: 'accordion', to: '/components/accordion' },
  { name: 'alerts', key: 'alerts', to: '/components/alerts' },
  { name: 'badge', key: 'badge', to: '/components/badge' },
  { name: 'breadcrumb', key: 'breadcrumb', to: '/components/breadcrumb' },
  { name: 'buttons', key: 'buttons', to: '/components/buttons' },
  { name: 'button-group', key: 'button-group', to: '/components/button-group' },
  { name: 'cards', key: 'cards', to: '/components/cards' },
  { name: 'carousel', key: 'carousel', to: '/components/carousel' },
  { name: 'close-button', key: 'close-button', to: '/components/close-button' },
  { name: 'collapse', key: 'collapse', to: '/components/collapse' },
  { name: 'dropdowns', key: 'dropdowns', to: '/components/dropdowns' },
  { name: 'forms', key: 'forms', to: '/components/forms' },
  { name: 'list-group', key: 'list-group', to: '/components/list-group' },
  { name: 'modal', key: 'modal', to: '/components/modal' },
  { name: 'navbar', key: 'navbar', to: '/components/navbar' },
  { name: 'navs', key: 'navs', to: '/components/navs' },
  { name: 'offcanvas', key: 'offcanvas', to: '/components/offcanvas' },
  { name: 'pagination', key: 'pagination', to: '/components/pagination' },
  { name: 'placeholders', key: 'placeholders', to: '/components/placeholders' },
  { name: 'popovers', key: 'popovers', to: '/components/popovers' },
  { name: 'progress', key: 'progress', to: '/components/progress' },
  { name: 'scrollspy', key: 'scrollspy', to: '/components/scrollspy' },
  { name: 'spinners', key: 'spinners', to: '/components/spinners' },
  { name: 'tables', key: 'tables', to: '/components/tables' },
  { name: 'toasts', key: 'toasts', to: '/components/toasts' },
  { name: 'tooltips', key: 'tooltips', to: '/components/tooltips' },
  { name: 'helpers', key: 'helpers', to: '/components/helpers' },
];
</script>

<template>
  <nav class="gallery-nav app-navigation sticky-lg-top" :aria-label="$t('app.navigationLabel')">
    <p class="small text-secondary fw-bold text-uppercase">{{ $t('app.guide') }}</p>
    <div class="list-group list-group-flush">
      <RouterLink v-for="link in guideLinks" :key="link.name" exact-active-class="active" class="list-group-item list-group-item-action" :to="link.to">{{ $t(link.key) }}</RouterLink>
    </div>
    <p class="small text-secondary fw-bold text-uppercase">{{ $t('app.components') }}</p>
    <div class="list-group list-group-flush">
      <RouterLink v-for="link in componentLinks" :key="link.name" exact-active-class="active" class="list-group-item list-group-item-action" :to="link.to">{{ $t(`nav.components.${link.key}`) }}</RouterLink>
    </div>
  </nav>
</template>
