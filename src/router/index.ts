import { createRouter, createWebHashHistory } from 'vue-router';
import default_index from '@/view/default_index.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: default_index
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
