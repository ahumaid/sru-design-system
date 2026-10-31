import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: () => import('./views/HomeView.vue'),
    },
    {
      path: '/guide/getting-started',
      name: 'getting-started',
      component: () => import('./components/sections/GettingStartedSection.vue'),
    },
    {
      path: '/guide/installation',
      name: 'installation',
      component: () => import('./components/sections/InstallationSection.vue'),
    },
    {
      path: '/foundations',
      name: 'foundations',
      component: () => import('./components/sections/FoundationsSection.vue'),
    },
    {
      path: '/components/icons',
      name: 'icons',
      component: () => import('./components/sections/IconsSection.vue'),
    },
    ...[
      ['accordion', () => import('./components/sections/AccordionSection.vue')],
      ['alerts', () => import('./components/sections/AlertsSection.vue')],
      ['badge', () => import('./components/sections/BadgeSection.vue')],
      ['breadcrumb', () => import('./components/sections/BreadcrumbSection.vue')],
      ['buttons', () => import('./components/sections/ButtonsSection.vue')],
      ['button-group', () => import('./components/sections/ButtonGroupSection.vue')],
      ['cards', () => import('./components/sections/CardsSection.vue')],
      ['carousel', () => import('./components/sections/CarouselSection.vue')],
      ['close-button', () => import('./components/sections/CloseButtonSection.vue')],
      ['collapse', () => import('./components/sections/CollapseSection.vue')],
      ['dropdowns', () => import('./components/sections/DropdownsSection.vue')],
      ['forms', () => import('./components/sections/FormsSection.vue')],
      ['list-group', () => import('./components/sections/ListGroupSection.vue')],
      ['modal', () => import('./components/sections/ModalSection.vue')],
      ['navbar', () => import('./components/sections/NavbarSection.vue')],
      ['navs', () => import('./components/sections/NavsSection.vue')],
      ['offcanvas', () => import('./components/sections/OffcanvasSection.vue')],
      ['pagination', () => import('./components/sections/PaginationSection.vue')],
      ['placeholders', () => import('./components/sections/PlaceholdersSection.vue')],
      ['popovers', () => import('./components/sections/PopoversSection.vue')],
      ['progress', () => import('./components/sections/ProgressSection.vue')],
      ['scrollspy', () => import('./components/sections/ScrollspySection.vue')],
      ['spinners', () => import('./components/sections/SpinnersSection.vue')],
      ['tables', () => import('./components/sections/TablesSection.vue')],
      ['toasts', () => import('./components/sections/ToastsSection.vue')],
      ['tooltips', () => import('./components/sections/TooltipsSection.vue')],
      ['helpers', () => import('./components/sections/HelpersSection.vue')],
    ].map(([name, component]) => ({ path: `/components/${name}`, name, component })),
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
