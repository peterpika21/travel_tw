import { createRouter, createWebHashHistory } from 'vue-router';
import defaultIndex from '@/view/defaultIndex.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: defaultIndex
  }
  // {
  //   path: '/about',
  //   name: 'frontDesk',
  //   component: () => import('@/components/About.vue')
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
