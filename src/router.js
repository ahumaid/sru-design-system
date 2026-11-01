import { createRouter, createWebHistory } from 'vue-router';
import { gallerySections } from './data/gallery-sections.js';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior: (to) => {
    if (!to.hash) return { top: 0 };

    const section = document.querySelector(to.hash);
    const target = section?.closest('.gallery-section-frame') ?? section ?? to.hash;
    const stickyNavbarHeight = document.querySelector('.navbar.sticky-top')?.getBoundingClientRect().height ?? 0;

    return {
      el: target,
      top: stickyNavbarHeight + 16,
      behavior: 'smooth',
    };
  },
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: () => import('./views/HomeView.vue'),
    },
    ...gallerySections
      .filter((section) => section.routePath !== '/')
      .map(({ routePath, routeName, component }) => ({
        path: routePath,
        name: routeName,
        component,
      })),
    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],
});

export default router;
