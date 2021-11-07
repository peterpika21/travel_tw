import { createRouter, createWebHashHistory } from 'vue-router';
import vIndex from '@/view/vIndex.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: vIndex
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
