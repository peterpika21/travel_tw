import { createRouter, createWebHashHistory } from 'vue-router';
import vIndex from '@/view/vIndex.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: vIndex
  },
  {
    path: '/restaurant',
    name: 'restaurant',
    component: () => import('@/view/vRestaurant.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
